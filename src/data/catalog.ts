export type CatalogTag =
  | "asientos"
  | "almacenaje"
  | "arquitectura";

export interface CatalogCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  tag: CatalogTag;
  works: number;
  folder?: string;
}

export interface CategoryDetail {
  title: string;
  description: string;
}

export interface CatalogPiece {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  wood: string;
  woodBadge: string;
  photos: string;
}

export interface DetailGalleryItem {
  title: string;
  description: string;
  image: string;
  alt: string;
}

export const catalogCategories: CatalogCategory[] = [
  {
    id: "balances",
    tag: "asientos",
    name: "Balances",
    description:
      "Balancines cubanos tradicionales y de autor. Curvados al vapor, torneados precisos y rejilla vegetal tejida a mano.",
    icon: "chair",
    works: 10,
  },
  {
    id: "bancos",
    tag: "asientos",
    name: "Bancos",
    description:
      "Bancos de recibidor, jardineras y banquillos tallados en tablones macizos de roble y cedro.",
    icon: "weekend",
    works: 7,
  },
  {
    id: "bases-refrigerador",
    folder: "bases-de-refrigerador",
    tag: "almacenaje",
    name: "Bases de Refrigerador",
    description:
      "Plataformas estructuradas a prueba de humedad con gavetas auxiliares inferiores y patas aislantes.",
    icon: "kitchen",
    works: 4,
  },
  {
    id: "bastidores",
    tag: "asientos",
    name: "Bastidores",
    description:
      "Estructuras de cama y bastidores de listonería elástica con anclajes invisibles y cabeceras integradas.",
    icon: "bed",
    works: 9,
  },
  {
    id: "closets",
    tag: "almacenaje",
    name: "Closets de Dormitorio",
    description:
      "Sistemas modulares empotrados con persianas venecianas de cedro aromático que protegen la ropa.",
    icon: "door_sliding",
    works: 12,
  },
  {
    id: "comoditas-noche",
    folder: "comoditas",
    tag: "almacenaje",
    name: "Comoditas de Noche",
    description:
      "Mesillas de cabecera con encastre de cola de milano y tiradores torneados a mano.",
    icon: "bedtime",
    works: 8,
  },
  {
    id: "comoditas-pared",
    tag: "almacenaje",
    name: "Comoditas de Pared",
    description:
      "Muebles suspendidos voladizos con anclaje francés estructural, ligeros e ideales para espacios modernos.",
    icon: "shelves",
    works: 2,
  },
  {
    id: "cunas",
    tag: "asientos",
    name: "Cunas",
    description:
      "Cunas convertibles tratadas con aceites naturales no tóxicos y barandillas con distancia regulada.",
    icon: "crib",
    works: 6,
  },
  {
    id: "decoradores",
    tag: "arquitectura",
    name: "Decoradores",
    description:
      "Paneles de acento en relieve, biombos con celosías coloniales y esculturas arquitectónicas de pared.",
    icon: "palette",
    works: 11,
  },
  {
    id: "escaleras",
    tag: "arquitectura",
    name: "Escaleras",
    description:
      "Escaleras helicoidales y de tiro recto en madera dura, con pasamanos continuos y peldaños antideslizantes.",
    icon: "stairs",
    works: 5,
  },
  {
    id: "escritorios",
    tag: "asientos",
    name: "Escritorios",
    description:
      "Buroes ejecutivos y mesas de estudio ergonómicas con canaletas de cables ocultas e incrustaciones.",
    icon: "desk",
    works: 8,
  },
  {
    id: "gaveteros",
    tag: "almacenaje",
    name: "Gaveteros",
    description:
      "Cómodas de cuatro a ocho cajones con guías de madera encerada para deslizamiento suave de por vida.",
    icon: "inventory",
    works: 14,
  },
  {
    id: "juegos-comedor",
    folder: "mesas-y-sillas",
    tag: "asientos",
    name: "Juegos de Sillas y Mesas",
    description:
      "Comedores familiares con capacidad para 6 a 12 comensales, acabados a la cera virgen de abejas.",
    icon: "table_restaurant",
    works: 10,
  },
  {
    id: "marcos",
    tag: "arquitectura",
    name: "Marcos",
    description:
      "Molduras para espejos coloniales y lienzos de arte con ensamble de inglete cerrado y tallado barroco.",
    icon: "crop_original",
    works: 15,
  },
  {
    id: "mesas-centro",
    folder: "mesitas-de-centro",
    tag: "asientos",
    name: "Mesas de Centro",
    description:
      "Mesas bajas de sala con tableros de una sola veta de majagua y patas cónicas en contraste.",
    icon: "coffee",
    works: 9,
  },
  {
    id: "bajo-meseta",
    folder: "muebleria-bajo-meseta",
    tag: "almacenaje",
    name: "Mueblería Bajo-Meseta",
    description:
      "Gabinetes de cocina impermeabilizados con resinas naturales, resistentes al calor y salitre.",
    icon: "countertops",
    works: 8,
  },
  {
    id: "sobre-meseta",
    folder: "muebleria-sobre-meseta",
    tag: "almacenaje",
    name: "Mueblería Sobre-Meseta",
    description:
      "Aparadores aéreos con vitrinas biseladas y estantería regulable para vajillas selectas.",
    icon: "vertical_shades_closed",
    works: 7,
  },
  {
    id: "multi-mueble",
    folder: "multi-muebles",
    tag: "almacenaje",
    name: "Multi-Mueble",
    description:
      "Centros integrales de entretenimiento, libreros de gran formato y almacenamiento multifunción.",
    icon: "tv_gen",
    works: 11,
  },
  {
    id: "otros",
    tag: "arquitectura",
    name: "Otros",
    description:
      "Encargos singulares: cajas de habanos en cedro puro, atriles sacros y tallas personalizadas.",
    icon: "construction",
    works: 13,
  },
  {
    id: "puertas",
    tag: "arquitectura",
    name: "Puertas",
    description:
      "Portones señoriales de doble hoja, clavazón de forja y puertas interiores con postigos tradicionales.",
    icon: "meeting_room",
    works: 16,
  },
  {
    id: "soportes",
    tag: "arquitectura",
    name: "Soportes",
    description:
      "Ménsulas talladas, pies de gallo para vigas vistas y zapatas de refuerzo ornamental en madera curada.",
    icon: "tap_and_play",
    works: 5,
  },
  {
    id: "ventanas",
    tag: "arquitectura",
    name: "Ventanas",
    description:
      "Ventanas de celosía francesa, lucetas coloreadas y sistemas de contraventanas para ventilación cruzada.",
    icon: "window",
    works: 12,
  },
  {
    id: "zapateras",
    tag: "almacenaje",
    name: "Zapateras",
    description:
      "Zapateras ventiladas con rejilla frontal de cedro que evita condensaciones y malos olores.",
    icon: "roller_skating",
    works: 6,
  },
];

