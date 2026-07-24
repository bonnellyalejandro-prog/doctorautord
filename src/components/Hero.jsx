import { BUSINESS } from "../config.js";
import { buildWhatsAppUrl } from "../utils/whatsapp.js";
import { WhatsApp, Car } from "./icons.jsx";

const STATS = [
  { value: "15+", label: "Años en el oficio" },
  { value: "08", label: "Especialidades" },
  { value: "100%", label: "Diagnóstico digital" },
  { value: "24H", label: "Respuesta WhatsApp" },
];

export default function Hero() {
  const whatsappUrl = buildWhatsAppUrl(
    BUSINESS.whatsappNumber,
    `Hola, quiero agendar una cita en ${BUSINESS.name}.`
  );

  return (
    <section id="inicio" className="blueprint-grid relative overflow-hidden bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <span className="reg-mark absolute top-6 left-6 hidden md:block" />
        <span className="reg-mark absolute top-6 right-6 hidden md:block" />

        <div className="grid gap-12 md:grid-cols-[1.15fr_0.85fr] md:items-end">
          <div>
            <div className="mb-6 flex flex-wrap gap-2">
              {["Europeos", "Híbridos", "Eléctricos"].map((tag) => (
                <span
                  key={tag}
                  className="border border-paper/25 px-2.5 py-1 font-mono text-[0.7rem] font-medium tracking-widest text-steel-500 uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="mb-6 font-display text-5xl leading-[0.98] font-semibold md:text-7xl">
              Tu carro,
              <br />
              en manos
              <br />
              <span className="text-signal-600">de mecánico.</span>
            </h1>

            <p className="mb-9 max-w-md font-sans text-base text-paper/70 normal-case">
              {BUSINESS.tagline}. Diagnóstico computarizado, técnicos certificados y una cotización clara antes de
              tocar tu vehículo. Sin adivinanzas, sin sorpresas en la factura.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <WhatsApp className="h-4 w-4" />
                Agendar por WhatsApp
              </a>
              <a href="#servicios" className="btn-outline-paper">
                Ver servicios
              </a>
            </div>
          </div>

          <div className="relative flex items-center justify-center border border-paper/15 p-10">
            <span className="absolute top-3 left-3 font-mono text-[0.65rem] tracking-widest text-paper/40 uppercase">
              Fig. 01 — Diagrama
            </span>
            <Car className="h-40 w-40 text-paper/80" />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-paper/15 pt-10 md:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <b className="block font-mono text-3xl font-semibold text-paper tabular-nums">{stat.value}</b>
              <span className="font-mono text-[0.7rem] tracking-widest text-paper/50 uppercase">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="section-divider" />
    </section>
  );
}
