import { WorkshopEyebrow } from "../../atoms/WorkshopEyebrow/WorkshopEyebrow";
import {
  workshopTeam,
  workshopTeamEyebrow,
  workshopTeamIntro,
  workshopTeamTitle,
} from "../../../data/workshop-team";
import styles from "./WorkshopTeamSection.module.css";

export function WorkshopTeamSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          <WorkshopEyebrow>
            {workshopTeamEyebrow}
          </WorkshopEyebrow>

          <h2 className={styles.title}>
            {workshopTeamTitle}
          </h2>

          <p className={styles.intro}>
            {workshopTeamIntro}
          </p>

          <span
            className={styles.headerRule}
            aria-hidden="true"
          />
        </header>

        <div className={styles.list}>
          {workshopTeam.map((worker, index) => (
            <article
              key={worker.name}
              className={styles.worker}
            >
              <div className={styles.frame}>
                <img
                  className={styles.photo}
                  src={worker.photo}
                  alt={worker.alt}
                  width={630}
                  height={1400}
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                />
              </div>

              <div className={styles.copy}>
                <h3 className={styles.name}>
                  {worker.name}
                </h3>

                <span className={styles.role}>
                  {worker.role}
                </span>

                <p className={styles.description}>
                  {worker.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}