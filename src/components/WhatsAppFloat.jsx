import { BUSINESS } from "../config.js";
import { buildWhatsAppUrl } from "../utils/whatsapp.js";
import { WhatsApp } from "./icons.jsx";

export default function WhatsAppFloat() {
  const whatsappUrl = buildWhatsAppUrl(
    BUSINESS.whatsappNumber,
    `Hola, quisiera información sobre sus servicios en ${BUSINESS.name}.`
  );

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chatear por WhatsApp"
      className="fixed right-6 bottom-6 z-50 flex items-center gap-2 border-2 border-ink bg-signal-600 py-3 pr-4 pl-3.5 font-mono text-xs font-semibold tracking-widest text-paper uppercase shadow-lg shadow-black/25 transition-colors duration-150 hover:bg-signal-700"
    >
      <WhatsApp className="h-4 w-4" />
      Escríbenos
    </a>
  );
}
