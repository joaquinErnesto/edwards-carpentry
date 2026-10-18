import type { ServiceSectionData } from "../components/organisms/ServiceSection/ServiceSection";

import trailer1 from "../assets/images/services/trailer/trailer-1.jpg";
import trailer2 from "../assets/images/services/trailer/trailer-2.jpg";
import floorinstallation1 from "../assets/images/services/floor-installation/floor-installation-1.jpg";
import floorinstallation2 from "../assets/images/services/floor-installation/floor-installation-2.jpg";
import floorinstallation3 from "../assets/images/services/floor-installation/floor-installation-3.jpg";
import floorinstallation4 from "../assets/images/services/floor-installation/floor-installation-4.jpg";
import floorinstallation5 from "../assets/images/services/floor-installation/floor-installation-5.jpg";
import floorinstallation6 from "../assets/images/services/floor-installation/floor-installation-6.jpg";
import floorinstallation7 from "../assets/images/services/floor-installation/floor-installation-7.jpg";
import floorinstallation8 from "../assets/images/services/floor-installation/floor-installation-8.jpg";
import floorinstallation9 from "../assets/images/services/floor-installation/floor-installation-9.jpg";
import floorinstallation10 from "../assets/images/services/floor-installation/floor-installation-10.jpg";
import floorinstallation11 from "../assets/images/services/floor-installation/floor-installation-11.jpg";
import floorinstallation12 from "../assets/images/services/floor-installation/floor-installation-12.jpg";
import floorinstallation13 from "../assets/images/services/floor-installation/floor-installation-13.jpg";
import floorinstallation14 from "../assets/images/services/floor-installation/floor-installation-14.jpg";
import plating1 from "../assets/images/services/plating/plating-1.jpg";
import plating2 from "../assets/images/services/plating/plating-2.jpg";
import plating3 from "../assets/images/services/plating/plating-3.jpg";
import plating4 from "../assets/images/services/plating/plating-4.jpg";
import plating5 from "../assets/images/services/plating/plating-5.jpg";
import ceilingmount1 from "../assets/images/services/ceiling-mount/ceiling-mount-1.jpg";
import ceilingmount2 from "../assets/images/services/ceiling-mount/ceiling-mount-2.jpg";
import ceilingmount3 from "../assets/images/services/ceiling-mount/ceiling-mount-3.jpg";
import ceilingmount4 from "../assets/images/services/ceiling-mount/ceiling-mount-4.jpg";
import ceilingmount5 from "../assets/images/services/ceiling-mount/ceiling-mount-5.jpg";
import ceilingmount6 from "../assets/images/services/ceiling-mount/ceiling-mount-6.jpg";
import ceilingmount7 from "../assets/images/services/ceiling-mount/ceiling-mount-7.jpg";
import ceilingmount8 from "../assets/images/services/ceiling-mount/ceiling-mount-8.jpg";
import ceilingmount9 from "../assets/images/services/ceiling-mount/ceiling-mount-9.jpg";
import ceilingmount10 from "../assets/images/services/ceiling-mount/ceiling-mount-10.jpg";
import ceilingmount11 from "../assets/images/services/ceiling-mount/ceiling-mount-11.jpg";
import ceilingmount12 from "../assets/images/services/ceiling-mount/ceiling-mount-12.jpg";
import ceilingmount13 from "../assets/images/services/ceiling-mount/ceiling-mount-13.jpg";
import ceilingmount14 from "../assets/images/services/ceiling-mount/ceiling-mount-14.jpg";
import ceilingmount15 from "../assets/images/services/ceiling-mount/ceiling-mount-15.jpg";
import ceilingmount16 from "../assets/images/services/ceiling-mount/ceiling-mount-16.jpg";
import garagecreation1 from "../assets/images/services/garage-creation/garage-creation-1.jpg";
import garagecreation2 from "../assets/images/services/garage-creation/garage-creation-2.jpg";
import garagecreation3 from "../assets/images/services/garage-creation/garage-creation-3.jpg";
import garagecreation4 from "../assets/images/services/garage-creation/garage-creation-4.jpg";
import garagecreation5 from "../assets/images/services/garage-creation/garage-creation-5.jpg";
import garagecreation6 from "../assets/images/services/garage-creation/garage-creation-6.jpg";
import floorInstallationVideo from "../assets/images/services/floor-installation/floor-installation-video.mp4";

