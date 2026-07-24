# Doctor Auto RD

Sitio web para el taller Doctor Auto RD. React + Vite + Tailwind CSS v4.

## Uso

```bash
npm install
npm run dev       # desarrollo, http://localhost:5173
npm run build     # build de producción en dist/
npm run preview   # sirve el build de producción localmente
```

## Antes de publicar

Edita `src/config.js` con los datos reales del negocio:

- `whatsappNumber`: número en formato internacional, sin `+`. Es el único
  número que reciben todos los botones de WhatsApp del sitio.
- `phones`: arreglo de teléfonos para llamar (el primero es el que usa el
  botón "Llamar" del header). Cada uno tiene `display` (cómo se muestra) y
  `href` (para el enlace `tel:`).
- `emails`: arreglo de correos de contacto.
- `address`: dirección completa — también alimenta el mapa de la sección de
  Ubicación, así que debe ser una dirección real y específica.
- `hours`, `tagline`.

Todo el sitio (header, hero, tarjetas de servicio, formulario de contacto,
botón flotante, ubicación) lee estos valores desde un solo lugar.

## Estructura

```
src/
  config.js              datos del negocio (único lugar para editar)
  utils/whatsapp.js       helper para construir enlaces wa.me
  data/services.js        catálogo de servicios y su desglose
  components/
    icons.jsx             iconos SVG compartidos
    Logo.jsx               espacio para el logo del taller (con respaldo)
    Header.jsx
    Hero.jsx
    Services.jsx
    ServiceCard.jsx        acordeón de un servicio + botón de WhatsApp
    About.jsx
    Contact.jsx            formulario que arma el mensaje de WhatsApp
    Location.jsx            mapa de Google Maps + dirección y horario
    Footer.jsx
    WhatsAppFloat.jsx       botón flotante fijo
```

## Servicios

Para agregar o editar un servicio, modifica el arreglo `SERVICES` en
`src/data/services.js`. El icono se referencia por clave (`wrench`, `disc`,
`target`, `wind`, `zap`, `cpu`, `droplet`, `settings`) definida en
`src/components/icons.jsx` (`SERVICE_ICONS`).

## Logo de WhatsApp

Todos los botones de WhatsApp usan el componente `WhatsApp` de
`src/components/icons.jsx`. Por defecto dibuja un ícono simple, pero está
preparado para usar el logo oficial:

1. Descarga el PNG oficial de WhatsApp (por ejemplo desde los recursos de
   marca de Meta/WhatsApp Business).
2. Guárdalo como `public/whatsapp-icon.png` (ese nombre exacto).
3. Listo — no hay que tocar ningún componente. El botón detecta el archivo
   automáticamente y lo usa en lugar del ícono dibujado. Si el archivo no
   existe o falla al cargar, vuelve a mostrar el ícono por defecto.

Usa preferiblemente un PNG cuadrado con fondo transparente para que se vea
bien tanto en los botones rojos como en el azul.

## Logo del taller

El header muestra solo el logo (sin texto al lado). Usa el componente `Logo`
(`src/components/Logo.jsx`) con el mismo mecanismo: por defecto muestra una
marca genérica (llave sobre fondo azul), pero si guardas tu logo como
`public/logo.png` (mismo nombre), el header lo detecta automáticamente y lo
usa en su lugar — sin tocar código.

El espacio reservado es de 64×64px, así que un PNG cuadrado con fondo
transparente es lo que mejor va a encajar.

## Ubicación (Google Maps)

La sección "Ubicación" (`src/components/Location.jsx`) embebe un mapa de
Google usando el método clásico sin API key
(`https://www.google.com/maps?q=<dirección>&output=embed`), así que funciona
de inmediato sin configurar nada en Google Cloud.

El mapa y el botón "Cómo llegar" se generan automáticamente a partir de
`BUSINESS.address` en `src/config.js` — para que apunten al lugar correcto,
reemplaza esa dirección por la dirección real y completa del taller
(incluyendo ciudad y país para que Google la ubique sin ambigüedad).
