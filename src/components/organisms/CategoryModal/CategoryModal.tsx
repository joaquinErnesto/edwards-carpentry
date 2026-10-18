import { Icon } from "../../atoms/Icon/Icon";
import { CatalogWorkCard } from "../../molecules/CatalogWorkCard/CatalogWorkCard";
import type {
  CatalogCategory,
} from "../../../data/catalog";
import {
  categoryDetails,
} from "../../../data/catalog";
import {
  getCategoryWorks,
  type CatalogWork,
} from "../../../data/catalog-works";
import styles from "./CategoryModal.module.css";

interface CategoryModalProps {
  category: CatalogCategory | null;
  onClose: () => void;
  onOpenWork: (work: CatalogWork) => void;
}

export function CategoryModal({
  category,
  onClose,
  onOpenWork,
}: CategoryModalProps) {
  if (!category) {
    return null;
  }

  const detail = categoryDetails[category.id];

  const title =
    detail?.title ??
    `Colección de ${category.name}`;

  const description =
    detail?.description ??
    "Piezas fabricadas artesanalmente bajo pedido en nuestro taller en maderas nobles cubanas.";

  const works = getCategoryWorks(category);

  return (
    <div
      className={styles.backdrop}
      role="dialog"
      aria-modal="true"
      aria-labelledby="category-modal-title"
      onMouseDown={(event) => {
        if (
          event.target === event.currentTarget
        ) {
          onClose();
        }
      }}
    >
      <div className={styles.dialog}>
        <header className={styles.header}>
          <div className={styles.heading}>
            <span className={styles.iconBox}>
              <Icon
                name={category.icon}
                size={24}
              />
            </span>

            <div>
              <div className={styles.titleRow}>
                <h2 id="category-modal-title">
                  {title}
                </h2>

                <span className={styles.count}>
                  {works.length} Obras
                </span>
              </div>

              <p>
                {description}
              </p>
            </div>
          </div>

          <button
            type="button"
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Cerrar catálogo"
          >
            <Icon
              name="close"
              size={20}
            />

            <span>
              Cerrar Catálogo
            </span>
          </button>
        </header>

        <div className={styles.scrollArea}>
          <div className={styles.introRow}>
            <span>
              Piezas elaboradas en el taller • Toca
              cualquier tarjeta para examinar fotos de
              detalle
            </span>

            <span>
              {works.length}{" "}
              {works.length === 1
                ? "pieza cargada"
                : "piezas cargadas"}
            </span>
          </div>

          {works.length === 0 ? (
            <p className={styles.emptyState}>
              Estamos fotografiando las piezas de esta
              colección. Vuelve pronto para verlas.
            </p>
          ) : (
            <div className={styles.pieceGrid}>
              {works.map((work) => (
                <CatalogWorkCard
                  key={work.id}
                  work={work}
                  categoryName={category.name}
                  onOpen={onOpenWork}
                />
              ))}
            </div>
          )}
        </div>

        <footer className={styles.footer}>
          <div className={styles.guarantee}>
            <Icon
              name="verified"
              size={16}
            />

            <span>
              Todas las piezas son construidas con madera
              curada garantizada por 10 años
            </span>
          </div>

          {works[0] && (
            <button
              type="button"
              className={styles.featuredButton}
              onClick={() => onOpenWork(works[0])}
            >
              Examinar Obra Destacada
            </button>
          )}
        </footer>
      </div>
    </div>
  );
}