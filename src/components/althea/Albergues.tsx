import { Section } from "./Section";
import { Camera } from "lucide-react";

const slots = [
  "Albergue Patitas Felices",
  "Refugio Esperanza Animal",
  "Veterinaria Aliada Centro",
  "Campaña de esterilización",
  "Rescate en comunidad",
  "Voluntariado Althea",
];

export function Albergues() {
  return (
    <Section id="albergues" eyebrow="Causas y aliados" title="Albergues, veterinarias y trabajo en comunidad"
      intro="Un espacio para mostrar el trabajo con los animales y las organizaciones aliadas que colaboran con Althea.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {slots.map((s, i) => (
          <div key={s} className="group relative aspect-[4/3] rounded-3xl overflow-hidden border border-border bg-althea-gradient shadow-althea">
            <div className="absolute inset-0 grid place-items-center text-white/70">
              <div className="flex flex-col items-center gap-2 text-center px-4">
                <Camera className="size-10" />
                <span className="text-xs uppercase tracking-widest">Foto {i + 1}</span>
              </div>
            </div>
            <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
              <div className="text-white font-bold">{s}</div>
              <div className="text-white/80 text-xs">Aliado de la comunidad Althea</div>
            </div>
          </div>
        ))}
      </div>
      <p className="text-xs text-muted-foreground mt-4">
        Espacios listos para reemplazar con fotografías reales de albergues, veterinarias y trabajo de campo.
      </p>
    </Section>
  );
}
