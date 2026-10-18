import type { ReactNode } from "react";
import styles from "./ReservasEyebrow.module.css";

interface ReservasEyebrowProps {
  children: ReactNode;
}

export function ReservasEyebrow({ children }: ReservasEyebrowProps) {
  return <span className={styles.eyebrow}>{children}</span>;
}