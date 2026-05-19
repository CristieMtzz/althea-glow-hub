import { Section } from "./Section";

const TOTAL = 54;

function getLogoPath(n: number): string {
  return `/images/logos/${n}.png`;
}

function LogoCard({ n }: { n: number }) {
  const path = getLogoPath(n);
  return (
    <div className="shrink-0 w-[260px] sm:w-[300px] h-[190px] sm:h-[220px] mx-3 rounded-3xl bg-white border border-border shadow-sm grid place-items-center p-2 sm:p-3">
      <img
        src={path}
        alt={`Marca ${n}`}
        className="max-w-[94%] max-h-[94%] w-auto h-auto object-contain object-center block"
        loading="lazy"
        onError={(e) => {
          const t = e.currentTarget;
          t.style.display = "none";
          t.nextElementSibling?.classList.remove("hidden");
        }}
      />
      <div className="hidden grid place-items-center w-full h-full text-center">
        <div className="text-xs uppercase tracking-widest text-muted-foreground">Marca</div>
        <div className="text-2xl font-extrabold text-althea-gradient">#{String(n).padStart(2, "0")}</div>
      </div>
    </div>
  );
}

export function Marcas() {
  const logos = Array.from({ length: TOTAL }, (_, i) => i + 1);
  const row1 = logos.slice(0, 27);
  const row2 = logos.slice(27);

  return (
    <Section
      id="marcas"
      eyebrow="Marcas aliadas"
      title=""
      intro="Productos seleccionados con criterio experto. Cada marca cumple nuestros estándares de calidad y compromiso."
    >
      <div className="space-y-8 overflow-hidden">
        {[row1, row2].map((row, idx) => (
          <div key={idx} className="relative overflow-hidden py-2">
            <div className="flex marquee items-center" style={{ animationDirection: idx % 2 ? "reverse" : "normal" }}>
              {[...row, ...row].map((n, i) => (
                <LogoCard key={`${idx}-${i}-${n}`} n={n} />
              ))}
            </div>
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent pointer-events-none" />
          </div>
        ))}
      </div>
    </Section>
  );
}
