import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  reservasMapCenter,
  reservasMapZones,
  reservasMapZoom,
  reservasWorkshop,
  reservasWorkshopDirectionsUrl,
} from "../../../data/reservas";
import styles from "./ReservasMap.module.css";

export function ReservasMap() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const map = L.map(container, {
      center: [reservasMapCenter.lat, reservasMapCenter.lng],
      zoom: reservasMapZoom,
      scrollWheelZoom: false,
      attributionControl: true,
    });

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    L.circle([reservasMapCenter.lat, reservasMapCenter.lng], {
      radius: 1400,
      color: "#5d4037",
      weight: 1,
      fillColor: "#5d4037",
      fillOpacity: 0.06,
      interactive: false,
    }).addTo(map);

    for (const zone of reservasMapZones) {
      L.marker([zone.lat, zone.lng], {
        icon: L.divIcon({
          className: styles.zonePin,
          html: `<span>${zone.name}</span>`,
          iconSize: [0, 0],
        }),
        keyboard: false,
        interactive: false,
      }).addTo(map);
    }

    L.marker([reservasWorkshop.lat, reservasWorkshop.lng], {
      icon: L.divIcon({
        className: styles.workshopPin,
        html: '<span class="glyph">location_on</span>',
        iconSize: [40, 40],
        iconAnchor: [20, 40],
        popupAnchor: [0, -36],
      }),
      title: reservasWorkshop.name,
      alt: `${reservasWorkshop.name}, ${reservasWorkshop.address}`,
      zIndexOffset: 1000,
    })
      .addTo(map)
      .bindPopup(
        `<strong>${reservasWorkshop.name}</strong><br>${reservasWorkshop.address}<br>${reservasWorkshop.locality}<br><a href="${reservasWorkshopDirectionsUrl}" target="_blank" rel="noreferrer">Abrir en Google Maps</a>`
      );

    map.fitBounds(
      L.latLngBounds(
        [
          [reservasWorkshop.lat, reservasWorkshop.lng],
          ...reservasMapZones.map(
            (zone) => [zone.lat, zone.lng] as [number, number]
          ),
        ]
      ),
      { padding: [34, 56] }
    );

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className={styles.map}>
      <div
        ref={containerRef}
        className={styles.canvas}
        role="application"
        aria-label={`Mapa del taller en ${reservasWorkshop.address}, ${reservasWorkshop.locality}`}
      />

      <a
        href={reservasWorkshopDirectionsUrl}
        target="_blank"
        rel="noreferrer"
        className={styles.directions}
      >
        Cómo llegar
      </a>
    </div>
  );
}