import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionHeading, Quote } from "@/components/site/Section";
import { CtaBand } from "@/components/site/CtaBand";
import { whatsappUrl } from "@/lib/site";
import rosaCuenco from "@/assets/rosa-cuenco.jpeg.asset.json";
import rosaMeditacion from "@/assets/rosa-meditacion.jpeg.asset.json";
import rosaYogaSala from "@/assets/rosa-yoga-sala.jpeg.asset.json";
import altarLuz from "@/assets/altar-luz.jpeg.asset.json";

export const Route = createFileRoute("/sobre-mi")({
  head: () => ({
    meta: [
      { title: "Soy Rosa · Espacio Despertar-Nos" },
      {
        name: "description",
        content:
          "La historia real de Rosa: aprender a soltar el miedo, escuchar el corazón y crear Espacio Despertar-Nos desde su propio camino.",
      },
      { property: "og:title", content: "Soy Rosa · Espacio Despertar-Nos" },
      {
        property: "og:description",
        content:
          "A veces no necesitamos encontrar el camino. Necesitamos atrevernos a caminarlo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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

      {/* MI HISTORIA */}
      <Section tone="cream" glow id="mi-historia">
        <SectionHeading
          eyebrow="Mi historia"
          title="Yo también tuve que aprender a soltar"
          intro="Yo sabía quién era y hacia dónde quería dirigirme. Lo que tuve que aprender fue a soltar aquello que me impedía caminar hacia donde mi corazón me llamaba."
        />

        <div className="mt-16 space-y-20 md:mt-24 md:space-y-28">
          <article className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-16">
            <div className="relative">
              <img
                src={rosaMeditacion.url}
                alt="Rosa en un momento de meditación y escucha interior"
                width={768}
                height={852}
                className="aspect-[4/5] w-full rounded-2xl object-cover object-center shadow-[var(--shadow-glow)]"
                loading="lazy"
              />
              <span className="frequency-ribbon -bottom-8" aria-hidden="true" />
            </div>
            <div>
              <p className="eyebrow">01 · La separación y el miedo</p>
              <div className="mt-6 space-y-5 leading-relaxed text-muted-foreground">
                <p>
                  Cuando me separé del padre de mi hijo, yo sabía quién era y sabía hacia dónde
                  quería dirigirme.
                </p>
                <Quote>“No estaba perdida. Pero tenía miedo.”</Quote>
                <p>
                  Miedo a criar a mi hijo sola, a cerrar una etapa como familia, concepto que había
                  sido tan importante para mí.
                </p>
                <p>
                  Fue uno de esos momentos en los que, aunque por fuera sigues adelante, por dentro
                  sientes que algo se ha roto y te invade una profunda soledad.
                </p>
              </div>
            </div>
          </article>

          <article className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-16">
            <div className="md:order-2">
              <img
                src={rosaYogaSala.url}
                alt="Rosa practicando Yoga Kundalini en su sala luminosa"
                width={768}
                height={852}
                className="aspect-[4/5] w-full rounded-2xl object-cover object-center shadow-[var(--shadow-glow)]"
                loading="lazy"
              />
            </div>
            <div className="md:order-1">
              <p className="eyebrow">02 · Parar y escucharme</p>
              <div className="mt-6 space-y-5 leading-relaxed text-muted-foreground">
                <p>
                  Llegó un momento en el que tuve que parar para empezar a escuchar lo que estaba
                  pasando dentro de mí.
                </p>
                <p>
                  El Yoga Kundalini, el trabajo interior y todas las formaciones que fui realizando
                  y rescatando del baúl de los recuerdos se convirtieron entonces en mucho más que
                  herramientas: fueron mi refugio y, poco a poco, mi camino de regreso.
                </p>
                <p>
                  Empecé a reconstruirme, a reconocer mi valor, a recuperar mi confianza, a aprender
                  a ponerme en mi lugar, a soltar cargas que no me correspondían, a entender muchas
                  cosas de mi historia y de mi familia y, sobre todo, a volver a escucharme.
                </p>
                <p className="text-foreground">
                  Con el tiempo comprendí algo que hoy forma parte de mi manera de acompañar: a veces
                  necesitamos atravesar una etapa de ruptura para descubrir que también podemos
                  volver a elegirnos.
                </p>
                <p>No fue un camino rápido ni perfecto. Fue un camino real.</p>
              </div>
            </div>
          </article>

          <article className="mx-auto max-w-4xl border-y border-gold/40 py-12 text-center md:py-16">
            <p className="eyebrow">03 · La pregunta que cambió el rumbo</p>
            <p className="mt-7 font-display text-3xl leading-tight text-earth italic md:text-5xl">
              “¿Qué pasaría si me atreviera a caminar hacia aquello que realmente sentía mi
              corazón?”
            </p>
            <div className="mx-auto mt-9 max-w-2xl space-y-5 leading-relaxed text-muted-foreground">
              <p>Tras esta dura etapa apareció esa pregunta.</p>
              <p>Decidí dejar mi negocio de más de treinta años. Qué loca, ¿no?</p>
              <p>
                Había sido una parte fundamental de mi vida. Había construido mucho, había trabajado,
                había sostenido responsabilidades desde muy jovencita y había aprendido a salir
                adelante. Pero sentía que ya había cumplido su propósito.
              </p>
              <p>Mi negación a escuchar a mi alma me hacía sentir enferma.</p>
              <p>
                Los futuros inciertos con un hijo dan mucho vértigo. Pero mi hijo también fue una
                inspiración para mí. Quería transmitirle, con mi propia vida, que lo más importante
                en esta vida es amarse y ser fiel a uno mismo. Y ese deseo me dio las fuerzas
                necesarias para hacerlo.
              </p>
            </div>
          </article>

          <article className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-16">
            <div className="relative">
              <img
                src={altarLuz.url}
                alt="Altar de Espacio Despertar-Nos entre plantas y luz natural"
                width={768}
                height={852}
                className="aspect-[4/5] w-full rounded-2xl object-cover object-center shadow-[var(--shadow-glow)]"
                loading="lazy"
              />
            </div>
            <div>
              <p className="eyebrow">04 · Soltar el negocio y las viejas creencias</p>
              <h3 className="mt-5 font-display text-4xl leading-tight text-earth md:text-6xl">
                Había que soltar.
              </h3>
              <div className="mt-7 space-y-5 leading-relaxed text-muted-foreground">
                <p>Soltar miedos. Soltar viejas creencias.</p>
                <p>
                  Soltar la necesidad de tenerlo todo bajo control. Soltar una forma de vida que
                  conocía muy bien.
                </p>
                <p>
                  Y soltar una mochila que durante mucho tiempo había llevado conmigo y que ya no me
                  correspondía seguir cargando.
                </p>
                <p>
                  Escucharme con claridad y armarme de valor me ayudaron en mi propósito y, sobre
                  todo, a confiar. A reconocer mis capacidades. A conectar de nuevo con esa parte de
                  mí que siempre había sabido que había algo más.
                </p>
              </div>
            </div>
          </article>

          <article className="relative overflow-hidden rounded-2xl bg-sage-deep px-7 py-14 text-primary-foreground shadow-[var(--shadow-glow)] md:px-16 md:py-20">
            <span className="frequency-ribbon top-8 opacity-40" aria-hidden="true" />
            <div className="relative mx-auto max-w-3xl">
              <p className="eyebrow text-primary-foreground/70">05 · Emprender desde el corazón</p>
              <h3 className="mt-6 font-display text-4xl leading-tight md:text-6xl">Desde el corazón.</h3>
              <div className="mt-8 space-y-5 text-base leading-relaxed text-primary-foreground/80 md:text-lg">
                <p>Y llegó el momento de cerrar mi negocio y emprender desde otro lugar.</p>
                <p>
                  No porque tuviera todas las respuestas, sino porque por fin estaba dispuesta a
                  confiar en el camino.
                </p>
                <p className="font-display text-3xl text-primary-foreground italic">¡Qué liberación!</p>
              </div>
            </div>
          </article>

          <article className="grid gap-10 md:grid-cols-[0.75fr_1.25fr] md:gap-16">
            <div>
              <p className="eyebrow">06 · Lo que hoy sé</p>
              <h3 className="mt-5 font-display text-3xl leading-tight text-earth md:text-5xl">
                Hoy sé que soltar no significa renunciar a lo que has sido.
              </h3>
              <p className="mt-6 text-lg leading-relaxed text-foreground">
                Significa agradecer lo vivido y permitirte caminar hacia lo que ahora eres.
              </p>
            </div>
            <div className="space-y-5 leading-relaxed text-muted-foreground">
              <p>Y eso es algo que también forma parte de mi manera de acompañar a otras personas.</p>
              <Quote>
                “Necesitamos dejar de cargar con aquello que ya no nos corresponde para poder ser
                quienes realmente somos.”
              </Quote>
              <p>
                No fue la separación en sí lo que me hizo encontrar mi camino. Fue lo que vino
                después: soltar miedo, creencias y una identidad profesional construida durante
                muchos años.
              </p>
              <p>
                Mi propio camino me enseñó que cuando soltamos el miedo, las creencias y las cargas
                que hemos llevado durante demasiado tiempo, aparece espacio para algo nuevo.
              </p>
              <p>
                Y precisamente por haberlo vivido, sé que cuando una persona llega a mí sintiendo que
                ha perdido el rumbo, que carga demasiado o que ya no sabe cómo salir de un patrón, no
                necesita que alguien le diga simplemente: “tienes que ser fuerte”.
              </p>
              <p>Necesita un espacio donde pueda parar, sentirse escuchada y empezar a mirar.</p>
              <p>
                Quizá por eso hoy acompaño de una manera tan diferente. Porque sé lo que significa
                estar al otro lado. Sé lo que significa sentir que tienes que poder con todo.
              </p>
              <p className="text-foreground">
                Y también sé que, incluso cuando parece que hemos perdido el camino, podemos volver a
                encontrarnos.
              </p>
            </div>
          </article>

          <article className="mx-auto max-w-4xl text-center">
            <p className="eyebrow">07 · El nacimiento de Espacio Despertar-Nos</p>
            <div className="mt-8 space-y-3 font-display text-3xl leading-tight text-earth md:text-5xl">
              <p>Volver a escuchar nuestra propia voz.</p>
              <p>Volver a conectar con nuestra alma.</p>
              <p>Volver a caminar la vida desde el corazón.</p>
            </div>
            <p className="mt-9 text-lg leading-relaxed text-muted-foreground">Ese fue mi camino.</p>
            <p className="mt-3 text-lg leading-relaxed text-muted-foreground">Y desde ahí nace hoy:</p>
            <h3 className="mt-7 font-display text-4xl leading-tight md:text-6xl">
              Espacio Despertar-Nos
            </h3>
            <span className="rule-line mx-auto mt-7" />
            <p className="mx-auto mt-10 max-w-3xl font-display text-2xl leading-snug text-earth italic md:text-3xl">
              “Quizá por eso hoy no te pido que seas fuerte. Te ofrezco un espacio donde puedas
              parar, mirar, soltar y volver a escucharte.”
            </p>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-foreground">
              No necesitas saber qué terapia necesitas. Solo necesitas contarme qué estás viviendo.
            </p>
            <a
              href={whatsappUrl("Hola Rosa, quiero contarte qué estoy viviendo.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex rounded-full bg-primary px-7 py-3.5 text-xs tracking-[0.14em] text-primary-foreground uppercase shadow-[var(--shadow-glow)] transition-opacity hover:opacity-90"
            >
              Hablar con Rosa
            </a>
          </article>
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
