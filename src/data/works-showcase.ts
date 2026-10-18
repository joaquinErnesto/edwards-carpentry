import {
  catalogCategories,
  type CatalogCategory,
} from "./catalog";
import {
  catalogWorksByCategory,
  type CatalogWork,
} from "./catalog-works";

export interface ShowcasePhoto {
  src: string;
  alt: string;
  caption: string;
}

export interface ShowcaseDetail {
  label: string;
  icon: string;
}

export interface ShowcaseWork {
  id: string;
  categoryId: string;
  categoryName: string;
  folder: string;
  eyebrow: string;
  icon: string;
  title: string;
  story: string;
  photoCount: number;
  photos: ShowcasePhoto[];
  details: ShowcaseDetail[];
  cover: string;
  allImages: string[];
}

interface ShowcaseSeed {
  categoryId: string;
  eyebrow: string;
  workId: string;
  title: string;
  story: string;
  details: ShowcaseDetail[];
  photos: Array<{
    index: number;
    caption: string;
  }>;
}

const seeds: ShowcaseSeed[] = [
  {
    categoryId: "closets",
    eyebrow: "Closets de Dormitorio",
    workId: "closets-obra-25",
    title: "Armario de Dos Cuerpos con Cornisa",
    story:
      "Un armario completo de madera maciza, de pie sobre patas cortas para que la limpieza del suelo no tenga que hacer contorsiones. Arriba, cuatro puertas con paneles rehundidos y moldura interior; abajo, seis cajones flanqueando un gabinete central. Las bisagras son de latón y los tiradores están tallados en la propia madera, no comprados.",
    details: [
      {
        label: "6 cajones + 2 puertas centrales",
        icon: "inventory_2",
      },
      {
        label: "Patas de 12 cm para barrer debajo",
        icon: "vertical_align_bottom",
      },
      {
        label: "Coronación con moldura superior",
        icon: "architecture",
      },
    ],
    photos: [
      {
        index: 5,
        caption: "Frente completo",
      },
      {
        index: 4,
        caption: "Puerta, tirador y bisagra de latón",
      },
      {
        index: 6,
        caption: "Cuerpo y costados vistos de perfil",
      },
    ],
  },
  {
    categoryId: "bastidores",
    eyebrow: "Bastidores",
    workId: "bastidores-obra-34",
    title: "Base de Cama con Patas Talladas",
    story:
      "Bastidor de somier completo en madera maciza: tabla de tablas sobre dos largueros centrales de apoyo y una cariatura French en cada esquina. La madera del marco va teñida y barnizada caoba, mientras que las tablas se dejan en su color natural para que el conjunto no pierda luz.",
    details: [
      {
        label: "Tablas de apoyo sobre largueros centrales",
        icon: "layers",
      },
      {
        label: "Patas talladas estilo francés",
        icon: "chair",
      },
      {
        label: "Ensamble de caja y espiga visible",
        icon: "join_inner",
      },
    ],
    photos: [
      {
        index: 3,
        caption: "Bastidor terminado, vista completa",
      },
      {
        index: 4,
        caption: "Larguero, perfil moldurado y pata tallada",
      },
      {
        index: 1,
        caption: "Dos bases una sobre otra en el banco",
      },
    ],
  },
  {
    categoryId: "juegos-comedor",
    eyebrow: "Juegos de Sillas y Mesas",
    workId: "mesas-y-sillas-obra-5",
    title: "Conjunto de Butacas y Banquitos",
    story:
      "Un juego de asientos en madera maciza con respaldo y asiento de tablas. Las butacas llevan reposabrazos moldurados y los banquitos resuelven los metros sueltos de la sala con la misma madera y el mismo barniz, para que el conjunto se lea como una sola pieza.",
    details: [
      {
        label: "Respaldo y asiento de tablas",
        icon: "chair_alt",
      },
      {
        label: "Reposabrazos moldurados a inglete",
        icon: "join_inner",
      },
      {
        label: "Banquitos a juego con las butacas",
        icon: "table_restaurant",
      },
    ],
    photos: [
      {
        index: 9,
        caption: "El conjunto completo",
      },
      {
        index: 11,
        caption: "Butacas en escorzo: tablas y uniones",
      },
      {
        index: 8,
        caption: "Ensamble visto desde arriba",
      },
    ],
  },
  {
    categoryId: "bajo-meseta",
    eyebrow: "Mueblería Bajo-Meseta",
    workId: "muebleria-bajo-meseta-obra-7",
    title: "Gabinete Bajo con Frentes Panelados",
    story:
      "Bloque bajo de cocina con cuatro puertas de moldura saliente y dos cajones, todos con tiradores torneados de una sola pieza. La tapa se apoya sobre el gabinete como elemento independiente, así se puede renewar sin desmontar los frentes.",
    details: [
      {
        label: "Tiradores torneados de una pieza",
        icon: "hardware",
      },
      {
        label: "Tapa independiente y reemplazable",
        icon: "countertops",
      },
      {
        label: "Frentes con moldura saliente",
        icon: "border_all",
      },
    ],
    photos: [
      {
        index: 5,
        caption: "Frente completo del gabinete",
      },
      {
        index: 6,
        caption: "Cuerpo visto en escorzo",
      },
      {
        index: 3,
        caption: "Molduras y tiradores en detalle",
      },
    ],
  },
  {
    categoryId: "sobre-meseta",
    eyebrow: "Mueblería Sobre-Meseta",
    workId: "muebleria-sobre-meseta-obra-7",
    title: "Alacena de Cocina con Nichos Laterales",
    story:
      "Aparador aéreo de cuatro módulos: dos puertas centrales con moldura y dos nichos abiertos a los lados, uno de ellos con estante. Va terminado en barniz cálido y se apoya sobre la meseta, dejando el espacio de atrás libre para el mantenimiento.",
    details: [
      {
        label: "2 puertas + 2 nichos abiertos",
        icon: "shelves",
      },
      {
        label: "Estante horizontal en el nicho izquierdo",
        icon: "view_column",
      },
      {
        label: "Montado sobre la encimera",
        icon: "kitchen",
      },
    ],
    photos: [
      {
        index: 4,
        caption: "Alacena instalada sobre la meseta",
      },
      {
        index: 1,
        caption: "Módulo en el taller, sin barnizar",
      },
      {
        index: 3,
        caption: "Vista de conjunto desde el lateral",
      },
    ],
  },
  {
    categoryId: "multi-mueble",
    eyebrow: "Multi-Mueble",
    workId: "multi-muebles-obra-5",
    title: "Consola Escalonada de Tablas",
    story:
      "Unidad de exposición con dos costados macizos de perfil curvo, ensanchados en la base y estrechados hacia arriba. Entre ellos se apilan cinco tablas horizontales de largo decreciente, de modo que cada nivel deja libre la vista del anterior.",
    details: [
      {
        label: "2 costados macizos de perfil curvo",
        icon: "filter_vintage",
      },
      {
        label: "Tablas de largo decreciente",
        icon: "stairs",
      },
      {
        label: "Tono claro natural, veta a la vista",
        icon: "grain",
      },
    ],
    photos: [
      {
        index: 2,
        caption: "La consola completa con sus niveles",
      },
      {
        index: 0,
        caption: "Costados curvos, vista de alzado",
      },
      {
        index: 1,
        caption: "Perfil curvo y escalonado de las tablas",
      },
    ],
  },
  {
    categoryId: "gaveteros",
    eyebrow: "Gaveteros",
    workId: "gaveteros-obra-4",
    title: "Cómoda de Tres Cajones con Puertas",
    story:
      "Cómoda de tres cajones con puerta inferior, tiradores tallados a cuchillo y patas de madera maciza. Los cajones montan sobre guías de madera encerada con topes de cuero, así que salen completos y en silencio, sin que nada roce.",
    details: [
      {
        label: "Guías de madera con topes de cuero",
        icon: "roller_skating",
      },
      {
        label: "Tiradores tallados a cuchillo",
        icon: "content_cut",
      },
      {
        label: "Organizador interior de 4 divisiones",
        icon: "grid_view",
      },
    ],
    photos: [
      {
        index: 6,
        caption: "Puertas abiertas y tiradores en detalle",
      },
      {
        index: 1,
        caption: "Frente completo, cajones cerrados",
      },
      {
        index: 4,
        caption: "Cajón organisational abierto",
      },
    ],
  },
  {
    categoryId: "puertas",
    eyebrow: "Puertas",
    workId: "puertas-obra-17",
    title: "Puerta Interior de Siete Paneles",
    story:
      "Hoja alta y estrecha de siete paneles rehundidos: tres arriba, un travesaño largo central y tres abajo. Va montada sobre marco fijo de la misma madera y termina con manilla de aluminio y bocallave. Es de las pocas piezas de la casa donde el marco también se fabrica en el taller.",
    details: [
      {
        label: "7 paneles rehundidos con bisel",
        icon: "border_all",
      },
      {
        label: "Marco fijo fabricado en el taller",
        icon: "door_front",
      },
      {
        label: "Manilla de aluminio y bocallave",
        icon: "lock_open",
      },
    ],
    photos: [
      {
        index: 7,
        caption: "Puerta montada en su marco",
      },
      {
        index: 4,
        caption: "Distribución de los siete paneles",
      },
      {
        index: 9,
        caption: "La hoja instalada en la pared",
      },
    ],
  },
  {
    categoryId: "ventanas",
    eyebrow: "Ventanas",
    workId: "ventanas-obra-20",
    title: "Ventanal de Celosía con Tres Vidrios",
    story:
      "Conjunto de ventana con montante central que divide la luz en tres acosteros de vidrio texturado, y dos secciones laterales con celosía de lamas horizontales. La celosía se inclina para dejar pasar la brisa y Retener la lluvia, y todo el despiece va en madera, sin un solo perfil metálico.",
    details: [
      {
        label: "Celosía de lamas regulables",
        icon: "blinds",
      },
      {
        label: "3 acristalados de vidrio texturado",
        icon: "window",
      },
      {
        label: "Todo el despiece en madera",
        icon: "handyman",
      },
    ],
    photos: [
      {
        index: 1,
        caption: "Frente completo, celosías cerradas",
      },
      {
        index: 4,
        caption: "Celosías abiertas, paso de luz",
      },
      {
        index: 3,
        caption: "Perfil de las lamas en escorzo",
      },
    ],
  },
];

