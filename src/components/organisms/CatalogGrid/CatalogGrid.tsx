import { CatalogCategoryCard } from "../../molecules/CatalogCategoryCard/CatalogCategoryCard";
import type { CatalogCategory } from "../../../data/catalog";
import styles from "./CatalogGrid.module.css";

interface CatalogGridProps {
  categories: CatalogCategory[];
  total: number;
  onOpen: (
    category: CatalogCategory
  ) => void;
}

export function CatalogGrid({
  categories,
  total,
  onOpen,
}: CatalogGridProps) {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>
          Catálogo Completo por Tipología
        </h2>

        <span>
          Mostrando {categories.length} de {total}{" "}
          colecciones
        </span>
      </div>

      <div className={styles.grid}>
        {categories.map((category, index) => (
          <CatalogCategoryCard
            key={category.id}
            category={category}
            featured={
              index === 0 &&
              category.id === "balances"
            }
            onOpen={onOpen}
          />
        ))}
      </div>
    </section>
  );
}