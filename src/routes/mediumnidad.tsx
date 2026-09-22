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
              eyebrowClassName="text-2xl! md:text-3xl!"
              title="Conexión invisible: lo que se siente más allá de la vista."
            />
            <div className="mt-8 space-y-5 leading-relaxed text-muted-foreground">
              <p>
                Hay cosas que no siempre se ven, pero sí se sienten. El mundo que nos rodea no se
                limita únicamente a lo que podemos tocar o comprobar a través de los sentidos
                físicos. Existe una dimensión sutil, una vibración invisible que se teje en los
                espacios que habitamos, en las historias que cargamos y en los vínculos que dejamos
                atrás.
              </p>
              <p>
                A lo largo de mi propio camino y evolución personal, he desarrollado una
                sensibilidad especial y una capacidad de mediumnidad profundamente arraigada. Esta
                facultad no es un espectáculo, sino una forma íntima, respetuosa y natural de
                percibir a determinadas personas, comprender la atmósfera de ciertos espacios y
                descifrar situaciones complejas desde el plano energético.
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
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl leading-snug text-earth md:text-4xl">
            La percepción de lo sutil
          </h2>
          <span className="rule-line mt-6" />
          <p className="text-muted-foreground mt-8 leading-relaxed">
            En ocasiones, la vida nos sitúa ante presencias o energías que se sienten vinculadas de
            manera muy clara a un lugar físico o al campo áurico de una persona. Pueden
            manifestarse como:
          </p>
          <ul className="text-muted-foreground mt-6 space-y-4 leading-relaxed">
            <li className="flex gap-3">
              <span className="text-gold mt-1">·</span>
              <span>
                Impresiones emocionales repentinas sin una causa aparente en el entorno inmediato.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gold mt-1">·</span>
              <span>
                Memorias energéticas estancadas en espacios que bloquean el bienestar físico o
                mental.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gold mt-1">·</span>
              <span>
                Mensajes o lazos sutiles de seres que ya no están en este plano material pero que
                buscan transmitir paz.
              </span>
            </li>
          </ul>
        </div>
      </Section>

      <Section tone="sand">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl leading-snug text-earth md:text-4xl">
            Un acompañamiento desde el respeto y el cuidado
          </h2>
          <span className="rule-line mt-6" />
          <p className="text-muted-foreground mt-8 leading-relaxed">
            Cuando estas percepciones se hacen presentes, mi propósito no es generar temor, sino
            acompañar ese proceso desde el respeto absoluto, la calma y la sensibilidad más pura.
            Entiendo este don como un puente de servicio y sanación para:
          </p>
          <ul className="text-muted-foreground mt-6 space-y-4 leading-relaxed">
            <li className="flex gap-3">
              <span className="text-gold mt-1">·</span>
              <span>
                Brindar claridad a quienes experimentan sensaciones que no logran comprender del
                todo.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gold mt-1">·</span>
              <span>
                Armonizar espacios cargados o en conflicto para devolverles la ligereza y el
                equilibrio.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gold mt-1">·</span>
              <span>
                Facilitar cierres emocionales necesarios para avanzar con total libertad y
                tranquilidad.
              </span>
            </li>
          </ul>
        </div>
      </Section>

      <CtaBand
        title="No hace falta que veas todo el camino por delante. Basta con que te permitas dar solo este primer paso"
        text="Puedes contármelo con tus palabras. Escucharé sin juzgar y te diré con honestidad si creo que puedo acompañarte."
      />
    </>
  );
}
