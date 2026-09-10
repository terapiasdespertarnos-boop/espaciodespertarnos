import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionHeading, Quote } from "@/components/site/Section";
import { CtaBand } from "@/components/site/CtaBand";
import { whatsappUrl } from "@/lib/site";
import hero from "@/assets/hero.jpg";
import naturaleza from "@/assets/naturaleza.jpg";
import calma from "@/assets/calma.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Espacio Despertar-Nos · Acompañamiento integral con Rosa" },
      {
        name: "description",
        content:
          "Un espacio para parar, escucharte y soltar lo que ya no necesitas cargar. Yoga kundalini, constelaciones familiares, coaching ontológico, regresiones y limpiezas energéticas.",
      },
      { property: "og:title", content: "Espacio Despertar-Nos · Acompañamiento integral" },
      {
        property: "og:description",
        content:
          "No necesitas saber qué terapia necesitas. Solo necesitas contarme qué estás viviendo.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const frases = [
  "Siempre me pasa lo mismo.",
  "Siento que cargo con todo.",
  "No consigo avanzar.",
  "Doy mucho y recibo muy poco.",
  "Me cuesta poner límites.",
  "Siempre termino repitiendo las mismas historias.",
  "Siento que algo me bloquea.",
  "Estoy cansada de entenderlo todo con la cabeza.",
  "Quiero dejar de sentirme responsable de todo.",
  "Necesito saber qué es mío y qué no.",
  "Quiero sentirme más ligera.",
  "Quiero volver a disfrutar de mi vida.",
];

const pasos = [
  {
    n: "01",
    t: "Escuchar",
    d: "Conocer qué estás viviendo y qué necesitas.",
  },
  {
    n: "02",
    t: "Mirar",
    d: "Observar aquello que puede estar detrás del bloqueo, del patrón o de la situación.",
  },
  {
    n: "03",
    t: "Elegir",
    d: "Determinar qué herramienta o combinación de herramientas puede acompañar mejor tu proceso.",
  },
  {
    n: "04",
    t: "Acompañar",
    d: "Caminar contigo con respeto, sensibilidad y sin imponer interpretaciones.",
  },
];

const dimensiones = [
  "Cuerpo",
  "Emociones",
  "Mente",
  "Relaciones",
  "Historia familiar",
  "Patrones repetitivos",
  "Energía",
  "Espacios",
  "Experiencias del pasado",
  "Conciencia personal",
];

