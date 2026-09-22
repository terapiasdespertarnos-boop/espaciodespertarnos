import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading, Quote } from "@/components/site/Section";
import { CtaBand } from "@/components/site/CtaBand";
import { Sparkles, EnergyWaves } from "@/components/site/Ornaments";
import penduloTesteo from "@/assets/pendulo-testeo.jpg";
import elevandoAlmita from "@/assets/elevando-almita.jpg.asset.json";

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
          title="Limpiar, liberar, renovar y devolver cada cosa a su lugar."
          intro="Las personas y los espacios pueden acumular diferentes cargas o influencias que afectan a nuestra sensación de bienestar, vitalidad y equilibrio. A través del testaje energético exploro qué puede estar influyendo, trabajo sobre ello mediante la limpieza y vuelvo a testar para comprobar cómo se encuentra el campo energético."
        />
        <div className="mt-14 grid items-center gap-12 md:grid-cols-2">
          <div className="relative">
            <img
              src={penduloTesteo}
              alt="Manos testando con un péndulo sobre una plantilla de radiestesia"
              loading="lazy"
              width={848}
              height={1264}
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
            persona— lo acompaño desde la serenidad, sin miedo y sin dramatizar. Intervengo según
            la necesidad.
          </p>
        </div>
      </Section>


      <Section>
        <div className="grid gap-8 md:grid-cols-2">
          <article className="gold-card p-8 md:p-10">
            <p className="eyebrow">Limpieza personal</p>
            <h2 className="font-display mt-3 text-2xl leading-snug md:text-3xl">
              Limpiezas energéticas personales
            </h2>
            <p className="text-muted-foreground mt-5 leading-relaxed">
              Un proceso de acompañamiento continuado, con dos limpiezas a la semana durante{" "}
              <strong className="text-foreground">cuatro semanas</strong>.
            </p>
            <div className="mt-6">
              <p className="text-foreground text-sm font-medium uppercase tracking-[0.18em]">
                En este proceso
              </p>
              <ul className="text-muted-foreground mt-4 space-y-3 text-sm leading-relaxed">
                <li>Testo la polución energética</li>
                <li>Identifico su origen</li>
                <li>Realizo la limpieza</li>
                <li>Impulso tu vitalidad física y psíquica</li>
              </ul>
            </div>
          </article>

          <article className="gold-card p-8 md:p-10">
            <p className="eyebrow">Hogares y locales</p>
            <h2 className="font-display mt-3 text-2xl leading-snug md:text-3xl">
              Limpieza de casas y locales
            </h2>
            <p className="text-muted-foreground mt-5 leading-relaxed">
              Las energías de conflictos, relaciones pasadas, fallecidos o situaciones negativas
              pueden quedar impregnadas en los espacios.
            </p>
            <div className="mt-6">
              <p className="text-foreground text-sm font-medium uppercase tracking-[0.18em]">
                Esto puede influir en
              </p>
              <ul className="text-muted-foreground mt-4 space-y-3 text-sm leading-relaxed">
                <li>Estado emocional</li>
                <li>Cansancio o apatía</li>
                <li>Insomnio</li>
                <li>Economía</li>
                <li>Salud general</li>
              </ul>
            </div>
            <div className="mt-6">
              <p className="text-foreground text-sm font-medium uppercase tracking-[0.18em]">
                Se realiza
              </p>
              <ul className="text-muted-foreground mt-4 space-y-3 text-sm leading-relaxed">
                <li>Testaje energético de todas las estancias</li>
                <li>Limpieza completa del espacio</li>
              </ul>
            </div>
          </article>
        </div>

        <div className="mt-12 grid items-center gap-10 md:grid-cols-2">
          <div className="relative">
            <img
              src={elevandoAlmita.url}
              alt="Manos que elevan un alma hacia la luz entre nubes"
              loading="lazy"
              width={960}
              height={640}
              className="aspect-[3/2] rounded-3xl object-cover shadow-[var(--shadow-glow)]"
            />
            <Sparkles count={5} />
          </div>
          <div>
            <h3 className="font-display text-3xl leading-snug text-earth md:text-4xl">
              Uniendo cielo y tierra
            </h3>
            <span className="rule-line mt-5" />
            <p className="text-muted-foreground mt-6 leading-relaxed">
              💫 En casos de polución por desencarnados, mi condición de médium me permite canalizar
              mensajes de seres queridos que puedan estar atrapados en este plano y acompañarlos a
              elevarse hacia la luz.
            </p>
          </div>
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
        text="Cuéntame qué estás percibiendo y valoramos juntas/os qué puede necesitarse."
        buttonLabel="Consultar una limpieza"
      />
    </>
  );
}
