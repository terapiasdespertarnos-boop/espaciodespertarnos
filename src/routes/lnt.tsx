import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading, Quote } from "@/components/site/Section";
import { CtaBand } from "@/components/site/CtaBand";
import lntRosaTerapeuta from "@/assets/lnt-rosa-terapeuta.png";

export const Route = createFileRoute("/lnt")({
  head: () => ({
    meta: [
      { title: "LNT · La Nueva Terapia, sanación energética cuántica · Rosa" },
      {
        name: "description",
        content:
          "LNT (La Nueva Terapia): trabajo sobre los tres cuerpos —físico, emocional y espiritual—, presencial o a distancia, con más de 30 años de experiencia.",
      },
      { property: "og:title", content: "LNT · La Nueva Terapia · Espacio Despertar-Nos" },
      { property: "og:type", content: "website" },
      {
        property: "og:description",
        content: "Si sientes bloqueos a nivel físico, emocional o espiritual, esta terapia puede acompañarte a recuperar el equilibrio.",
      },
      { property: "og:url", content: "/lnt" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/lnt" }],
  }),
  component: Lnt,
});

function Lnt() {
  return (
    <>
      <Section tone="cream" glow>
        <SectionHeading
          eyebrow="LNT · La Nueva Terapia"
          eyebrowClassName="text-2xl! md:text-3xl!"
          className="text-4xl md:text-6xl"
          title="Sanación energética cuántica"
          intro="Si sientes bloqueos a nivel físico, emocional o espiritual, esta terapia puede acompañarte a recuperar el equilibrio."
        />
      </Section>

      <Section tone="sand">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div className="space-y-7">
            <img
              src={lntRosaTerapeuta}
              alt="Rosa acompañando una sesión de LNT en un espacio sereno"
              loading="lazy"
              width={960}
              height={1200}
              className="aspect-[4/5] w-full rounded-2xl object-cover shadow-[var(--shadow-soft)]"
            />
          </div>
          <div className="space-y-5 leading-relaxed text-muted-foreground">
            <p>
              Trabaja sobre los tres cuerpos: físico, emocional y espiritual, con más de 30 años de
              experiencia. Está disponible tanto presencial como a distancia.
            </p>
            <div>
              <p className="eyebrow">Beneficios</p>
              <ul className="mt-3 grid gap-2 text-sm">
                {[
                  "Alivio de dolencias (migrañas, dolores, contracturas, etc.)",
                  "Reducción de estrés, ansiedad e insomnio",
                  "Apoyo en alergias e infertilidad",
                  "Desbloqueo emocional (fobias, adicciones, inseguridades, falta de abundancia…)",
                ].map((b) => (
                  <li key={b} className="border-b border-border pb-2">
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-sm">No sustituye los tratamientos médicos: los complementa.</p>
            <p>
              En la modalidad presencial, la sesión se repite cada 15-20 días hasta notar mejoría.
              A distancia, el tratamiento se determina mediante radiestesia, que indica tanto el
              número de semanas necesarias como la frecuencia adecuada para cada caso.
            </p>
            <p className="font-display text-2xl leading-snug text-[var(--sage-deep)] md:text-3xl">
              <span className="mr-1 align-top text-3xl text-[var(--gold)] md:text-4xl">«</span>
              Los resultados no paran de sorprenderme, es fascinante.
              <span className="ml-1 align-bottom text-3xl text-[var(--gold)] md:text-4xl">»</span>
            </p>
          </div>
        </div>
      </Section>

      <CtaBand title="Sé que asoma el miedo al empezar de nuevo, pero dar el primer paso es abrir la puerta a tu propio alivio" />
    </>
  );
}
