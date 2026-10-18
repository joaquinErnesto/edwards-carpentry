import { WorkshopEyebrow } from "../../atoms/WorkshopEyebrow/WorkshopEyebrow";
import { workshopStats } from "../../../data/workshop";
import {
  workshopResilienceClosing,
  workshopResilienceEyebrow,
  workshopResilienceImages,
  workshopResilienceLead,
  workshopResiliencePillars,
  workshopResilienceTitle,
} from "../../../data/workshop-resilience";
import styles from "./WorkshopResilienceSection.module.css";

export function WorkshopResilienceSection() {
  return (
    <section
      className={styles.section}
      aria-label="Inventiva cubana"
    >
      <div className={styles.container}>
        <header className={styles.header}>
          <WorkshopEyebrow>
            {workshopResilienceEyebrow}
          </WorkshopEyebrow>

          <h2 className={styles.title}>
            {workshopResilienceTitle}
          </h2>

          <p className={styles.lead}>
            {workshopResilienceLead}
          </p>
        </header>

        <div className={styles.grid}>
          <div className={styles.gallery}>
            {workshopResilienceImages.map((image, index) => (
              <img
                key={image.src}
                src={image.src}
                alt={image.alt}
                className={
                  index === 0
                    ? styles.image
                    : `${styles.image} ${styles.imageOffset}`
                }
                loading="lazy"
                decoding="async"
              />
            ))}
          </div>

          <div className={styles.copy}>
            <p className={styles.closing}>
              {workshopResilienceClosing}
            </p>

            <div className={styles.pillars}>
              {workshopResiliencePillars.map((pillar) => (
                <article
                  key={pillar.title}
                  className={styles.pillar}
                >
                  <h3 className={styles.pillarTitle}>
                    {pillar.title}
                  </h3>

                  <p className={styles.pillarDescription}>
                    {pillar.description}
                  </p>
                </article>
              ))}
            </div>

            <div className={styles.stats}>
              {workshopStats.map((stat) => (
                <div
                  key={stat.label}
                  className={styles.stat}
                >
                  <span className={styles.statValue}>
                    {stat.value}
                  </span>

                  <span className={styles.statLabel}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
