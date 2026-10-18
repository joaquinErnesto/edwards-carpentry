import { Icon } from "../../atoms/Icon/Icon";
import styles from "./ReservasIconBox.module.css";

interface ReservasIconBoxProps {
  icon: string;
}

export function ReservasIconBox({ icon }: ReservasIconBoxProps) {
  return (
    <div className={styles.box}>
      <Icon name={icon} size={24} />
    </div>
  );
}