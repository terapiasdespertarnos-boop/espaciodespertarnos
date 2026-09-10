import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  tone = "default",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "default" | "cream" | "sand" | "deep";
  id?: string;
}) {
  const tones = {
    default: "bg-background text-foreground",
    cream: "bg-cream text-foreground",
    sand: "bg-sand text-foreground",
    deep: "bg-sage-deep text-primary-foreground",
  } as const;

  return (
    <section id={id} className={cn("section-shell", tones[tone], className)}>
      <div className="container-prose">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  invert = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  invert?: boolean;
}) {
  return (
    <header
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      {eyebrow ? (
        <p className={cn("eyebrow", invert && "text-primary-foreground/70")}>{eyebrow}</p>
      ) : null}
      <h2
        className={cn(
          "mt-4 text-3xl leading-[1.15] md:text-5xl",
          invert && "text-primary-foreground",
        )}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed text-muted-foreground md:text-lg",
            invert && "text-primary-foreground/80",
          )}
        >
          {intro}
        </p>
      ) : null}
      <span
        className={cn(
          "rule-line mt-7",
          align === "center" && "mx-auto",
          invert && "bg-primary-foreground/40",
        )}
      />
    </header>
  );
}

export function Quote({ children, invert = false }: { children: ReactNode; invert?: boolean }) {
  return (
    <blockquote
      className={cn(
        "border-l-2 border-accent pl-6 text-2xl leading-snug italic md:text-3xl",
        invert ? "text-primary-foreground" : "text-earth",
      )}
    >
      {children}
    </blockquote>
  );
}
