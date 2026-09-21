import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/site/Section";
import { CtaBand } from "@/components/site/CtaBand";
import { posts, formatDate } from "@/lib/blog";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Volver a ti · Blog de Espacio Despertar-Nos" },
      {
        name: "description",
        content:
          "Artículos sobre patrones repetitivos, límites, cargas familiares, cansancio emocional, yoga kundalini y limpieza energética de espacios.",
      },
      { property: "og:title", content: "Volver a ti · Blog de Espacio Despertar-Nos" },
      {
        property: "og:description",
        content: "Textos sencillos sobre lo que nos pesa y lo que podemos empezar a soltar.",
      },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <>
      <Section tone="cream">
        <SectionHeading
          eyebrow="Blog"
          title="Volver a ti"
          intro="Textos escritos con calma sobre lo que veo cada semana en consulta: patrones que se repiten, cargas que no son nuestras y formas de volver a habitarnos."
        />
      </Section>

      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          {posts.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="gold-card block p-8 transition-colors hover:bg-cream"
            >
              <p className="eyebrow">
                {formatDate(p.date)} · {p.readingTime}
              </p>
              <h2 className="mt-4 text-2xl leading-snug">{p.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
              <span className="mt-6 inline-block text-[0.7rem] tracking-[0.18em] text-clay uppercase">
                Leer
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
