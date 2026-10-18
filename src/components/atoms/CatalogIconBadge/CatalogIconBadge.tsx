import { Icon } from "../Icon/Icon";
import styles from "./CatalogIconBadge.module.css";

interface CatalogIconBadgeProps {
  icon: string;
  featured?: boolean;
}

export function CatalogIconBadge({
  icon,
  featured = false,
}: CatalogIconBadgeProps) {
  return (
    <span
      className={`${styles.badge} ${
        featured ? styles.featured : ""
      }`}
    >
      <Icon name={icon} size={24} />
    </span>
  );
}