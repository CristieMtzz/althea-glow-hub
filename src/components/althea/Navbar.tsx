import { useState } from "react";
import logo from "@/assets/logo.png";
import { Menu, X, LogIn } from "lucide-react";

const links = [
  { href: "#portada", label: "Inicio" },
  { href: "#gancho", label: "Nosotros" },
  { href: "#envios", label: "Envíos" },
  { href: "#pagos", label: "Pagos" },
  { href: "#seguros", label: "Seguros" },
  { href: "#resenas", label: "Reseñas" },
  { href: "#marcas", label: "Marcas" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar({ onLogin }: { onLogin: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <div className="mx-auto max-w-7xl glass shadow-althea rounded-full px-4 py-2.5 flex items-center justify-between gap-4">
        <a href="#portada" className="flex items-center gap-3 min-w-0">
          <div className="size-11 rounded-2xl bg-althea-gradient grid place-items-center overflow-hidden shrink-0">
            <img src={logo} alt="Althea" className="size-full object-cover" />
          </div>
          <div className="hidden sm:flex flex-col leading-tight min-w-0">
            <span className="font-bold text-sm tracking-wide">ALTHEA</span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Pet Wellness Community</span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="px-3 py-2 text-sm font-semibold text-foreground/80 rounded-full hover:bg-white/80 hover:text-primary transition">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button onClick={onLogin} className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-althea-gradient text-white font-semibold text-sm shadow-althea hover:opacity-95 transition">
            <LogIn className="size-4" /> Comunidad
          </button>
          <button onClick={() => setOpen((v) => !v)} aria-label="Menú" className="lg:hidden size-11 grid place-items-center rounded-full bg-white/80 border border-border">
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden mx-auto max-w-7xl mt-2 glass shadow-althea rounded-3xl p-4 grid gap-1">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="px-4 py-3 rounded-2xl font-semibold hover:bg-white/80">
              {l.label}
            </a>
          ))}
          <button onClick={() => { setOpen(false); onLogin(); }} className="mt-2 px-4 py-3 rounded-2xl bg-althea-gradient text-white font-semibold inline-flex items-center justify-center gap-2">
            <LogIn className="size-4" /> Acceso Comunidad
          </button>
        </div>
      )}
    </header>
  );
}
