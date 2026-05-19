import gancho from "@/assets/gancho.png";
import { Target, Eye, Sparkles } from "lucide-react";
import { Section } from "./Section";

const items = [
  {
    icon: Target, title: "Misión",
    text: "Impulsar el bienestar de nuestra comunidad brindando soluciones integrales para la salud y felicidad de cada mascota.",
  },
  {
    icon: Eye, title: "Visión",
    text: "Liderar una comunidad activa y consciente que logre erradicar el abandono animal a través de la educación y el apoyo integral.",
  },
  {
    icon: Sparkles, title: "Valores",
    text: "Compromiso inquebrantable con el bienestar animal, operando siempre bajo principios de ética, integridad y transparencia.",
  },
];

export function Gancho() {
  return (
    <Section id="gancho" eyebrow="Quiénes somos" title="Misión, visión y valores"
      intro="Una comunidad curadora de productos confiables y aliada de las causas que importan para todas las especies de compañía.">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="relative">
          <div className="absolute -inset-4 bg-althea-gradient opacity-15 blur-3xl rounded-[3rem]" />
          <img src={gancho} alt="Comunidad Althea" className="relative w-full rounded-[2rem] shadow-althea object-cover" />
        </div>
        <div className="grid gap-4">
          {items.map((it) => (
            <div key={it.title} className="bg-white/80 rounded-3xl border border-border p-6 flex gap-4 hover:shadow-althea transition">
              <div className="size-12 rounded-2xl bg-althea-gradient text-white grid place-items-center shrink-0">
                <it.icon className="size-6" />
              </div>
              <div>
                <h3 className="font-bold text-xl">{it.title}</h3>
                <p className="text-muted-foreground mt-1.5 leading-relaxed">{it.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
