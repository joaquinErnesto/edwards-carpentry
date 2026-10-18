import type { Material } from "../../../data/materials";
import styles from "./MaterialItem.module.css";

interface MaterialItemProps {
  material: Material;
  isActive: boolean;
  index: number;
  onSelect: (index: number) => void;
}

export function MaterialItem({
  material,
  isActive,
  index,
  onSelect,
}: MaterialItemProps) {
  return (
    <button
      type="button"
      role="tab"
      id={`wood-tab-${material.id}`}
      aria-selected={isActive}
      aria-controls="wood-panel"
      tabIndex={isActive ? 0 : -1}
      className={`${styles.item} ${
        isActive ? styles.active : ""
      }`}
      onClick={() => onSelect(index)}
    >
      <span className={styles.thumb}>
        <img
          src={material.image}
          alt=""
          loading="lazy"
          decoding="async"
        />
      </span>

      <span className={styles.label}>
        {material.name}
      </span>
    </button>
  );
}