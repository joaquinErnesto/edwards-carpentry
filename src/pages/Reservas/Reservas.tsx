import { ReservasMainSection } from "../../components/organisms/ReservasMainSection/ReservasMainSection";

import styles from "./Reservas.module.css";

export function Reservas() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ReservasMainSection />

        <div className={styles.divider} />
      </main>
    </div>
  );
}