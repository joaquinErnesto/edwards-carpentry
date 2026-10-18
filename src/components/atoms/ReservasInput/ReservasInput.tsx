import type { InputHTMLAttributes } from "react";
import styles from "./ReservasInput.module.css";

type ReservasInputProps = InputHTMLAttributes<HTMLInputElement>;

export function ReservasInput({
  className = "",
  ...props
}: ReservasInputProps) {
  return (
    <input
      {...props}
      className={`${styles.input} ${className}`}
    />
  );
}