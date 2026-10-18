import { useState } from "react";

import { Container } from "../../layout/Container/Container";
import { SectionLabel } from "../../atoms/SectionLabel/SectionLabel";
import { MaterialItem } from "../../molecules/MaterialItem/MaterialItem";
import { MaterialNote } from "../../molecules/MaterialNote/MaterialNote";
import { materials } from "../../../data/materials";
import styles from "./MaterialsSection.module.css";

export function MaterialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const active = materials[activeIndex];

  return (
    <section
      id="maderas"
      className={styles.section}
    >
      <Container className={styles.container}>
        <div className={styles.header}>
          <SectionLabel>Maderas del almacén</SectionLabel>

          <h2 className={styles.title}>
            La madera se elige
            antes que el diseño
          </h2>

          <p className={styles.description}>
            Cuatro tablones del almacén de Edward,
            fotografiados tal cual llegan. Toca una
            especie para ver la pila completa y las
            notas de cómo trabajamos cada una.
          </p>
        </div>

        <div className={styles.picker}>
          <div
            role="tablist"
            aria-label="Especies de madera"
            className={styles.tabs}
          >
            {materials.map((material, index) => (
              <MaterialItem
                key={material.id}
                material={material}
                index={index}
                isActive={index === activeIndex}
                onSelect={setActiveIndex}
              />
            ))}
          </div>
        </div>

        <div
          id="wood-panel"
          role="tabpanel"
          aria-labelledby={`wood-tab-${active.id}`}
          className={styles.panel}
        >
          <figure className={styles.figure}>
            <img
              key={active.id}
              src={active.image}
              alt={active.alt}
              className={styles.image}
              loading="lazy"
              decoding="async"
            />

            <figcaption className={styles.caption}>
              <span className={styles.captionTone}>
                {active.tone}
              </span>

              <span className={styles.captionName}>
                {active.name}
              </span>
            </figcaption>
          </figure>

          <div className={styles.details}>
            <span className={styles.eyebrow}>
              {active.name}
            </span>

            <p className={styles.summary}>
              {active.description}
            </p>

            <ul className={styles.traits}>
              {active.traits.map((trait) => (
                <li
                  key={trait}
                  className={styles.trait}
                >
                  {trait}
                </li>
              ))}
            </ul>

            <MaterialNote material={active} />
          </div>
        </div>
      </Container>
    </section>
  );
}