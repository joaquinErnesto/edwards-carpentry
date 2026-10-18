import {
  useRef,
  useState,
} from "react";

import { Link } from "react-router-dom";

import { Container } from "../../layout/Container/Container";
import { Icon } from "../../atoms/Icon/Icon";
import { promoVideo } from "../../../data/promo-video";
import styles from "./PromoVideoSection.module.css";

export function PromoVideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasError, setHasError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    if (video.paused) {
      void video.play().catch(() => {
        setHasError(true);
      });
    } else {
      video.pause();
    }
  };

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.media}>
            <video
              ref={videoRef}
              className={styles.video}
              controls
              preload="metadata"
              poster={promoVideo.poster}
              playsInline
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
              onError={() => setHasError(true)}
              aria-label={`${promoVideo.title}: recorrido por el taller`}
            >
              <source
                src={promoVideo.src}
                type="video/mp4"
              />

              Tu navegador no puede reproducir este
              video.
            </video>

            {!isPlaying && !hasError && (
              <button
                type="button"
                className={styles.playButton}
                onClick={togglePlay}
                aria-label="Reproducir el video del taller"
              >
                <Icon
                  name="play_arrow"
                  size={40}
                  filled
                />
              </button>
            )}

            {!hasError && (
              <span className={styles.duration}>
                <Icon
                  name="schedule"
                  size={14}
                />

                {promoVideo.duration}
              </span>
            )}

            {hasError && (
              <p className={styles.error}>
                No pudimos cargar el video. Escríbenos y
                te lo enviamos por WhatsApp.
              </p>
            )}
          </div>

          <div className={styles.content}>
            <span className={styles.eyebrow}>
              VIDEO DEL TALLER
            </span>

            <h2 className={styles.title}>
              {promoVideo.title}
            </h2>

            <p className={styles.subtitle}>
              {promoVideo.subtitle}
            </p>

            <p className={styles.description}>
              {promoVideo.description}
            </p>

            <ul className={styles.highlights}>
              {promoVideo.highlights.map(
                (highlight) => (
                  <li
                    key={highlight.title}
                    className={styles.highlight}
                  >
                    <span
                      className={styles.highlightIcon}
                      aria-hidden="true"
                    >
                      <Icon
                        name={highlight.icon}
                        size={22}
                      />
                    </span>

                    <div className={styles.highlightBody}>
                      <h3 className={styles.highlightTitle}>
                        {highlight.title}
                      </h3>

                      <p className={styles.highlightText}>
                        {highlight.description}
                      </p>
                    </div>
                  </li>
                ),
              )}
            </ul>

            <Link
              to={promoVideo.ctaHref}
              className={styles.cta}
            >
              {promoVideo.ctaLabel}

              <Icon
                name="arrow_forward"
                size={18}
              />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}