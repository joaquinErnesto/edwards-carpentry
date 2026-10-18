import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../../atoms/Button/Button";
import { Icon } from "../../atoms/Icon/Icon";
import { openWhatsApp } from "../../../utils/whatsapp";
import styles from "./Navbar.module.css";

const navigationItems = [
  { label: "Inicio", href: "/" },
  { label: "Nuestros Trabajos", href: "/trabajos" },
  { label: "Servicios", href: "/servicios" },
  { label: "El Taller", href: "/taller" },
  { label: "Reservas", href: "/reservas" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((current) => !current);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink to="/" className={styles.logo} onClick={closeMenu}>
            Edward's Carpentry
        </NavLink>

        {/* Desktop navigation */}
        <div className={styles.navigation}>
          {navigationItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `${styles.navigationLink} ${
                  isActive ? styles.active : ""
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className={styles.desktopCta}>
          <Button
            variant="secondary"
            onClick={() => openWhatsApp()}
          >
            HABLA CON EDWARD
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          <Icon
            name={isMenuOpen ? "close" : "menu"}
            size={28}
          />
        </button>
      </nav>

      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        className={`${styles.mobileMenu} ${
          isMenuOpen ? styles.mobileMenuOpen : ""
        }`}
      >
        <div className={styles.mobileNavigation}>
          {navigationItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              onClick={closeMenu}
              className={({ isActive }) =>
                `${styles.mobileNavigationLink} ${
                  isActive ? styles.mobileActive : ""
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <Button
            variant="secondary"
            className={styles.mobileCta}
            onClick={() => openWhatsApp()}
          >
            Habla con el carpintero
          </Button>
        </div>
      </div>
    </header>
  );
}