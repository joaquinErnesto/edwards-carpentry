import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.argv[2];
const ASSETS = path.join(ROOT, "src", "assets");

const MAX_EDGE = 1600;
const QUALITY = 82;
const DRY = process.argv.includes("--dry");

const files = [];
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (/\.jpe?g$/i.test(e.name)) files.push(p);
  }
})(ASSETS);

console.log(`scanning ${files.length} jpeg files (max edge ${MAX_EDGE}px, q${QUALITY})`);
if (DRY) console.log("DRY RUN - no files will be written\n");

let beforeTotal = 0;
let afterTotal = 0;
let changed = 0;
let skipped = 0;
let failed = 0;
let savedBytes = 0;

const byFolder = new Map();
const results = [];

for (let i = 0; i < files.length; i++) {
  const f = files[i];
  const rel = path.relative(ASSETS, f).replace(/\\/g, "/");
  const before = fs.statSync(f).size;
  beforeTotal += before;

  try {
    // Read into a buffer: libvips cannot open paths containing
    // non-ASCII characters on Windows, and this repo lives under
    // "...\Programación\...".
    const input = fs.readFileSync(f);

    const meta = await sharp(input).metadata();

    const longEdge = Math.max(meta.width ?? 0, meta.height ?? 0);

    // Already small enough on dimensions AND file size -> leave untouched
    if (longEdge <= MAX_EDGE && before <= 300 * 1024) {
      afterTotal += before;
      skipped++;
      continue;
    }

    const buf = await sharp(input)
      .rotate()
      .resize({
        width: MAX_EDGE,
        height: MAX_EDGE,
        fit: "inside",
        withoutEnlargement: true,
      })
      .jpeg({ quality: QUALITY, mozjpeg: true, progressive: true })
      .toBuffer();

    // Never write a file larger than what we started with
    if (buf.length >= before) {
      afterTotal += before;
      skipped++;
      continue;
    }

    if (!DRY) {
      fs.writeFileSync(f, buf);
    }

    afterTotal += buf.length;
    changed++;
    savedBytes += before - buf.length;

    const top = rel.split("/").slice(0, 2).join("/");
    byFolder.set(top, (byFolder.get(top) ?? 0) + (before - buf.length));

    results.push({
      rel,
      before,
      after: buf.length,
      dims: `${meta.width}x${meta.height}`,
    });
  } catch (err) {
    failed++;
    afterTotal += before;
    console.log(`  FAILED ${rel}: ${err.message}`);
  }

  if ((i + 1) % 100 === 0) {
    process.stdout.write(`  ...${i + 1}/${files.length}\n`);
  }
}

console.log(`\n=== RESULT ===`);
console.log(`processed : ${files.length}`);
console.log(`re-encoded: ${changed}`);
console.log(`untouched : ${skipped}`);
console.log(`failed    : ${failed}`);
console.log(
  `size      : ${(beforeTotal / 1024 / 1024).toFixed(1)} MB -> ${(afterTotal / 1024 / 1024).toFixed(1)} MB`
);
console.log(`saved     : ${(savedBytes / 1024 / 1024).toFixed(1)} MB (${((1 - afterTotal / beforeTotal) * 100).toFixed(1)}%)`);

console.log(`\n=== TOP 15 SAVED ===`);
for (const r of results.sort((a, b) => b.before - b.after).slice(0, 15)) {
  console.log(
    `${(r.before / 1024 / 1024).toFixed(1).padStart(6)} MB -> ${(r.after / 1024).toFixed(0).padStart(6)} KB  ${r.dims.padStart(11)}  ${r.rel}`
  );
}

console.log(`\n=== SAVED BY AREA ===`);
for (const [k, v] of [...byFolder].sort((a, b) => b[1] - a[1]).slice(0, 12)) {
  console.log(`${(v / 1024 / 1024).toFixed(1).padStart(8)} MB  ${k}`);
}

if (DRY) console.log("\nDRY RUN - nothing written");