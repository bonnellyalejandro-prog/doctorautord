import { BUSINESS } from "../config.js";
import { MapPin, Clock } from "./icons.jsx";

// No requiere API key: es el embed clásico de Google Maps por dirección.
// Si cambias BUSINESS.address en config.js, el mapa se actualiza solo.
const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(BUSINESS.address)}&output=embed`;
const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(BUSINESS.address)}`;

export default function Location() {
  return (
    <section id="ubicacion" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 border-b-2 border-ink pb-6 md:flex-row md:items-end">
          <div>
            <span className="eyebrow">Ubicación</span>
            <h2 className="mt-2 font-display text-3xl font-semibold md:text-4xl">Dónde encontrarnos</h2>
          </div>
          <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="btn-outline">
            Cómo llegar
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-[1.3fr_0.7fr]">
          <div className="border-2 border-ink">
            <iframe
              title={`Ubicación de ${BUSINESS.name}`}
              src={mapEmbedSrc}
              className="h-80 w-full md:h-96"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="flex flex-col justify-center gap-6 border-2 border-ink bg-paper-200 p-8">
            <div className="flex items-start gap-3.5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-ink">
                <MapPin className="h-4 w-4 text-steel-700" />
              </span>
              <div>
                <b className="block font-mono text-xs tracking-widest text-steel-gray-500 uppercase">Dirección</b>
                <p className="text-sm text-ink">{BUSINESS.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-ink">
                <Clock className="h-4 w-4 text-steel-700" />
              </span>
              <div>
                <b className="block font-mono text-xs tracking-widest text-steel-gray-500 uppercase">Horario</b>
                <p className="text-sm text-ink">{BUSINESS.hours}</p>
              </div>
            </div>

            <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="btn-primary justify-center">
              Cómo llegar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
