import { Container } from "../../layout/Container/Container";
import { Button } from "../../atoms/Button/Button";
import { Icon } from "../../atoms/Icon/Icon";
import { WHATSAPP_URL } from "../../../utils/whatsapp";
import styles from "./CTASection.module.css";

const GMAIL_COMPOSE_URL =
  "https://mail.google.com/mail/?view=cm&fs=1";

const openInNewTab = (url: string) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

export function CTASection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.card}>
          <div className={styles.pattern} />

          <div className={styles.content}>
            <h2 className={styles.title}>
              ¿Tienes un proyecto en mente?
            </h2>

            <p className={styles.description}>
              No importa si es una repisa o la carpintería
              completa de una mansión. Reserva tu
              encargo sin compromiso y hablemos sobre
              madera.
            </p>

            <div className={styles.actions}>
              <Button
                variant="light"
                onClick={() => openInNewTab(GMAIL_COMPOSE_URL)}
              >
                <Icon
                  name="mail"
                  size={20}
                />

                Enviar Correo
              </Button>

              <Button
                variant="outline"
                onClick={() => openInNewTab(WHATSAPP_URL)}
              >
                Llamar al Taller
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