export const categoryDetails: Record<string, CategoryDetail> = {
  balances: {
    title: "Balances Tradicionales y de Autor",
    description:
      "Diseñados para el descanso cubano, torneados en caoba y cedro con tejido en pajilla o rejilla clásica. Cada balancín mantiene el centro de gravedad perfecto para un balanceo continuo sin esfuerzo.",
  },

  bancos: {
    title: "Bancos de Recibidor y Jardín",
    description:
      "Piezas robustas con tablones enteros de madera dura, tratados con aceites naturales para resistir uso continuo en interiores y galerías coloniales.",
  },

  closets: {
    title: "Closets de Dormitorio Empotrados",
    description:
      "Sistemas a medida organizados milimétricamente con madera aromática de cedro para conservar textiles y proteger del salitre y humedad.",
  },

  "mesas-centro": {
    title: "Mesas de Centro & Salón",
    description:
      "Tableros de una pieza con vetas seleccionadas de majagua y patas cónicas artesanales que elevan la estética de la sala de estar.",
  },
};

export const catalogPieces: CatalogPiece[] = [
  {
    id: "balance-colonial-de-cedro-y-rejilla",
    title: "Balance Colonial de Cedro y Rejilla",
    description:
      "Inspirado en las mansiones de Baracoa. Curvatura de patín continua al vapor y asiento encordado al método tradicional.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAGPhQ1hxqPwF8yImAjazxG-lne8u9Oqm2IeGWEYVRUs6OOFZFxnGBCasYlAPkA339HB3PQ_3aOWnGgCJzCXkbC76OJNgff0v_8jaiZcucteRp43zVWps3SsN3WxerSCm9uXlPbdfF9tl6EcuGz9jvfKkQba25yJdaNDl3ZQt2LYokxFFR3Mh59HLTY8ORkCVFa1vGgb_RJtg3L4GCna9rwMXfuvAXmkzFRe3W0F--F",
    alt:
      "Exquisite Cuban colonial rocking chair handcrafted from aged cedar wood with fine woven natural wicker cannage backrest and seat, resting in a sunlit historic courtyard with terracotta tiles, high craft finish, warm mahogany tones.",
    wood: "Cedro Real Criollo",
    woodBadge: "Cedro Real",
    photos: "4 Fotos de Taller",
  },

  {
    id: "balanc-n-abuelo-con-posa-brazos-ancho",
    title: "Balancín Abuelo con Posa-brazos Ancho",
    description:
      "Posa-brazos de 14 cm de ancho labrados para sostener una taza de café o libro, torneados de balaustre reforzado.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBS4j96mMH6S6goPgQf4qgfz1W775WRCWSelM40vpZBtjsJ0jry61Pcz_CqPPW9ji3VPDCF98O1GsXtfFyvJL6TS3fNynG7etzehN9h_wk-TCzD_rRjit_s7LxPQoxOm3yQ_xIOlsovZn7qKKrrsAUGDBNeQkx5-hCh9ASSv6Ytr1QBmFrxAZ3fI1io0-7TKsRcRqHDdz24_yJ1-8086qQOpVwykqh2ckjx3exX2oQf",
    alt:
      "Sturdy handcrafted mahogany grandfather rocking chair featuring extra wide ergonomic armrests and turned spindles, natural bees-wax satin sheen, warm workshop light hitting wood grain textures.",
    wood: "Caoba de Monte",
    woodBadge: "Caoba de Monte",
    photos: "3 Fotos de Taller",
  },

  {
    id: "balance-moderno-minimalista",
    title: "Balance Moderno Minimalista",
    description:
      "Líneas nórdicas adaptadas con la exótica veta verde-grisácea de la majagua. Uniones a inglete con pasadores vistos.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCz7axCg4G62rLVEkWiK_rS_gAOEgsNNCIOxLO5e1KsPyUPuiPcNW8KEbo3dvQ5kZwcXeNQ-Q9qsoCk5KGz3Znf-S-_b1wQlJvXN8WZLsOkUThogXv2fZKzbSJtyPCimoHuHo0NYyRvjddo9U34xVOpnZb4N8fUrmk5_9NtLxRT_8IIptHbpKP2xS0hh1xTmE_ZSrdBfPVNYwbplAKCAQ8mSWmq5_qApG2800N7AUGO",
    alt:
      "Mid-century modern minimalist rocking chair crafted in Cuban blue mahoe majagua wood showing subtle olive-green and blueish natural timber streaks, clean lines, organic sweeping curved runners.",
    wood: "Majagua Pulida",
    woodBadge: "Majagua Pulida",
    photos: "5 Fotos de Taller",
  },

  {
    id: "balanc-n-de-terraza-tropical",
    title: "Balancín de Terraza Tropical",
    description:
      "Listonería abierta que promueve la circulación de la brisa marina. Tratado con aceites de linaza y teca.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAhUCdKatmelHd9eD78UY7qkhcBWJFB1BRSzW4HxpuxrpF9DRo6wCvthWP41CjoxYeDAlA6jLoiAJfWdKA2AkvOyLtitSyuuErfKBzT05JFcGALivKeN_knWG7i4K12eq3Hyd6sFxUhQ8eN4F3JJ9OzwzpgY0YpssCUfQcnlw2tlwYyY7J8vuUshFVh5we5OuYYVzMeyfV_urdxdfb4hpXnXDN7DCpA5N8EtWBnbQv2",
    alt:
      "Tropical patio rocking chair in natural seasoned white oak with slatted ergonomic back, placed in a shaded porch filled with lush palm plants, natural outdoor woodwork photography.",
    wood: "Roble Blanco Seco",
    woodBadge: "Roble Blanco",
    photos: "3 Fotos de Taller",
  },

  {
    id: "balance-doble-de-convivencia",
    title: "Balance Doble de Convivencia",
    description:
      "Pieza monumental de dos plazas con sincronización de balanceo unificada sobre doble patín calibrado.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCpT6iLn9kXuPmfoCVxmmB7qcZbqeZEWzdrWzaZJL76ANrQnd4Nk8LGK0HpVYPprIqmj6juhouCZUqK-6tuIrdeQSv1f4lFN8vtfb2E71xra96atxAagCShZVzsXmJe6dCmdyj_sHpndSdiNEd15rHDiAGgbf3SL5s9EaHjcxNGDOz7H87Vm2ExIRkiLUP9ZupAe-_tmBjI7SXTcu5GAjs7RqMXKLIEyKdWUezQ2g8D",
    alt:
      "Wide double seater wooden rocking bench crafted in dark mahogany with twin contoured wicker backrests, resting elegantly inside a grand living room with high beamed ceilings.",
    wood: "Caoba & Cedro",
    woodBadge: "Caoba & Cedro",
    photos: "4 Fotos de Taller",
  },

  {
    id: "balance-infantil-majagua",
    title: "Balance Infantil Majagua",
    description:
      "Escala reducida para niños con esquinas suavemente biseladas para máxima seguridad y confort.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBOJO26oV3A6vBAU9B286b2-8vQAgPYW52SYuJS9sQ_trLhV8bbtK3c2TsiwT_rKwNfQmAxK73bnnXpZ6bIkRdw5azIYyn0LCXgcDZOpgFc0j_Y7D1ojd2db_v_ToJHl0kcn4_obQ9GWok3YTE0Tz5bnbhUzFKuGCTYYNi-_KDmt5CmFmP9zO1FRFYe9h1IwxPOTQDjm87zJMs69biI5lpBQ-T4rakwiB_1ANNPfiyB",
    alt:
      "Charming miniature heirloom children rocking chair crafted in light solid wood with soft rounded edges and smooth silk-like natural oil finish, carpenter workshop background.",
    wood: "Majagua Juvenil",
    woodBadge: "Majagua Juvenil",
    photos: "3 Fotos de Taller",
  },

  {
    id: "balanc-n-baracoe-o-de-espaldar-alto",
    title: "Balancín Baracoeño de Espaldar Alto",
    description:
      "Soporte cervical completo con cuero repujado y clavazón de bronce envejecido a mano.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD2tp27dcfd0EACryf7Ci6cYFymJxRyYcZ5tNtfcTuDqhnt7alZMC8xxE72FsDUfoo4OkpOmnlByRsP343RvnSJkm0VzLGNbC3yn6Ire3w1fgbrwRZeZPOyPzDe_5LO9qMcPzQ8GoyfMXXXQDL1nYlmkIALX5om7luJeVjjsDOiivndI_7dEkxV4wRxjONrtirO_8sTtTVIr6E0QfN7p6cdWfFn0iUsEo959Bds7WdH",
    alt:
      "Cuban provincial high-back rocking chair featuring natural hand-stitched tan saddle leather backrest and cedar framework, craftsmanship joinery details, warm ambient lighting.",
    wood: "Cedro & Cuero",
    woodBadge: "Cedro & Cuero",
    photos: "4 Fotos de Taller",
  },

  {
    id: "balance-escult-rico-vientre",
    title: "Balance Escultórico Vientre",
    description:
      "Pieza premiada en la Bienal de Artesanía. Talla orgánica sin uniones metálicas visibles.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDvGQhwYBEd2okU6HaqPybGbGss2FmH9vyqp74Q46tn2a3dcXcCai43az66QxTdihCH94L6J9yIHpxEPN-KnOw1OAYUc89UQJCjjKIiwijA2Is5kQSvvS5Z9O-K_Eda-BCRVbJxOF7FzLepaIglGOuwNpBoAsJvQVDFofXJRzMVjA5okTqhhA9mfqJzImMSJx381F8UO4vo-dz6YeMi4Md4SE0kT-LH1HS7R2HzCTpH",
    alt:
      "Sculptural organic wooden rocking chair hand-carved out of a massive single block of Cuban mahogany with smooth flowing ergonomic contours and floating balance arms.",
    wood: "Caoba Maciza",
    woodBadge: "Caoba Maciza",
    photos: "5 Fotos de Taller",
  },

  {
    id: "balanc-n-de-galer-a-quinta",
    title: "Balancín de Galería Quinta",
    description:
      "Modelo histórico de quintas baracoeñas con arco superior decorado con bajorrelieve floral sutil.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAm4lrsF7hY-ZR9zOrMujJ2SRCZZ548f6-2_G-7QYzxKQEDwdFxmUeEFjtJcMP9zBqHhrv0VP0IFhZ0iAdaE_7Co4QCs7gSqsgUSK8f-bOYGhW3bDkCCTUrxzFe6VS_SZiuHfEm2TLOU_e4mY9d2RD6pQlA23yPrT-OucWYmtTJCAygkVTCcPbK53rZgqGczsQ-sO-1h0Z8x4hBHkjfrNjKlbqRfxgUN6l1obToOU5l",
    alt:
      "Classic Cuban plantation rocking chair in warm polished cedar wood with natural woven cane octagonal pattern seat, sunlit patio veranda environment with tropical garden.",
    wood: "Cedro & Pajilla de Caña",
    woodBadge: "Pajilla de Caña",
    photos: "4 Fotos de Taller",
  },

  {
    id: "balance-plegable-de-hacienda",
    title: "Balance Plegable de Hacienda",
    description:
      "Sistema de pliegue con pasadores de bronce sólido para ser trasladado entre estancias o patios.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCy_xRklJ6jOZJMgW7J85YF03BLmYSFrw9AjK6pqsoN_DqKoZSViqzjjfPM1-uSsVN-x6cEoDxn1OMJJrzBLONUQ7p6vQxybgm4Lot6EbhOmWnEGIeoa0wpFQx3diHZTDu4T6ShUJIykMSvpRSqCAOaZvvWcbySLBH0Aq0ZlmobNJgZKDrbtY91MXDStRvXlWDdJ-XCMYvsOGm4R1fqRhzjtbJESdC-vlFfq_dywIwn",
    alt:
      "Unique vintage folding wooden campaign rocking chair crafted in dense hardwood with brass hinge pins and durable heavy cotton canvas seating, artisanal studio setting.",
    wood: "Acana & Cedro",
    woodBadge: "Acana & Cedro",
    photos: "3 Fotos de Taller",
  },
];

