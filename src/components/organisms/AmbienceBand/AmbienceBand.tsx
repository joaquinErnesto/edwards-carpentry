import type { CSSProperties } from "react";

import ambienceImage from "../../../assets/images/hands-on-wood/hands-on-wood-5.jpg";
import styles from "./AmbienceBand.module.css";

export function AmbienceBand() {
  return (
    <section
      className={styles.section}
      style={{
        "--ambience-image": `url(${ambienceImage})`,
      } as CSSProperties}
    >
      <div className={styles.overlay} />

      <div className={styles.content}>
        <span
          className={styles.ornament}
          aria-hidden="true"
        >
          <span className={styles.ornamentLine} />
          <span className={styles.ornamentDiamond} />
          <span className={styles.ornamentLine} />
        </span>

        <p className={styles.phrase}>
          La madera recuerda cada mano que la trabajó.
        </p>

        <span
          className={styles.ornament}
          aria-hidden="true"
        >
          <span className={styles.ornamentLine} />
          <span className={styles.ornamentDiamond} />
          <span className={styles.ornamentLine} />
        </span>
      </div>
    </section>
  );
}
