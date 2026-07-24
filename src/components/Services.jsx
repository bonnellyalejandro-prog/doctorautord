import { SERVICES } from "../data/services.js";
import ServiceCard from "./ServiceCard.jsx";

export default function Services() {
  return (
    <section id="servicios" className="bg-paper-200 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 border-b-2 border-ink pb-6 md:flex-row md:items-end">
          <div>
            <span className="eyebrow">Catálogo N.º 001–008</span>
            <h2 className="mt-2 font-display text-3xl font-semibold md:text-4xl">Desglose por especialidad</h2>
          </div>
          <p className="max-w-xs font-mono text-xs text-steel-gray-500 uppercase">
            Toca cada ticket para ver el detalle y cotizar por WhatsApp.
          </p>
        </div>

        <div className="grid items-start gap-5 md:grid-cols-2">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
