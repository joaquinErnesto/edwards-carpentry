import { ReservasIntro } from "../ReservasIntro/ReservasIntro";
import { ReservasContactInfo } from "../ReservasContactInfo/ReservasContactInfo";
import { ReservasForm } from "../ReservasForm/ReservasForm";

import styles from "./ReservasMainSection.module.css";

export function ReservasMainSection() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <div className={styles.leftColumn}>
          <ReservasIntro />
          <ReservasContactInfo />
        </div>

        <ReservasForm />
      </div>
    </section>
  );
}