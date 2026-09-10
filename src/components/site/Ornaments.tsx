import { cn } from "@/lib/utils";

/** Halos de luz cálida que flotan muy lentamente detrás del contenido. */
export function LightOrbs({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 -z-10", className)}>
      <span className="glow-orb float-slow top-[-6rem] left-[-4rem] size-72 bg-honey/50" />
      <span
        className="glow-orb float-slow top-1/3 right-[-6rem] size-96 bg-aqua/35"
        style={{ animationDelay: "-6s" }}
      />
      <span
        className="glow-orb float-slow bottom-[-8rem] left-1/3 size-80 bg-blush/35"
        style={{ animationDelay: "-11s" }}
      />
    </div>
  );
}

/** Franja muy suave de frecuencias de color. */
export function FrequencyVeil({ className }: { className?: string }) {
  return <span aria-hidden className={cn("energy-veil", className)} />;
}

/** Pequeños destellos de luz. */
export function Sparkles({ count = 8, className }: { count?: number; className?: string }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0", className)}>
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="twinkle bg-gold absolute size-[3px] rounded-full"
          style={{
            top: `${(i * 37) % 90 + 4}%`,
            left: `${(i * 61) % 92 + 3}%`,
            animationDelay: `${(i % 5) * 1.2}s`,
          }}
        />
      ))}
    </div>
  );
}

/** Geometría sagrada muy sutil: círculos entrelazados. */
export function SacredGeometry({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 200 200"
      className={cn("text-gold/40 pointer-events-none", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="0.6"
    >
      {[
        [100, 100],
        [100, 70],
        [100, 130],
        [74, 85],
        [74, 115],
        [126, 85],
        [126, 115],
      ].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="30" />
      ))}
      <circle cx="100" cy="100" r="62" strokeDasharray="1 5" />
    </svg>
  );
}

/** Péndulo de radiestesia, con oscilación lenta. */
export function PendulumMark({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 60 160"
      className={cn("text-gold pointer-events-none", className)}
      fill="none"
    >
      <g className="pendulum">
        <line x1="30" y1="0" x2="30" y2="82" stroke="currentColor" strokeWidth="1" />
        <circle cx="30" cy="86" r="4" fill="currentColor" opacity="0.7" />
        <path
          d="M30 92 c9 8 9 22 0 34 c-9 -12 -9 -26 0 -34 z"
          fill="currentColor"
          opacity="0.85"
        />
        <circle cx="30" cy="126" r="14" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
      </g>
    </svg>
  );
}

/** Rama botánica que se mece despacio. */
export function BotanicalBranch({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 120 220"
      className={cn("text-leaf/45 sway-slow pointer-events-none", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
    >
      <path d="M60 0 C58 60 62 140 60 218" />
      {Array.from({ length: 7 }).map((_, i) => {
        const y = 26 + i * 26;
        const dir = i % 2 === 0 ? 1 : -1;
        return (
          <path
            key={i}
            d={`M60 ${y} c ${18 * dir} -10 ${30 * dir} 2 ${34 * dir} 12 c ${-16 * dir} 6 ${-28 * dir} 2 ${-34 * dir} -12 z`}
            fill="currentColor"
            fillOpacity="0.16"
          />
        );
      })}
    </svg>
  );
}

/** Ondas de energía horizontales. */
export function EnergyWaves({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 600 90"
      preserveAspectRatio="none"
      className={cn("pointer-events-none w-full", className)}
      fill="none"
    >
      {[0, 1, 2, 3].map((i) => (
        <path
          key={i}
          d={`M0 ${30 + i * 12} C 150 ${6 + i * 12}, 300 ${58 + i * 10}, 600 ${24 + i * 12}`}
          stroke="currentColor"
          strokeWidth="1"
          opacity={0.42 - i * 0.08}
        />
      ))}
    </svg>
  );
}
