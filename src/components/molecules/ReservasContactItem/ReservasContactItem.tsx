import { ReservasIconBox } from "../../atoms/ReservasIconBox/ReservasIconBox";
import type { ReservasContactItemData } from "../../../data/reservas";
import styles from "./ReservasContactItem.module.css";

interface ReservasContactItemProps {
  item: ReservasContactItemData;
}

export function ReservasContactItem({
  item,
}: ReservasContactItemProps) {
  return (
    <div className={styles.item}>
      <ReservasIconBox icon={item.icon} />

      <div className={styles.content}>
        <h3 className={styles.title}>{item.title}</h3>

        <p className={styles.text}>
          {item.content}

          {item.secondaryContent && (
            <>
              <br />
              {item.secondaryContent}
            </>
          )}
        </p>
      </div>
    </div>
  );
}