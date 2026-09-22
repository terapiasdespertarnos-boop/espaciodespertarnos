import { Link, useRouterState } from "@tanstack/react-router";
import { navItems, site, whatsappUrl } from "@/lib/site";
import { BotanicalBranch } from "./Ornaments";

const footerQuote =
  "«Quizá no puedas cambiar todo lo que has vivido. Pero sí puedes empezar a relacionarte de otra manera con tu historia.»";
const sobreMiQuote =
  "«No podemos borrar el pasado, pero sí podemos aprender a mirarlo con ternura y caminar sin su peso.»";
const acompanarteQuote =
  "«Tu historia te ha traído hasta aquí, pero tú eliges cómo quieres escribir el siguiente capítulo.»";
const herramientasQuote =
  "«Sanar no es olvidar lo que viviste, sino lograr que ya no te duela al recordarlo.»";
const lntQuote =
  "«No podemos cambiar los capítulos anteriores de tu vida, pero sí podemos empezar a escribir el presente con mucha más ternura.»";
const constelacionesQuote =
  "«Tu pasado no define hacia dónde vas, solo te muestra los lugares de donde hoy decides liberarte.»";

export function Footer() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const quote =
    pathname === "/sobre-mi"
      ? sobreMiQuote
      : pathname === "/como-puedo-acompanarte"
        ? acompanarteQuote
        : pathname === "/herramientas"
          ? herramientasQuote
          : pathname === "/lnt"
            ? lntQuote
            : pathname === "/constelaciones-familiares"
              ? constelacionesQuote
              : footerQuote;

  return (
    <footer className="border-gold/30 bg-cream relative isolate overflow-hidden border-t">
      <div className="section-shell container-prose relative !py-16">
        <BotanicalBranch className="pointer-events-none absolute -top-6 right-0 hidden h-64 opacity-60 md:block" />
        <div className="max-w-3xl">
          <p className="font-display text-2xl leading-snug md:text-4xl">
            {quote}
          </p>
          <p className="mt-8 text-sm tracking-[0.2em] uppercase">Espacio Despertar-Nos</p>
          <p className="mt-1 text-sm text-muted-foreground">{site.tagline}</p>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex rounded-full bg-primary px-6 py-3 text-xs tracking-[0.14em] text-primary-foreground uppercase transition-opacity hover:opacity-90"
          >
            Empezar a compartir con Rosa
          </a>
        </div>

        <div className="mt-14 grid gap-8 border-t border-border pt-10 md:grid-cols-3">
          <div>
            <p className="eyebrow">Navegación</p>
            <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="transition-colors hover:text-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Contacto</p>
            <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
              <li>
                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <a href={site.instagram} target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a href={site.facebook} target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="eyebrow">Aviso</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              El acompañamiento que ofrezco es un espacio de bienestar, autoconocimiento y
              crecimiento personal. No sustituye la atención médica ni psicológica.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Espacio Despertar-Nos · Rosa</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            <li>
              <Link to="/aviso-legal" className="transition-colors hover:text-foreground">
                Aviso legal
              </Link>
            </li>
            <li>
              <Link
                to="/politica-de-privacidad"
                className="transition-colors hover:text-foreground"
              >
                Política de privacidad
              </Link>
            </li>
            <li>
              <Link to="/politica-de-cookies" className="transition-colors hover:text-foreground">
                Política de cookies
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
