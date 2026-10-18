import { useState, type KeyboardEvent } from "react";

import { Container } from "../../layout/Container/Container";
import { SectionLabel } from "../../atoms/SectionLabel/SectionLabel";
import { Icon } from "../../atoms/Icon/Icon";
import { workshopCarousel, workshopStory } from "../../../data/workshop";
import styles from "./WorkshopCarouselSection.module.css";

const total = workshopCarousel.length;

export function WorkshopCarouselSection() {
  const [index, setIndex] = useState(0);

  const slide = workshopCarousel[index];

  const goTo = (next: number) => {
    setIndex((next + total) % total);
  };

  const handleKeyDown = (
    event: KeyboardEvent<HTMLDivElement>,
  ) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(index - 1);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(index + 1);
    }
  };

  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <header className={styles.header}>
          <SectionLabel>El proceso</SectionLabel>

          <h2 className={styles.title}>
            Del tablón a la pieza
          </h2>

          <p className={styles.lead}>{workshopStory}</p>
        </header>

        <div
          className={styles.carousel}
          role="group"
          aria-roledescription="carrusel"
          aria-label="Del tablón a la pieza"
          onKeyDown={handleKeyDown}
        >
          <figure className={styles.figure}>
            <div className={styles.stage}>
              <div
                key={slide.id}
                className={styles.backdrop}
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
                aria-hidden="true"
              />

              <img
                key={slide.id}
                src={slide.image}
                alt={slide.alt}
                className={styles.image}
                decoding="async"
              />

              <div className={styles.grainOverlay} />

              <span className={styles.stepBadge} aria-hidden="true">
                {slide.step}
              </span>
            </div>

            <figcaption
              className={styles.caption}
              aria-live="polite"
            >
              <span className={styles.captionStep}>
                {slide.step}
              </span>

              <span className={styles.captionText}>
                {slide.caption}
              </span>
            </figcaption>
          </figure>

          <div className={styles.controls}>
            <button
              type="button"
              className={styles.arrow}
              onClick={() => goTo(index - 1)}
              aria-label="Imagen anterior"
            >
              <Icon name="arrow_back" size={20} />
            </button>

            <div className={styles.dots}>
              {workshopCarousel.map((item, dotIndex) => (
                <button
                  key={item.id}
                  type="button"
                  className={`${styles.dot} ${
                    dotIndex === index ? styles.dotActive : ""
                  }`}
                  onClick={() => setIndex(dotIndex)}
                  aria-label={`${item.step}. ${item.caption}`}
                  aria-current={
                    dotIndex === index ? "true" : undefined
                  }
                />
              ))}
            </div>

            <span className={styles.counter}>
              {String(index + 1).padStart(2, "0")}
              <span className={styles.counterDivider}>/</span>
              {String(total).padStart(2, "0")}
            </span>

            <button
              type="button"
              className={styles.arrow}
              onClick={() => goTo(index + 1)}
              aria-label="Imagen siguiente"
            >
              <Icon name="arrow_forward" size={20} />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
