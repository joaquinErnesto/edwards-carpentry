import { Icon } from "../Icon/Icon";
import styles from "./TechnicalFeature.module.css";

interface TechnicalFeatureProps {
  icon: string;
  children: React.ReactNode;
}

export function TechnicalFeature({
  icon,
  children,
}: TechnicalFeatureProps) {
  return (
    <div className={styles.feature}>
      <Icon name={icon} size={16} />

      <span>{children}</span>
    </div>
  );
}