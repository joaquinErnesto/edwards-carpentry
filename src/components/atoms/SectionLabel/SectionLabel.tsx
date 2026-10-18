import type { ReactNode } from "react";
import styles from "./SectionLabel.module.css";

interface SectionLabelProps {
  children: ReactNode;
  muted?: boolean;
}

export function SectionLabel({
  children,
  muted = false,
}: SectionLabelProps) {
  return (
    <span
      className={`${styles.label} ${
        muted ? styles.muted : ""
      }`}
    >
      {children}
    </span>
  );
}