const herramientas = [
  { t: "Yoga Kundalini", d: "Conciencia, respiración, presencia y trabajo corporal.", to: "/yoga" },
  {
    t: "Constelaciones familiares",
    d: "Mirar patrones y dinámicas familiares desde otra perspectiva.",
    to: "/herramientas",
  },
  {
    t: "Coaching ontológico",
    d: "Revisar cómo interpretamos, decidimos y ponemos límites.",
    to: "/herramientas",
  },
  {
    t: "Regresiones",
    d: "Explorar experiencias que sientes que necesitan ser comprendidas.",
    to: "/herramientas",
  },
  {
    t: "LNT y técnicas energéticas",
    d: "Acompañamiento energético dentro de un proceso personalizado.",
    to: "/herramientas",
  },
  {
    t: "Limpiezas energéticas",
    d: "Personas, hogares y negocios que necesitan renovarse.",
    to: "/limpiezas-energeticas",
  },
] as const;

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src={hero}
          alt="Habitación luminosa y serena con luz natural, tonos crema y verde salvia"
          width={1600}
          height={1104}
          className="absolute inset-0 -z-10 size-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background/95 via-background/85 to-background/40" />
        <div className="container-prose px-6 py-28 md:py-44">
          <div className="max-w-2xl fade-up">
            <p className="eyebrow">Espacio Despertar-Nos</p>
            <h1 className="mt-6 font-display text-4xl leading-[1.1] md:text-6xl">
              Hay momentos en los que seguir tirando ya no es la solución.
            </h1>
            <p className="mt-7 text-lg leading-relaxed text-earth md:text-xl">
              Un espacio para parar, escucharte, comprender lo que estás viviendo y empezar a
              soltar lo que ya no necesitas cargar.
            </p>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
              Acompañamiento integral a través del yoga, coaching, constelaciones familiares,
              regresiones, técnicas energéticas, limpiezas de personas y espacios, LNT y otras
              herramientas de sanación y transformación.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-primary px-7 py-3.5 text-xs tracking-[0.14em] text-primary-foreground uppercase transition-opacity hover:opacity-90"
              >
                Quiero hablar con Rosa
              </a>
              <Link
                to="/como-puedo-ayudarte"
                className="rounded-full border border-earth/30 px-7 py-3.5 text-xs tracking-[0.14em] uppercase transition-colors hover:bg-sand"
              >
                Descubrir cómo puedo ayudarte
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MENSAJE CENTRAL */}
      <Section tone="cream">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-center">
          <p className="font-display text-3xl leading-snug md:text-5xl">
            No necesitas saber qué terapia necesitas. Solo necesitas contarme qué estás viviendo.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            No trabajo con una técnica. Trabajo contigo. Tengo diferentes herramientas y, desde mi
            experiencia y sensibilidad, observo qué necesita cada persona y qué camino puede ser
            más adecuado para ella.
          </p>
        </div>
      </Section>

      {/* ¿TE RECONOCES? */}
      <Section>
        <SectionHeading
          eyebrow="¿Te reconoces?"
          title="Quizá no sabes exactamente qué te pasa. Pero sabes que algo tiene que cambiar."
        />
        <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {frases.map((f) => (
            <li
              key={f}
              className="soft-card px-6 py-5 text-[0.95rem] leading-relaxed text-earth italic"
            >
              «{f}»
            </li>
          ))}
        </ul>
        <p className="mt-12 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Si algo de esto te resulta familiar, quizá no necesites seguir buscando respuestas por tu
          cuenta. Quizá necesites un espacio seguro donde poder mirar lo que está ocurriendo desde
          otra perspectiva.
        </p>
      </Section>

      {/* MI FORMA DE ACOMPAÑAR */}
      <Section tone="sand">
        <SectionHeading
          eyebrow="Mi forma de acompañar"
          title="No necesitas saber qué herramienta necesitas."
          intro="Puedes venir con una preocupación, un bloqueo, una relación que se repite, una sensación que no sabes explicar, un cansancio emocional o simplemente con la sensación de que necesitas cambiar algo en tu vida."
        />
        <p className="mt-8 max-w-3xl leading-relaxed text-muted-foreground">
          Mi trabajo comienza escuchándote. Después observo qué puede estar ocurriendo y, desde mi
          experiencia y sensibilidad, puedo utilizar una u otra herramienta, o combinar diferentes
          técnicas.
        </p>
        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pasos.map((p) => (
            <li key={p.n} className="border-t border-earth/20 pt-6">
              <span className="font-display text-3xl text-clay">{p.n}</span>
              <h3 className="mt-3 text-sm tracking-[0.18em] uppercase">{p.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
            </li>
          ))}
        </ol>
        <div className="mt-14">
          <Quote>
            No vengo a decirte cómo tienes que vivir. Te acompaño a mirar para que puedas elegir de
            otra manera.
          </Quote>
        </div>
      </Section>

      {/* MIRADA INTEGRAL */}
      <Section>
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <SectionHeading
              eyebrow="Mi mirada integral"
              title="Porque tú no eres solo una parte de ti."
            />
            <div className="mt-8 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                A veces necesitamos trabajar el cuerpo. Otras veces necesitamos comprender una
                emoción. En ocasiones necesitamos mirar nuestra historia familiar.
              </p>
              <p>
                Otras veces necesitamos liberar un bloqueo, cerrar un proceso o simplemente
                aprender a relacionarnos de otra manera con lo que estamos viviendo.
              </p>
              <p className="text-foreground">
                Por eso no parto de una técnica. Parto de la persona.
              </p>
            </div>
            <ul className="mt-8 flex flex-wrap gap-2">
              {dimensiones.map((d) => (
                <li
                  key={d}
                  className="rounded-full border border-border bg-cream px-4 py-2 text-xs tracking-wide text-earth"
                >
                  {d}
                </li>
              ))}
            </ul>
          </div>
          <img
            src={naturaleza}
            alt="Hojas de salvia y espigas secas sobre una pared clara"
            loading="lazy"
            width={1200}
            height={800}
            className="rounded-2xl object-cover"
          />
        </div>
      </Section>

      {/* NO TODO LO QUE CARGAS ES TUYO */}
      <Section tone="deep">
        <h2 className="max-w-4xl text-4xl leading-[1.05] text-primary-foreground md:text-7xl">
          No todo lo que cargas es tuyo.
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="space-y-4 leading-relaxed text-primary-foreground/85">
            <p>A veces confundimos amor con responsabilidad.</p>
            <p>
              Nos hacemos cargo de nuestros padres, nuestros hijos, nuestra pareja, nuestros
              hermanos, nuestro trabajo y de todo aquello que creemos que necesita ser sostenido.
            </p>
            <p>
              Hasta que un día nos damos cuenta de que estamos agotados y apenas queda espacio para
              nosotros.
            </p>
          </div>
          <div className="space-y-6 leading-relaxed text-primary-foreground/85">
            <p>
              Parte de mi trabajo consiste precisamente en ayudarte a mirar qué estás cargando, de
              dónde puede venir y qué puedes empezar a soltar.
            </p>
            <a
              href={whatsappUrl("Hola Rosa, quiero dejar de cargar con todo. ¿Podemos hablar?")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-primary-foreground px-7 py-3.5 text-xs tracking-[0.14em] text-sage-deep uppercase"
            >
              Quiero dejar de cargar con todo
            </a>
          </div>
        </div>
      </Section>

      {/* HERRAMIENTAS RESUMEN */}
      <Section tone="cream">
        <SectionHeading
          eyebrow="Mis herramientas"
          title="Diferentes herramientas. Una misma intención: ayudarte a volver a ti."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {herramientas.map((h) => (
            <Link
              key={h.t}
              to={h.to}
              className="soft-card group block p-7 transition-colors hover:bg-sand"
            >
              <h3 className="text-xl">{h.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{h.d}</p>
              <span className="mt-5 inline-block text-[0.7rem] tracking-[0.18em] text-clay uppercase">
                Saber más
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* MEDIUMNIDAD BREVE */}
      <Section>
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <img
            src={calma}
            alt="Una vela encendida en un cuenco de barro junto a una ventana"
            loading="lazy"
            width={1200}
            height={900}
            className="rounded-2xl object-cover"
          />
          <div>
            <SectionHeading
              eyebrow="Mediumnidad y presencias"
              title="Hay cosas que no siempre se ven, pero sí se sienten."
              intro="A lo largo de mi camino he desarrollado una sensibilidad especial que forma parte de mi manera de percibir determinadas personas, espacios y situaciones."
            />
            <p className="mt-8 leading-relaxed text-muted-foreground">
              Cuando percibo que puede ser necesario, acompaño ese proceso desde el respeto, la
              calma y la sensibilidad. Sin miedo y sin dramatizar.
            </p>
            <Link
              to="/mediumnidad"
              className="mt-8 inline-flex rounded-full border border-earth/30 px-7 py-3.5 text-xs tracking-[0.14em] uppercase transition-colors hover:bg-sand"
            >
              Leer más sobre esto
            </Link>
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
