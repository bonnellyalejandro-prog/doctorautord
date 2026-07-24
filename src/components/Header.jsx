import { useState } from "react";
import { BUSINESS } from "../config.js";
import { buildWhatsAppUrl } from "../utils/whatsapp.js";
import { Menu, X, WhatsApp } from "./icons.jsx";
import Logo from "./Logo.jsx";

const NAV_LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const whatsappUrl = buildWhatsAppUrl(
    BUSINESS.whatsappNumber,
    `Hola, quisiera información sobre sus servicios en ${BUSINESS.name}.`
  );

  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-paper">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
        <a href="#inicio" className="flex items-center">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs font-semibold tracking-widest text-steel-gray-700 uppercase transition-colors hover:text-steel-700"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href={`tel:${BUSINESS.phones[0].href}`} className="btn-outline">
            Llamar
          </a>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <WhatsApp className="h-4 w-4" />
            WhatsApp
          </a>
        </div>

        <button
          type="button"
          className="border-2 border-ink p-1.5 text-ink md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-4 border-t-2 border-ink bg-paper px-6 py-5 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs font-semibold tracking-widest text-steel-gray-700 uppercase"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary justify-center">
            <WhatsApp className="h-4 w-4" />
            WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}
