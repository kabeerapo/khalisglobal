import { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";

const DESK = { lat: 24.4338, lng: 54.4364 };

export function DeskMap({
  mapsHref,
  whatsapp,
}: {
  mapsHref: string;
  whatsapp: string;
}) {
  const el = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const node = el.current;
    if (!node) return;
    let map: import("leaflet").Map | undefined;
    let cancelled = false;

    const enableWheel = () => map?.scrollWheelZoom.enable();
    const disableWheel = () => map?.scrollWheelZoom.disable();

    void import("leaflet").then(({ default: L }) => {
      if (cancelled || !el.current) return;

      map = L.map(el.current, {
        center: [DESK.lat, DESK.lng],
        zoom: 16,
        scrollWheelZoom: false,
        attributionControl: true,
      });

      L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
        subdomains: "abcd",
        maxZoom: 19,
      }).addTo(map);

      const pin = L.divIcon({
        className: "desk-pin",
        html: '<span class="desk-pin-mark"></span><span class="desk-pin-pulse"></span>',
        iconSize: [32, 42],
        iconAnchor: [16, 40],
        popupAnchor: [0, -36],
      });

      L.marker([DESK.lat, DESK.lng], { icon: pin })
        .addTo(map)
        .bindPopup(
          `<div class="desk-popup">
            <strong>Khalis Typing Center</strong>
            <p>Muroor 31 signal — Zafaranah st — Al Sa&lsquo;Adah</p>
            <a href="${mapsHref}" target="_blank" rel="noopener noreferrer">Directions</a>
            <a href="${whatsapp}" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </div>`,
          { className: "desk-popup-wrap", maxWidth: 240 },
        )
        .openPopup();

      node.addEventListener("click", enableWheel);
      node.addEventListener("mouseleave", disableWheel);
      requestAnimationFrame(() => map?.invalidateSize());
      setReady(true);
    });

    return () => {
      cancelled = true;
      node.removeEventListener("click", enableWheel);
      node.removeEventListener("mouseleave", disableWheel);
      map?.remove();
    };
  }, [mapsHref, whatsapp]);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-gold/25">
      <div
        ref={el}
        className="h-72 w-full sm:h-96"
        role="application"
        aria-label="Interactive map of Khalis Typing Center on Muroor Road, Abu Dhabi"
      />
      {!ready ? (
        <div className="absolute inset-0 grid place-items-center bg-ink text-sm text-paper/60">
          Loading map
        </div>
      ) : null}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 gold-hairline" />
      <a
        href={mapsHref}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute right-3 bottom-3 z-[400] inline-flex min-h-11 items-center rounded-full bg-palm px-4 text-sm font-semibold text-paper shadow-lg transition-transform duration-150 ease-out hover:bg-palm/90 active:scale-95"
      >
        Get directions
      </a>
    </div>
  );
}
