import { Fragment } from "react";
import { Link } from "react-router-dom";

import { Icon } from "../../atoms/Icon/Icon";
import { WorkShowcaseSection } from "../../molecules/WorkShowcaseSection/WorkShowcaseSection";
import {
  showcaseWorks,
  type ShowcaseWork,
} from "../../../data/works-showcase";
import { showcaseDividers } from "../../../data/works-showcase-dividers";
import styles from "./WorksShowcase.module.css";

interface WorksShowcaseProps {
  onOpenWork: (
    work: ShowcaseWork,
    photoSrc: string,
  ) => void;
}

export function WorksShowcase({
  onOpenWork,
}: WorksShowcaseProps) {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <div>
          <span className={styles.eyebrow}>
            UNA OBRA POR COLECCIÓN
          </span>

          <h2 className={styles.title}>
            Nueve Piezas, Diecinueve Vistas
          </h2>

          <p className={styles.lead}>
            De cada género que más nos piden hemos
            elegido una sola obra y la mostramos como se
            merece: tres fotografías escogidas a mano y el
            detalle de cómo está construida.
          </p>
        </div>

        <Link
          to="/catalog"
          className={styles.catalogLink}
        >
          Ver catálogo completo

          <Icon
            name="arrow_forward"
            size={16}
          />
        </Link>
      </header>

      <div className={styles.list}>
        {showcaseWorks.map((work, index) => (
          <Fragment key={work.id}>
            {index > 0 &&
              showcaseDividers[index - 1] && (
                <div
                  className={styles.divider}
                  style={{
                    backgroundImage: `url(${showcaseDividers[index - 1]})`,
                  }}
                  aria-hidden="true"
                />
              )}

            <WorkShowcaseSection
              work={work}
              order={index}
              onOpen={onOpenWork}
            />
          </Fragment>
        ))}
      </div>
    </section>
  );
}