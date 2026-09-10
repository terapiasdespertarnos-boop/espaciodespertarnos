import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading, Quote } from "@/components/site/Section";
import { CtaBand } from "@/components/site/CtaBand";
import rosaCuenco from "@/assets/rosa-cuenco.jpeg.asset.json";

export const Route = createFileRoute("/sobre-mi")({
  head: () => ({
    meta: [
      { title: "Soy Rosa · Espacio Despertar-Nos" },
      {
        name: "description",
        content:
          "Rosa, profesora de Yoga Kundalini con más de 17 años de experiencia y acompañante en procesos de transformación personal con distintas herramientas.",
      },
      { property: "og:title", content: "Soy Rosa · Espacio Despertar-Nos" },
      {
        property: "og:description",
        content: "No me identifico con una única técnica. Me identifico con una manera de acompañar.",
      },
      { property: "og:url", content: "/sobre-mi" },
    ],
    links: [{ rel: "canonical", href: "/sobre-mi" }],
  }),
  component: SobreMi,
});

function SobreMi() {
  return (
    <>
      <Section tone="cream">
        <div className="grid gap-12 md:grid-cols-[1.1fr_1fr] md:items-center">
          <div>
            <SectionHeading eyebrow="Sobre mí" title="Soy Rosa." />
            <div className="mt-8 space-y-5 leading-relaxed text-muted-foreground">
              <p>Soy Rosa y llevo más de 17 años como profesora de Yoga Kundalini.</p>
              <p>
                Mi camino profesional y personal me ha llevado a formarme y experimentar diferentes
                herramientas de acompañamiento: yoga, técnicas energéticas, Sat Nam Rasayan, LNT,
                coaching ontológico, constelaciones familiares, regresiones, digitopuntura craneal
                y diferentes técnicas de sanación y trabajo energético.
              </p>
              <p>
                Pero si algo he aprendido durante todos estos años es que ninguna persona es igual
                a otra.
              </p>
              <p className="text-foreground">
                Por eso hoy no me identifico con una única técnica. Me identifico con una manera de
                acompañar.
              </p>
              <p>
                Escuchar. Percibir. Mirar. Sentir. Y utilizar las herramientas que considero que
                pueden ayudarte en cada momento.
              </p>
            </div>
          </div>
          <img
            src={rosaCuenco.url}
            alt="Rosa trabajando con un cuenco en su espacio"
            loading="lazy"
            width={768}
            height={852}
            className="aspect-[4/5] rounded-2xl object-cover object-center shadow-[var(--shadow-glow)]"
          />
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl md:text-3xl">También vengo del mundo empresarial</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Llevo 28 años como autónoma y durante muchos años he desarrollado diferentes
              proyectos empresariales. Esa experiencia forma parte de mí y de mi manera práctica y
              cercana de entender a las personas y sus procesos.
            </p>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl">Cómo me gusta trabajar</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Sin prisas, sin etiquetas y sin interpretaciones impuestas. Primero escucho, después
              miro y solo entonces propongo. Tú decides siempre hasta dónde quieres llegar.
            </p>
          </div>
        </div>
        <div className="mt-14">
          <Quote>
            No soy una gurú. No tengo todas las respuestas. Simplemente llevo muchos años caminando,
            aprendiendo y acompañando a otras personas en sus propios caminos.
          </Quote>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
