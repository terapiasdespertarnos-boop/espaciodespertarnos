import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionHeading, Quote } from "@/components/site/Section";
import { CtaBand } from "@/components/site/CtaBand";
import { whatsappUrl } from "@/lib/site";
import rosaCuenco from "@/assets/rosa-cuenco.jpeg.asset.json";

export const Route = createFileRoute("/sobre-mi")({
  head: () => ({
    meta: [
      { title: "Soy Rosa · Espacio Despertar-Nos" },
      {
        name: "description",
        content:
          "Soy Rosa y acompaño a mujeres que sienten que cargan con demasiado. Un espacio real para parar, soltar y volver a escucharte.",
      },
      { property: "og:title", content: "Soy Rosa · Espacio Despertar-Nos" },
      {
        property: "og:description",
        content:
          "A veces no necesitamos encontrar el camino. Necesitamos atrevernos a caminarlo.",
      },
      { property: "og:url", content: "/sobre-mi" },
    ],
    links: [{ rel: "canonical", href: "/sobre-mi" }],
  }),
  component: SobreMi,
});

const pilares = [
  {
    t: "Espacio para parar",
    d: "El primer paso para sanar es detener el piloto automático y darte permiso para sentir lo que te pasa.",
  },
  {
    t: "Soltar la mochila",
    d: "Identificamos y liberamos lealtades invisibles, creencias limitantes y cargas familiares que ya no te pertenecen.",
  },
  {
    t: "Alinearte con tu alma",
    d: "Conectamos con tu verdad profunda para que dejes de encajar y empieces a habitar tu propia vida con confianza.",
  },
];

