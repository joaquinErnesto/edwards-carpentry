import { ReservasEyebrow } from "../../atoms/ReservasEyebrow/ReservasEyebrow";
import styles from "./ReservasIntro.module.css";

export function ReservasIntro() {
  return (
    <header className={styles.intro}>
      <ReservasEyebrow>
        RESERVAS DE TALLER
      </ReservasEyebrow>

      <h1 className={styles.title}>
        Reserva tu pieza
      </h1>

      <p className={styles.description}>
        Desde La Playa hasta el Turey, llevamos la
        maestría de la madera a cada rincón de
        Baracoa. Reserva tu encargo y lo curamos con
        maderas nobles y técnicas tradicionales.
      </p>
    </header>
  );
}