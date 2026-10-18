import styles from "./Icon.module.css";

interface IconProps {
  name: string;
  size?: number;
  filled?: boolean;
  className?: string;
}

export function Icon({
  name,
  size = 24,
  filled = false,
  className = "",
}: IconProps) {
  return (
    <span
      className={`material-symbols-outlined ${styles.icon} ${className}`}
      style={{
        fontSize: `${size}px`,
        fontVariationSettings: `"FILL" ${
          filled ? 1 : 0
        }, "wght" 400, "GRAD" 0, "opsz" ${size}`,
      }}
      aria-hidden="true"
    >
      {name}
    </span>
  );
}