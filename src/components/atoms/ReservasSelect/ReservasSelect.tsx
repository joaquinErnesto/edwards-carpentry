import type { SelectHTMLAttributes } from "react";
import styles from "./ReservasSelect.module.css";

type ReservasSelectProps = SelectHTMLAttributes<HTMLSelectElement>;

export function ReservasSelect({
  className = "",
  ...props
}: ReservasSelectProps) {
  return (
    <select
      {...props}
      className={`${styles.select} ${className}`}
    />
  );
}