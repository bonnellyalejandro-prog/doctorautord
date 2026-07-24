import { useState } from "react";
import { BUSINESS } from "../config.js";
import { buildWhatsAppUrl } from "../utils/whatsapp.js";
import { WhatsApp, SERVICE_ICONS } from "./icons.jsx";

export default function ServiceCard({ service, index }) {
  const [open, setOpen] = useState(false);
  const Icon = SERVICE_ICONS[service.icon];
  const whatsappUrl = buildWhatsAppUrl(
    BUSINESS.whatsappNumber,
    `Hola, quiero cotizar el servicio de ${service.title} en ${BUSINESS.name}.`
  );
  const code = String(index + 1).padStart(2, "0");

  return (
    <div className="self-start border-2 border-ink bg-paper transition-transform duration-150 hover:-translate-y-1">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center gap-4 px-5 py-4 text-left"
      >
        <span className="font-mono text-2xl font-semibold text-steel-gray-300 tabular-nums">{code}</span>
        <span className="flex h-11 w-11 shrink-0 items-center justify-center border-2 border-ink bg-steel-800 text-paper">
          <Icon className="h-5 w-5" />
        </span>
        <span className="flex-1">
          <h3 className="font-display text-base font-semibold tracking-wide uppercase">{service.title}</h3>
          <span className="font-mono text-xs tracking-wide text-steel-gray-500 uppercase">{service.subtitle}</span>
        </span>
        <span className="font-mono text-xl font-bold text-steel-700">{open ? "–" : "+"}</span>
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <div className="border-t-2 border-dashed border-line px-5 pt-4 pb-5">
            <ul className="mb-4 space-y-2.5">
              {service.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-steel-gray-700 normal-case">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-steel-600" />
                  {item}
                </li>
              ))}
            </ul>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="whatsapp-chip">
              <WhatsApp className="h-3.5 w-3.5" />
              Cotizar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
