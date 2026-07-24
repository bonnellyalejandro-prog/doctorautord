import { BUSINESS } from "../config.js";
import { Wrench } from "./icons.jsx";

const FOOTER_LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#contacto", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-ink-700 pb-6 text-paper/60">
      <div className="section-divider" />
      <div className="mx-auto max-w-6xl px-6 pt-10">
        <div className="flex flex-wrap items-center justify-between gap-5 border-b border-paper/10 pb-6">
          <div className="flex items-center gap-2.5 font-display text-lg font-semibold text-paper uppercase">
            <span className="flex h-8 w-8 items-center justify-center border border-paper/25">
              <Wrench className="h-4 w-4 text-paper" />
            </span>
            {BUSINESS.name}
          </div>
          <nav className="flex flex-wrap gap-6">
            {FOOTER_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="font-mono text-xs tracking-widest uppercase hover:text-paper">
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-wrap justify-between gap-2.5 pt-5 font-mono text-xs tracking-wide uppercase">
          <span>© {new Date().getFullYear()} {BUSINESS.name}. Todos los derechos reservados.</span>
          <span>Hecho para cuidar tu vehículo.</span>
        </div>
      </div>
    </footer>
  );
}
