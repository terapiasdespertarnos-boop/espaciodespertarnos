import type { ReactNode } from "react";

export function LegalBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <article className="gold-card p-8">
      <h2 className="font-display text-2xl leading-snug md:text-3xl">{title}</h2>
      <div className="legal-prose mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
        {children}
      </div>
    </article>
  );
}

export function LegalNote({ children }: { children: ReactNode }) {
  return (
    <p className="border-gold/60 mt-4 border-l-2 pl-4 text-xs text-muted-foreground italic">
      {children}
    </p>
  );
}
