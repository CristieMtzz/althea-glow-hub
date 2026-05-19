import seguros from "@/assets/seguros.png";
import { ShieldCheck, Heart, HeartHandshake, Headphones } from "lucide-react";
import { Section } from "./Section";

export function Seguros() {
  return (
    <Section id="seguros" eyebrow="Seguros" title="Protege a quienes más amas"
      intro="Con el respaldo informativo de GNP Seguros y el cuidado de Althea. Opciones de protección para tu familia multiespecie.">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div className="grid gap-4">
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              { icon: ShieldCheck, t: "Protección" },
              { icon: Heart, t: "Bienestar" },
              { icon: HeartHandshake, t: "Tranquilidad" },
            ].map((p) => (
              <div key={p.t} className="bg-white/85 rounded-2xl border border-border p-4 text-center">
                <div className="mx-auto size-11 rounded-2xl bg-althea-gradient text-white grid place-items-center">
                  <p.icon className="size-5" />
                </div>
                <div className="mt-2 font-bold text-sm">{p.t}</div>
              </div>
            ))}
          </div>
          <div className="bg-white/85 rounded-3xl border border-border p-5 flex gap-4">
            <div className="size-11 rounded-2xl bg-althea-gradient text-white grid place-items-center shrink-0">
              <Headphones className="size-5" />
            </div>
            <div>
              <h3 className="font-bold">Cinco asesores profesionales · 365 días</h3>
              <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                Trabajamos personalmente con cada integrante para encontrar la mejor protección para sus compañeros de vida.
              </p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground bg-accent/60 rounded-2xl p-4 border border-border leading-relaxed">
            Althea actúa exclusivamente como un puente informativo entre su comunidad y profesionales del sector asegurador.
            No ejerce actividades de intermediación de seguros, no es responsable de la contratación de pólizas ni recibe
            remuneración alguna por este concepto. La relación contractual será directamente entre el miembro de la comunidad
            y el agente o compañía elegida.
          </p>
        </div>
        <div className="relative order-first lg:order-last">
          <div className="absolute -inset-4 bg-althea-gradient opacity-15 blur-3xl rounded-[3rem]" />
          <img src={seguros} alt="Seguros Althea" className="relative w-full rounded-[2rem] shadow-althea object-cover" />
        </div>
      </div>
    </Section>
  );
}
