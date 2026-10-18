import { WHATSAPP_URL } from "../utils/whatsapp";

export interface ReservasProjectOption {
  value: string;
  label: string;
}

export interface ReservasContactItemData {
  icon: string;
  title: string;
  content: string;
  secondaryContent?: string;
}

export const reservasProjectOptions: ReservasProjectOption[] = [
  {
    value: "furniture",
    label: "Muebles a Medida",
  },
  {
    value: "restoration",
    label: "Restauración de Antigüedades",
  },
  {
    value: "architectural",
    label: "Carpintería Arquitectónica",
  },
  {
    value: "doors",
    label: "Puertas y Ventanas",
  },
  {
    value: "kitchen",
    label: "Mueblería de Cocina",
  },
  {
    value: "closets",
    label: "Closets y Armarios",
  },
  {
    value: "beds",
    label: "Camas, Bastidores y Cunas",
  },
  {
    value: "dining",
    label: "Mesas, Sillas y Comedores",
  },
  {
    value: "desks",
    label: "Escritorios y Oficinas",
  },
  {
    value: "coffee-tables",
    label: "Mesas de Centro y Mesitas",
  },
  {
    value: "seating",
    label: "Bancos, Balances y Asientos",
  },
  {
    value: "storage",
    label: "Gaveteros, Cómodas y Zapateras",
  },
  {
    value: "stairs",
    label: "Escaleras y Barandales",
  },
  {
    value: "flooring",
    label: "Instalación de Pisos",
  },
  {
    value: "cladding",
    label: "Revestimientos y Forrado",
  },
  {
    value: "ceilings",
    label: "Techos, Pérgolas y Terrazas",
  },
  {
    value: "garage",
    label: "Creación de Garajes",
  },
  {
    value: "decoratives",
    label: "Biombos y Decoradores",
  },
  {
    value: "bookshelves",
    label: "Libreros y Entretenimiento",
  },
  {
    value: "frames",
    label: "Marcos y Molduras",
  },
  {
    value: "outdoor",
    label: "Puentes y Pasarelas de Jardín",
  },
  {
    value: "business",
    label: "Muebles para Negocios",
  },
  {
    value: "repair",
    label: "Reparación y Ajustes de Muebles",
  },
  {
    value: "other",
    label: "Otro Encargo Especial",
  },
];

export const reservasContactItems: ReservasContactItemData[] = [
  {
    icon: "location_on",
    title: "EL TALLER",
    content: "Calle Ana Hinojosa, La Playa",
    secondaryContent: "Baracoa, Guantánamo, Cuba",
  },
  {
    icon: "schedule",
    title: "HORARIO",
    content: "Todos los días, 24 horas (24/7)",
  },
];

export const reservasWhatsappUrl = WHATSAPP_URL;

export interface ReservasMapPoint {
  lat: number;
  lng: number;
}

export interface ReservasMapZone extends ReservasMapPoint {
  name: string;
}

/**
 * Mapa del municipio de Baracoa, provincia de Guantánamo.
 * Coordenadas tomadas de OpenStreetMap (ODbL).
 */
export const reservasMapCenter: ReservasMapPoint = {
  lat: 20.35,
  lng: -74.506,
};

export const reservasMapZoom = 14;

export const reservasMapZones: ReservasMapZone[] = [
  { name: "El Turey", lat: 20.3536, lng: -74.5128 },
  { name: "La Playa", lat: 20.3493, lng: -74.5062 },
  { name: "La Punta", lat: 20.3518, lng: -74.499 },
  { name: "La Asunción", lat: 20.3466, lng: -74.4951 },
];

/**
 * Ubicación del taller: Calle Ana Hinojosa, zona La Playa.
 *
 * IMPORTANTE: `lat`/`lng` están marcados como aproximados porque la calle
 * "Ana Hinojosa" no figura en OpenStreetMap ni en los datos de latobufación.
 * Reemplazar por las coordenadas exactas cuando estén disponibles.
 */
export const reservasWorkshop = {
  lat: 20.3485,
  lng: -74.5054,
  name: "Edward's Carpentry",
  address: "Calle Ana Hinojosa, La Playa",
  locality: "Baracoa, Guantánamo, Cuba",
  approximate: true,
};

export const reservasWorkshopDirectionsUrl =
  `https://www.google.com/maps/search/?api=1&query=${reservasWorkshop.lat},${reservasWorkshop.lng}`;