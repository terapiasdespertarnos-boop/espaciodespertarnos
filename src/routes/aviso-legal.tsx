import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/site/Section";
import { LegalBlock } from "@/components/site/Legal";
import { site } from "@/lib/site";

export const Route = createFileRoute("/aviso-legal")({
  head: () => ({
    meta: [
      { title: "Aviso legal · Espacio Despertar-Nos" },
      {
        name: "description",
        content:
          "Datos identificativos de Espacio Despertar-Nos, condiciones de uso de la web y propiedad intelectual de sus contenidos.",
      },
      { property: "og:title", content: "Aviso legal · Espacio Despertar-Nos" },
      {
        property: "og:description",
        content: "Titularidad de la web y condiciones de uso.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/aviso-legal" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/aviso-legal" }],
  }),
  component: AvisoLegal,
});

function AvisoLegal() {
  return (
    <Section tone="cream" glow>
      <SectionHeading
        eyebrow="Información legal"
        title="Aviso legal"
        intro="Quién está detrás de esta web y en qué condiciones puedes usarla."
      />

      <div className="mt-12 space-y-10">
        <LegalBlock title="Titular de la web">
          <p>
            Titular: Rosa María Fernández Sabio (Espacio Despertar-Nos — terapias holísticas y
            acompañamiento personal).
            <br />
            NIF: 52972414X
            <br />
            Correo electrónico: <a href={`mailto:${site.email}`}>{site.email}</a>
            <br />
            Teléfono / WhatsApp: +34 660 25 70 72
            <br />
            Domicilio profesional: variable — las sesiones y actividades se imparten en distintos
            espacios según el servicio; el lugar concreto se indica al reservar.
          </p>
        </LegalBlock>

        <LegalBlock title="Objeto de la web">
          <p>
            Esta web tiene una finalidad informativa: dar a conocer el acompañamiento, las sesiones,
            los talleres y los retiros de Espacio Despertar-Nos, y facilitar el contacto con Rosa.
          </p>
        </LegalBlock>

        <LegalBlock title="Naturaleza de los servicios">
          <p>
            Los acompañamientos, terapias y prácticas que se describen aquí son un espacio de
            bienestar, autoconocimiento y crecimiento personal. No constituyen un tratamiento médico
            ni psicológico, no emiten diagnósticos y no sustituyen la atención sanitaria
            profesional. Si estás en tratamiento, continúa siempre con las indicaciones de tu
            equipo médico.
          </p>
        </LegalBlock>

        <LegalBlock title="Condiciones de uso">
          <p>
            Al navegar por esta web te comprometes a hacer un uso adecuado de sus contenidos y a no
            emplearlos con fines ilícitos, lesivos para terceros o que puedan dañar o inutilizar el
            sitio.
          </p>
        </LegalBlock>

        <LegalBlock title="Propiedad intelectual">
          <p>
            Los textos, fotografías, imágenes, logotipo y diseño de esta web pertenecen a su titular
            o se utilizan con la autorización correspondiente. No está permitida su reproducción,
            distribución o modificación sin consentimiento previo por escrito.
          </p>
        </LegalBlock>

        <LegalBlock title="Enlaces externos">
          <p>
            Esta web puede incluir enlaces a otros sitios (por ejemplo, redes sociales o WhatsApp).
            No me hago responsable de los contenidos ni de las políticas de privacidad de esos
            sitios.
          </p>
        </LegalBlock>

        <LegalBlock title="Responsabilidad">
          <p>
            Procuro que la información publicada sea correcta y esté actualizada, pero no puedo
            garantizar la ausencia de errores ni la disponibilidad ininterrumpida de la web.
          </p>
        </LegalBlock>

        <LegalBlock title="Legislación aplicable">
          <p>
            Esta web se rige por la legislación española. Para cualquier controversia serán
            competentes los juzgados y tribunales que correspondan conforme a la normativa vigente.
          </p>
        </LegalBlock>
      </div>
    </Section>
  );
}
