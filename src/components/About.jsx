import { BUSINESS } from "../config.js";
import { Car, Shield, Cpu, Zap, Clock } from "./icons.jsx";

const VALUES = [
  {
    icon: Shield,
    title: "Garantía en cada trabajo",
    description: "Respaldamos mano de obra y repuestos instalados.",
  },
  {
    icon: Cpu,
    title: "Técnicos certificados",
    description: "Formación continua en tecnologías modernas.",
  },
  {
    icon: Zap,
    title: "Diagnóstico digital",
    description: "Equipos computarizados para resultados exactos.",
  },
  {
    icon: Clock,
    title: "Entrega puntual",
    description: "Te avisamos el estatus de tu vehículo en tiempo real.",
  },
];

export default function About() {
  return (
    <section id="nosotros" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-14 md:grid-cols-[0.95fr_1.05fr] md:items-center">
          <div className="relative flex min-h-80 items-center justify-center border-2 border-ink bg-ink p-10">
            <span className="absolute top-4 left-4 font-mono text-[0.65rem] tracking-widest text-paper/40 uppercase">
              Ficha técnica
            </span>
            <Car className="h-32 w-32 text-paper/85" />
            <div className="absolute right-4 bottom-4 border-2 border-dashed border-signal-500 px-3.5 py-2 text-center leading-tight font-mono font-bold text-signal-500">
              15+
              <span className="block text-[0.6rem] tracking-widest uppercase">Años</span>
            </div>
          </div>

          <div>
            <span className="eyebrow">Sobre nosotros</span>
            <h2 className="mt-2 mb-4 font-display text-3xl font-semibold md:text-4xl">
              Respetamos tu tiempo y tu bolsillo
            </h2>
            <p className="mb-8 max-w-lg text-steel-gray-700 normal-case">
              {BUSINESS.name} es un taller especializado en vehículos europeos, híbridos y eléctricos, enfocado
              en diagnóstico preciso, transparencia en la cotización y trabajo garantizado. Antes de tocar tu
              vehículo, te explicamos qué tiene y cuánto cuesta — sin sorpresas.
            </p>

            <div className="mb-9 grid gap-x-6 gap-y-6 border-t-2 border-ink pt-6 sm:grid-cols-2">
              {VALUES.map((value, i) => (
                <div key={value.title} className="flex gap-3">
                  <span className="pt-0.5 font-mono text-xs font-semibold text-steel-gray-300 tabular-nums">
                    0{i + 1}
                  </span>
                  <div>
                    <h4 className="flex items-center gap-2 text-sm font-bold text-ink">
                      <value.icon className="h-4 w-4 text-steel-700" />
                      {value.title}
                    </h4>
                    <p className="text-sm text-steel-gray-500">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="#contacto" className="btn-outline">
              Conocer más
            </a>
          </div>
        </div>
      </div>

      <div className="section-divider mt-20" />
    </section>
  );
}
