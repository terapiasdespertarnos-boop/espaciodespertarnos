import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { navItems, whatsappUrl } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="container-prose flex items-center justify-between gap-4 px-6 py-4">
        <Link to="/" className="leading-tight" onClick={() => setOpen(false)}>
          <span className="block font-display text-lg tracking-[0.14em] uppercase">
            Espacio Despertar-Nos
          </span>
          <span className="block text-[0.68rem] tracking-[0.18em] text-muted-foreground uppercase">
            Rosa · acompañamiento integral
          </span>
        </Link>

        <nav className="hidden items-center gap-5 xl:flex">
          {navItems.slice(1).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[0.8rem] text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primary px-4 py-2 text-[0.75rem] tracking-[0.12em] text-primary-foreground uppercase transition-opacity hover:opacity-90"
          >
            Hablar con Rosa
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="rounded-full border border-border p-2 xl:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <nav className="border-t border-border bg-cream px-6 py-4 xl:hidden">
          <ul className="grid gap-1">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/60 py-3 text-sm"
                  activeProps={{ className: "text-primary" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
