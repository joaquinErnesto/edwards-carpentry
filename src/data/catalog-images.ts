import { catalogWorks } from "./catalog-groups";

const imageModules = import.meta.glob(
  "../assets/images/catalog/*/*/*.{jpg,jpeg}",
  {
    eager: true,
    query: "?url",
    import: "default",
  },
) as Record<string, string>;

const urlByKey = new Map<string, string>();

for (const [path, url] of Object.entries(imageModules)) {
  const withoutExtension = path
    .replace(/^\.\.\//, "")
    .replace(/\\/g, "/")
    .replace(/\.[^./]+$/, "");

  urlByKey.set(withoutExtension, url);
}

const resolveImage = (
  folder: string,
  workId: string,
  number: number,
): string =>
  urlByKey.get(
    `assets/images/catalog/${folder}/${workId}/${folder}-${number}`,
  ) ?? "";

export const getCatalogImage = (
  folder: string,
  workId: string,
  number: number,
): string => resolveImage(folder, workId, number);

export interface CatalogWorkImages {
  id: string;
  folder: string;
  cover: string;
  images: string[];
}

export const catalogWorkImages: CatalogWorkImages[] =
  catalogWorks
    .map((work) => {
      const images = work.images
        .map((number) =>
          resolveImage(work.folder, work.id, number),
        )
        .filter((url): url is string => Boolean(url));

      return {
        id: work.id,
        folder: work.folder,
        cover: images[0] ?? "",
        images,
      };
    })
    .filter((work) => work.images.length > 0);

export const catalogWorkImagesByFolder: Record<
  string,
  CatalogWorkImages[]
> = catalogWorkImages.reduce<Record<string, CatalogWorkImages[]>>(
  (acc, work) => {
    (acc[work.folder] ??= []).push(work);

    return acc;
  },
  {},
);