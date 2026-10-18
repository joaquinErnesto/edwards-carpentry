import { useNavigate } from "react-router-dom";

import { Button } from "../../atoms/Button/Button";
import { Icon } from "../../atoms/Icon/Icon";
import { SectionLabel } from "../../atoms/SectionLabel/SectionLabel";
import styles from "./Hero.module.css";

export function Hero() {
  const navigate = useNavigate();

  const handleCatalogClick = () => {
    navigate("/catalog");
  };

  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <div className={styles.image} />

        <div className={styles.overlay} />
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <SectionLabel muted>
            Tradición Guajira y Maestría
          </SectionLabel>

          <h1 className={styles.title}>
            Madera con alma de Cuba
          </h1>

          <p className={styles.description}>
            Muebles hechos para durar tres vidas. En el
            taller de Edward, cada veta cuenta una
            historia de nuestra tierra, trabajada con la
            paciencia que solo el cedro merece.
          </p>

          <div className={styles.actions}>
            <Button
              variant="primary"
              onClick={handleCatalogClick}
            >
              Ver catálogo

              <Icon
                name="arrow_forward"
                size={20}
              />
            </Button>

            <div className={styles.guarantee}>
              <Icon
                name="verified"
                size={24}
                filled
                className={styles.guaranteeIcon}
              />

              <span>
                Garantía Real de 25 años
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}