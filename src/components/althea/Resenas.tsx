import resenas from "@/assets/resenas.png";
import { Star, Lock, ShoppingBag } from "lucide-react";
import { Section } from "./Section";

const demo = [
  { name: "María G.", pet: "Luna · Gato", text: "Excelente atención y productos curados. Mi gata adora todo lo que llega en su caja." },
  { name: "Carlos R.", pet: "Toby · Perro", text: "Asesoría personalizada y entrega rapidísima en CDMX. Cinco estrellas sin duda." },
  { name: "Ana L.", pet: "Coco · Conejo", text: "Encontré productos que no veía en otros lados. La comunidad realmente cuida cada detalle." },
];

export function Resenas({ onLogin }: { onLogin: () => void }) {
  return (
    <Section id="resenas" eyebrow="Reseñas" title="Lo que nuestra comunidad dice de Althea"
      intro="Sólo los miembros de Comunidad Althea que han comprado productos pueden publicar reseñas verificadas.">
      <div className="grid lg:grid-cols-5 gap-8 items-start">
        <div className="lg:col-span-2 relative">
          <div className="absolute -inset-4 bg-althea-gradient opacity-15 blur-3xl rounded-[3rem]" />
          <img src={resenas} alt="Reseñas Althea" className="relative w-full rounded-[2rem] shadow-althea object-cover" />
        </div>
        <div className="lg:col-span-3 grid gap-4">
          {demo.map((r) => (
            <div key={r.name} className="bg-white/90 rounded-3xl border border-border p-5">
              <div className="flex items-center gap-1 text-althea-amber">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4 fill-current" />)}
              </div>
              <p className="mt-3 leading-relaxed text-foreground/90">"{r.text}"</p>
              <div className="mt-3 flex items-center gap-3 text-sm">
                <div className="size-9 rounded-full bg-althea-gradient text-white grid place-items-center font-bold">
                  {r.name[0]}
                </div>
                <div>
                  <div className="font-semibold">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.pet} · Miembro verificado</div>
                </div>
              </div>
            </div>
          ))}
          <div className="bg-althea-gradient text-white rounded-3xl p-5 flex flex-col sm:flex-row sm:items-center gap-4 shadow-althea">
            <div className="size-12 rounded-2xl bg-white/15 grid place-items-center shrink-0">
              <Lock className="size-6" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold">¿Eres parte de la Comunidad?</h3>
              <p className="text-sm text-white/90 mt-1">Ingresa con tu número de socio para publicar tu reseña tras una compra.</p>
            </div>
            <button onClick={onLogin} className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white text-primary font-bold hover:bg-white/90">
              <ShoppingBag className="size-4" /> Acceder
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}
