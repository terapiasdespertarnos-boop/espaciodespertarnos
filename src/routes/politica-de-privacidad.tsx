import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/site/Section";
import { LegalBlock, LegalNote } from "@/components/site/Legal";
import { site } from "@/lib/site";

export const Route = createFileRoute("/politica-de-privacidad")({
  head: () => ({
    meta: [
      { title: "Política de privacidad · Espacio Despertar-Nos" },
      {
        name: "description",
        content:
          "Cómo trato los datos personales que me facilitas al escribirme por WhatsApp, email o el formulario de contacto de Espacio Despertar-Nos.",
      },
      { property: "og:title", content: "Política de privacidad · Espacio Despertar-Nos" },
      {
        property: "og:description",
        content: "Información sobre el tratamiento de tus datos personales.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/politica-de-privacidad" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/politica-de-privacidad" }],
  }),
  component: PoliticaPrivacidad,
});

function PoliticaPrivacidad() {
  return (
    <Section tone="cream" glow>
      <SectionHeading
        eyebrow="Información legal"
        title="Política de privacidad"
        intro="Aquí te explico, de la forma más clara posible, qué datos recojo, para qué los uso y qué puedes hacer en cualquier momento con ellos."
      />

      <div className="mt-12 space-y-10">
        <LegalBlock title="Quién trata tus datos">
          <p>
            Responsable: Rosa (Espacio Despertar-Nos).
            <br />
            Correo electrónico: <a href={`mailto:${site.email}`}>{site.email}</a>
            <br />
            Teléfono / WhatsApp: +34 660 25 70 72
          </p>
          <LegalNote>
            Datos identificativos fiscales (nombre y apellidos completos, NIF y domicilio) pendientes
            de completar por la titular.
          </LegalNote>
        </LegalBlock>

        <LegalBlock title="Qué datos recojo">
          <ul>
            <li>
              Los que me facilitas al escribirme: nombre, email, teléfono y el contenido de tu
              mensaje.
            </li>
            <li>
              Si acudes a una sesión, la información que compartas conmigo durante el
              acompañamiento.
            </li>
          </ul>
          <p>
            No recojo datos de forma automática con fines publicitarios ni elaboro perfiles
            comerciales.
          </p>
        </LegalBlock>

        <LegalBlock title="Para qué los uso">
          <ul>
            <li>Responder a tu consulta y mantener el contacto contigo.</li>
            <li>Organizar y realizar las sesiones, talleres o retiros que solicites.</li>
            <li>Cumplir con las obligaciones legales y fiscales que me correspondan.</li>
          </ul>
        </LegalBlock>

        <LegalBlock title="Base legal">
          <p>
            Tu consentimiento al escribirme, la ejecución de la relación de servicio cuando reservas
            una sesión y el cumplimiento de obligaciones legales en materia contable y fiscal.
          </p>
        </LegalBlock>

        <LegalBlock title="Cuánto tiempo los conservo">
          <p>
            El tiempo necesario para atender tu consulta o el acompañamiento y, después, durante los
            plazos legales de conservación que resulten aplicables. Cuando dejan de ser necesarios,
            los elimino.
          </p>
        </LegalBlock>

        <LegalBlock title="A quién se los comunico">
          <p>
            No vendo ni cedo tus datos a terceros. Únicamente pueden acceder a ellos los proveedores
            que me prestan servicios técnicos (correo electrónico, mensajería de WhatsApp,
            alojamiento de la web), siempre con las garantías legales exigidas.
          </p>
        </LegalBlock>

        <LegalBlock title="Tus derechos">
          <p>
            Puedes pedirme en cualquier momento acceder a tus datos, rectificarlos, suprimirlos,
            limitar u oponerte a su tratamiento y solicitar su portabilidad, escribiéndome a{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>. También puedes retirar tu
            consentimiento cuando quieras y presentar una reclamación ante la Agencia Española de
            Protección de Datos (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>).
          </p>
        </LegalBlock>

        <LegalBlock title="Confidencialidad">
          <p>
            Todo lo que compartes conmigo en una sesión es confidencial. El acompañamiento que
            ofrezco es un espacio de bienestar, autoconocimiento y crecimiento personal, y no
            sustituye la atención médica ni psicológica.
          </p>
        </LegalBlock>
      </div>
    </Section>
  );
}
