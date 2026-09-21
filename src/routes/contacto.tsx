import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/site/Section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { site, whatsappUrl } from "@/lib/site";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto · Compartir con Rosa · Espacio Despertar-Nos" },
      {
        name: "description",
        content:
          "Escríbeme por WhatsApp, email o con el formulario y cuéntame brevemente qué estás viviendo. No hace falta que sepas qué necesitas.",
      },
      { property: "og:title", content: "Sé que da respeto empezar, pero créeme, dar el primer paso ya es una victoria." },
      {
        property: "og:description",
        content: "Cuéntame qué estás viviendo y vemos juntas/os qué puede acompañarte.",
      },
      { property: "og:url", content: "/contacto" },
    ],
    links: [{ rel: "canonical", href: "/contacto" }],
  }),
  component: Contacto,
});

const faqs: [string, string][] = [
  [
    "¿Tengo que saber qué terapia necesito?",
    "No. Puedes contarme qué estás viviendo y juntas/os veremos qué herramienta puede ser más adecuada.",
  ],
  [
    "¿Tengo que creer en todo esto para venir?",
    "No. No necesitas adoptar ninguna creencia. Lo importante es que te sientas cómodo o cómoda con el proceso.",
  ],
  [
    "¿Las constelaciones son terapia psicológica?",
    "No. Las Constelaciones Familiares se ofrecen como una herramienta de acompañamiento y autoconocimiento, y no sustituyen la atención psicológica ni médica. Si estás en tratamiento, pueden convivir con él, pero nunca reemplazarlo.",
  ],
  [
    "¿Qué ocurre si durante una limpieza percibes una presencia?",
    "Te lo cuento con calma y sin dramatizar, y valoro contigo si tiene sentido acompañar ese proceso. Hablo desde mi experiencia personal, no como un hecho científicamente demostrado, y nunca busco generar miedo.",
  ],
  ["¿Puedo hacer yoga kundalini aunque nunca haya practicado?", "Sí. La práctica se adapta a cada persona."],
  [
    "¿Puedo acudir aunque no sepa exactamente qué me pasa?",
    "Sí. De hecho, muchas personas llegan precisamente porque saben que algo no está bien pero no saben ponerle nombre.",
  ],
];

function Contacto() {
  const [enviado, setEnviado] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const texto = `Hola Rosa, soy ${data.get("nombre")}.
${data.get("ayuda")}
${data.get("mensaje")}
Email: ${data.get("email")} · Teléfono: ${data.get("telefono")}`;
    window.open(whatsappUrl(texto), "_blank", "noopener,noreferrer");
    setEnviado(true);
  };

  return (
    <>
      <Section tone="cream">
        <SectionHeading
          eyebrow="Contacto"
          title="Sé que da respeto empezar, pero créeme, dar el primer paso ya es una victoria."
          intro="No tienes que tener claro qué necesitas. Puedes escribirme y contarme brevemente qué estás viviendo."
        />
        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primary px-7 py-3.5 text-xs tracking-[0.14em] text-primary-foreground uppercase"
          >
            Compartir con Rosa
          </a>
          <a
            href={`mailto:${site.email}`}
            className="rounded-full border border-earth/30 px-7 py-3.5 text-xs tracking-[0.14em] uppercase"
          >
            Escribir un email
          </a>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <form onSubmit={onSubmit} className="gold-card grid gap-5 p-8">
            <div className="grid gap-2">
              <label htmlFor="nombre" className="text-xs tracking-[0.14em] uppercase">
                Nombre
              </label>
              <input
                id="nombre"
                name="nombre"
                required
                className="rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="grid gap-2">
                <label htmlFor="email" className="text-xs tracking-[0.14em] uppercase">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="telefono" className="text-xs tracking-[0.14em] uppercase">
                  Teléfono / WhatsApp
                </label>
                <input
                  id="telefono"
                  name="telefono"
                  className="rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            </div>
            <div className="grid gap-2">
              <label htmlFor="ayuda" className="text-xs tracking-[0.14em] uppercase">
                ¿En qué puedo acompañarte?
              </label>
              <input
                id="ayuda"
                name="ayuda"
                placeholder="Por ejemplo: me siento bloqueada/o, quiero una limpieza en casa…"
                className="rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="mensaje" className="text-xs tracking-[0.14em] uppercase">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={5}
                className="rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <label className="flex items-start gap-3 text-xs leading-relaxed text-muted-foreground">
              <input type="checkbox" required className="mt-0.5 size-4 accent-[var(--primary)]" />
              <span>
                He leído y acepto la{" "}
                <Link to="/politica-de-privacidad" className="underline underline-offset-2">
                  política de privacidad
                </Link>
                . Mis datos se usarán únicamente para responder a esta consulta.
              </span>
            </label>
            <button
              type="submit"
              className="justify-self-start rounded-full bg-primary px-7 py-3.5 text-xs tracking-[0.14em] text-primary-foreground uppercase transition-opacity hover:opacity-90"
            >
              Enviar mensaje
            </button>
            {enviado ? (
              <p className="text-sm text-primary">
                Gracias. Se ha abierto WhatsApp con tu mensaje para que puedas enviármelo.
              </p>
            ) : null}
          </form>

          <aside className="space-y-8">
            <div>
              <p className="eyebrow">Dónde encontrarme</p>
              <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
                <li>
                  <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </li>
                <li>
                  <a href={site.instagram} target="_blank" rel="noopener noreferrer">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href={site.facebook} target="_blank" rel="noopener noreferrer">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Respondo personalmente. A veces tardo unas horas, pero siempre contesto.
            </p>
          </aside>
        </div>
      </Section>

      <Section tone="sand">
        <SectionHeading eyebrow="Preguntas frecuentes" title="Lo que suelen preguntarme" />
        <Accordion type="single" collapsible className="mt-10 max-w-3xl">
          {faqs.map(([q, a]) => (
            <AccordionItem key={q} value={q}>
              <AccordionTrigger className="text-left text-base">{q}</AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>
    </>
  );
}
