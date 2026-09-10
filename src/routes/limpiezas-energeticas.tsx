import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading, Quote } from "@/components/site/Section";
import { CtaBand } from "@/components/site/CtaBand";
import { Sparkles, EnergyWaves } from "@/components/site/Ornaments";
import altarLuz from "@/assets/altar-luz.jpeg.asset.json";

export const Route = createFileRoute("/limpiezas-energeticas")({
  head: () => ({
    meta: [
      { title: "Limpieza energética de personas, casas y negocios · Rosa" },
      {
        name: "description",
        content:
          "Limpiezas energéticas de personas, hogares y locales. Observo el espacio, percibo y valoro qué puede necesitarse en cada caso, con calma y respeto.",
      },
      { property: "og:title", content: "Limpiezas energéticas · Espacio Despertar-Nos" },
      {
        property: "og:description",
        content: "También hay espacios que necesitan ser renovados.",
      },
      { property: "og:url", content: "/limpiezas-energeticas" },
    ],
    links: [{ rel: "canonical", href: "/limpiezas-energeticas" }],
  }),
  component: Limpiezas,
});

const servicios: [string, string][] = [
  [
    "Limpieza energética de personas",
    "Desde mi forma de entender el trabajo energético, las personas pueden acumular diferentes tipos de cargas o influencias que afectan a nuestra sensación de bienestar, vitalidad y equilibrio. A través del testaje energético exploro qué puede estar influyendo, trabajo sobre ello mediante la limpieza y vuelvo a testar para comprobar cómo se encuentra el campo energético. El trabajo puede orientarse a diferentes tipos de carga, como las relacionadas con personas, espacios, situaciones vividas, pensamientos, emociones o aquello que pueda estar influyendo en tu energía. También testo la vitalidad física y psíquica y, cuando lo considero necesario, realizo un acompañamiento energético para favorecer su equilibrio.",
  ],
  [
    "Limpieza energética de hogares",
    "Realizo un testaje de las diferentes estancias para observar el grado de carga o contaminación energética que presenta el espacio y posteriormente realizo la limpieza. En ocasiones, los espacios conservan la huella de situaciones vividas en ellos: conflictos, rupturas, momentos de tensión, cambios importantes o circunstancias que pueden hacer que sintamos el lugar pesado o poco agradable. El objetivo es limpiar y armonizar el espacio, favoreciendo una sensación de mayor ligereza y bienestar.",
  ],
  [
    "Limpieza energética de negocios y locales",
    "Para espacios de trabajo o negocios en los que se desea renovar el ambiente y comenzar una nueva etapa. El proceso es el mismo: testar, limpiar y armonizar para devolver al lugar una sensación de claridad y equilibrio.",
  ],
];

function Limpiezas() {
  return (
    <>
      <Section tone="cream" glow>
        <SectionHeading
          eyebrow="Limpiezas energéticas"
          title="También hay espacios que necesitan ser renovados."
          intro="A veces no es solo la persona: es la casa, el local o el ambiente en el que pasamos muchas horas."
        />
        <div className="mt-14 grid items-center gap-12 md:grid-cols-2">
          <div className="relative">
            <img
              src={altarLuz.url}
              alt="Altar de cuarzo rosa iluminado por haces de luz en el espacio de Rosa"
              loading="lazy"
              width={768}
              height={1024}
              className="aspect-[4/5] rounded-3xl object-cover shadow-[var(--shadow-glow)]"
            />
            <Sparkles count={6} />
          </div>
          <div>
            <p className="eyebrow">Péndulo y radiestesia</p>
            <h3 className="font-display mt-4 text-2xl leading-snug md:text-3xl">
              Limpiar, liberar, renovar y devolver cada cosa a su lugar.
            </h3>
            <p className="text-muted-foreground mt-5 leading-relaxed">
              El péndulo es una de las herramientas que utilizo para afinar y comprobar durante
              determinadas limpiezas. No es un adorno: me ayuda a escuchar la información que un
              espacio o una persona no dicen con palabras.
            </p>
            <EnergyWaves className="text-gold/70 mt-8 h-16" />
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-5 md:grid-cols-3">
          {servicios.map(([t, d]) => (
            <article key={t} className="gold-card p-8">
              <h2 className="text-xl leading-snug">{t}</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </article>
          ))}
        </div>

        <div className="mt-14 max-w-3xl space-y-5 leading-relaxed text-muted-foreground">
          <p className="text-foreground">
            En una limpieza energética no me limito a aplicar una técnica. Observo el espacio,
            percibo y valoro qué puede necesitarse en cada caso.
          </p>
          <p>
            Cuando percibo que hay algo más —una presencia, una energía vinculada al lugar o a la
            persona— lo acompaño desde la serenidad, sin miedo y sin dramatizar. Nunca intervengo
            si no considero que sea necesario.
          </p>
        </div>
      </Section>

      <Section tone="sand">
        <Quote>
          No se trata de tener miedo a lo que no vemos. Se trata de acompañar con respeto aquello
          que percibimos.
        </Quote>
      </Section>

      <CtaBand
        title="¿Sientes que tu casa o tu negocio necesitan renovarse?"
        text="Cuéntame qué estás percibiendo y valoramos juntas o juntos qué puede necesitarse."
        buttonLabel="Consultar una limpieza"
      />
    </>
  );
}
