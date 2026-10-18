import { WorkshopEyebrow } from "../../atoms/WorkshopEyebrow/WorkshopEyebrow";
import {
  workshopPrinciples,
  workshopValuesEyebrow,
  workshopValuesIntro,
  workshopValuesTitle,
} from "../../../data/workshop-values";
import styles from "./WorkshopValuesSection.module.css";

export function WorkshopValuesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <header className={styles.header}>
            <WorkshopEyebrow>
              {workshopValuesEyebrow}
            </WorkshopEyebrow>

            <h2 className={styles.title}>
              {workshopValuesTitle}
            </h2>

            <p className={styles.intro}>
              {workshopValuesIntro}
            </p>

            <span
              className={styles.headerRule}
              aria-hidden="true"
            />
          </header>

          <div className={styles.list}>
            {workshopPrinciples.map((principle) => (
              <article
                key={principle.number}
                className={styles.principle}
              >
                <span
                  className={styles.number}
                  aria-hidden="true"
                >
                  {principle.number}
                </span>

                <div className={styles.copy}>
                  <h3 className={styles.principleTitle}>
                    {principle.title}
                  </h3>

                  <p className={styles.description}>
                    {principle.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
