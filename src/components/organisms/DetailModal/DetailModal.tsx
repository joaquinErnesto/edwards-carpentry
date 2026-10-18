import { useState } from "react";

import { Icon } from "../../atoms/Icon/Icon";
import { ImageLightbox } from "../ImageLightbox/ImageLightbox";
import type { CatalogWork } from "../../../data/catalog-works";
import styles from "./DetailModal.module.css";

interface DetailModalProps {
  work: CatalogWork | null;
  onClose: () => void;
}

interface LightboxState {
  workId: string;
  index: number;
}

export function DetailModal({
  work,
  onClose,
}: DetailModalProps) {
  const [lightbox, setLightbox] =
    useState<LightboxState | null>(null);

  if (!work) {
    return null;
  }

  const activeIndex =
    lightbox && lightbox.workId === work.id
      ? lightbox.index
      : null;

  const openLightbox = (index: number) => {
    setLightbox({ workId: work.id, index });
  };

  const total = work.images.length;

  return (
    <>
      <div
        className={styles.backdrop}
        role="dialog"
        aria-modal="true"
        aria-labelledby="detail-modal-title"
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
            <div>
              <div className={styles.meta}>
                <span>
                  {work.folder.replace(/-/g, " ")}
                </span>

                <span>
                  {total}{" "}
                  {total === 1
                    ? "fotografía"
                    : "fotografías"}
                  {" "}de taller
                </span>
              </div>

              <h3 id="detail-modal-title">
                {work.title}
              </h3>

              <p>
                Vistas reales de taller de una misma
                pieza: encastre, mecanizado y acabado
                final de la madera.
              </p>
            </div>

            <button
              type="button"
              className={styles.backButton}
              onClick={onClose}
            >
              <Icon
                name="arrow_back"
                size={20}
              />

              <span>
                Volver a Galería
              </span>
            </button>
          </header>

          <div className={styles.content}>
            <button
              type="button"
              className={styles.heroImage}
              onClick={() => openLightbox(0)}
              aria-label="Ampliar la imagen principal"
            >
              <img
                src={work.images[0]}
                alt={
                  total === 1
                    ? work.alt
                    : `${work.title}: fotografía principal de la pieza.`
                }
              />

              <span className={styles.heroCaption}>
                <span className={styles.heroCaptionBody}>
                  <span className={styles.captionLabel}>
                    Fotografía de Taller Nº 1
                  </span>

                  <span className={styles.captionTitle}>
                    {work.title}
                  </span>
                </span>

                <span className={styles.zoomHint}>
                  <Icon
                    name="zoom_out_map"
                    size={18}
                  />

                  Toca para ampliar
                </span>
              </span>
            </button>

            <section>
              <h4 className={styles.sectionTitle}>
                <Icon
                  name="photo_library"
                  size={16}
                />

                Todas las fotos de esta obra (
                {total}{" "}
                {total === 1
                  ? "imagen"
                  : "imágenes"}
                )
              </h4>

              <div className={styles.gallery}>
                {work.images.map(
                  (image, index) => (
                    <button
                      key={`${image}-${index}`}
                      type="button"
                      className={styles.galleryCard}
                      onClick={() =>
                        openLightbox(index)
                      }
                      aria-label={`Ampliar la fotografía ${index + 1} de ${total}`}
                    >
                      <span
                        className={styles.galleryImage}
                      >
                        <img
                          src={image}
                          alt={`${work.title}: miniatura ${index + 1} de ${total}.`}
                          loading="lazy"
                          decoding="async"
                        />

                        <span className={styles.galleryZoom}>
                          <Icon
                            name="zoom_out_map"
                            size={20}
                          />
                        </span>
                      </span>

                      <span
                        className={styles.galleryTitle}
                      >
                        Vista {index + 1} de {total}
                      </span>
                    </button>
                  )
                )}
              </div>
            </section>
          </div>

          <footer className={styles.footer}>
            <div className={styles.ready}>
              <span />
              Taller listo para fabricar en tu madera
              de preferencia
            </div>

            <div className={styles.actions}>
              <button
                type="button"
                className={styles.secondaryButton}
                onClick={onClose}
              >
                Volver a Lista
              </button>

              <button
                type="button"
                className={styles.primaryButton}
                onClick={() =>
                  window.alert(
                    `Conectando directamente con Edward's Carpentry por WhatsApp para ${work.title}...`,
                  )
                }
              >
                <Icon
                  name="chat"
                  size={18}
                />

                Consultar por esta pieza
              </button>
            </div>
          </footer>
        </div>
      </div>

      {activeIndex !== null && (
        <ImageLightbox
          images={work.images}
          index={activeIndex}
          title={work.title}
          onIndexChange={(index) =>
            setLightbox({ workId: work.id, index })
          }
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  );
}