// Datos del negocio. Edita estos valores para poner la información real del taller.
export const BUSINESS = {
  name: "Doctor Auto RD",
  tagline: "Especialistas en vehículos europeos, híbridos y eléctricos",

  // Formato internacional, sin "+" (usado en todos los botones de WhatsApp)
  whatsappNumber: "18095435268",

  // Ambos se muestran como opciones para llamar; el primero es el que usa
  // el botón "Llamar" del header.
  phones: [
    { display: "(809) 549-4691", href: "+18095494691" },
    { display: "(809) 802-7763", href: "+18098027763" },
  ],

  emails: ["info@doctorauto.com.do", "hectoririzarry@doctorauto.com.do"],

  // Se usa también para el mapa de Google en la sección de Ubicación —
  // reemplázala por la dirección real y completa del taller.
  address: "Doctor Auto SRL, Calle Olof Palme, Santo Domingo, República Dominicana",
  hours: "Lun - Sáb: 8:00 am - 6:00 pm",
};
