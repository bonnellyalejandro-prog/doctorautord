import { useState } from "react";
import { Wrench } from "./icons.jsx";

// Logo del taller: coloca tu propio PNG en public/logo.png (mismo nombre)
// para reemplazar la marca dibujada, sin tocar ningún componente. Si el
// archivo no existe o falla al cargar, se usa la marca por defecto.
const LOGO_SRC = `${import.meta.env.BASE_URL}logo.png`;

export default function Logo() {
  const [imageFailed, setImageFailed] = useState(false);

  if (imageFailed) {
    return (
      <span className="flex h-16 w-16 shrink-0 items-center justify-center border-2 border-ink bg-steel-800 text-paper">
        <Wrench className="h-8 w-8" />
      </span>
    );
  }

  return (
    <img
      src={LOGO_SRC}
      alt="Doctor Auto RD"
      className="h-20 w-auto shrink-0 object-contain"
      onError={() => setImageFailed(true)}
    />
  );
}
