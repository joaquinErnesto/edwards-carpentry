import { servicesPageIntro, servicesSections } from "../../data/services";
import { ServiceSection } from "../../components/organisms/ServiceSection/ServiceSection";
import styles from "./Servicios.module.css";

export function Servicios() {
  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.container}>
          <p className={styles.eyebrow}>{servicesPageIntro.eyebrow}</p>
          <h1 className={styles.title}>{servicesPageIntro.title}</h1>
          <p className={styles.description}>{servicesPageIntro.description}</p>
          <nav className={styles.quickNav} aria-label="Servicios disponibles">
            {servicesSections.map((service) => (
              <a key={service.id} href={`#${service.id}`}>{service.number} / {service.title}</a>
            ))}
          </nav>
        </div>
      </header>
      <div className={styles.container}>
        {servicesSections.map((service) => <ServiceSection key={service.id} service={service} />)}
      </div>
    </div>
  );
}

export default Servicios;