const numberedMedia = (
  images: string[],
  altPrefix: string,
  captionPrefix: string,
) =>
  images.map((src, index) => ({
    type: "image" as const,
    src,
    alt: `${altPrefix} — imagen ${index + 1}`,
    caption: `${captionPrefix} ${String(index + 1).padStart(2, "0")}`,
  }));

export const servicesPageIntro = {
  eyebrow: "SERVICIOS DE CARPINTERÍA",
  title: "Del taller a tu espacio, con oficio y compromiso",
  description:
    "Cada encargo cuenta una historia: escuchamos lo que necesitas, trabajamos cada detalle y llevamos el resultado hasta el lugar donde cobrará vida.",
};

export const servicesSections: ServiceSectionData[] = [
  {
    id: "trailer",
    number: "01",
    title: "Traslado de trabajos",
    subtitle: "Del taller hasta donde lo necesitas",
    intro:
      "Un trabajo bien hecho merece llegar en buenas condiciones. Coordinamos el traslado de las piezas y encargos para que puedan llegar a hogares, centros de trabajo y espacios comerciales.",
    highlights: [
      "Entrega en viviendas y hogares particulares.",
      "Traslado a centros de trabajo y negocios.",
      "Cuidado durante la preparación y el transporte.",
    ],
    galleries: [
      {
        id: "trailer-delivery",
        title: "Tu encargo, en el lugar indicado",
        description:
          "Mostramos distintas entregas para ilustrar cómo acompañamos cada trabajo desde su salida del taller hasta el destino solicitado.",
        media: numberedMedia([trailer1, trailer2], "Traslado de trabajos de carpintería", "Entrega"),
      },
    ],
  },
  {
    id: "floor-installation",
    number: "02",
    title: "Instalación de pisos",
    subtitle: "Un acabado que transforma el espacio",
    intro:
      "La instalación del piso requiere preparación, precisión y atención a los encuentros y terminaciones. Documentamos el proceso para que puedas apreciar tanto el trabajo realizado como el resultado final.",
    highlights: [
      "Preparación y organización del área de trabajo.",
      "Colocación cuidadosa y revisión de los detalles.",
      "Un espacio renovado, listo para disfrutarse.",
    ],
    galleries: [
      {
        id: "floor-process",
        title: "Primera etapa: el trabajo paso a paso",
        description:
          "Estas primeras siete imágenes siguen el avance de la instalación. Cada fase contribuye a conseguir una superficie uniforme y una terminación cuidada.",
        bullets: ["Preparar el área", "Trabajar con precisión", "Revisar cada detalle"],
        media: numberedMedia([floorinstallation1, floorinstallation2, floorinstallation3, floorinstallation4, floorinstallation5, floorinstallation6, floorinstallation7], "Proceso de instalación de piso", "Proceso · fase"),
      },
      {
        id: "floor-finish",
        title: "Segunda etapa: el resultado y la satisfacción",
        description:
          "Las imágenes finales y el video muestran la continuación del proyecto y el espacio terminado. El objetivo es entregar un trabajo limpio, funcional y acorde con lo solicitado.",
        bullets: ["Terminaciones revisadas", "Espacio preparado para su uso", "Un resultado del que sentirse orgullosos"],
        media: [
          ...numberedMedia([floorinstallation8, floorinstallation9, floorinstallation10, floorinstallation11, floorinstallation12, floorinstallation13, floorinstallation14], "Resultado de instalación de piso", "Resultado · detalle"),
          { type: "video" as const, src: floorInstallationVideo, poster: floorinstallation14, alt: "Video del proceso y resultado de la instalación del piso", caption: "Video · recorrido del trabajo terminado" },
        ],
      },
    ],
  },
  {
    id: "plating",
    number: "03",
    title: "Revestimientos y forrado",
    subtitle: "Soluciones para interiores y exteriores",
    intro:
      "Adaptamos el revestimiento a las características de cada espacio. Ya sea dentro de la vivienda o en una zona exterior, cuidamos la continuidad visual, los encuentros y la integración con el entorno.",
    highlights: [
      "Aplicaciones en espacios interiores.",
      "Trabajos para áreas exteriores según las condiciones del lugar.",
      "Atención a alineación, bordes y terminaciones.",
    ],
    galleries: [
      {
        id: "plating-examples",
        title: "Un acabado pensado para cada espacio",
        description:
          "Estas cinco imágenes reúnen ejemplos del servicio y permiten apreciar distintas aplicaciones del revestimiento en el hogar y fuera de él.",
        media: numberedMedia([plating1, plating2, plating3, plating4, plating5], "Servicio de revestimiento y forrado", "Aplicación"),
      },
    ],
  },
  {
    id: "ceiling-mount",
    number: "04",
    title: "Montaje de techos",
    subtitle: "Planificación, montaje y resultado final",
    intro:
      "Cada montaje comienza con la preparación de los elementos en el taller y continúa en el lugar de instalación. Organizamos el recorrido en tres etapas para mostrar cómo evoluciona el trabajo hasta su culminación.",
    highlights: [
      "Preparación previa en el taller.",
      "Montaje y ajuste en el lugar de destino.",
      "Revisión del resultado y de los detalles finales.",
    ],
    galleries: [
      {
        id: "ceiling-workshop",
        title: "Aún en la carpintería",
        description:
          "Las tres primeras imágenes presentan la etapa previa: preparación de piezas, organización de materiales y trabajo de taller antes de llevar el montaje al sitio.",
        bullets: ["Preparación", "Organización", "Revisión previa"],
        media: numberedMedia([ceilingmount1, ceilingmount2, ceilingmount3], "Preparación de montaje de techo en la carpintería", "Taller · fase"),
      },
      {
        id: "ceiling-installation",
        title: "Manos a la obra",
        description:
          "De la imagen cuatro a la nueve, seguimos el montaje en el lugar solicitado. La coordinación, los ajustes y la atención a los encuentros ayudan a conseguir una instalación firme y bien integrada.",
        bullets: ["Montaje en el sitio", "Ajustes durante la instalación", "Cuidado de alineación y uniones"],
        media: numberedMedia([ceilingmount4, ceilingmount5, ceilingmount6, ceilingmount7, ceilingmount8, ceilingmount9], "Instalación de techo en el lugar de trabajo", "Montaje · fase"),
      },
      {
        id: "ceiling-completed",
        title: "Trabajo terminado con éxito",
        description:
          "Las últimas siete imágenes muestran la etapa final del proyecto: el techo ya instalado y la atención puesta en su aspecto general y sus terminaciones.",
        bullets: ["Vista del resultado", "Detalles de terminación", "Espacio listo para su uso"],
        media: numberedMedia([ceilingmount10, ceilingmount11, ceilingmount12, ceilingmount13, ceilingmount14, ceilingmount15, ceilingmount16], "Montaje de techo terminado", "Resultado · detalle"),
      },
    ],
  },
  {
    id: "garage-creation",
    number: "05",
    title: "Creación de garajes",
    subtitle: "Estructura montada y bien integrada",
    intro:
      "Un garaje necesita una estructura bien ubicada y un montaje que responda a las condiciones del espacio. Esta secuencia de seis imágenes presenta el avance del trabajo hasta ver la estructura colocada y el techo integrado en su sitio.",
    highlights: [
      "Organización de la estructura en el lugar.",
      "Montaje progresivo y ajustes de ubicación.",
      "Revisión visual de la estructura y el techo instalados.",
    ],
    galleries: [
      {
        id: "garage-project",
        title: "De la estructura al espacio terminado",
        description:
          "Acompaña el avance del proyecto en orden: desde las primeras etapas del montaje hasta la estructura colocada en el lugar previsto, con el techo correctamente ubicado.",
        media: numberedMedia([garagecreation1, garagecreation2, garagecreation3, garagecreation4, garagecreation5, garagecreation6], "Creación y montaje de garaje", "Garaje · fase"),
      },
    ],
  },
];

export interface Service {
  image: string;
  secondaryImage?: string;
  category: string;
  title: string;
  worksCount: number;
  description: string;
  photoCount: number;
  catalogCategory: string;
  actionLabel: string;
}