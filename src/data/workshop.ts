import plankCarryImage from "../assets/images/hands-on-wood/hands-on-wood-7.jpg";
import jointerFaceImage from "../assets/images/hands-on-wood/hands-on-wood-8.jpg";
import jointerEdgeImage from "../assets/images/hands-on-wood/hands-on-wood-9.jpg";
import straightenImage from "../assets/images/hands-on-wood/hands-on-wood-10.jpg";
import boardsReadyImage from "../assets/images/hands-on-wood/hands-on-wood-11.jpg";
import doorFinishImage from "../assets/images/hands-on-wood/hands-on-wood-6.jpg";

export interface WorkshopImageData {
  src: string;
  alt: string;
}

export interface WorkshopSlide {
  id: string;
  step: string;
  image: string;
  alt: string;
  caption: string;
}

export interface WorkshopValue {
  icon: string;
  title: string;
  description: string;
  variant?: "light" | "dark";
  badge?: string;
}

export interface WorkshopStatData {
  value: string;
  label: string;
}

export const workshopImages = {
  hero: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0tot4MGbFuk3yCaXByPU9uOHyuYBgLkbUQR4I8zqQzwS8cintssRus8kxN4r1tmxct9dcBq-hv5oqM3E7T4w8ern-MqFjZjkNcreI7uUH9tNQqE5Vnn-RoXpe37NZZK9EoI7it7YZ-rPnMrM9r-Gkr6D5ivI4qTL1n92l1LUOruC80fTyG7ChR_GdurVZBsTLTj4JsB5SL2DybA9nTcKRPGVM0ndzA9_NUtq3YUNwBgDYQ_d18zICcGcR_fXATx7XdWBzCf4XqGqU",
    alt: "Taller tradicional de carpintería cubano iluminado por la luz dorada del sol, con maderas tropicales y un banco de trabajo central.",
  },

  masterCarpenter: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHe6s8RFEfp3oJWUYgn-U8t01pI58GYQDkx-GkUJJ-9EnSflgh-hZhUD97u91rS7tDtXmKSh2njGScjZTt78pgI1cR99VnYHwnfrgwh3z8hh_c97eT9C8Ry7VBplzns4PYnZO4KagVepM1aD3iz4n4GiVtfKG2eZPs9wwt27p4OhaTsXN9UHzQsVu1kAwX5yRYpPomFxWxE93EUs5TwFwAU1hUAu7DpCVD1g_8NU5djd3qRvT8kezZAG-6e8WxQjKs2DNHwPjpxIxU",
    alt: "Manos de Edward trabajando cuidadosamente una pieza de cedro con una herramienta manual.",
  },

  fatherAndSon: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBgApekTk9E2aF2xZXoMEs7-r37c6QwY7XGqU-fYY_7wT1WYO0UBwm7DokNj0BwvpK_MJuuFh49b67lAuB0AUWirAWHh3-n5M5om7tEoOh_V96tD_PuAs08Jsqn0MSyJStfVdv4ISGQJV_9lZs2ekZ6KzBKZNKG86HOs9B4u1J86jbNVpNKvM-d76nw9-lpOsm7DmGNt4GtechMNkG7uWvnb0NpSOV41iHwDJZCWfClcnh43vhwvjgiRZ1XWHjcF-xmo-7lZDEbr6nT",
    alt: "Padre e hijo trabajando juntos en un banco de carpintería mientras comparten conocimientos de la profesión.",
  },

  woodShavings: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAW24nYyrfeTLhYEKjOHB7vbrnwxPZG3SHQuoL3SmZJKnJy30znqzThG_Mg4lA2t02gCHh_dMqnNWCfZcIWvgSJUKY-De2WPJUl8VKLdoa5kK58FvGGr1aQuv7fObRyU2ZtH9OKocUvUZ2-nGR4oUxget_K8O6edErK6UA7rqYsbW6_ykT0AsiRlIo7PuSuD5_eEhmrdfUBdQuzEQFF9sqsPXXd8Yz88kvjloGoib2rF0eDAQEcKW3lDo9EpYH35HOB9CPqYkbAJgsE",
    alt: "Virutas doradas de madera de cedro sobre el suelo de un taller junto a una antigua cinta métrica.",
  },

  chisels: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-EFEh_pxLXIneICK-Dc9Kt_z9rr7RWo3M7rrMhZPmUT9QUwClMVesEyjtp6uw8pcNPRWxuBPt354ifrrFF-Bb4PWi_6zoKyGXA6OY_B0BnRkzAkaA68_2ZgZn5lJScpzYCM6f7wZ79MJG4cNhyhQ4Ca6nInvF_kDA5J1pkiVAjXdypxywIOSb-6781wkrM6WO68Zw_R8xoDg0r2IbaSDlBYEzHoiFW0xMDSXWyxYWBZRkvKfsTZYdmx6_fLyu7UCkxAdj0JNS5Y_j",
    alt: "Juego de formones profesionales organizados en un rollo de cuero.",
  },

  finishing: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBkB0vWVoHRKbJA6I8EuoUVspgC99jkM6JuOWCRmkhLUarwrc0LB2DNAYhE74oWbMouso_0hEPzJ-WbLrpxJL2eKnBSnRRddgSEUcwUIorBtgQUo7Za-9WJgrSOkmZEhTKsD4tsRXs2vs1lIekQM12J6wjascrJdYLrkZchxMA6WqIDT-RCyoD703yNlBKQ-BLzgI2mPIFVM_E-Kf8GCBgp4qb0tIMKfozz5udHIlA9Erik-eAeJNhDlw4W6VnUAfzIHfv3yjOfmwEy",
    alt: "Carpintero aplicando aceite natural sobre una superficie de caoba.",
  },

  woodStack: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC50EkfEHNslyjGQhED7gYiZlJaUqeT1ik1ZVDO94Zi7tiI8xgbyfNI6jW6xJCWDC8yUefHBLzB8deBN7HODsAtN5vIdE1-GP6SP9AvOTKhEG5vjv40Zad6bbkHI5_yTcoNQCdF8xIlXaCpF_3f-Pc5CHiwwCzJKcXdq_zBUOgVqd1_aGN46duJSsvNEkCohQD5AuCqWQfjS3f0rC9N3xDREV30Q2aEd6JkmbIi1mhd5pvg7PWJVBm2rApTCxSAgPgRqVfJxIbr2rEr",
    alt: "Pilas de madera dura cubana preparadas para secado natural.",
  },
} satisfies Record<string, WorkshopImageData>;

