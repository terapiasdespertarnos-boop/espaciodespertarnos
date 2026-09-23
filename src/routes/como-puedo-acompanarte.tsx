import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading, Quote } from "@/components/site/Section";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/como-puedo-acompanarte")({
  head: () => ({
    meta: [
      { title: "Cómo puedo acompañarte · Espacio Despertar-Nos" },
        {
          name: "description",
          content:
            "Limpiezas energéticas, LNT, Sat Nam Rasayan, coaching ontológico, constelaciones familiares, digitopuntura craneal y regresiones.",
        },
      { property: "og:title", content: "Cómo puedo acompañarte · Espacio Despertar-Nos" },
      {
        property: "og:description",
        content: "Diferentes terapias. Una misma intención: acompañarte a volver a ti.",
      },
      { property: "og:url", content: "/como-puedo-acompanarte" },
    ],
    links: [{ rel: "canonical", href: "/como-puedo-acompanarte" }],
  }),
  component: ComoPuedoAcompanarte,
});

// Terapias: qué es y en qué momento puede utilizarse.
const terapias: { nombre: string; que: string; momento: string }[] = [
  {
    nombre: "Limpiezas energéticas",
    que: "Personal, de hogares y de negocios. Testo el campo o el espacio, limpio lo que puede estar influyendo y vuelvo a testar para comprobar cómo queda.",
    momento: "Cuando sientes pesadez, cargas o necesidad de renovar tu energía, tu casa o tu local.",
  },
  {
    nombre: "LNT · Sanación energética cuántica",
    que: "Trabaja sobre los tres cuerpos —físico, emocional y espiritual—, de forma presencial o a distancia. Complementa los tratamientos médicos, no los sustituye.",
    momento: "Ante bloqueos físicos, emocionales o espirituales, dolencias, estrés, ansiedad o insomnio.",
  },
  {
    nombre: "Sat Nam Rasayan",
    que: "Sanación meditativa. Desde el estado meditativo favorezco que aquello que necesita ser observado encuentre su espacio. Puede realizarse a distancia.",
    momento: "Cuando buscas calma y un proceso profundo de toma de conciencia y transformación.",
  },
  {
    nombre: "Coaching ontológico",
    que: "Trabajamos desde la conversación y la reflexión para observar lo que estás viviendo desde otra perspectiva y descubrir nuevas posibilidades. Presencial u online.",
    momento: "Cuando quieres cambiar algo, tomar decisiones, poner límites o salir de un bloqueo.",
  },
  {
    nombre: "Constelaciones familiares",
    que: "Sesiones grupales para mirar patrones y dinámicas familiares y reconocer qué cargas nos corresponden y cuáles hemos asumido por amor o lealtad.",
    momento: "Cuando algo se repite en tu historia, tus relaciones o tu familia y no sabes de dónde viene.",
  },
  {
    nombre: "Digitopuntura craneal",
    que: "Técnica corporal de bienestar y acompañamiento, integrada en mi forma de trabajar.",
    momento: "Cuando la tensión o el cansancio se acumulan y el cuerpo necesita entrar en la conversación.",
  },
];


function ComoPuedoAcompanarte() {
  return (
    <>
      <Section tone="cream">
        <SectionHeading
          eyebrow="Cómo puedo acompañarte"
          title="Terapias holísticas sanadoras"
          intro="Cada persona es diferente y no siempre necesita la misma herramienta. Por eso, antes de decidir cómo trabajar, podemos hablar sobre lo que estás viviendo y valorar qué puede acompañarte mejor en este momento. No hace falta que llegues con un diagnóstico ni con un nombre para lo que te ocurre: basta con que me cuentes qué estás viviendo."
        />
      </Section>

      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          {terapias.map((t) => (
            <article key={t.nombre} className="gold-card p-8">
              <h2 className="text-xl leading-snug">{t.nombre}</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t.que}</p>
              <div className="mt-6">
                <p className="text-foreground text-xs font-medium uppercase tracking-[0.18em]">
                  En qué momento
                </p>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{t.momento}</p>
              </div>
            </article>
          ))}
        </div>

        <article className="gold-card mt-5 p-8">
          <h2 className="text-xl leading-snug">Regresiones</h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            Una herramienta de exploración personal para mirar experiencias que la persona siente
            que necesitan ser comprendidas. Actualmente, de mi formación en regresiones e hipnosis,
            recupero aquellas herramientas que considero más útiles y las integro para enriquecer
            otras terapias según lo que requiera cada caso.
          </p>
        </article>

        <p className="mt-10 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          Este acompañamiento es un espacio de bienestar, autoconocimiento y crecimiento personal.
          No sustituye ni reemplaza la atención médica o psicológica.
        </p>
      </Section>

      <Section>
        <Quote>Te escucho. Te miro. Percibo. Y juntas/os buscamos qué necesitas.</Quote>
      </Section>

      <CtaBand title="Sé que dar el primer paso da vértigo, pero recuerda que ya estás en camino solo con pensarlo." />
    </>
  );
}
