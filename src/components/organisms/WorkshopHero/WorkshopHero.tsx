import heroImage from "../../../assets/images/hands-on-wood/hands-on-wood-7.jpg";
import { Icon } from "../../atoms/Icon/Icon";
import { WorkshopEyebrow } from "../../atoms/WorkshopEyebrow/WorkshopEyebrow";
import styles from "./WorkshopHero.module.css";

export function WorkshopHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <img
          src={heroImage}
          alt="Carpintero cargando un tablón largo de madera a través del taller, con aserrín en el suelo."
          decoding="async"
        />

        <div className={styles.overlay} />
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <WorkshopEyebrow light>
            Nuestro taller
          </WorkshopEyebrow>

          <h1 className={styles.title}>
            Trabajamos la madera con elegancia.
          </h1>

          <span
            className={styles.rule}
            aria-hidden="true"
          />

          <p className={styles.description}>
            Más de diez años eligiendo tablones, afilando
            cantos y ensamblando cada pieza a mano. Nada
            sale del taller hasta que la madera queda como
            debe: firme, pareja y lista para durar.
          </p>
        </div>
      </div>

      <div className={styles.scrollHint}>
        <span className={styles.scrollLabel}>
          Desliza para entrar
        </span>

        <Icon
          name="expand_more"
          size={24}
        />
      </div>
    </section>
  );
}
