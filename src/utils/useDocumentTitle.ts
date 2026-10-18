import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_NAME = "Edward's Carpentry";

const titles: Record<string, string> = {
  "/": "Carpintería a medida en Baracoa, Cuba",
  "/catalog": "Catálogo de piezas | Catálogo",
  "/trabajos": "Nuestros trabajos | Portafolio",
  "/servicios": "Servicios de carpintería | Servicios",
  "/taller": "El taller | Sobre nosotros",
  "/reservas": "Reserva tu pieza | Reservas",
};

export function useDocumentTitle(): void {
  const { pathname } = useLocation();

  useEffect(() => {
    const suffix = titles[pathname];
    const title = suffix
      ? `${suffix} | ${SITE_NAME}`
      : SITE_NAME;

    document.title = title;
  }, [pathname]);
}