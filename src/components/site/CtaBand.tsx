import { Link } from "@tanstack/react-router";
import { whatsappUrl } from "@/lib/site";
import { Section } from "./Section";

export function CtaBand({
  title = "Sé que da respeto empezar, pero créeme, dar el primer paso ya es una victoria.",
  text,
  buttonLabel = "Compartir con Rosa",
}: {
  title?: string;
  text?: string;
  buttonLabel?: string;
}) {
  return (
    <Section tone="deep">
      <div className="max-w-3xl">
        <h2 className="text-3xl leading-tight text-primary-foreground md:text-5xl">{title}</h2>
        {text ? (
          <p className="mt-6 text-base leading-relaxed text-primary-foreground/80 md:text-lg">
            {text}
          </p>
        ) : null}
        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primary-foreground px-7 py-3.5 text-xs tracking-[0.14em] text-sage-deep uppercase transition-opacity hover:opacity-90"
          >
            {buttonLabel}
          </a>
          <Link
            to="/contacto"
            className="rounded-full border border-primary-foreground/40 px-7 py-3.5 text-xs tracking-[0.14em] text-primary-foreground uppercase transition-colors hover:bg-primary-foreground/10"
          >
            Escribirme un mensaje
          </Link>
        </div>
      </div>
    </Section>
  );
}
