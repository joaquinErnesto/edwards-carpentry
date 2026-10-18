import promoVideoSrc from "../assets/videos/promotional-video.mp4";
import promoPosterSrc from "../assets/images/hands-on-wood/1002363751.jpg";

export interface PromoHighlight {
  icon: string;
  title: string;
  description: string;
}

export interface PromoVideo {
  src: string;
  poster: string;
  duration: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: PromoHighlight[];
  ctaLabel: string;
  ctaHref: string;
}

export const promoVideo: PromoVideo = {
  src: promoVideoSrc,
  poster: promoPosterSrc,
  duration: "2:06",
  title: "Un Día en el Taller",
  subtitle: "Del tronco bruto a la pieza que te llevas",
  description:
    "Dos minutos por dentro de la carpintería: la máquina, el Router y el kusillo no se contentan con decir que están listos. Por eso te mostramos el banco de trabajo en movimiento, el operario que responde por cada detalle que veas después en tu casa, y el inicio de un encargo.",
  highlights: [
    {
      icon: "handyman",
      title: "Obrado a la vista",
      description:
        "Sin renders ni fotos de banco: esto es el taller grabando el día que toca.",
    },
    {
      icon: "volunteer_activism",
      title: "Criterio propio",
      description:
        "Si una madera no sirve para tu encargo, te decimos cuál sí antes de cobrar.",
    },
    {
      icon: "verified",
      title: "Control de humedad",
      description:
        "Secado lento y sellado en taller: la pieza llega estable a tu casa.",
    },
  ],
  ctaLabel: "Reservar mi pieza",
  ctaHref: "/reservas",
};