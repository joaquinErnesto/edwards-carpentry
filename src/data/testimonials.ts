export interface Testimonial {
  id: string;
  quote: string;
  customer: string;
  location: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "beatriz-valdes",
    quote:
      "Le pedí un juego de comedor de caoba y lo que me entregó fue una obra de arte. Se nota que ese hombre tiene magia en las manos.",
    customer: "Dra. Beatriz Valdés",
    location: "Baracoa, Guantánamo",
    rating: 5,
  },
  {
    id: "ricardo-mesa",
    quote:
      "Reparó todas las ventanas de mi casa colonial. Ni un crujido, ni una luz. Un trabajo de los que ya no se ven hoy en día.",
    customer: "Ing. Ricardo Mesa",
    location: "Imías, Guantánamo",
    rating: 5,
  },
  {
    id: "alejandro-g",
    quote:
      "Edward es serio y cumplidor. Me hizo una barra para el negocio de cedro que es la envidia de toda la cuadra.",
    customer: "Alejandro G.",
    location: "Maisí, Guantánamo",
    rating: 5,
  },
];