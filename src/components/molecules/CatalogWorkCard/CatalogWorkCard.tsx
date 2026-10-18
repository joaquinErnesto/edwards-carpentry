import { Icon } from "../../atoms/Icon/Icon";
import type { CatalogWork } from "../../../data/catalog-works";
import styles from "./CatalogWorkCard.module.css";

interface CatalogWorkCardProps {
  work: CatalogWork;
  categoryName: string;
  onOpen: (work: CatalogWork) => void;
}

export function CatalogWorkCard({
  work,
  categoryName,
  onOpen,
}: CatalogWorkCardProps) {
  return (
    <button
      type="button"
      className={styles.card}
      onClick={() => onOpen(work)}
    >
      <span className={styles.imageWrapper}>
        <img
          src={work.cover}
          alt={work.alt}
          className={styles.image}
          loading="lazy"
          decoding="async"
        />

        <span className={styles.photos}>
          <Icon
            name="photo_camera"
            size={14}
          />

          {work.photoCount}{" "}
          {work.photoCount === 1
            ? "foto"
            : "fotos"}
        </span>
      </span>

      <span className={styles.content}>
        <span className={styles.title}>
          {work.title}
        </span>

        <span className={styles.description}>
          {categoryName} elaborado en el taller de
          Edward's Carpentry. {work.photoCount}{" "}
          {work.photoCount === 1
            ? "fotografía"
            : "fotografías"}
          {" "}de la misma pieza.
        </span>
      </span>

      <span className={styles.footer}>
        <span>Ver ensamble &amp; veta</span>

        <Icon
          name="open_in_new"
          size={16}
        />
      </span>
    </button>
  );
}