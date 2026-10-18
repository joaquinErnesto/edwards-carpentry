import { CatalogStat } from "../../molecules/CatalogStat/CatalogStat";

import { catalogCategories } from "../../../data/catalog";

import { catalogWorks } from "../../../data/catalog-groups";

import styles from "./CatalogHero.module.css";

export function CatalogHero() {
  return (
    <section className={styles.section}>
      <div
        className={styles.ambientTop}
        aria-hidden="true"
      />

      <div
        className={styles.ambientLeft}
        aria-hidden="true"
      />

      <div className={styles.meta}>
        <span className={styles.badge}>
          Archivo Edward
        </span>

        <span className={styles.metaText}>
          Taller de Ebanistería Tradicional • Baracoa
        </span>

        <span
          className={styles.dot}
          aria-hidden="true"
        />

        <span className={styles.categories}>
          {catalogCategories.length} Categorías Artesanales
        </span>
      </div>

      <div className={styles.heroGrid}>
        <div>
          <h1 className={styles.title}>
            Catálogo General de Piezas y Encargos
          </h1>

          <p className={styles.description}>
            Explora nuestras creaciones organizadas por
            tipología. Desde la tradición del balance cubano
            hasta soluciones a medida para cada estancia,
            forjadas con maderas nobles curadas al sol
            caribeño y ensambladas sin prisa.
          </p>
        </div>

        <div className={styles.stats}>
          <CatalogStat
            label="Piezas Registradas"
            value={`${catalogWorks.length} Obras Únicas`}
            icon="inventory_2"
          />

          <CatalogStat
            label="Maderas Autóctonas"
            value="Cedro, Caoba & Majagua"
            icon="nature"
          />

          <CatalogStat
            label="Otras Maderas Comúnmente Usadas"
            value="Almendro, Dormilón, Raisú, Najesí, Roble Blanco & Acana"
            icon="forest"
          />
        </div>
      </div>
    </section>
  );
}