import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { CtaBand } from "@/components/site/CtaBand";
import { getPost, formatDate } from "@/lib/blog";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Artículo no disponible" }, { name: "robots", content: "noindex" }],
      };
    }
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.title} · Espacio Despertar-Nos` },
        { name: "description", content: post.description },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/blog/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            author: { "@type": "Person", name: "Rosa" },
            publisher: { "@type": "Organization", name: "Espacio Despertar-Nos" },
          }),
        },
      ],
    };
  },
  component: BlogPost,
});

function BlogPost() {
  const { post } = Route.useLoaderData();

  return (
    <>
      <Section tone="cream">
        <div className="mx-auto max-w-2xl">
          <Link to="/blog" className="text-[0.7rem] tracking-[0.18em] text-clay uppercase">
            ← Volver al blog
          </Link>
          <p className="eyebrow mt-8">
            {formatDate(post.date)} · {post.readingTime}
          </p>
          <h1 className="mt-4 font-display text-3xl leading-tight md:text-5xl">{post.title}</h1>
          <span className="rule-line mt-7" />
        </div>
      </Section>

      <Section>
        <article className="mx-auto max-w-2xl space-y-6 text-[1.05rem] leading-relaxed text-muted-foreground">
          {post.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </article>
      </Section>

      <CtaBand
        title="¿Te has reconocido en algo de esto?"
        text="Puedes escribirme y contarme brevemente qué estás viviendo. No hace falta que sepas ponerle nombre."
      />
    </>
  );
}
