import { useState } from "react";

// Iconos monolínea (estilo Feather) usados en todo el sitio.
// Cada uno acepta `className` para controlar tamaño y color desde Tailwind.

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function Wrench({ className }) {
  return (
    <svg className={className} {...base}>
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

export function Disc({ className }) {
  return (
    <svg className={className} {...base}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export function Target({ className }) {
  return (
    <svg className={className} {...base}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" />
    </svg>
  );
}

export function Wind({ className }) {
  return (
    <svg className={className} {...base}>
      <path d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2" />
    </svg>
  );
}

export function Zap({ className }) {
  return (
    <svg className={className} {...base}>
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}

export function Cpu({ className }) {
  return (
    <svg className={className} {...base}>
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3" />
    </svg>
  );
}

export function Droplet({ className }) {
  return (
    <svg className={className} {...base}>
      <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
    </svg>
  );
}

export function Settings({ className }) {
  return (
    <svg className={className} {...base}>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
    </svg>
  );
}

export function Check({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

export function Chevron({ className }) {
  return (
    <svg className={className} {...base} strokeWidth={2}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function Menu({ className }) {
  return (
    <svg className={className} {...base} strokeWidth={2}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function X({ className }) {
  return (
    <svg className={className} {...base} strokeWidth={2}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function MapPin({ className }) {
  return (
    <svg className={className} {...base} strokeWidth={2}>
      <path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function Phone({ className }) {
  return (
    <svg className={className} {...base} strokeWidth={2}>
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.12.9.33 1.79.63 2.65a2 2 0 01-.45 2.11L8.09 9.68a16 16 0 006 6l1.2-1.2a2 2 0 012.11-.45c.86.3 1.75.51 2.65.63A2 2 0 0122 16.92z" />
    </svg>
  );
}

export function Clock({ className }) {
  return (
    <svg className={className} {...base} strokeWidth={2}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  );
}

export function Mail({ className }) {
  return (
    <svg className={className} {...base} strokeWidth={2}>
      <path d="M4 4h16v16H4z" />
      <path d="M22 6l-10 7L2 6" />
    </svg>
  );
}

export function Shield({ className }) {
  return (
    <svg className={className} {...base} strokeWidth={2}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

export function Car({ className }) {
  return (
    <svg className={className} {...base} strokeWidth={1.2}>
      <path d="M3 13l1.5-4.5A2 2 0 016.4 7h11.2a2 2 0 011.9 1.5L21 13" />
      <path d="M3 13h18v4a1 1 0 01-1 1h-1a1 1 0 01-1-1v-1H6v1a1 1 0 01-1 1H4a1 1 0 01-1-1z" />
      <circle cx="7.5" cy="16.5" r="1.5" />
      <circle cx="16.5" cy="16.5" r="1.5" />
    </svg>
  );
}

function WhatsAppGlyph({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <path d="M17.6 6.3A8.9 8.9 0 0012 4a9 9 0 00-7.8 13.4L3 21l3.7-1.1A9 9 0 1017.6 6.3zM12 19.5a7.4 7.4 0 01-3.8-1l-.3-.2-2.3.6.6-2.2-.2-.3A7.5 7.5 0 1112 19.5zm4.1-5.6c-.2-.1-1.3-.6-1.5-.7-.2-.1-.4-.1-.5.1s-.6.7-.7.9-.3.2-.5.1a6.1 6.1 0 01-1.8-1.1 6.8 6.8 0 01-1.2-1.5c-.1-.2 0-.4.1-.5l.3-.4c.1-.1.1-.2.2-.4a.4.4 0 000-.4c-.1-.1-.5-1.2-.7-1.7-.2-.4-.4-.4-.5-.4h-.5a.9.9 0 00-.6.3 2.7 2.7 0 00-.8 2 4.7 4.7 0 00.9 2.4 10.8 10.8 0 004.1 3.6c.6.2 1 .4 1.4.5a3.3 3.3 0 001.5.1 2.5 2.5 0 001.6-1.1 2 2 0 00.1-1.1c-.1-.1-.2-.2-.5-.3z" />
    </svg>
  );
}

// Logo oficial de WhatsApp: coloca tu propio PNG en public/whatsapp-icon.png
// (mismo nombre) para reemplazar el ícono dibujado a mano, sin tocar ningún
// componente. Si el archivo no existe, se usa el ícono dibujado como respaldo.
const WHATSAPP_LOGO_SRC = `${import.meta.env.BASE_URL}whatsapp-icon.png`;

export function WhatsApp({ className }) {
  const [imageFailed, setImageFailed] = useState(false);

  if (imageFailed) return <WhatsAppGlyph className={className} />;

  return (
    <img
      src={WHATSAPP_LOGO_SRC}
      alt="WhatsApp"
      className={`${className ?? ""} object-contain`}
      onError={() => setImageFailed(true)}
    />
  );
}

// Mapa usado por ServiceCard para resolver el icono desde los datos (services.js)
export const SERVICE_ICONS = {
  wrench: Wrench,
  disc: Disc,
  target: Target,
  wind: Wind,
  zap: Zap,
  cpu: Cpu,
  droplet: Droplet,
  settings: Settings,
};
