import { useNavigate } from "react-router-dom";
import { Button } from "../../atoms/Button/Button";
import styles from "./WorkshopCTASection.module.css";

export function WorkshopCTASection() {
  const navigate = useNavigate();

  const handleReservaClick = () => {
    navigate("/reservas");
  };

  const handleWorkshopClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          ¿Listo para crear tu próxima reliquia?
        </h2>

        <p className={styles.description}>
          Ven a visitarnos o llámanos. Nos encanta hablar
          de madera casi tanto como trabajarla.
        </p>

        <div className={styles.actions}>
          <Button
            variant="secondary"
            onClick={handleReservaClick}
          >
            Reservar en el taller
          </Button>

          <Button
            variant="outline"
            onClick={handleWorkshopClick}
          >
            Visitar el taller
          </Button>
        </div>
      </div>
    </section>
  );
}