import { Section } from "./Section";

const total = 54;
const logos = Array.from({ length: total }, (_, i) => i + 1);

function LogoCard({ n }: { n: number }) {
  return (
    <div className="shrink-0 w-40 h-24 mx-2 rounded-2xl bg-white border border-border shadow-sm grid place-items-center">
      <div className="text-center">
        <div className="text-xs uppercase tracking-widest text-muted-foreground">Marca</div>
        <div className="text-2xl font-extrabold text-althea-gradient">#{String(n).padStart(2, "0")}</div>
      </div>
    </div>
  );
}

export function Marcas() {
  const row1 = logos.slice(0, 27);
  const row2 = logos.slice(27);

  return (
    <Section id="marcas" eyebrow="Marcas aliadas" title="54 marcas curadas para tu mascota"
      intro="Productos seleccionados con criterio experto. Cada marca cumple nuestros estándares de calidad y compromiso.">
      <div className="space-y-6 overflow-hidden">
        {[row1, row2].map((row, idx) => (
          <div key={idx} className="relative overflow-hidden">
            <div className="flex marquee" style={{ animationDirection: idx % 2 ? "reverse" : "normal" }}>
              {[...row, ...row].map((n, i) => <LogoCard key={`${idx}-${i}-${n}`} n={n} />)}
            </div>
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent pointer-events-none" />
          </div>
        ))}
      </div>
      <p className="text-xs text-muted-foreground mt-4">
        Los logotipos numerados son marcadores de posición. Reemplázalos por las imágenes oficiales 1–54.
      </p>
    </Section>
  );
}
