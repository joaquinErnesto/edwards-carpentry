import almendroImage from "../assets/images/wood/almendro.jpg";
import dormilonImage from "../assets/images/wood/dormilon.jpg";
import raisuImage from "../assets/images/wood/raisu.jpg";
import najesiImage from "../assets/images/wood/najesi.jpg";

export interface MaterialSpec {
  label: string;
  value: string;
}

export interface Material {
  id: string;
  name: string;
  tone: string;
  description: string;
  image: string;
  alt: string;
  traits: string[];
  botanical?: string;
  notes: string[];
  specs: MaterialSpec[];
}

export const materials: Material[] = [
  {
    id: "almendro",
    name: "Almendro",
    tone: "Clara y dorada",
    description:
      "La más luminosa de las cuatro. Su albura tira a crema y el duramen vira a miel tostada justo en la línea de la tabla. Veta fina y pareja: la madera que mejor acepta tinte, barniz y luz natural.",
    image: almendroImage,
    alt:
      "Tabla de almendro apilada sobre una repisa del taller: cara de albura crema que vira a dorado en el canto.",
    traits: ["Veta fina", "Acepta tinte", "Tono claro"],
    notes: [
      "Es la tabla que menos nos cuesta al momento de curarla: se seca parejo y no se abre en las esquinas. Por eso la pedimos cuando el cliente quiere un mueble pintado o lacado, porque el tinte entra parejo y no se ven las juntas.",
      "El detalle de la foto es la línea que aparece entre la cara clara y el canto dorado: es la transición de albura a duramen. Cuando elegimos piezas para puerta o frente buscamos precisamente esa línea, porque es la que garantiza el color de la pieza terminada.",
      "No es la madera más dura que tenemos. Sirve muy bien para muebles de interior; para pisos o terrazas con exposición constante al sol preferimos el dormilón.",
    ],
    specs: [
      { label: "Albura", value: "Crema a miel" },
      { label: "Veta", value: "Fina y recta" },
      { label: "Acabado", value: "Barniz, tinte o laca" },
    ],
  },
  {
    id: "dormilon",
    name: "Dormilón",
    tone: "Contraste alto",
    description:
      "El contraste más fuerte de la pila: cara casi blanca contra un duramen rojo profundo en la testa. Se nota la vena oscura del alma y hasta el cuarteo propio de una tabla secada al aire. Densa y muy estable.",
    image: dormilonImage,
    alt:
      "Tabla de dormilón con la testa al frente: albura pálida y duramen rojizo oscuro marcado por grietas de secado.",
    traits: ["Muy densa", "Contraste marcado", "Ideal para marcos"],
    botanical: "Khaya spp. (Meliaceae)",
    notes: [
      "El duramen rojizo que se ve en la testa de la foto es la parte que más nos gusta para trabajar: es dura, se mecaniza limpia y no se abre con los cambios de humedad. Es la madera que usamos en marcos de puerta y en los bastidores, porque ahí la pieza se deforma o no se deforma, y eso decide si la puerta cierra o no.",
      "El cuarteo fino que se aprecia en la testa no es un defecto: es la tabla hablando. Cuando una pieza de dormilón muestra esas grietasitas de secado significa que la madera ya liberó la tensión interna y se va a quedar quieta. Preferimos eso a una tabla totalmente lisa que después se mueve en obra.",
      "Un detalle de taller: el contraste entre la albura casi blanca y el duramen rojo es tan marcado que conviene decidir pronto dónde va cada parte. Nosotros lo hacemos antes de cortar, para que ninguna pieza de la puerta quede con el color partido a media altura.",
    ],
    specs: [
      { label: "Albura", value: "Blanca a crema" },
      { label: "Duramen", value: "Rojo oscuro" },
      { label: "Comportamiento", value: "Estable en obra" },
    ],
  },
  {
    id: "raisu",
    name: "Raisú",
    tone: "Cálida y profunda",
    description:
      "Tono medio cálido, ni tan claro como el almendro ni tan oscuro como el dormilón. Es la que aguanta mejor el uso diario sin marcarse: la pedimos para mesas de centro, escritorios y muebles que se tocan todos los días.",
    image: raisuImage,
    alt:
      "Tabla de raisú con duramen rojizo y un canto de albura pálida, apoyada en el banco del taller.",
    traits: ["Uso diario", "Tono medio", "Muy estable"],
    notes: [
      "Es la madera de la casa. La que aparece en mesitas de centro, escritorios y bases de meseta porque aguanta el uso de todos los días sin marcarse: el golpe, la taza caliente, el sol de la mañana.",
      "En la foto se ve el duramen rojizo junto a un canto de albura pálida. Ese contraste es más suave que en el dormilón, y por eso la pieza terminada se ve más continua: sirve para muebles grandes donde hay que evitar que cada tabla parezca un tono distinto.",
      "Trabajo de taller con ella: se deja cepillar bien porque es dura pero no tenaz, así que el canteado sale limpio y la moldura no se resquebraja. Es la que más le recomendamos al cliente que no quiere decidir por color, sino porque la pieza se use todos los días.",
    ],
    specs: [
      { label: "Tono", value: "Marrón medio cálido" },
      { label: "Veta", value: "Marcada pero pareja" },
      { label: "Uso habitual", value: "Interior, alto tráfico" },
    ],
  },
  {
    id: "najesi",
    name: "Najesí",
    tone: "Sutil y pareja",
    description:
      "La más discreta de las cuatro: color uniforme, rosado muy pálido, sin figuras marcadas. Cuando lo que quieres es que la forma hable y no la veta, el najesí es la respuesta. Se trabaja fácil y los canteados salen limpios.",
    image: najesiImage,
    alt:
      "Tabla de najesí de color rosado pálido y uniforme, apoyada sobre el banco junto a otras maderas del almacén.",
    traits: ["Color uniforme", "Fácil de trabajar", "Sin figuras"],
    notes: [
      "Es la discreta de la pila. Donde el almendro tiene una línea dorada y el dormilón tiene un rojo profundo, el najesí es parejo: mismo color de arriba abajo. Cuando el cliente quiere que la forma del mueble sea lo que se vea, esta es la madera.",
      "El rosado pálido de la foto se vuelve más neutro con el barniz y con los años. No es una madera que envejezca dramática; es de las que envejecen bien, perdiendo apenas brillo pero sin oscurecerse.",
      "Para el taller es cómoda: se mecaniza rápido y no tiene nudos cerrados. El canteado sale limpio, y eso importa cuando el frente es grande y las juntas tienen que quedar invisibles.",
    ],
    specs: [
      { label: "Color", value: "Rosado pálido" },
      { label: "Figura", value: "Sin veta marcada" },
      { label: "Mecanizado", value: "Fácil, canteado limpio" },
    ],
  },
];