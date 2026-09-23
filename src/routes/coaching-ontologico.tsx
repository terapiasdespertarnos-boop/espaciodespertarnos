import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading, Quote } from "@/components/site/Section";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/coaching-ontologico")({
  head: () => ({
    meta: [
      { title: "Coaching ontológico · Espacio Despertar-Nos" },
      {
        name: "description",
        content:
          "Coaching ontológico: desde la conversación y la reflexión, observar lo que estás viviendo desde otra perspectiva y descubrir nuevas posibilidades. Presencial u online.",
      },
      { property: "og:title", content: "Coaching ontológico · Espacio Despertar-Nos" },
      { property: "og:type", content: "website" },
      {
        property: "og:description",
        content:
          "Cuando cambia nuestra manera de observar, también pueden cambiar nuestras posibilidades de actuar.",
      },
      { property: "og:url", content: "/coaching-ontologico" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/coaching-ontologico" }],
  }),
  component: CoachingOntologico,
});

function CoachingOntologico() {
  return (
    <>
      <Section tone="cream" glow>
        <SectionHeading
          eyebrow="Coaching ontológico"
          eyebrowClassName="text-2xl! md:text-3xl!"
          className="text-4xl md:text-6xl"
          title="Mirar lo que vives desde otra perspectiva"
          intro="Hay momentos en los que sabemos que queremos cambiar algo, pero no encontramos la manera de hacerlo."
        />
      </Section>

      <Section>
        <div className="max-w-3xl space-y-5 leading-relaxed text-muted-foreground">
          <p>
            En el coaching trabajamos desde la conversación y la reflexión para observar aquello
            que estás viviendo desde otra perspectiva. Puede ser presencial u online.
          </p>
          <p>
            A través de preguntas y nuevas formas de mirar una situación, puedes descubrir
            posibilidades que antes no estabas viendo y decidir qué acciones quieres llevar a
            cabo. Porque cuando cambia nuestra manera de observar, también pueden cambiar nuestras
            posibilidades de actuar.
          </p>
        </div>

        <div className="mt-10 max-w-3xl">
          <p className="eyebrow">Puede acompañarte a</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {[
              "Tomar decisiones",
              "Poner límites",
              "Cambiar patrones",
              "Mejorar relaciones",
              "Salir de bloqueos",
              "Recuperar capacidad de elección",
            ].map((i) => (
              <li key={i} className="rounded-full border border-border bg-background px-4 py-2 text-xs">
                {i}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section>
        <Quote>Te escucho. Te miro. Percibo. Y juntas/os buscamos qué necesitas.</Quote>
      </Section>

      <CtaBand title="Empezar puede dar respeto, pero también es el primer acto de cuidado hacia ti misma/o." />
    </>
  );
}
