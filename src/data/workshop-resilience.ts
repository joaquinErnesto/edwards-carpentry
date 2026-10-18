import handsOnWoodSaw from "../assets/images/hands-on-wood/hands-on-wood-3.jpg";
import handsOnWoodBeam from "../assets/images/hands-on-wood/hands-on-wood-4.jpg";

export interface ResilienceImage {
  src: string;
  alt: string;
}

export interface ResiliencePillar {
  title: string;
  description: string;
}

export const workshopResilienceEyebrow = "Inventiva cubana";

export const workshopResilienceTitle =
  "El arte de resolver con lo que hay";

export const workshopResilienceLead =
  "En Cuba, ser carpintero también es saber improvisar. Cuando falta una máquina, la construimos. Cuando el material no llega, miramos la madera recuperada —vigas de antiguas casonas, tablones que otros descartan— y le devolvemos la vida.";

export const workshopResilienceClosing =
  "Esa maña, heredada y perfeccionada pieza por pieza, es lo que hace que cada trabajo nuestro tenga una historia antes de llegar a su casa: la de un taller que no se rinde.";

export const workshopResiliencePillars: ResiliencePillar[] = [
  {
    title: "Madera rescatada",
    description:
      "Vigas de casas viejas y tablones olvidados encuentran una segunda vida como closets, puertas y mesas que ningún catálogo repite.",
  },
  {
    title: "Máquinas que nacen en el taller",
    description:
      "Buena parte de nuestra maquinaria fue diseñada y armada por nosotros: herramientas hechas a la medida del trabajo que hacemos aquí.",
  },
];

export const workshopResilienceImages: ResilienceImage[] = [
  {
    src: handsOnWoodSaw,
    alt: "Carpinteros pasando una tabla por la sierra de banco, entre polvo de madera y herramientas del taller.",
  },
  {
    src: handsOnWoodBeam,
    alt: "Carpintero cargando una viga larga de un lado a otro del taller, bajo el techo de zinc.",
  },
];
