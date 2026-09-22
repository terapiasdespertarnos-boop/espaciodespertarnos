import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/site/Section";
import { CtaBand } from "@/components/site/CtaBand";
import almitaTunel from "@/assets/almita-tunel-v1.png";

export const Route = createFileRoute("/mediumnidad")({
  head: () => ({
    meta: [
      { title: "Mediumnidad y acompañamiento de presencias · Rosa" },
      {
        name: "description",
        content:
          "Una sensibilidad que forma parte de mi manera de percibir personas, espacios y situaciones. Acompaño presencias desde el respeto, la calma y sin dramatizar.",
      },
      { property: "og:title", content: "Mediumnidad y acompañamiento de presencias" },
      {
        property: "og:description",
        content: "Hay cosas que no siempre se ven, pero sí se sienten.",
      },
      { property: "og:url", content: "/mediumnidad" },
    ],
    links: [{ rel: "canonical", href: "/mediumnidad" }],
  }),
  component: Mediumnidad,
});

function Mediumnidad() {
  return (
    <>
      <Section tone="cream" glow>
        <div className="grid gap-12 md:grid-cols-[1.15fr_1fr] md:items-center">
          <div>
            <SectionHeading
              eyebrow="Mediumnidad"
              title="Hay cosas que no siempre se ven, pero sí se sienten."
            />
            <div className="mt-8 space-y-5 leading-relaxed text-muted-foreground">
              <p>
                A lo largo de mi camino también he desarrollado una sensibilidad especial y una
                capacidad de mediumnidad que forma parte de mi manera de percibir determinadas
                personas, espacios y situaciones.
              </p>
              <p>
                En ocasiones puedo percibir presencias o energías que siento vinculadas a un lugar
                o a una persona. Cuando esto ocurre, puedo acompañar ese proceso desde el respeto,
                la calma y la sensibilidad.
              </p>
            </div>
          </div>
          <img
            src={almitaTunel}
            alt="Almita de luz ascendiendo hacia un túnel luminoso, donde una figura la recibe con las manos abiertas"
            loading="lazy"
            width={1200}
            height={900}
            className="rounded-3xl object-cover shadow-[var(--shadow-glow)]"
          />
        </div>
      </Section>

      <Section>
        <h2 className="max-w-2xl text-3xl leading-tight md:text-4xl">
          Acompañar para que cada alma pueda seguir su camino.
        </h2>
        <span className="rule-line mt-7" />
        <div className="mt-9 grid max-w-4xl gap-5 leading-relaxed text-muted-foreground">
          <p>
            En determinadas situaciones siento que hay «almitas» o presencias que han quedado
            vinculadas a esta dimensión y necesitan ser acompañadas para poder encontrar el lugar
            que les corresponde y continuar su camino.
          </p>
          <p>
            Se trata de acompañar desde el amor, con respeto y cariño, aquello que percibimos.
          </p>
        </div>
      </Section>


      <CtaBand
        title="Si estás percibiendo algo y no sabes cómo nombrarlo"
        text="Puedes contármelo con tus palabras. Escucharé sin juzgar y te diré con honestidad si creo que puedo acompañarte."
      />
    </>
  );
}
