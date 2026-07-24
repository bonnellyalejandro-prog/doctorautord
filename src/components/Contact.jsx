import { useState } from "react";
import { BUSINESS } from "../config.js";
import { buildWhatsAppUrl } from "../utils/whatsapp.js";
import { SERVICES } from "../data/services.js";
import { MapPin, Phone, Clock, Mail, WhatsApp } from "./icons.jsx";

const INFO_ROWS = [
  { icon: MapPin, label: "Dirección", type: "text", values: [BUSINESS.address] },
  { icon: Phone, label: "Teléfono", type: "tel", values: BUSINESS.phones },
  { icon: Clock, label: "Horario", type: "text", values: [BUSINESS.hours] },
  { icon: Mail, label: "Correo", type: "mail", values: BUSINESS.emails },
];

const initialForm = { name: "", phone: "", service: SERVICES[0].title, message: "" };

const fieldClasses =
  "w-full border-0 border-b-2 border-ink bg-transparent px-0 py-2 text-sm text-ink placeholder:text-steel-gray-300 focus:border-steel-700 focus:outline-none";

export default function Contact() {
  const [form, setForm] = useState(initialForm);

  function handleChange(e) {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const text =
      `Hola, soy ${form.name} (tel: ${form.phone}).\n` +
      `Me interesa el servicio de: ${form.service}.\n` +
      (form.message ? `Detalle: ${form.message}` : "Quisiera más información.");

    window.open(buildWhatsAppUrl(BUSINESS.whatsappNumber, text), "_blank");
  }

  return (
    <section id="contacto" className="blueprint-grid bg-ink py-20 text-paper">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-14 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="eyebrow">Contáctanos</span>
            <h2 className="mt-2 mb-4 font-display text-3xl font-semibold md:text-4xl">
              Cotiza tu servicio ahora
            </h2>
            <p className="mb-9 max-w-sm text-paper/70 normal-case">
              Completa la orden y te enviamos directo a WhatsApp con todos los detalles listos para nuestro
              equipo.
            </p>

            <div className="space-y-5 border-t border-paper/15 pt-6">
              {INFO_ROWS.map((row) => (
                <div key={row.label} className="flex items-start gap-3.5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-paper/25">
                    <row.icon className="h-4 w-4 text-steel-500" />
                  </span>
                  <div>
                    <b className="block font-mono text-xs tracking-widest text-paper/50 uppercase">{row.label}</b>
                    {row.values.map((value) => {
                      if (row.type === "tel") {
                        return (
                          <a key={value.href} href={`tel:${value.href}`} className="block text-sm text-paper/90 hover:text-paper">
                            {value.display}
                          </a>
                        );
                      }
                      if (row.type === "mail") {
                        return (
                          <a key={value} href={`mailto:${value}`} className="block text-sm text-paper/90 hover:text-paper">
                            {value}
                          </a>
                        );
                      }
                      return (
                        <span key={value} className="block text-sm text-paper/90">
                          {value}
                        </span>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-2 border-t-4 border-ink border-t-steel-700 bg-paper p-8 text-ink shadow-xl shadow-black/20">
            <div className="mb-6 flex items-start justify-between border-b-2 border-dashed border-line pb-4">
              <div>
                <h3 className="font-display text-xl font-semibold uppercase">Orden de Servicio</h3>
                <p className="font-mono text-xs text-steel-gray-500 uppercase">Sin costo · Sin compromiso</p>
              </div>
              <span className="font-mono text-xs font-semibold tracking-widest text-signal-600 uppercase">
                N.º 001
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1 block font-mono text-xs tracking-widest text-steel-gray-500 uppercase">
                    Nombre
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    className={fieldClasses}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1 block font-mono text-xs tracking-widest text-steel-gray-500 uppercase">
                    Teléfono
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="809-000-0000"
                    className={fieldClasses}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="mb-1 block font-mono text-xs tracking-widest text-steel-gray-500 uppercase">
                  Servicio de interés
                </label>
                <select id="service" value={form.service} onChange={handleChange} className={fieldClasses}>
                  {SERVICES.map((service) => (
                    <option key={service.id}>{service.title}</option>
                  ))}
                  <option>Otro / No estoy seguro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-1 block font-mono text-xs tracking-widest text-steel-gray-500 uppercase">
                  Qué le pasa a tu vehículo
                </label>
                <textarea
                  id="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Marca, modelo, año y síntoma..."
                  rows={2}
                  className={`${fieldClasses} resize-y`}
                />
              </div>

              <button type="submit" className="btn-primary w-full py-3.5 text-base">
                <WhatsApp className="h-4 w-4" />
                Enviar orden por WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
