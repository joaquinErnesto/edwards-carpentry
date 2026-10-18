import { Icon } from "../../atoms/Icon/Icon";
import { TechnicalFeatureList } from "../../molecules/TechnicalFeatureList/TechnicalFeatureList";
import styles from "./HumidityGuarantee.module.css";

const features = [
  {
    icon: "water_drop",
    label: "REPELENTE AL AGUA",
  },
  {
    icon: "thermostat",
    label: "ESTABILIDAD TÉRMICA",
  },
];

export function HumidityGuarantee() {
  return (
    <section className={styles.section}>
      <div className={styles.banner}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Tecnología Contra la Humedad
          </h2>

          <p className={styles.description}>
            Nuestra isla presenta desafíos únicos para la
            madera. En el taller de Edward, aplicamos
            técnicas de{" "}
            <strong>sellado por inmersión</strong> y
            adhesivos hidrófugos de grado industrial que
            impiden que la fibra se hinche o se deteriore
            por la condensación tropical.
          </p>

          <TechnicalFeatureList features={features} />
        </div>

        <div className={styles.iconWrapper}>
          <div className={styles.iconCircle}>
            <Icon
              name="shield_with_heart"
              size={80}
              filled
              className={styles.shieldIcon}
            />

            <div className={styles.pulse} />
          </div>
        </div>
      </div>
    </section>
  );
}