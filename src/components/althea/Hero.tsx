import portada from "@/assets/portada.png";
import { ArrowRight, PawPrint } from "lucide-react";

export function Hero({ onLogin }: { onLogin: () => void }) {
  return (
    <section id="portada" className="px-4 mt-6">
      <div className="mx-auto max-w-7xl glass shadow-althea rounded-[2.5rem] p-6 md:p-10 overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
              <PawPrint className="size-3.5" /> Comunidad de bienestar animal
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[0.95] text-balance">
              Cuidamos hoy para un <span className="text-althea-gradient">mañana mejor</span>.
            </h1>
            <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
              Althea Pet Wellness Community selecciona productos de marcas aliadas para todo tipo de mascotas
              e impulsa el rescate, la esterilización y la atención veterinaria responsable. Una comunidad activa,
              consciente y comprometida con el bienestar animal.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#gancho" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-althea-gradient text-white font-bold shadow-althea hover:translate-y-[-2px] transition">
                Conoce Althea <ArrowRight className="size-4" />
              </a>
              <button onClick={onLogin} className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white text-primary border border-border font-bold hover:bg-accent transition">
                Soy de la Comunidad
              </button>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 max-w-md">
              {[
                { n: "+54", t: "Marcas aliadas" },
                { n: "365", t: "Días al año" },
                { n: "100%", t: "Compromiso" },
              ].map((m) => (
                <div key={m.t} className="rounded-2xl bg-white/70 border border-border px-3 py-3 text-center">
                  <div className="text-xl md:text-2xl font-extrabold text-althea-gradient">{m.n}</div>
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground mt-0.5">{m.t}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-althea-gradient opacity-20 blur-3xl rounded-[3rem]" />
            <img src={portada} alt="Althea Pet Wellness & Rescue" className="relative w-full rounded-[2rem] shadow-althea object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
