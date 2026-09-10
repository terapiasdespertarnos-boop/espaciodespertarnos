import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading, Quote } from "@/components/site/Section";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/como-puedo-ayudarte")({
  head: () => ({
    meta: [
      { title: "Cómo puedo acompañarte · Espacio Despertar-Nos" },
      {
        name: "description",
        content:
          "Bloqueos emocionales, patrones repetitivos, relaciones, límites, cambios vitales, cansancio emocional, limpiezas energéticas y procesos de autoconocimiento.",
      },
      { property: "og:title", content: "Cómo puedo acompañarte · Espacio Despertar-Nos" },
      {
        property: "og:description",
        content: "Una mirada. Muchas herramientas. Un acompañamiento personalizado.",
      },
      { property: "og:url", content: "/como-puedo-ayudarte" },
    ],
    links: [{ rel: "canonical", href: "/como-puedo-ayudarte" }],
  }),
  component: ComoPuedoAyudarte,
});

const tarjetas: [string, string][] = [
  ["Procesos personales", "Cuando sientes que necesitas mirar tu vida desde otro lugar."],
  ["Bloqueos emocionales", "Algo te frena y no consigues ponerle nombre."],
  ["Patrones repetitivos", "Historias que vuelven una y otra vez con otras caras."],
  ["Relaciones", "Vínculos que duelen, cansan o se repiten."],
  ["Familia", "Lealtades, cargas y lugares que quizá no te corresponden."],
  ["Límites", "Aprender a decir no sin sentir que fallas a nadie."],
  ["Cambios vitales", "Etapas que se cierran y otras que aún no tienen forma."],
  ["Sensación de estancamiento", "Sabes lo que quieres, pero no consigues moverte."],
  ["Cansancio emocional", "Llevas demasiado tiempo sosteniendo a todos."],
  ["Limpieza energética personal", "Cuando sientes pesadez o necesidad de renovación."],
  ["Limpieza energética de hogares", "Ambientes cargados, incómodos o extraños."],
  ["Limpieza energética de negocios", "Renovar el ambiente y empezar una nueva etapa."],
  ["Yoga Kundalini", "Cuerpo, respiración y presencia como camino de conciencia."],
  ["Procesos de autoconocimiento", "Comprenderte mejor sin juicio y a tu ritmo."],
  ["Acompañamiento energético", "LNT y otras técnicas dentro de un proceso personalizado."],
  ["Mediumnidad y presencias", "Acompañar con respeto aquello que se percibe."],
];

function ComoPuedoAyudarte() {
  return (
    <>
      <Section tone="cream">
        <SectionHeading
          eyebrow="Cómo puedo ayudarte"
          title="Una mirada. Muchas herramientas. Un acompañamiento personalizado."
          intro="No hace falta que llegues con un diagnóstico ni con un nombre para lo que te ocurre. Basta con que me cuentes qué estás viviendo."
        />
      </Section>

      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tarjetas.map(([t, d]) => (
            <article key={t} className="soft-card p-7">
              <h2 className="text-lg">{t}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </article>
          ))}
        </div>
        <p className="mt-10 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          Este acompañamiento es un espacio de bienestar, autoconocimiento y crecimiento personal.
          No sustituye ni reemplaza la atención médica o psicológica.
        </p>
      </Section>

      <Section tone="sand">
        <Quote>Te escucho. Te miro. Percibo. Y juntas o juntos buscamos qué necesitas.</Quote>
      </Section>

      <CtaBand />
    </>
  );
}
