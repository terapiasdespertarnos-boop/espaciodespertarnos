import { createFileRoute } from "@tanstack/react-router";
import constelacionesCirculo from "@/assets/constelaciones-circulo.jpg";
import { Section, SectionHeading } from "@/components/site/Section";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/constelaciones-familiares")({
  head: () => ({
    meta: [
      { title: "Constelaciones familiares en grupo · Rosa · Espacio Despertar-Nos" },
      {
        name: "description",
        content:
          "Constelaciones familiares grupales para mirar patrones y dinámicas familiares desde otra perspectiva, reconocer qué cargas son tuyas y cuáles no.",
      },
      { property: "og:title", content: "Constelaciones familiares · Espacio Despertar-Nos" },
      { property: "og:type", content: "website" },
      {
        property: "og:description",
        content: "¿Y si parte de lo que cargas no te corresponde?",
      },
      { property: "og:url", content: "/constelaciones-familiares" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/constelaciones-familiares" }],
  }),
  component: Constelaciones,
});

function Constelaciones() {
  return (
    <>
      <Section tone="cream" glow>
        <SectionHeading
          eyebrow="Constelaciones familiares"
          eyebrowClassName="text-2xl! md:text-3xl!"
          className="text-4xl md:text-6xl"
          title="¿Y si parte de lo que cargas no te corresponde?"
        />
      </Section>

      <Section tone="cream" className="pt-0">
        <figure className="overflow-hidden rounded-[2rem] shadow-[0_20px_60px_-20px_rgba(122,90,50,0.35)]">
          <img
            src={constelacionesCirculo}
            alt="Círculo de personas en un prado al atardecer, unidas por hilos de luz dorada que evocan los vínculos familiares"
            width={1600}
            height={1008}
            loading="lazy"
            className="h-auto w-full object-cover"
          />
        </figure>
      </Section>

      <Section>
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-5 leading-relaxed text-muted-foreground">
            <p>
              A veces repetimos historias, conflictos o formas de relacionarnos sin comprender de
              dónde vienen.
            </p>
            <p>
              Las Constelaciones Familiares permiten mirar determinados patrones y dinámicas
              familiares desde una perspectiva diferente, para poder reconocer qué cargas nos
              corresponden y cuáles quizá hemos asumido por amor, lealtad o necesidad de
              pertenecer.
            </p>
            <p>
              El objetivo no es buscar culpables ni dramatizar el pasado, sino mirar, comprender y
              devolver simbólicamente a cada persona lo que le corresponde.
            </p>
            <p>
              Las sesiones son grupales. Puedes constelar un tema personal o participar como
              representante en el proceso de otra persona. Es una experiencia que, más que entender
              solamente con la cabeza, invita a mirar, sentir y tomar conciencia.
            </p>
            <p className="text-sm">
              Se ofrecen como herramienta de acompañamiento y autoconocimiento. No sustituyen la
              atención psicológica ni médica.
            </p>
          </div>
          <ul className="grid gap-3 self-start">
            {[
              "¿Por qué siempre me pasa lo mismo?",
              "¿Por qué siento que tengo que ocuparme de todo?",
              "¿Por qué no consigo avanzar?",
              "¿Por qué repito patrones en mis relaciones de pareja?",
              "¿Por qué vibro siempre en escasez?",
              "¿Qué no es mío?",
            ].map((q) => (
              <li key={q} className="gold-card px-6 py-5 font-display text-xl">
                {q}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
