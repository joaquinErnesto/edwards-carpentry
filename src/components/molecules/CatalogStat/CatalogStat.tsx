import { Icon } from "../../atoms/Icon/Icon";
import styles from "./CatalogStat.module.css";

interface CatalogStatProps {
  label: string;
  value: string;
  icon: string;
}

export function CatalogStat({
  label,
  value,
  icon,
}: CatalogStatProps) {
  return (
    <div className={styles.stat}>
      <div>
        <div className={styles.label}>
          {label}
        </div>

        <div className={styles.value}>
          {value}
        </div>
      </div>

      <Icon
        name={icon}
        size={32}
        className={styles.icon}
      />
    </div>
  );
}