export const workshopStory =
  "De los mejores tablones procuramos con diligencia obtener las mejores tablas para luego armar las piezas correspondientes que llevaran un buen acabado.";

export const workshopCarousel: WorkshopSlide[] = [
  {
    id: "tablon",
    step: "01",
    image: plankCarryImage,
    alt: "Carpintero con camisa azul cargando un tablón largo de madera a través del taller, con aserrín en el suelo.",
    caption: "Selección del tablón",
  },
  {
    id: "cara",
    step: "02",
    image: jointerFaceImage,
    alt: "Carpintero guiando un tablón largo por la planadora de banco bajo el techo de zinc del taller.",
    caption: "Primera pasada en la planadora",
  },
  {
    id: "canto",
    step: "03",
    image: jointerEdgeImage,
    alt: "Carpintero con gorra y mascarilla pasando una tabla por la planadora para dejar el canto recto.",
    caption: "Canto recto, cara pareja",
  },
  {
    id: "enderezado",
    step: "04",
    image: straightenImage,
    alt: "Carpintero con gafas de protección y mascarilla enderezando un tablón largo en la máquina del taller.",
    caption: "Enderezado del tablón",
  },
  {
    id: "tablas",
    step: "05",
    image: boardsReadyImage,
    alt: "Vista del taller con las tablas ya alisadas apiladas sobre el suelo de aserrín, listas para el despiece.",
    caption: "Tablas listas para el despiece",
  },
  {
    id: "acabado",
    step: "06",
    image: doorFinishImage,
    alt: "Carpintero con camisa turquesa perfilando con una fresadora el marco de una puerta de madera.",
    caption: "Perfilado y acabado de la puerta",
  },
];

export const workshopValues: WorkshopValue[] = [
  {
    icon: "forest",
    title: "Aroma a Cedro",
    description:
      "No solo entregamos muebles, entregamos la atmósfera de nuestro taller. El olor característico de la madera recién trabajada habita en cada pieza.",
    variant: "light",
  },
  {
    icon: "precision_manufacturing",
    title: "Hecho a Mano",
    description:
      "Sin líneas de montaje. Cada ensamble es una unión única, ajustada milimétricamente por el ojo humano y la paciencia del artesano.",
    variant: "dark",
    badge: "Artesanía Pura",
  },
  {
    icon: "lightbulb",
    title: "Inventiva Cubana",
    description:
      "Donde otros ven carencia, nosotros vemos oportunidad. Nuestra creatividad se nutre de la necesidad de reinventar soluciones.",
    variant: "light",
  },
];

export const workshopStats: WorkshopStatData[] = [
  {
    value: "100%",
    label: "Madera Sólida",
  },
  {
    value: "∞",
    label: "Durabilidad",
  },
];
