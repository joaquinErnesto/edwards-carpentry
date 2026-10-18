import eduardoPhoto from "../assets/images/workers/carpentry-boss.jpg";
import carlosPhoto from "../assets/images/workers/carlos.jpg";

export interface WorkshopWorker {
  name: string;
  role: string;
  description: string;
  photo: string;
  alt: string;
}

export const workshopTeamEyebrow = "Las Manos del Taller";

export const workshopTeamTitle = "Dos caras, un mismo taller";

export const workshopTeamIntro =
  "Aquí no hay jefe de oficina: en este taller nadie se libra de cojer el martillo. Cuando entras a este taller sabes siempre con quién estás hablando, porque son las mismas dos personas las que miden, cortan, arman y barnizan tu encargo de principio a fin.";

export const workshopTeam: WorkshopWorker[] = [
  {
    name: "Eduardo de la Cruz Pérez",
    role: "Edward, carpintero y fundador",
    description:
      "Eduardo lleva toda la vida con la madera y es quien le pone el nombre a cada obra. Sigue siendo el que elige el tablón, el que decide el corte y el que no se acuesta sin revisar que las uniones entren limpias. Su criterio es el que manda en el taller.",
    photo: eduardoPhoto,
    alt: "Retrato de Eduardo de la Cruz Pérez, Edward, el carpintero del taller.",
  },
  {
    name: "Carlos",
    role: "Brazo derecho del taller",
    description:
      "Carlos lleva años pegado a Eduardo en cada trabajo. Es el que está siempre en el corte, el que carga la pieza pesada y el que se queda a terminar el acabado cuando la jornada ya se acabó. Amigo antes que compañero: el taller funciona porque los dos se cubren.",
    photo: carlosPhoto,
    alt: "Retrato de Carlos, carpintero del taller, trabajando junto a Eduardo.",
  },
];