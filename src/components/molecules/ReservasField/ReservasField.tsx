import type { ReactNode } from "react";
import styles from "./ReservasField.module.css";

interface ReservasFieldProps {
  label: string;
  htmlFor: string;
  children: ReactNode;
}

export function ReservasField({
  label,
  htmlFor,
  children,
}: ReservasFieldProps) {
  return (
    <div className={styles.field}>
      <label
        htmlFor={htmlFor}
        className={styles.label}
      >
        {label}
      </label>

      {children}
    </div>
  );
}