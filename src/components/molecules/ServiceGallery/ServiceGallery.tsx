import type { ServiceMediaItem } from "../../atoms/ServiceMediaCard/ServiceMediaCard";
import { ServiceMediaCard } from "../../atoms/ServiceMediaCard/ServiceMediaCard";
import styles from "./ServiceGallery.module.css";

export interface ServiceGalleryData {
  id: string;
  title: string;
  description: string;
  bullets?: string[];
  media: ServiceMediaItem[];
}

interface ServiceGalleryProps { gallery: ServiceGalleryData; serviceId: string; index: number; }

export function ServiceGallery({ gallery, serviceId, index }: ServiceGalleryProps) {
  return (
    <section className={styles.gallery} aria-labelledby={`${serviceId}-${gallery.id}-title`}>
      <header className={styles.header}>
        <div className={styles.headingGroup}>
          <span className={styles.index}>SECUENCIA {String(index + 1).padStart(2, "0")}</span>
          <h3 id={`${serviceId}-${gallery.id}-title`} className={styles.title}>{gallery.title}</h3>
        </div>
        <div className={styles.copy}>
          <p>{gallery.description}</p>
          {gallery.bullets && gallery.bullets.length > 0 && (
            <ul className={styles.bullets}>
              {gallery.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
            </ul>
          )}
        </div>
      </header>
      <div className={styles.grid}>
        {gallery.media.map((item, itemIndex) => (
          <ServiceMediaCard key={`${gallery.id}-${item.type}-${itemIndex}`} item={item} index={itemIndex} />
        ))}
      </div>
    </section>
  );
}
