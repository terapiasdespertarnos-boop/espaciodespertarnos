import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/site/Section";
import { CtaBand } from "@/components/site/CtaBand";
import naturaleza from "@/assets/naturaleza.jpg";

export const Route = createFileRoute("/retiros")({
  head: () => ({
    meta: [
      { title: "Retiros, talleres y encuentros · Espacio Despertar-Nos" },
      {
        name: "description",
        content:
          "Retiros y encuentros para salir de la rutina, descansar y escucharte: cuerpo, movimiento, reflexión y experiencias compartidas.",
      },
      { property: "og:title", content: "Retiros y encuentros · Espacio Despertar-Nos" },
      {
        property: "og:description",
        content: "A veces necesitamos salir de nuestra rutina para poder escucharnos.",
      },
      { property: "og:url", content: "/retiros" },
    ],
    links: [{ rel: "canonical", href: "/retiros" }],
  }),
  component: Retiros,
});

function Retiros() {
  return (
    <>
      <Section tone="cream">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <SectionHeading
            eyebrow="Retiros y encuentros"
            title="A veces necesitamos salir de nuestra rutina para poder escucharnos."
            intro="Unos días fuera cambian la escucha. Sin agenda que cumplir, sin nadie a quien sostener."
          />
          <img
            src={naturaleza}
            alt="Hojas y espigas naturales sobre fondo claro"
            loading="lazy"
            width={1200}
            height={800}
            className="rounded-2xl object-cover"
          />
        </div>
      </Section>

      <Section>
        <SectionHeading title="Qué suele haber en un retiro" />
        <ul className="mt-12 flex flex-wrap gap-3">
          {[
            "Conexión",
            "Descanso",
            "Movimiento",
            "Reflexión",
            "Convivencia",
            "Crecimiento personal",
            "Trabajo corporal y emocional",
            "Experiencias compartidas",
          ].map((i) => (
            <li key={i} className="rounded-full border border-border bg-cream px-5 py-2.5 text-sm">
              {i}
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="sand">
        <SectionHeading
          title="Próximos encuentros"
          intro="Aquí se irán publicando las próximas fechas, lugares y detalles de cada retiro o taller."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-2xl border border-dashed border-earth/25 p-8 text-sm text-muted-foreground"
            >
              <p className="eyebrow">Próximamente</p>
              <p className="mt-4 font-display text-xl text-foreground">Nuevo encuentro</p>
              <p className="mt-3">Espacio preparado para anunciar fecha, lugar y programa.</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand
        title="¿Quieres enterarte del próximo retiro?"
        text="Escríbeme y te aviso cuando haya nuevas fechas."
        buttonLabel="Avísame del próximo"
      />
    </>
  );
}
