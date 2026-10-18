import { WHATSAPP_URL } from "../../../utils/whatsapp";
import styles from "./Footer.module.css";

const navigationLinks = [
  { label: "Sobre nosotros", href: "/taller" },
  { label: "Portafolio", href: "/trabajos" },
  { label: "Reservas", href: "/reservas" },
];

const socialLinks = [
  { label: "Facebook", href: "#" },
  { label: "WhatsApp", href: WHATSAPP_URL },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <div className={styles.brand}>
            Edward's Carpentry
          </div>

          <p className={styles.description}>
            Excelencia en madera desde Cuba para el mundo.
            Tradición, alma y martillo.
          </p>
        </div>

        <div className={styles.column}>
          <div className={styles.heading}>
            Navegación
          </div>

          <div className={styles.links}>
            {navigationLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.heading}>
            Síguenos
          </div>

          <div className={styles.socialLinks}>
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={
                  link.href.startsWith("http")
                    ? "_blank"
                    : undefined
                }
                rel={
                  link.href.startsWith("http")
                    ? "noreferrer"
                    : undefined
                }
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className={styles.copyright}>
            © 2026 Edward's Carpentry. Hecho en Cuba.
          </div>
        </div>
      </div>
    </footer>
  );
}