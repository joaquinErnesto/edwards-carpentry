import type { CSSProperties } from "react";
import styles from "./ServiceMediaCard.module.css";

export interface ServiceMediaItem {
  type: "image" | "video";
  src: string;
  alt: string;
  caption?: string;
  poster?: string;
}

interface ServiceMediaCardProps {
  item: ServiceMediaItem;
  index: number;
}

export function ServiceMediaCard({ item, index }: ServiceMediaCardProps) {
  return (
    <figure className={styles.card} style={{ "--item-index": index } as CSSProperties}>
      <div className={styles.mediaFrame}>
        {item.type === "video" ? (
          <video className={styles.media} controls preload="metadata" poster={item.poster} aria-label={item.alt}>
            <source src={item.src} type="video/mp4" />
            Tu navegador no puede reproducir este video.
          </video>
        ) : (
          <img className={styles.media} src={item.src} alt={item.alt} loading="lazy" />
        )}
        {item.type === "video" && <span className={styles.videoBadge}>VIDEO</span>}
      </div>
      {item.caption && <figcaption className={styles.caption}>{item.caption}</figcaption>}
    </figure>
  );
}
