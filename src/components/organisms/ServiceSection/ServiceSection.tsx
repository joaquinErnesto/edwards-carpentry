import type { ServiceGalleryData } from "../../molecules/ServiceGallery/ServiceGallery";
import { ServiceGallery } from "../../molecules/ServiceGallery/ServiceGallery";
import styles from "./ServiceSection.module.css";

export interface ServiceSectionData {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  intro: string;
  highlights: string[];
  galleries: ServiceGalleryData[];
}

interface ServiceSectionProps { service: ServiceSectionData; }

export function ServiceSection({ service }: ServiceSectionProps) {
  return (
    <section id={service.id} className={styles.service} aria-labelledby={`${service.id}-title`}>
      <div className={styles.serviceHeading}>
        <span className={styles.number}>{service.number}</span>
        <div className={styles.headingCopy}>
          <p className={styles.subtitle}>{service.subtitle}</p>
          <h2 id={`${service.id}-title`} className={styles.title}>{service.title}</h2>
          <p className={styles.intro}>{service.intro}</p>
        </div>
      </div>
      <ul className={styles.highlights}>
        {service.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
      </ul>
      {service.galleries.map((gallery, index) => (
        <ServiceGallery key={gallery.id} gallery={gallery} serviceId={service.id} index={index} />
      ))}
    </section>
  );
}
