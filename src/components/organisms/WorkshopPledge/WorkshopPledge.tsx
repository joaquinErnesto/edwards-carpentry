import { Link } from "react-router-dom";
import { Icon } from "../../atoms/Icon/Icon";
import { getWhatsAppUrl } from "../../../utils/whatsapp";
import styles from "./WorkshopPledge.module.css";

export function WorkshopPledge() {
  return (
    <section className={styles.card}>
      <div
        className={styles.watermark}
        aria-hidden="true"
      >
        <Icon
          name="handyman"
          size={240}
        />
      </div>

      <div className={styles.content}>
        <span className={styles.badge}>
          Garantía de Ensamblaje Tradicional
        </span>

        <h3>
          ¿Buscas una dimensión o madera específica para
          tu hogar?
        </h3>

        <p>
          Cada mueble de nuestro catálogo se fabrica bajo
          pedido personalizado. Adaptamos el largo, fondo,
          curvatura y tonalidad de la madera según la luz
          de tu espacio.
        </p>

        <div className={styles.actions}>
          <a
            href={getWhatsAppUrl(
              "Hola Eduardo, quiero encargar una obra a medida para mi hogar.",
            )}
            className={styles.primaryButton}
            target="_blank"
            rel="noreferrer"
          >
            Encargar Obra a Medida
          </a>

          <Link
            to="/taller"
            className={styles.outlineButton}
          >
            Visitar el Taller
          </Link>
        </div>
      </div>
    </section>
  );
}