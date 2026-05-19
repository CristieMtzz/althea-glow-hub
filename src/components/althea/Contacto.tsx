import { Mail, Heart, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";

export function Contacto() {
  return (
    <footer id="contacto" className="px-4 mt-2 mb-8">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-althea-gradient text-white shadow-althea overflow-hidden">
        <div className="p-8 md:p-12 grid lg:grid-cols-2 gap-10">
          <div>
            <div className="flex items-center gap-3">
              <div className="size-14 rounded-2xl bg-white/15 overflow-hidden grid place-items-center">
                <img src={logo} alt="Althea" className="size-full object-cover" />
              </div>
              <div>
                <div className="font-extrabold tracking-wide">ALTHEA</div>
                <div className="text-xs uppercase tracking-[0.2em] text-white/80">Pet Wellness Community</div>
              </div>
            </div>
            <h2 className="mt-6 text-3xl md:text-4xl font-extrabold leading-tight">
              Cuidamos hoy para un <em className="not-italic underline decoration-white/40 underline-offset-4">mañana mejor</em>.
            </h2>
            <p className="mt-4 text-white/85 max-w-md leading-relaxed">
              ¿Tienes dudas, propuestas de colaboración o quieres unirte a la comunidad? Escríbenos, te respondemos con el cuidado que mereces.
            </p>
          </div>

          <div className="grid gap-4 content-center">
            <a href="mailto:alex@althea.community" className="bg-white/10 hover:bg-white/15 transition rounded-3xl p-5 flex items-center gap-4 border border-white/15">
              <div className="size-12 rounded-2xl bg-white text-primary grid place-items-center"><Mail className="size-5" /></div>
              <div>
                <div className="text-xs uppercase tracking-widest text-white/70">Escríbenos</div>
                <div className="font-bold text-lg">alex@althea.community</div>
              </div>
            </a>
            <div className="flex gap-3">
              <a href="#" className="flex-1 bg-white/10 hover:bg-white/15 transition rounded-2xl p-4 flex items-center gap-3 border border-white/15">
                <Instagram className="size-5" /><span className="font-semibold">Instagram</span>
              </a>
              <a href="#" className="flex-1 bg-white/10 hover:bg-white/15 transition rounded-2xl p-4 flex items-center gap-3 border border-white/15">
                <Facebook className="size-5" /><span className="font-semibold">Facebook</span>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/15 px-8 md:px-12 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/80">
          <div className="flex items-center gap-2"><Heart className="size-3.5" /> © {new Date().getFullYear()} Althea Pet Wellness Community</div>
          <div>Hecho con cuidado para la familia multiespecie.</div>
        </div>
      </div>
    </footer>
  );
}
