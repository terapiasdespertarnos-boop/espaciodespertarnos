/**
 * Datos de contacto de Espacio Despertar-Nos.
 * Sustituye estos valores por los reales cuando estén disponibles.
 */
export const site = {
  name: "Espacio Despertar-Nos",
  tagline: "Un lugar para parar, mirar, soltar y volver a ti.",
  // Número en formato internacional, sin espacios ni signos.
  whatsappNumber: "34660257072",
  email: "terapias.despertar.nos@gmail.com",
  instagram: "https://instagram.com/espacio.despertar_nos",
  facebook: "https://facebook.com/espacio.despertar_nos",
};

export const whatsappUrl = (
  message = "Hola Rosa, me gustaría contarte qué estoy viviendo.",
) => `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const navItems = [
  { to: "/", label: "Inicio" },
  { to: "/sobre-mi", label: "Sobre mí" },
  { to: "/como-puedo-acompanarte", label: "Cómo puedo acompañarte" },
  { to: "/herramientas", label: "Herramientas" },
  { to: "/limpiezas-energeticas", label: "Limpiezas energéticas" },
  { to: "/mediumnidad", label: "Mediumnidad" },
  { to: "/yoga", label: "Yoga" },
  { to: "/retiros", label: "Retiros" },
  { to: "/blog", label: "Blog" },
  { to: "/contacto", label: "Contacto" },
] as const;