function SobreMi() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-cream">
        <div className="container-prose relative grid items-center gap-10 px-6 py-24 md:grid-cols-2 md:py-32">
          <div className="max-w-xl fade-up">
            <p className="eyebrow">Espacio Despertar-Nos</p>
            <h1 className="mt-6 font-display text-4xl leading-[1.1] md:text-5xl lg:text-6xl">
              A veces no necesitamos encontrar el camino. Necesitamos atrevernos a caminarlo.
            </h1>
            <span className="rule-line mt-6" />
            <p className="mt-7 text-lg leading-relaxed text-earth md:text-xl">
              Un espacio seguro para parar, soltar la mochila que ya no te corresponde y volver a
              escucharte. No estás perdida; tienes miedo, y estás a tiempo de elegirte de nuevo.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={whatsappUrl("Hola Rosa, me gustaría iniciar mi proceso. ¿Podemos hablar?")}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-primary px-7 py-3.5 text-xs tracking-[0.14em] text-primary-foreground uppercase shadow-[var(--shadow-glow)] transition-opacity hover:opacity-90"
              >
                Iniciar mi proceso
              </a>
              <a
                href="#mi-historia"
                className="border-gold/60 hover:bg-sand rounded-full border px-7 py-3.5 text-xs tracking-[0.14em] uppercase transition-colors"
              >
                Conoce mi historia
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src={rosaCuenco.url}
              alt="Rosa trabajando con un cuenco en su espacio"
              width={768}
              height={852}
              className="aspect-[4/5] w-full rounded-2xl object-cover object-center shadow-[var(--shadow-glow)]"
            />
          </div>
        </div>
      </section>

      {/* ¿TE SUENA FAMILIAR? */}
      <Section>
        <SectionHeading
          eyebrow="¿Te suena familiar?"
          title="Cuando sientes que tienes que poder con todo"
        />
        <div className="mt-8 max-w-3xl space-y-5 leading-relaxed text-muted-foreground">
          <p>
            Llegas a un punto en el que por fuera sigues adelante, sosteniendo responsabilidades,
            tirando del carro... pero por dentro sientes que algo se ha roto. Te invade una profunda
            soledad o el peso de una etapa que se cierra (una separación, un cambio vital, un
            agotamiento silencioso).
          </p>
          <Quote>“No estaba perdida. Tenía miedo.”</Quote>
          <p>
            El problema no es que no sepas hacia dónde ir. El verdadero desgaste viene de intentar
            avanzar cargando con una mochila llena de expectativas, viejas creencias y cargas que
            nunca te correspondieron llevar. Lo que necesitas no es que alguien te diga que "tienes
            que ser fuerte", sino un espacio donde puedas parar, ser escuchada sin juicios y empezar
            a mirar hacia dentro.
          </p>
        </div>
      </Section>

      {/* MI PROPIO CAMINO */}
      <Section tone="cream" glow id="mi-historia">
        <div className="grid gap-12 md:grid-cols-[1fr_1.1fr] md:items-center">
          <div>
            <SectionHeading
              eyebrow="Mi propio camino"
              title="Tuve que aprender a soltar para volver a encontrarme"
            />
            <div className="mt-8 space-y-5 leading-relaxed text-muted-foreground">
              <p>
                Yo también pasé por ahí. Cuando me separé del padre de mi hijo, sabía hacia dónde
                quería dirigir mi vida, pero tenía miedo a criar sola, a cerrar una etapa familiar
                tan importante. Paré. Y a través del yoga kundalini, el trabajo interior y mis
                propios procesos, entendí que el verdadero viaje no estaba fuera, sino dentro.
              </p>
              <p>
                Años después, tomé otra gran decisión: cerrar un negocio de más de treinta años que
                había sido fundamental en mi vida. No fue fácil. Implicó soltar el control, el qué
                dirán y una forma de vida que conocía a la perfección para atreverme a caminar hacia
                lo que sentía en mi corazón.
              </p>
              <Quote>“Emprender desde el corazón no significa tener todas las respuestas, sino estar dispuesta a confiar en el camino.”</Quote>
              <p className="text-foreground">
                Hoy acompaño desde ese mismo lugar real y sin atajos. Porque sé lo que es sostenerlo
                todo y sé lo que se siente al soltar la carga para volver a ser tú misma.
              </p>
            </div>
          </div>
          <div className="gold-card space-y-6 p-8 md:p-10">
            <h3 className="font-display text-2xl">Lo que me define</h3>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-gold">✦</span>
                <span>Más de 17 años como profesora de Yoga Kundalini.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold">✦</span>
                <span>28 años como autónoma y mujer de negocio.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold">✦</span>
                <span>
                  Formación en constelaciones familiares, coaching ontológico, regresiones,
                  digitopuntura craneal, técnicas energéticas y LNT.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold">✦</span>
                <span>Una manera de acompañar sin prisas, sin etiquetas y sin interpretaciones impuestas.</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* MI FORMA DE ACOMPAÑAR */}
      <Section tone="sand" glow>
        <SectionHeading
          eyebrow="Mi forma de acompañar"
          title="Un enfoque real, humano y profundo"
          intro="No creo en fórmulas mágicas ni en gurús que te dicen qué hacer. Mi acompañamiento une la experiencia vital, la escucha profunda y herramientas como las constelaciones familiares, integrando la intuición y la energía con total naturalidad y madurez."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {pilares.map((p) => (
            <div key={p.t} className="gold-card p-7">
              <h3 className="font-display text-xl">{p.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CIERRE */}
      <Section>
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl leading-tight md:text-5xl">
            ¿Y si empezamos a caminar juntas?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            No necesitas convertirte en alguien diferente. Solo necesitas dejar de cargar con aquello
            que ya no es tuyo para poder ser quien realmente eres.
          </p>
          <div className="mt-10">
            <Quote>“Empezar a caminar la vida conectada con mi alma.”</Quote>
          </div>
          <div className="mt-10">
            <a
              href={whatsappUrl("Hola Rosa, quiero reservar una sesión de acompañamiento.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-primary px-7 py-3.5 text-xs tracking-[0.14em] text-primary-foreground uppercase shadow-[var(--shadow-glow)] transition-opacity hover:opacity-90"
            >
              Reserva tu sesión de acompañamiento
            </a>
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
