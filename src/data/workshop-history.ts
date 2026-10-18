import oldWorkshopWide from "../assets/images/carpentry/20250913_091505.jpg";
import oldWorkshopInterior from "../assets/images/carpentry/carpentry-2.jpg";
import newWorkshopTables from "../assets/images/carpentry/carpentry-3.jpg";
import newWorkshopMachine from "../assets/images/carpentry/carpentry-4.jpg";

export interface HistoryImage {
  src: string;
  alt: string;
}

export const workshopHistoryIntro =
  "Hace más de 10 años comenzamos aquí";

export const workshopHistoryRelocation =
  "Sin embargo, por situaciones de la vida nos trasladamos a este otro local";

export const workshopHistoryClosing =
  "Pero seguimos batallando, guerreando, dando lo mejor de nosotros para que nuestros clientes queden satisfechos con el trabajo que amamos hacer: trabajar la madera con elegancia";

export const workshopHistoryFirstShop: HistoryImage[] = [
  {
    src: oldWorkshopWide,
    alt: "Primer local del taller, con techo de zinc, piso de tierra y la sierra de banco entre virutas de madera.",
  },
  {
    src: oldWorkshopInterior,
    alt: "Interior del primer taller, con mesas de trabajo, tableros apilados y bancos bajo la estructura de madera.",
  },
];

export const workshopHistoryNewShop: HistoryImage[] = [
  {
    src: newWorkshopTables,
    alt: "Nuevo local del taller, con mesas de trabajo, listones apilados y carpinteros en plena jornada.",
  },
  {
    src: newWorkshopMachine,
    alt: "Carpintero trabajando en la máquina del nuevo taller, con tablas listas sobre el suelo de cemento.",
  },
];
