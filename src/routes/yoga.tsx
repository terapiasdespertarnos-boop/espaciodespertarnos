import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading, Quote } from "@/components/site/Section";
import { CtaBand } from "@/components/site/CtaBand";
import rosaYoga from "@/assets/rosa-meditacion.jpeg.asset.json";
import salaYoga from "@/assets/sala-yoga.jpeg.asset.json";

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
      <Section tone="cream" glow>
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <SectionHeading
              eyebrow="Yoga Kundalini"
              title="El cuerpo también sabe. Y muchas veces habla antes que la cabeza."
              intro="Soy profesora de Yoga Kundalini con más de 17 años de experiencia. Utilizo el yoga como una herramienta de conciencia, equilibrio, presencia y conexión con uno mismo."
            />
          </div>
          <img
            src={rosaYoga.url}
            alt="Rosa meditando en su sala de Yoga Kundalini"
            loading="lazy"
            width={768}
            height={1024}
            className="aspect-[4/5] rounded-2xl object-cover object-center shadow-[var(--shadow-glow)]"
          />
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeading
            title="Qué encontrarás en la práctica"
            intro="Un espacio real, íntimo y preparado con cuidado para practicar en grupo, sin exigencia ni competición."
          />
          <img
            src={salaYoga.url}
            alt="Sala de Yoga Kundalini preparada con esterillas, cojines y mantas"
            loading="lazy"
            width={1024}
            height={768}
            className="aspect-[16/9] rounded-2xl object-cover shadow-[var(--shadow-soft)]"
          />
        </div>
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
        <div className="grid gap-10 md:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="eyebrow">Sanación meditativa</p>
            <h2 className="mt-3 text-3xl md:text-4xl">Sat Nam Rasayan</h2>
          </div>
          <div className="space-y-5 leading-relaxed text-muted-foreground">
            <p>
              Una práctica de sanación a través de la meditación y la conciencia. Desde el estado
              meditativo, entro en conexión con la persona y permito que aquello que necesita ser
              observado pueda manifestarse y encontrar su espacio, favoreciendo un proceso de toma
              de conciencia y transformación.
            </p>
            <p>
              Puede realizarse a distancia, en un espacio de calma y receptividad, donde lo
              importante es permitir que lo que necesita ser visto aparezca por sí mismo.
            </p>
          </div>
        </div>
      </Section>

      <Section>
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
