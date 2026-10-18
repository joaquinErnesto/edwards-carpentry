import { Icon } from "../../atoms/Icon/Icon";
import type { Material } from "../../../data/materials";
import styles from "./MaterialNote.module.css";

interface MaterialNoteProps {
  material: Material;
}

export function MaterialNote({
  material,
}: MaterialNoteProps) {
  return (
    <aside className={styles.note}>
      <header className={styles.header}>
        <span className={styles.iconBox}>
          <Icon
            name="handyman"
            size={18}
          />
        </span>

        <span className={styles.heading}>
          Notas del taller
        </span>
      </header>

      {material.botanical && (
        <p className={styles.botanical}>
          {material.botanical}
        </p>
      )}

      <div className={styles.paragraphs}>
        {material.notes.map((note) => (
          <p key={note}>{note}</p>
        ))}
      </div>

      <dl className={styles.specs}>
        {material.specs.map((spec) => (
          <div
            key={spec.label}
            className={styles.spec}
          >
            <dt>{spec.label}</dt>
            <dd>{spec.value}</dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}