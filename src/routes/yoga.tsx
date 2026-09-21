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
          "Yoga Kundalini como herramienta de conciencia, equilibrio y presencia: respiración, meditación, mantras y movimiento consciente. Más de 18 años de experiencia.",
      },
      { property: "og:title", content: "Yoga Kundalini · Espacio Despertar-Nos" },
      {
        property: "og:description",
        content: "A veces solo necesitamos un espacio donde poder escucharnos de verdad.",
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
              eyebrow="Yoga Kundalini · Con más de 18 años de experiencia"
              title="A veces solo necesitamos un espacio donde poder escucharnos de verdad."
              intro="Utilizo el yoga como una herramienta de conciencia, equilibrio, presencia y conexión con uno mismo."
              className="text-4xl md:text-6xl"
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
        <div className="mt-16">
          <SectionHeading
            eyebrow="Beneficios"
            title="Lo que la práctica te aporta"
            align="center"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              [
                "Calma y menos estrés",
                "La respiración consciente ayuda a bajar revoluciones y a soltar la tensión acumulada.",
              ],
              [
                "Más energía y vitalidad",
                "Practicar de forma regular despierta una energía que se nota en el día a día.",
              ],
              [
                "Sueño más reparador",
                "Un sistema nervioso más sereno se traduce en un descanso más profundo.",
              ],
              [
                "Equilibrio emocional",
                "Espacio para reconocer lo que sientes sin quedarte atrapada en ello.",
              ],
              [
                "Claridad mental",
                "La meditación ordena el ruido interior y hace más fácil decidir y estar presente.",
              ],
              [
                "Conexión contigo",
                "Vuelves a escucharte, a habitarte y a reconocer lo que de verdad necesitas.",
              ],
            ].map(([t, d]) => (
              <article key={t} className="gold-card p-7">
                <h3 className="text-lg">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </article>
            ))}
          </div>
          <p className="mt-10 text-center text-sm font-medium uppercase tracking-[0.2em] text-[var(--sage-deep)]">
            En lo físico
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              [
                "Fortalece tu cuerpo",
                "La práctica sostenida tonifica y reafirma el cuerpo de dentro hacia fuera.",
              ],
              [
                "Amplía tu capacidad pulmonar",
                "Los ejercicios de respiración enseñan al pulmón a respirar mejor y más hondo.",
              ],
              [
                "Limpia la sangre",
                "Respirar y mover el cuerpo favorece que la sangre se renueve y circule mejor.",
              ],
              [
                "Fortalece el corazón",
                "El ritmo de la práctica trabaja el corazón de forma suave y constante.",
              ],
              [
                "Fortalece el sistema inmunológico",
                "Un cuerpo oxigenado y menos tenso defiende mejor de lo que viene de fuera.",
              ],
              [
                "Fortalece la musculatura",
                "Cada kriya trabaja grupos musculares concretos sin forzar ni lesionar.",
              ],
              [
                "Flexibilidad en el cuerpo",
                "El estiramiento y el movimiento devuelven movilidad y soltura al cuerpo.",
              ],
              [
                "Flexibilidad en la mente",
                "Lo que el cuerpo aprende a soltar, la mente también lo aprende.",
              ],
            ].map(([t, d]) => (
              <article key={t} className="gold-card p-7">
                <h3 className="text-lg">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </article>
            ))}
          </div>
        </div>
        <p className="mt-12 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          No necesitas experiencia previa ni una flexibilidad concreta. Si tienes alguna condición
          de salud, coméntamelo antes para adaptar la práctica; el yoga acompaña, no sustituye
          ningún tratamiento médico.
        </p>
      </Section>

      <Section>
        <Quote>Vuelve a tu centro y apaga el ruido exterior.</Quote>
      </Section>

      <CtaBand
        title="¿Quieres probar una clase?"
        text="Escríbeme y te cuento horarios, grupos y cómo empezar, aunque nunca hayas practicado."
        buttonLabel="Preguntar por las clases"
      />
    </>
  );
}
