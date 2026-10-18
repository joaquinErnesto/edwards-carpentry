import { Icon } from "../../atoms/Icon/Icon";
import type {
  ShowcaseWork,
} from "../../../data/works-showcase";
import styles from "./WorkShowcaseSection.module.css";

interface WorkShowcaseSectionProps {
  work: ShowcaseWork;
  order: number;
  onOpen: (
    work: ShowcaseWork,
    photoSrc: string,
  ) => void;
}

export function WorkShowcaseSection({
  work,
  order,
  onOpen,
}: WorkShowcaseSectionProps) {
  const [hero, ...rest] = work.photos;

  const total =
    work.photoCount > work.photos.length
      ? work.photoCount
      : work.photos.length;

  return (
    <article
      className={`${styles.section} ${
        order % 2 === 1 ? styles.reversed : ""
      }`}
    >
      <div className={styles.copy}>
        <span className={styles.eyebrow}>
          <Icon
            name={work.icon}
            size={16}
          />

          {work.eyebrow}
        </span>

        <h3 className={styles.title}>
          {work.title}
        </h3>

        <p className={styles.story}>
          {work.story}
        </p>

        <ul className={styles.details}>
          {work.details.map((detail) => (
            <li
              key={detail.label}
              className={styles.detail}
            >
              <Icon
                name={detail.icon}
                size={18}
                className={styles.detailIcon}
              />

              {detail.label}
            </li>
          ))}
        </ul>

        <button
          type="button"
          className={styles.cta}
          onClick={() =>
            onOpen(work, hero.src)
          }
        >
          Ver las {total} fotos de esta obra

          <Icon
            name="photo_library"
            size={16}
          />
        </button>
      </div>

      <div className={styles.grid}>
        <button
          type="button"
          className={`${styles.photo} ${styles.photoHero}`}
          onClick={() => onOpen(work, hero.src)}
          aria-label={`Ampliar ${work.title}`}
        >
          <img
            src={hero.src}
            alt={hero.alt}
            loading={order === 0 ? "eager" : "lazy"}
            decoding="async"
          />

          <span className={styles.caption}>
            {hero.caption}
          </span>
        </button>

        <div className={styles.sideColumn}>
          {rest.map((photo) => (
            <button
              key={photo.src}
              type="button"
              className={styles.photo}
              onClick={() =>
                onOpen(work, photo.src)
              }
              aria-label={`Ampliar: ${photo.caption}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                decoding="async"
              />

              <span className={styles.caption}>
                {photo.caption}
              </span>
            </button>
          ))}
        </div>
      </div>
    </article>
  );
}