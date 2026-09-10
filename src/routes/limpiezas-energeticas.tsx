import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading, Quote } from "@/components/site/Section";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/limpiezas-energeticas")({
  head: () => ({
    meta: [
      { title: "Limpieza energética de personas, casas y negocios · Rosa" },
      {
        name: "description",
        content:
          "Limpiezas energéticas de personas, hogares y locales. Observo el espacio, percibo y valoro qué puede necesitarse en cada caso, con calma y respeto.",
      },
      { property: "og:title", content: "Limpiezas energéticas · Espacio Despertar-Nos" },
      {
        property: "og:description",
        content: "También hay espacios que necesitan ser renovados.",
      },
      { property: "og:url", content: "/limpiezas-energeticas" },
    ],
    links: [{ rel: "canonical", href: "/limpiezas-energeticas" }],
  }),
  component: Limpiezas,
});

const servicios: [string, string][] = [
  [
    "Limpieza energética de personas",
    "Para situaciones en las que la persona siente pesadez, agotamiento, bloqueo o necesidad de renovación energética.",
  ],
  [
    "Limpieza energética de hogares",
    "Para viviendas en las que se percibe un ambiente cargado, incómodo o extraño después de determinadas experiencias.",
  ],
  [
    "Limpieza energética de negocios y locales",
    "Para espacios de trabajo o negocios en los que se desea renovar el ambiente y comenzar una nueva etapa.",
  ],
];

function Limpiezas() {
  return (
    <>
      <Section tone="cream">
        <SectionHeading
          eyebrow="Limpiezas energéticas"
          title="También hay espacios que necesitan ser renovados."
          intro="A veces no es solo la persona: es la casa, el local o el ambiente en el que pasamos muchas horas."
        />
      </Section>

      <Section>
        <div className="grid gap-5 md:grid-cols-3">
          {servicios.map(([t, d]) => (
            <article key={t} className="soft-card p-8">
              <h2 className="text-xl leading-snug">{t}</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </article>
          ))}
        </div>

        <div className="mt-14 max-w-3xl space-y-5 leading-relaxed text-muted-foreground">
          <p className="text-foreground">
            En una limpieza energética no me limito a aplicar una técnica. Observo el espacio,
            percibo y valoro qué puede necesitarse en cada caso.
          </p>
          <p>
            Cuando percibo que hay algo más —una presencia, una energía vinculada al lugar o a la
            persona— lo acompaño desde la serenidad, sin miedo y sin dramatizar. Nunca intervengo
            si no considero que sea necesario.
          </p>
        </div>
      </Section>

      <Section tone="sand">
        <Quote>
          No se trata de tener miedo a lo que no vemos. Se trata de acompañar con respeto aquello
          que percibimos.
        </Quote>
      </Section>

      <CtaBand
        title="¿Sientes que tu casa o tu negocio necesitan renovarse?"
        text="Cuéntame qué estás percibiendo y valoramos juntas o juntos qué puede necesitarse."
        buttonLabel="Consultar una limpieza"
      />
    </>
  );
}
