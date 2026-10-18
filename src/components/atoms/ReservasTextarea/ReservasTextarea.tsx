import type { TextareaHTMLAttributes } from "react";
import styles from "./ReservasTextarea.module.css";

type ReservasTextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export function ReservasTextarea({
  className = "",
  ...props
}: ReservasTextareaProps) {
  return (
    <textarea
      {...props}
      className={`${styles.textarea} ${className}`}
    />
  );
}