import { Icon } from "../../atoms/Icon/Icon";
import {
  showcaseWorks,
  showcaseTotalPhotos,
} from "../../../data/works-showcase";
import styles from "./WorksHero.module.css";

export function WorksHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <span className={styles.label}>
          GALERÍA DEL TALLER
        </span>

        <h1 className={styles.title}>
          Nuestros Trabajos
        </h1>

        <p className={styles.description}>
          Una obra real de cada género que más nos piden,
          fotografiada en el taller y no en un catálogo de
          fábrica. Cada pieza se entrega curada contra la{" "}
          <strong>humedad tropical</strong>, con encastre de
          caja y espiga y un acabado de cera que deja ver la
          veta.
        </p>

        <dl className={styles.stats}>
          <div className={styles.stat}>
            <dt> Géneros</dt>

            <dd>{showcaseWorks.length}</dd>
          </div>

          <div className={styles.stat}>
            <dt>Fotografías</dt>

            <dd>{showcaseTotalPhotos}</dd>
          </div>
        </dl>
      </div>

      <div className={styles.decoration}>
        <Icon name="carpenter" size={300} />
      </div>
    </section>
  );
}