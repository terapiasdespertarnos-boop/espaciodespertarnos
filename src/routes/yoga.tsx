import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading, Quote } from "@/components/site/Section";
import { CtaBand } from "@/components/site/CtaBand";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/yoga")({
  head: () => ({
    meta: [
      { title: "Clases de Yoga Kundalini con Rosa · Espacio Despertar-Nos" },
      {
        name: "description",
        content:
          "Yoga Kundalini como herramienta de conciencia, equilibrio y presencia: respiración, meditación, mantras y movimiento consciente. Más de 17 años de experiencia.",
      },
      { property: "og:title", content: "Yoga Kundalini · Espacio Despertar-Nos" },
      {
        property: "og:description",
        content: "El cuerpo también sabe. Y muchas veces habla antes que la cabeza.",
      },
      { property: "og:url", content: "/yoga" },
    ],
    links: [{ rel: "canonical", href: "/yoga" }],
  }),
  component: Yoga,
});

function Yoga() {
  return (
    <>
      <Section tone="cream">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <SectionHeading
              eyebrow="Yoga Kundalini"
              title="El cuerpo también sabe. Y muchas veces habla antes que la cabeza."
              intro="Soy profesora de Yoga Kundalini con más de 17 años de experiencia. Utilizo el yoga como una herramienta de conciencia, equilibrio, presencia y conexión con uno mismo."
            />
          </div>
          <img
            src={hero}
            alt="Espacio cálido y luminoso preparado para la práctica"
            loading="lazy"
            width={1600}
            height={1104}
            className="rounded-2xl object-cover"
          />
        </div>
      </Section>

      <Section>
        <SectionHeading title="Qué encontrarás en la práctica" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["Clases de Yoga Kundalini", "Series completas adaptadas al grupo y al momento."],
            ["Prácticas de respiración", "La respiración como puerta más directa a la calma."],
            ["Meditaciones", "Tiempo para parar y escuchar lo que hay debajo del ruido."],
            ["Mantras", "Sonido y repetición como forma de sostener la atención."],
            ["Movimiento consciente", "Moverse desde dentro, sin exigencia ni competición."],
            ["Trabajo corporal y energético", "Cuerpo y energía como parte del mismo proceso."],
          ].map(([t, d]) => (
            <article key={t} className="gold-card p-7">
              <h3 className="text-lg">{t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </article>
          ))}
        </div>
        <p className="mt-10 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          No necesitas experiencia previa ni una flexibilidad concreta. Si tienes alguna condición
          de salud, coméntamelo antes para adaptar la práctica; el yoga acompaña, no sustituye
          ningún tratamiento médico.
        </p>
      </Section>

      <Section tone="sand">
        <Quote>Practicar no es rendir. Es volver a habitarte.</Quote>
      </Section>

      <CtaBand
        title="¿Quieres probar una clase?"
        text="Escríbeme y te cuento horarios, grupos y cómo empezar, aunque nunca hayas practicado."
        buttonLabel="Preguntar por las clases"
      />
    </>
  );
}
