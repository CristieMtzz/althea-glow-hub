import { Section } from "./Section";
import { Camera } from "lucide-react";

type AllySlot = {
  name: string;
  subtitle: string;
  image?: string;
};

const slots: AllySlot[] = [
  {
    name: "Dog Heart Foundation",
    subtitle: "Rescue dogs that rescue humans",
    image: "/images/albergues/dog-heart-foundation.jpeg",
  },
  {
    name: "Refugio Esperanza Animal",
    subtitle: "Aliado de la comunidad Althea",
  },
  {
    name: "Veterinaria Aliada Centro",
    subtitle: "Aliado de la comunidad Althea",
  },
  {
    name: "Campaña de esterilización",
    subtitle: "Aliado de la comunidad Althea",
  },
  {
    name: "Rescate en comunidad",
    subtitle: "Aliado de la comunidad Althea",
  },
  {
    name: "Voluntariado Althea",
    subtitle: "Aliado de la comunidad Althea",
  },
];

export function Albergues() {
  return (
    <Section
      id="albergues"
      eyebrow="Causas y aliados"
      title="Albergues, veterinarias y trabajo en comunidad"
      intro="Un espacio para mostrar el trabajo con los animales y las organizaciones aliadas que colaboran con Althea."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {slots.map((slot, i) => (
          <div
            key={slot.name}
            className="group relative aspect-[4/3] rounded-3xl overflow-hidden border border-border bg-althea-gradient shadow-althea"
          >
            {slot.image ? (
              <img
                src={slot.image}
                alt={slot.name}
                className="absolute inset-0 w-full h-full object-cover object-center"
                loading="lazy"
              />
            ) : (
              <div className="absolute inset-0 grid place-items-center text-white/70">
                <div className="flex flex-col items-center gap-2 text-center px-4">
                  <Camera className="size-10" />
                  <span className="text-xs uppercase tracking-widest">Foto {i + 1}</span>
                </div>
              </div>
            )}

            <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
              <div className="text-white font-bold">{slot.name}</div>
              <div className="text-white/80 text-xs">{slot.subtitle}</div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
