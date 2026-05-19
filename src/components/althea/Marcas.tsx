import { Section } from "./Section";

/*
Para mostrar los 54 logotipos reales:
1. Sube las imágenes en orden del 1 al 54 a public/images/logos/
   con los nombres 1.png, 2.png, ..., 54.png
2. Automáticamente se mostrarán en el carrusel.

Si prefieres otro formato de nombre, actualiza la función getLogoPath().
*/

const TOTAL = 54;

function getLogoPath(n: number): string {
  return `/images/logos/${n}.png`;
}

function LogoCard({ n }: { n: number }) {
  const path = getLogoPath(n);
  return (
    <div className="shrink-0 w-40 h-24 mx-2 rounded-2xl bg-white border border-border shadow-sm grid place-items-center overflow-hidden p-3">
      <img
        src={path}
        alt={`Marca ${n}`}
        className="max-h-full max-w-full object-contain"
        loading="lazy"
        onError={(e) => {
          // Si la imagen aún no existe, muestra placeholder
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
        Sube las imágenes <code className="font-mono bg-secondary px-1 py-0.5 rounded">public/images/logos/1.png … 54.png</code> para reemplazar los placeholders automáticamente.
      </p>
    </Section>
  );
}