const categoryById = new Map<string, CatalogCategory>(
  catalogCategories.map((category) => [
    category.id,
    category,
  ]),
);

const buildWork = (
  seed: ShowcaseSeed,
): ShowcaseWork | null => {
  const works: CatalogWork[] =
    catalogWorksByCategory[seed.categoryId] ?? [];

  const work = works.find(
    (item) => item.id === seed.workId,
  );

  if (!work || work.images.length === 0) {
    return null;
  }

  const categoryName =
    categoryById.get(seed.categoryId)?.name ??
    seed.categoryId;

  const photos = seed.photos
    .map((photo) => {
      const src = work.images[photo.index];

      if (!src) {
        return null;
      }

      return {
        src,
        caption: photo.caption,
        alt: `${seed.title}, ${categoryName.toLowerCase()} fabricado en el taller de Edward's Carpentry. ${photo.caption}.`,
      };
    })
    .filter(
      (photo): photo is ShowcasePhoto => photo !== null,
    );

  if (photos.length === 0) {
    return null;
  }

  return {
    id: work.id,
    categoryId: seed.categoryId,
    categoryName,
    folder: work.folder,
    eyebrow: seed.eyebrow,
    icon:
      categoryById.get(seed.categoryId)?.icon ??
      "handyman",
    title: seed.title,
    story: seed.story,
    photoCount: work.photoCount,
    photos,
    details: seed.details,
    cover: photos[0].src,
    allImages: work.images,
  };
};

export const showcaseWorks: ShowcaseWork[] = seeds
  .map(buildWork)
  .filter(
    (work): work is ShowcaseWork => work !== null,
  );

export const showcaseTotalPhotos: number =
  showcaseWorks.reduce(
    (total, work) => total + work.photoCount,
    0,
  );