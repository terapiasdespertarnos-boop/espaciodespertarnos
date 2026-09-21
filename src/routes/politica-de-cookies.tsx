import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/site/Section";
import { LegalBlock } from "@/components/site/Legal";
import { site } from "@/lib/site";

export const Route = createFileRoute("/politica-de-cookies")({
  head: () => ({
    meta: [
      { title: "Política de cookies · Espacio Despertar-Nos" },
      {
        name: "description",
        content:
          "Qué cookies utiliza la web de Espacio Despertar-Nos y cómo puedes gestionarlas desde tu navegador.",
      },
      { property: "og:title", content: "Política de cookies · Espacio Despertar-Nos" },
      { property: "og:description", content: "Uso de cookies en esta web." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/politica-de-cookies" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/politica-de-cookies" }],
  }),
  component: PoliticaCookies,
});

function PoliticaCookies() {
  return (
    <Section tone="cream" glow>
      <SectionHeading
        eyebrow="Información legal"
        title="Política de cookies"
        intro="Esta web está pensada para ser sencilla y respetuosa: no utiliza cookies publicitarias ni de seguimiento."
      />

      <div className="mt-12 space-y-10">
        <LegalBlock title="Qué son las cookies">
          <p>
            Son pequeños archivos que un sitio web guarda en tu dispositivo cuando lo visitas, y que
            permiten recordar información sobre tu navegación.
          </p>
        </LegalBlock>

        <LegalBlock title="Qué cookies uso">
          <p>
            Únicamente las estrictamente necesarias para que la web funcione y se muestre
            correctamente. No utilizo cookies de publicidad, de perfilado ni de analítica de
            terceros, por lo que no es necesario pedirte consentimiento previo para ellas.
          </p>
          <p>
            Si en el futuro incorporo herramientas de medición o contenidos incrustados de terceros
            (por ejemplo, vídeos o mapas), actualizaré esta página y te pediré tu consentimiento
            antes de activarlas.
          </p>
        </LegalBlock>

        <LegalBlock title="Cómo gestionarlas">
          <p>
            Puedes ver, bloquear o eliminar las cookies desde la configuración de tu navegador
            (Chrome, Safari, Firefox, Edge…). Ten en cuenta que desactivar las cookies necesarias
            puede afectar al funcionamiento de la web.
          </p>
        </LegalBlock>

        <LegalBlock title="Dudas">
          <p>
            Si tienes cualquier pregunta sobre este punto, escríbeme a{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        </LegalBlock>
      </div>
    </Section>
  );
}
