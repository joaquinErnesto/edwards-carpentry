import { WorkshopEyebrow } from "../../atoms/WorkshopEyebrow/WorkshopEyebrow";
import {
  workshopHistoryClosing,
  workshopHistoryFirstShop,
  workshopHistoryIntro,
  workshopHistoryNewShop,
  workshopHistoryRelocation,
  type HistoryImage,
} from "../../../data/workshop-history";
import styles from "./WorkshopOriginsSection.module.css";

interface HistoryGridProps {
  images: HistoryImage[];
}

function HistoryGrid({ images }: HistoryGridProps) {
  return (
    <div className={styles.grid}>
      {images.map((image) => (
        <img
          key={image.src}
          src={image.src}
          alt={image.alt}
          className={styles.image}
          loading="lazy"
          decoding="async"
        />
      ))}
    </div>
  );
}

export function WorkshopOriginsSection() {
  return (
    <section
      className={styles.section}
      aria-label="Nuestra historia"
    >
      <div className={styles.copy}>
        <WorkshopEyebrow>Nuestra historia</WorkshopEyebrow>

        <h2 className={styles.title}>
          {workshopHistoryIntro}
        </h2>
      </div>

      <HistoryGrid images={workshopHistoryFirstShop} />

      <div className={styles.copy}>
        <h3 className={styles.subtitle}>
          {workshopHistoryRelocation}
        </h3>
      </div>

      <HistoryGrid images={workshopHistoryNewShop} />

      <div className={`${styles.copy} ${styles.closingCopy}`}>
        <p className={styles.closing}>
          {workshopHistoryClosing}
        </p>
      </div>
    </section>
  );
}
