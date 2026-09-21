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
      {
        property: "og:description",
        content: "Diferentes herramientas. Una misma intención: ayudarte a volver a ti.",
      },
      { property: "og:url", content: "/herramientas" },
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
  "LNT",
];

function Herramientas() {
  return (
    <>
      <Section tone="cream">
        <SectionHeading
          eyebrow="Mis herramientas"
          title="Diferentes herramientas. Una misma intención: ayudarte a volver a ti."
          intro="No presento cada técnica como algo independiente. Las utilizo, combino o dejo de lado según lo que percibo que necesita cada persona."
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
              Soy profesora de Yoga Kundalini con más de 17 años de experiencia. Utilizo el yoga
              como una herramienta de conciencia, equilibrio, presencia y conexión con uno mismo.
            </p>
            <ul className="grid gap-2 text-sm">
              {[
                "Clases de Yoga Kundalini",
                "Prácticas de respiración",
                "Meditaciones",
                "Mantras",
                "Movimiento consciente",
                "Trabajo corporal y energético",
              ].map((i) => (
                <li key={i} className="border-b border-border pb-2">
                  {i}
                </li>
              ))}
            </ul>
            <Link to="/yoga" className="inline-block text-xs tracking-[0.16em] text-clay uppercase">
              Ver la sección de yoga
            </Link>
          </div>
        </div>
      </Section>

      {/* LNT */}
      <Section tone="sand">
        <div className="grid gap-10 md:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="eyebrow">02</p>
            <h2 className="mt-3 text-3xl md:text-4xl">LNT · Sanación energética cuántica</h2>
          </div>
          <div className="space-y-5 leading-relaxed text-muted-foreground">
            <p>
              Si sientes bloqueos a nivel físico, emocional o espiritual, esta terapia puede
              ayudarte a recuperar el equilibrio.
            </p>
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
            <p className="text-sm">
              No sustituye los tratamientos médicos: los complementa.
            </p>
            <p>
              En la modalidad presencial, la sesión se repite cada 15-20 días hasta notar mejoría.
              A distancia, el tratamiento se determina mediante radiestesia, que indica tanto el
              número de semanas necesarias como la frecuencia adecuada para cada caso.
            </p>
            <p className="font-display text-2xl md:text-3xl leading-snug text-[var(--sage-deep)]">
              <span className="mr-1 align-top text-3xl md:text-4xl text-[var(--gold)]">«</span>
              Los resultados no paran de sorprenderme, es fascinante.
              <span className="ml-1 align-bottom text-3xl md:text-4xl text-[var(--gold)]">»</span>
            </p>
          </div>
        </div>
      </Section>

      {/* CONSTELACIONES */}
      <Section>
        <p className="eyebrow">03</p>
        <h2 className="mt-3 text-3xl md:text-4xl">Constelaciones familiares</h2>
        <p className="mt-4 max-w-3xl text-lg leading-snug text-[var(--sage-deep)] font-display md:text-xl">
          ¿Y si parte de lo que cargas no te corresponde?
        </p>
        <span className="rule-line mt-7" />
        <div className="mt-10 grid gap-10 md:grid-cols-2">
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

      {/* COACHING */}
      <Section tone="cream">
        <div className="grid gap-10 md:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="eyebrow">04</p>
            <h2 className="mt-3 text-3xl md:text-4xl">Coaching ontológico</h2>
          </div>
          <div className="space-y-5 leading-relaxed text-muted-foreground">
            <p>
              Hay momentos en los que sabemos que queremos cambiar algo, pero no encontramos la
              manera de hacerlo. En el coaching trabajamos desde la conversación y la reflexión
              para observar aquello que estás viviendo desde otra perspectiva. Puede ser presencial
              u online.
            </p>
            <p>
              A través de preguntas y nuevas formas de mirar una situación, puedes descubrir
              posibilidades que antes no estabas viendo y decidir qué acciones quieres llevar a
              cabo. Porque cuando cambia nuestra manera de observar, también pueden cambiar
              nuestras posibilidades de actuar.
            </p>
            <ul className="flex flex-wrap gap-2">
              {[
                "Tomar decisiones",
                "Poner límites",
                "Cambiar patrones",
                "Mejorar relaciones",
                "Salir de bloqueos",
                "Recuperar capacidad de elección",
              ].map((i) => (
                <li
                  key={i}
                  className="rounded-full border border-border bg-background px-4 py-2 text-xs"
                >
                  {i}
                </li>
              ))}
            </ul>
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
              persona siente que necesitan ser comprendidos. No afirmo que lo que aparece sean
              recuerdos objetivamente verdaderos: lo importante es el sentido que tiene para ti y
              lo que te permite comprender.
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

      <CtaBand />
    </>
  );
}
