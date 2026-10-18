import { Icon } from "../../atoms/Icon/Icon";
import { CatalogIconBadge } from "../../atoms/CatalogIconBadge/CatalogIconBadge";
import type { CatalogCategory } from "../../../data/catalog";
import { getCategoryWorkCount } from "../../../data/catalog-works";
import styles from "./CatalogCategoryCard.module.css";

interface CatalogCategoryCardProps {
  category: CatalogCategory;
  featured?: boolean;
  onOpen: (category: CatalogCategory) => void;
}

export function CatalogCategoryCard({
  category,
  featured = false,
  onOpen,
}: CatalogCategoryCardProps) {
  return (
    <button
      type="button"
      className={`${styles.card} ${
        featured ? styles.featured : ""
      }`}
      onClick={() => onOpen(category)}
    >
      {featured && (
        <span
          className={styles.decorative}
          aria-hidden="true"
        />
      )}

      <span className={styles.body}>
        <span className={styles.top}>
          <CatalogIconBadge
            icon={category.icon}
            featured={featured}
          />

          <span className={styles.works}>
            {getCategoryWorkCount(category)} Obras
          </span>
        </span>

        <span className={styles.name}>
          {category.name}
        </span>

        <span className={styles.description}>
          {category.description}
        </span>
      </span>

      <span className={styles.footer}>
        <span>Explorar galería</span>

        <Icon
          name="arrow_forward"
          size={16}
        />
      </span>
    </button>
  );
}