import { Section } from "./Section";
import { Camera } from "lucide-react";

type AllySlot = {
  name: string;
  subtitle: string;
  images?: string[];
};

const slots: AllySlot[] = [
  {
    name: "Dog Heart Foundation",
    subtitle: "Rescue dogs that rescue humans",
    images: [
      "/images/albergues/ALBERGUE1.jpeg",
      "/images/albergues/ALBERGUE1.jpg",
      "/images/albergues/ALBERGUE1.png",
      "/images/albergues/albergue1.jpeg",
      "/images/albergues/albergue1.jpg",
      "/images/albergues/albergue1.png",
      "/images/albergues/dog-heart-foundation.jpeg",
      "/images/albergues/dog-heart-foundation.jpg",
      "/images/albergues/dog-heart-foundation.png",
      "/images/ALBERGUE1.jpeg",
      "/images/ALBERGUE1.jpg",
      "/images/ALBERGUE1.png",
      "/ALBERGUE1.jpeg",
      "/ALBERGUE1.jpg",
      "/ALBERGUE1.png",
    ],
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
            {slot.images?.length ? (
              <div className="absolute inset-0 grid place-items-center bg-black">
                <img
                  src={slot.images[0]}
                  alt={slot.name}
                  className="w-full h-full object-contain object-center"
                  loading="lazy"
                  data-fallback-index="0"
                  onError={(e) => {
                    const img = e.currentTarget;
                    const currentIndex = Number(img.dataset.fallbackIndex ?? "0");
                    const nextIndex = currentIndex + 1;

                    if (nextIndex < slot.images.length) {
                      img.dataset.fallbackIndex = String(nextIndex);
                      img.src = slot.images[nextIndex];
                    } else {
                      img.style.display = "none";
                    }
                  }}
                />
              </div>
            ) : (
              <div className="absolute inset-0 grid place-items-center text-white/70">
                <div className="flex flex-col items-center gap-2 text-center px-4">
                  <Camera className="size-10" />
                  <span className="text-xs uppercase tracking-widest">Foto {i + 1}</span>
                </div>
              </div>
            )}

            <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <div className="text-white font-bold">{slot.name}</div>
              <div className="text-white/80 text-xs">{slot.subtitle}</div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
