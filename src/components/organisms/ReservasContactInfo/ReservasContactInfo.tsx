import { Icon } from "../../atoms/Icon/Icon";
import { ReservasContactItem } from "../../molecules/ReservasContactItem/ReservasContactItem";
import { ReservasMap } from "../../molecules/ReservasMap/ReservasMap";
import {
  reservasContactItems,
  reservasWhatsappUrl,
} from "../../../data/reservas";
import styles from "./ReservasContactInfo.module.css";

export function ReservasContactInfo() {
  return (
    <div className={styles.container}>
      <div className={styles.items}>
        {reservasContactItems.map((item) => (
          <ReservasContactItem
            key={item.title}
            item={item}
          />
        ))}

        <div className={styles.whatsappItem}>
          <div className={styles.whatsappIconBox}>
            <Icon name="chat" size={24} />
          </div>

          <div>
            <h3 className={styles.whatsappTitle}>
              VÍA RÁPIDA
            </h3>

            <a
              href={reservasWhatsappUrl}
              target="_blank"
              rel="noreferrer"
              className={styles.whatsappButton}
            >
              <Icon
                name="whatshot"
                size={18}
                filled
              />

              CONTACTAR POR WHATSAPP
            </a>
          </div>
        </div>
      </div>

      <ReservasMap />
    </div>
  );
}