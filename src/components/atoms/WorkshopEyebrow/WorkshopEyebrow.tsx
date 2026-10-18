import type { ReactNode } from "react";
import styles from "./WorkshopEyebrow.module.css";

interface WorkshopEyebrowProps {
  children: ReactNode;
  light?: boolean;
}

export function WorkshopEyebrow({
  children,
  light = false,
}: WorkshopEyebrowProps) {
  return (
    <span
      className={`${styles.eyebrow} ${
        light ? styles.light : ""
      }`}
    >
      {children}
    </span>
  );
}