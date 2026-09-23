import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionHeading, Quote } from "@/components/site/Section";
import { CtaBand } from "@/components/site/CtaBand";
import calma from "@/assets/calma.jpg";

export const Route = createFileRoute("/herramientas")({
  head: () => ({
    meta: [
      { title: "Herramientas: constelaciones, coaching, regresiones y LNT · Rosa" },
      {
        name: "description",
        content:
          "Constelaciones familiares, coaching ontológico, regresiones, LNT, digitopuntura craneal y técnicas energéticas dentro de un acompañamiento personalizado.",
      },
      { property: "og:title", content: "Mis herramientas · Espacio Despertar-Nos" },
      { property: "og:type", content: "website" },
      {
        property: "og:description",
        content: "Diferentes herramientas. Una misma intención: acompañarte a volver a ti.",
      },
      { property: "og:url", content: "/herramientas" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/herramientas" }],
  }),
  component: Herramientas,
});

const energeticas = [
  "Energía Universal",
  "Médicos del Cielo",
  "Sanergía",
  "Curación Cuántica",
  "Sendero Solar",
  "Frecuencias de Colores",
  "Sat Nam Rasayan",
  "Radiestesia",
];

function Herramientas() {
  return (
    <>
      <Section tone="cream">
        <SectionHeading
          className="text-4xl md:text-6xl"
          eyebrow="Mis herramientas"
          title="Diferentes herramientas. Una misma intención: acompañarte a volver a ti."

          intro="Trabajo sin encasillar las técnicas de forma independiente. Las utilizo, fusiono, adapto o aparto según lo que percibo que necesita cada persona."
        />
      </Section>

      {/* YOGA */}
      <Section>
        <div className="grid gap-10 md:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="eyebrow">01</p>
            <h2 className="mt-3 text-3xl md:text-4xl">Yoga Kundalini</h2>
          </div>
          <div className="space-y-5 leading-relaxed text-muted-foreground">
            <p>
              Soy profesora de Yoga Kundalini con más de 18 años de experiencia. Utilizo el yoga kundalini
              como una herramienta de conciencia, equilibrio, presencia y conexión con uno mismo.
            </p>
            <ul className="grid gap-2 text-sm">
              {[
                "Kriyas",
                "Prácticas de respiración",
                "Meditaciones",
                "Mantras",
                "Relajación",
                "Trabajo corporal y energético",
              ].map((i) => (
                <li key={i} className="border-b border-border pb-2">
                  {i}
                </li>
              ))}
            </ul>
            <Link to="/yoga" className="inline-block text-xs tracking-[0.16em] text-clay uppercase">
              Ver la sección de yoga kundalini
            </Link>
          </div>
        </div>
      </Section>

      {/* LNT */}
      <Section tone="sand">
        <div className="grid gap-10 md:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="eyebrow">02</p>
            <h2 className="mt-3 text-3xl md:text-4xl">LNT · La Nueva Terapia</h2>
          </div>
          <div className="space-y-5 leading-relaxed text-muted-foreground">
            <p>
              Sanación energética cuántica que trabaja sobre los tres cuerpos: físico, emocional y
              espiritual. Presencial o a distancia.
            </p>
            <Link to="/lnt" className="inline-block text-xs tracking-[0.16em] text-clay uppercase">
              Ver la sección de LNT
            </Link>
          </div>
        </div>
      </Section>

      {/* CONSTELACIONES */}
      <Section>
        <div className="grid gap-10 md:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="eyebrow">03</p>
            <h2 className="mt-3 text-3xl md:text-4xl">Constelaciones familiares</h2>
          </div>
          <div className="space-y-5 leading-relaxed text-muted-foreground">
            <p>
              Sesiones grupales para mirar patrones y dinámicas familiares desde otra perspectiva y
              reconocer qué cargas nos corresponden y cuáles no.
            </p>
            <Link
              to="/constelaciones-familiares"
              className="inline-block text-xs tracking-[0.16em] text-clay uppercase"
            >
              Ver la sección de constelaciones familiares
            </Link>
          </div>
        </div>
      </Section>

      {/* COACHING */}
      <Section tone="cream">
        <div className="grid gap-10 md:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="eyebrow">04</p>
            <h2 className="mt-3 text-3xl md:text-4xl">Coaching ontológico</h2>
          </div>
          <div className="space-y-5 leading-relaxed text-muted-foreground">
            <p>
              Trabajamos desde la conversación y la reflexión para observar lo que estás viviendo
              desde otra perspectiva y descubrir nuevas posibilidades. Presencial u online.
            </p>
            <Link
              to="/coaching-ontologico"
              className="inline-block text-xs tracking-[0.16em] text-clay uppercase"
            >
              Ver la sección de coaching ontológico
            </Link>
          </div>
        </div>
      </Section>

      {/* REGRESIONES + DIGITOPUNTURA */}
      <Section>
        <div className="grid gap-10 md:grid-cols-2">
          <article>
            <p className="eyebrow">05</p>
            <h2 className="mt-3 text-3xl">Regresiones</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Una herramienta de exploración personal para mirar experiencias y contenidos que la
              persona siente que necesitan ser comprendidos. Actualmente, de mi formación en
              regresiones e hipnosis, recupero aquellas herramientas que considero más útiles y las
              integro para enriquecer otras terapias según lo que requiera cada caso.
            </p>
          </article>
          <article>
            <p className="eyebrow">06</p>
            <h2 className="mt-3 text-3xl">Digitopuntura craneal</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Una técnica corporal que forma parte de mi conjunto de herramientas de bienestar y
              acompañamiento, especialmente cuando el cuerpo necesita entrar en la conversación.
            </p>
          </article>
        </div>
      </Section>

      {/* SAT NAM RASAYAN */}
      <Section tone="cream">
        <div className="grid gap-10 md:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="eyebrow">07</p>
            <p className="mt-3 text-sm tracking-[0.16em] text-clay uppercase">
              Sanación meditativa
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl">Sat Nam Rasayan</h2>
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

      {/* ENERGÉTICAS */}
      <Section tone="sand">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <SectionHeading title="Limpiezas energéticas y mediumnidad" />
            <p className="mt-4 max-w-2xl font-display text-lg leading-snug text-[var(--sage-deep)] md:text-xl">
              Cuando necesitamos abordar aspectos sutiles, que no siempre se ven pero se sienten.
            </p>
            <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
              A lo largo de mi formación y experiencia he trabajado con diferentes técnicas y
              enfoques energéticos.
            </p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {energeticas.map((e) => (
                <li
                  key={e}
                  className="rounded-full border border-earth/20 bg-background px-4 py-2 text-xs"
                >
                  {e}
                </li>
              ))}
              <li className="rounded-full border border-earth/20 bg-background px-4 py-2 text-xs">
                Y otras herramientas de mi recorrido
              </li>
            </ul>
            <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
              Hablo desde mi experiencia personal y desde el acompañamiento, el bienestar y el
              equilibrio. Estas técnicas no sustituyen tratamientos médicos ni psicológicos.
            </p>
          </div>
          <img
            src={calma}
            alt="Vela encendida en un cuenco de barro junto a una ventana"
            loading="lazy"
            width={1200}
            height={900}
            className="rounded-2xl object-cover"
          />
        </div>
      </Section>

      <Section tone="cream">
        <Quote>No trabajo con una técnica. Trabajo contigo.</Quote>
      </Section>

      <CtaBand title="El primer paso siempre es el más valiente. Aquí estoy para darlo contigo." />
    </>
  );
}