export const detailGallery: DetailGalleryItem[] = [
  {
    title: "1. Ensamble Milimétrico",
    description:
      "Sin tornillería expuesta. Caja y espiga cuñada con clavijas de madera dura.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuATd76Oda4iXuN5sQEn0sYQ2gjTX0L1P-G-LqiZ8uVoofeqPPY1cTKoLLeAJQaIMJjedlkbQZp0cN9XqnL8iDvrIbrspQukecbeLGR2t5jSPW8XdmjpY17hF0adMzowtHzomCjgRhsk5nBK4M9ocq92cc01CrzpQo_-k0LzO-oGTPjpPMKLNBo-9fCtWCz068915q62WgvcUSgspYcadI_S_9aaOJRB3Sg4k0weiOcq",
    alt:
      "Macro close-up shot of hand-cut dovetail joints and wooden dowel pin insertions on cedar chair runner, showing wood shavings and artisan hand tools.",
  },
  {
    title: "2. Tejido en Pajilla Natural",
    description:
      "Pajilla vegetal de caña tejida hebra por hebra a través de perforaciones perimetrales.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBj5ABDUylmxEFC7ojnAFhCj12-djxEHb9gQDAc0CTceAtQ6iKGtUkngS6weYDI-vVVnN_q_BXjV1XQEohynycSwAHFUE1gz5ZZ583UHeUDoE2OqpBecj2ha7WL56AXj9paXOJel47VbtldbyeCAMmVLke1CzQfW2adOjW9uQIyc3-GHFmM7GBeNv7Rmz0THQpm7e-bahvaoa7mjZiih8g7yxgkkwhmW4EicCpKECln",
    alt:
      "Extreme close up of handwoven cane webbing rattan mesh on chair backrest, intricate honeycomb pattern woven by Cuban artisan hands.",
  },
  {
    title: "3. Pulido a Muñequilla",
    description:
      "Cuatro capas de laca natural y cera virgen que resaltan el aroma y veta del cedro.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAPXDOzme9cjMSjBt8g_CZqFnVXkTMmvfZauL4fPmLZX3PUMYWyUolOqwUTIc_mtJDr619Kxh-A0TUEkMtA2JD478TuBCeD8z-R_m2jR9V-C1Rf0EgB7OB6GNO0nfJZyzAakXRJ0Ls8plSHJssShFs-PGResh9jsx20THcRTXUwjryu3IF0OC2ScHUM4ohss71DTpcKazY1mjddZWbxfyEDs20TCJctQFVY2OB--IBs",
    alt:
      "Sunlight illuminating red golden natural grain of Cuban royal cedar wood polished to a silk smooth finish with organic beeswax.",
  },
];