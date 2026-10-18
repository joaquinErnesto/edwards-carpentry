import { Container } from "../../layout/Container/Container";
import { SectionLabel } from "../../atoms/SectionLabel/SectionLabel";
import { Icon } from "../../atoms/Icon/Icon";
import { catalogWorks } from "../../../data/catalog-groups";

import cargaImage from "../../../assets/images/hands-on-wood/hands-on-wood-2.jpg";
import sierraImage from "../../../assets/images/hands-on-wood/hands-on-wood-3.jpg";
import despieceImage from "../../../assets/images/hands-on-wood/hands-on-wood-5.jpg";
import montajeImage from "../../../assets/images/hands-on-wood/hands-on-wood-4.jpg";

import styles from "./TeamSection.module.css";

interface TeamShot {
  id: string;
  image: string;
  alt: string;
  caption: string;
  wide?: boolean;
}

const shots: TeamShot[] = [
  {
    id: "carga",
    image: cargaImage,
    alt:
      "Dos carpinteros del equipo guiando juntos un tablón largo hacia la sierra del taller, con el jardín tropical al fondo.",
    caption: "Carga y traslado de tablones largos",
    wide: true,
  },
  {
    id: "sierra",
    image: sierraImage,
    alt:
      "Dos carpinteros pasando una tabla por la sierra de banco, con el taller lleno de polvo de madera.",
    caption: "Corte a medida en sierra de banco",
  },
  {
    id: "despiece",
    image: despieceImage,
    alt:
      "Un carpintero cortando una pieza en la sierra del taller, con el aserrín acumulado en el suelo.",
    caption: "Despiece inicial de cada pieza",
  },
  {
    id: "montaje",
    image: montajeImage,
    alt:
      "Un carpintero cargando una viga larga de un lado a otro del taller, bajo el techo de zinc.",
    caption: "Piezas de más de tres metros",
  },
];

const values = [
  {
    icon: "groups",
    text: "Dos manos por pieza, siempre",
  },
  {
    icon: "health_and_safety",
    text: "Protección y mascarilla en cada corte",
  },
  {
    icon: "verified",
    text: "Nadie da por buena una tabla sin mirarla",
  },
];

export function TeamSection() {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.header}>
          <div className={styles.intro}>
            <SectionLabel>El equipo</SectionLabel>

            <h2 className={styles.title}>
              Nadie trabaja solo en
              este taller
            </h2>

            <p className={styles.description}>
              Cada encargo que sale del taller pasó
              por varias manos. Dos, tres personas
              sobre la misma pieza: uno mide y marca,
              el otro sostiene y alimenta la máquina.
              Nadie apura a nadie y nadie da por buena
              una tabla sin mirarla antes.
            </p>

            <p className={styles.description}>
              Es la misma disciplina con un marco de
              puerta que con un ropero completo. Por
              eso las {catalogWorks.length} obras que
              tienes en el catálogo se levantaron
              así: entre varias personas, en el mismo
              aire y en el mismo ruido.
            </p>
          </div>

          <ul className={styles.values}>
            {values.map((value) => (
              <li
                key={value.text}
                className={styles.value}
              >
                <Icon
                  name={value.icon}
                  size={20}
                />

                <span>{value.text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.mosaic}>
          {shots.map((shot) => (
            <figure
              key={shot.id}
              className={`${styles.shot} ${
                shot.wide ? styles.shotWide : ""
              }`}
            >
              <img
                src={shot.image}
                alt={shot.alt}
                className={styles.image}
                loading="lazy"
                decoding="async"
              />

              <figcaption className={styles.caption}>
                {shot.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}