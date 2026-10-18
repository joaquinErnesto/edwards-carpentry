import {
  useCallback,
  useEffect,
  useRef,
} from "react";

import { Icon } from "../../atoms/Icon/Icon";
import styles from "./ImageLightbox.module.css";

interface ImageLightboxProps {
  images: string[];
  index: number;
  title: string;
  onIndexChange: (index: number) => void;
  onClose: () => void;
}

export function ImageLightbox({
  images,
  index,
  title,
  onIndexChange,
  onClose,
}: ImageLightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  const total = images.length;

  const goPrevious = useCallback(() => {
    onIndexChange((index - 1 + total) % total);
  }, [index, onIndexChange, total]);

  const goNext = useCallback(() => {
    onIndexChange((index + 1) % total);
  }, [index, onIndexChange, total]);

  useEffect(() => {
    closeRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        event.stopPropagation();

        onClose();

        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        event.stopPropagation();

        goPrevious();

        return;
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        event.stopPropagation();

        goNext();
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown,
      true
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown,
        true
      );
    };
  }, [goNext, goPrevious, onClose]);

  const current = images[index];

  if (!current) {
    return null;
  }

  return (
    <div
      className={styles.backdrop}
      role="dialog"
      aria-modal="true"
      aria-label={`${title}, imagen ${index + 1} de ${total}`}
      onMouseDown={(event) => {
        if (
          event.target === event.currentTarget
        ) {
          onClose();
        }
      }}
    >
      <figure className={styles.figure}>
        <img
          className={styles.image}
          src={current}
          alt={`${title}: fotografía ${index + 1} de ${total} de la misma pieza fabricada en el taller.`}
        />

        <figcaption className={styles.caption}>
          <span className={styles.captionTitle}>
            {title}
          </span>

          <span className={styles.counter}>
            {index + 1} / {total}
          </span>
        </figcaption>
      </figure>

      {total > 1 && (
        <>
          <button
            type="button"
            className={`${styles.navButton} ${styles.navPrevious}`}
            onClick={goPrevious}
            aria-label="Imagen anterior"
          >
            <Icon
              name="chevron_left"
              size={32}
            />
          </button>

          <button
            type="button"
            className={`${styles.navButton} ${styles.navNext}`}
            onClick={goNext}
            aria-label="Imagen siguiente"
          >
            <Icon
              name="chevron_right"
              size={32}
            />
          </button>
        </>
      )}

      <button
        ref={closeRef}
        type="button"
        className={styles.closeButton}
        onClick={onClose}
        aria-label="Cerrar imagen"
      >
        <Icon
          name="close"
          size={28}
        />
      </button>

      <div className={styles.filmstrip}>
        {images.map((image, position) => (
          <button
            key={`${image}-${position}`}
            type="button"
            className={`${styles.thumbnail} ${
              position === index
                ? styles.thumbnailActive
                : ""
            }`}
            onClick={() =>
              onIndexChange(position)
            }
            aria-label={`Ver imagen ${position + 1} de ${total}`}
            aria-current={position === index}
          >
            <img
              src={image}
              alt=""
              loading="lazy"
              decoding="async"
            />
          </button>
        ))}
      </div>
    </div>
  );
}