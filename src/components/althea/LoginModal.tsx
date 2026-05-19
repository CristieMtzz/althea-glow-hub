import { useState } from "react";
import { X, KeyRound, UserPlus, ShieldCheck, Loader2 } from "lucide-react";

const DEMO_ID = "A-02418";
const DEMO_CODE = "CLUB-ALTHEA";

export function LoginModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [memberId, setMemberId] = useState("");
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  if (!open) return null;

  const reset = () => { setError(null); setSuccess(null); };

  const submitLogin = (e: React.FormEvent) => {
    e.preventDefault(); reset(); setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (memberId.trim().toUpperCase() === DEMO_ID && code.trim().toUpperCase() === DEMO_CODE) {
        setSuccess("¡Bienvenido a la Comunidad Althea! Acceso simulado correcto.");
      } else {
        setError("Datos incorrectos. Usa el acceso demo o solicita el tuyo a alex@althea.community.");
      }
    }, 600);
  };

  const submitRegister = (e: React.FormEvent) => {
    e.preventDefault(); reset(); setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess("¡Gracias! Recibimos tu registro. Pronto integraremos la plataforma completa de la Comunidad.");
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-[100] grid place-items-center p-4 bg-althea-deep/40 backdrop-blur-sm" onClick={onClose}>
      <div className="w-full max-w-md bg-white rounded-3xl shadow-althea overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <div className="bg-althea-gradient text-white p-6 relative">
          <button onClick={onClose} aria-label="Cerrar" className="absolute right-4 top-4 size-9 grid place-items-center rounded-full bg-white/15 hover:bg-white/25">
            <X className="size-4" />
          </button>
          <div className="flex items-center gap-3">
            <div className="size-12 rounded-2xl bg-white/15 grid place-items-center"><ShieldCheck className="size-6" /></div>
            <div>
              <div className="text-xs uppercase tracking-widest text-white/80">Acceso</div>
              <div className="font-extrabold text-xl">Comunidad Althea</div>
            </div>
          </div>
        </div>

        <div className="px-6 pt-5">
          <div className="grid grid-cols-2 bg-secondary rounded-2xl p-1">
            <button onClick={() => { setMode("login"); reset(); }} className={`py-2.5 rounded-xl text-sm font-bold transition ${mode === "login" ? "bg-white shadow-sm text-primary" : "text-muted-foreground"}`}>Soy miembro</button>
            <button onClick={() => { setMode("register"); reset(); }} className={`py-2.5 rounded-xl text-sm font-bold transition ${mode === "register" ? "bg-white shadow-sm text-primary" : "text-muted-foreground"}`}>Quiero unirme</button>
          </div>
        </div>

        {mode === "login" ? (
          <form onSubmit={submitLogin} className="p-6 grid gap-3">
            <label className="grid gap-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Número de socio</span>
              <input value={memberId} onChange={(e) => setMemberId(e.target.value)} required placeholder="A-02418"
                className="w-full px-4 py-3 rounded-2xl border border-border bg-secondary/50 focus:outline-none focus:ring-2 focus:ring-ring" />
            </label>
            <label className="grid gap-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Código de acceso</span>
              <input value={code} onChange={(e) => setCode(e.target.value)} required placeholder="CLUB-ALTHEA"
                className="w-full px-4 py-3 rounded-2xl border border-border bg-secondary/50 focus:outline-none focus:ring-2 focus:ring-ring" />
            </label>
            <button disabled={loading} className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-althea-gradient text-white font-bold shadow-althea disabled:opacity-70">
              {loading ? <Loader2 className="size-4 animate-spin" /> : <KeyRound className="size-4" />} Ingresar
            </button>
            <div className="text-xs text-muted-foreground bg-accent/60 rounded-2xl p-3 border border-border">
              <strong>Acceso demo:</strong> Socio <code className="font-mono">A-02418</code> · Código <code className="font-mono">CLUB-ALTHEA</code>
            </div>
          </form>
        ) : (
          <form onSubmit={submitRegister} className="p-6 grid gap-3">
            <label className="grid gap-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Nombre</span>
              <input value={name} onChange={(e) => setName(e.target.value)} required placeholder="Tu nombre"
                className="w-full px-4 py-3 rounded-2xl border border-border bg-secondary/50 focus:outline-none focus:ring-2 focus:ring-ring" />
            </label>
            <label className="grid gap-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Correo electrónico</span>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="tu@correo.com"
                className="w-full px-4 py-3 rounded-2xl border border-border bg-secondary/50 focus:outline-none focus:ring-2 focus:ring-ring" />
            </label>
            <button disabled={loading} className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-althea-gradient text-white font-bold shadow-althea disabled:opacity-70">
              {loading ? <Loader2 className="size-4 animate-spin" /> : <UserPlus className="size-4" />} Crear mi cuenta
            </button>
            <p className="text-xs text-muted-foreground">
              Cualquier persona puede registrarse. Sólo quienes compren productos podrán publicar reseñas verificadas.
            </p>
          </form>
        )}

        {(error || success) && (
          <div className={`mx-6 mb-6 rounded-2xl p-3 text-sm ${error ? "bg-destructive/10 text-destructive" : "bg-althea-green/15 text-foreground"}`}>
            {error || success}
          </div>
        )}
      </div>
    </div>
  );
}
