import { Link } from "@tanstack/react-router";
import { navItems, site, whatsappUrl } from "@/lib/site";
import { BotanicalBranch } from "./Ornaments";

export function Footer() {
  return (
    <footer className="border-gold/30 bg-cream relative isolate overflow-hidden border-t">
      <div className="section-shell container-prose relative !py-16">
        <BotanicalBranch className="pointer-events-none absolute -top-6 right-0 hidden h-64 opacity-60 md:block" />
        <div className="max-w-3xl">
          <p className="font-display text-2xl leading-snug md:text-4xl">
            «Quizá no puedas cambiar todo lo que has vivido. Pero sí puedes empezar a relacionarte
            de otra manera con tu historia.»
          </p>
          <p className="mt-8 text-sm tracking-[0.2em] uppercase">Espacio Despertar-Nos</p>
          <p className="mt-1 text-sm text-muted-foreground">{site.tagline}</p>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex rounded-full bg-primary px-6 py-3 text-xs tracking-[0.14em] text-primary-foreground uppercase transition-opacity hover:opacity-90"
          >
            Empezar a hablar con Rosa
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

        <p className="mt-10 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Espacio Despertar-Nos · Rosa
        </p>
      </div>
    </footer>
  );
}
