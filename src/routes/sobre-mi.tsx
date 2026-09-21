import { createFileRoute } from "@tanstack/react-router";
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
            <p className="eyebrow">Soy Rosa</p>
            <h1 className="mt-6 font-display text-4xl leading-[1.1] md:text-5xl lg:text-6xl">
              Yo también tuve que aprender a soltar
            </h1>
            <span className="rule-line mt-6" />
            <p className="mt-7 text-lg leading-relaxed text-earth md:text-xl">
              Cuando me separé del padre de mi hijo, yo sabía quién era y sabía hacia dónde quería
              dirigirme. No estaba perdida. Pero tenía miedo.
            </p>
            <p className="mt-8 font-display text-2xl leading-snug text-earth italic md:text-3xl">
              Esta es mi historia, contada desde lo vivido.
            </p>
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

      {/* MI HISTORIA */}
      <Section tone="cream" glow id="mi-historia">
        <SectionHeading eyebrow="Mi camino" title="Una historia de escucha, valor y transformación" />

        <div className="mt-16 space-y-20 md:mt-24 md:space-y-28">
          <article className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-16">
            <div className="relative">
              <img
                src={rosaCuenco.url}
                alt="Rosa trabajando con un cuenco en su espacio"
                width={768}
                height={852}
                className="aspect-[4/5] w-full rounded-2xl object-cover object-center shadow-[var(--shadow-glow)]"
                loading="lazy"
              />
              <span className="frequency-ribbon -bottom-8" aria-hidden="true" />
            </div>
            <div>
              <p className="eyebrow">01 · El miedo</p>
              <div className="mt-6 space-y-5 leading-relaxed text-muted-foreground">
                <p>
                  Cuando me separé del padre de mi hijo, yo sabía quién era y sabía hacia dónde quería
                  dirigirme.
                </p>
                <Quote>“No estaba perdida. Pero tenía miedo.”</Quote>
                <div className="space-y-2 text-foreground">
                  <p>Miedo a criar a mi hijo sola.</p>
                  <p>Miedo a cerrar una etapa familiar que había sido muy importante para mí.</p>
                  <p>Miedo a lo que vendría después.</p>
                </div>
                <p>
                  La separación trajo consigo una profunda sensación de soledad y, en medio de todo
                  aquello, sentí que necesitaba parar y escuchar qué estaba pasando dentro de mí.
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
              <p className="eyebrow">02 · Volver a mí</p>
              <div className="mt-6 space-y-5 leading-relaxed text-muted-foreground">
                <p>
                  Fue entonces cuando el Yoga Kundalini, el trabajo interior y muchas de las
                  formaciones que había ido haciendo a lo largo de los años —y que estaban ahí, en mi
                  particular “baúl de los recuerdos”— volvieron a cobrar sentido.
                </p>
                <Quote>
                  “Se convirtieron en un refugio, pero también en un camino de regreso a mí.”
                </Quote>
                <p>Poco a poco fui reconstruyéndome.</p>
                <p>
                  Empecé a reconocer mi valor, a recuperar la confianza en mí misma y en mis
                  capacidades, a entender mi historia y mi sistema familiar y, sobre todo, a aprender
                  a ocupar mi lugar.
                </p>
              </div>
            </div>
          </article>

          <article className="mx-auto max-w-4xl border-y border-gold/40 py-12 md:py-16">
            <p className="eyebrow">03 · Aprender a soltar</p>
            <h3 className="mt-6 font-display text-3xl leading-tight text-earth md:text-5xl">
              También tuve que empezar a soltar.
            </h3>
            <div className="mt-8 grid gap-3 text-lg leading-relaxed text-foreground md:text-xl">
              <p>Soltar miedos.</p>
              <p>Soltar antiguas creencias.</p>
              <p>Soltar la necesidad de tenerlo todo bajo control.</p>
              <p>
                Soltar una mochila que había llevado durante muchos años y que, en realidad, ya no
                necesitaba seguir cargando.
              </p>
            </div>
          </article>

          <article className="mx-auto max-w-4xl py-4 text-center md:py-8">
            <p className="eyebrow">04 · La pregunta</p>
            <p className="mt-7 font-display text-3xl leading-tight text-earth italic md:text-5xl">
              “¿Qué pasaría si me atreviera a caminar hacia aquello que realmente sentía mi corazón?”
            </p>
          </article>

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
            </div>
            <div>
              <p className="eyebrow">05 · Cerrar una etapa</p>
              <div className="mt-6 space-y-5 leading-relaxed text-muted-foreground">
                <p>
                  Después de más de 30 años dedicados a mi negocio, llegó el momento de tomar una
                  decisión que, para muchos, podía parecer una locura.
                </p>
                <h3 className="font-display text-3xl leading-tight text-earth md:text-4xl">
                  Cerrar una etapa profesional que había sido fundamental en mi vida.
                </h3>
                <p>
                  Había trabajado muchísimo, había construido, había sostenido responsabilidades desde
                  muy joven y había aprendido a salir adelante.
                </p>
                <p>
                  Pero algo dentro de mí me decía que aquella etapa había cumplido su propósito.
                </p>
                <p className="text-foreground">Mi negación a escuchar a mi alma me hacía sentir enferma.</p>
                <p>Y sí… daba vértigo.</p>
                <p>Especialmente teniendo un hijo y sin saber exactamente qué iba a ocurrir después.</p>
                <p>
                  Pero también había algo que quería transmitirle a él: que lo más importante es
                  aprender a quererse, ser fiel a uno mismo y tener el valor de elegir la vida que
                  realmente sentimos.
                </p>
                <p>Eso me dio fuerza.</p>
                <p className="font-display text-3xl text-earth">Había que soltar.</p>
                <p>Y soltar no significaba renunciar a todo lo que había sido.</p>
                <p>
                  Significaba agradecer lo vivido y permitirme caminar hacia quien estaba siendo ahora.
                </p>
              </div>
            </div>
          </article>

          <article className="relative overflow-hidden rounded-2xl bg-sage-deep px-7 py-14 text-primary-foreground shadow-[var(--shadow-glow)] md:px-16 md:py-20">
            <span className="frequency-ribbon top-8 opacity-40" aria-hidden="true" />
            <div className="relative mx-auto max-w-3xl">
              <p className="eyebrow text-primary-foreground/70">06 · Desde el corazón</p>
              <div className="mt-7 space-y-5 text-base leading-relaxed text-primary-foreground/80 md:text-lg">
                <p>Así que cerré mi negocio y decidí empezar desde otro lugar.</p>
                <h3 className="font-display text-4xl leading-tight text-primary-foreground md:text-6xl">
                  Desde el corazón.
                </h3>
                <p className="font-display text-2xl leading-snug text-primary-foreground md:text-3xl">
                  “No porque tuviera todas las respuestas, sino porque, por fin, estaba dispuesta a
                  confiar en el camino.”
                </p>
                <p className="font-display text-3xl text-primary-foreground italic">¡Qué liberación!</p>
              </div>
            </div>
          </article>

          <article className="grid gap-10 md:grid-cols-[0.75fr_1.25fr] md:gap-16">
            <div>
              <p className="eyebrow">07 · De mi experiencia a mi forma de acompañar</p>
              <h3 className="mt-5 font-display text-3xl leading-tight text-earth md:text-5xl">
                A veces no necesitamos que alguien nos diga que tenemos que ser más fuertes.
              </h3>
            </div>
            <div className="space-y-5 leading-relaxed text-muted-foreground">
              <p>
                Y fue precisamente en ese proceso donde comprendí algo que hoy forma parte de mi
                manera de acompañar a otras personas:
              </p>
              <Quote>“Necesitamos un lugar donde poder parar.”</Quote>
              <p>Donde sentirnos escuchados.</p>
              <p>
                Donde poder mirar lo que nos está pasando sin juicio y empezar a distinguir qué es
                nuestro y qué hemos estado cargando durante demasiado tiempo.
              </p>
            </div>
          </article>

          <article className="mx-auto max-w-4xl border-y border-gold/40 py-12 md:py-16">
            <p className="eyebrow">08 · Lo que llevamos encima</p>
            <p className="mt-7 font-display text-3xl leading-tight text-earth italic md:text-5xl">
              “Porque no todo lo que llevamos encima nos pertenece.”
            </p>
            <div className="mt-9 space-y-5 leading-relaxed text-muted-foreground">
              <p>La separación no fue, por sí sola, lo que me hizo encontrar mi camino.</p>
              <p>Fue todo lo que vino después:</p>
              <p className="text-lg text-foreground">
                soltar el miedo, cuestionar antiguas creencias, liberar cargas y dejar atrás una
                identidad profesional que había construido durante muchos años.
              </p>
              <p>Cuando soltamos aquello que ya no necesitamos, aparece espacio.</p>
              <p>Y en ese espacio podemos volver a escuchar nuestra propia voz.</p>
              <p>Podemos reconectar con nosotros mismos.</p>
              <p>
                Podemos recordar quiénes somos y caminar la vida desde un lugar más auténtico.
              </p>
            </div>
          </article>

          <article className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-16">
            <div className="md:order-2">
              <img
                src={altarLuz.url}
                alt="Espacio Despertar-Nos entre plantas y luz natural"
                width={768}
                height={852}
                className="aspect-[4/5] w-full rounded-2xl object-cover object-center shadow-[var(--shadow-glow)]"
                loading="lazy"
              />
            </div>
            <div className="md:order-1">
              <p className="eyebrow">09 · El nacimiento de Espacio Despertar-Nos</p>
              <h3 className="mt-6 font-display text-4xl leading-tight text-earth md:text-6xl">
                Desde ahí nace Espacio Despertar-Nos.
              </h3>
              <div className="mt-8 space-y-5 leading-relaxed text-muted-foreground">
                <p>
                  Un espacio creado desde mi propia experiencia y desde todo lo que he aprendido y
                  sigo aprendiendo en este camino.
                </p>
                <p>
                  Hoy acompaño a otras personas en sus procesos de transformación, no desde tener
                  todas las respuestas, sino desde haber aprendido también a escuchar, a mirar, a
                  soltar y a confiar.
                </p>
              </div>
              <p className="mt-10 border-l-2 border-gold/70 pl-6 font-display text-3xl leading-snug text-earth italic md:text-4xl">
                “Porque yo también he tenido que aprender a soltar.”
              </p>
            </div>
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
