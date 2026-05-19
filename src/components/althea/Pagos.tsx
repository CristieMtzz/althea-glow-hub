import pagos from "@/assets/pagos.png";
import { CreditCard, Wallet, Building2, Receipt } from "lucide-react";
import { Section } from "./Section";

export function Pagos() {
  return (
    <Section id="pagos" eyebrow="Pagos" title="Formas de pago cómodas y seguras"
      intro="Diversas alternativas para que liquides tu compra con la flexibilidad que necesitas.">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative">
          <div className="absolute -inset-4 bg-althea-gradient opacity-15 blur-3xl rounded-[3rem]" />
          <img src={pagos} alt="Pagos Althea" className="relative w-full rounded-[2rem] shadow-althea object-cover" />
        </div>
        <div className="grid gap-4">
          {[
            { icon: Wallet, t: "Efectivo y transferencia", d: "Liquida directo a nuestra cuenta bancaria." },
            { icon: CreditCard, t: "Tarjetas Visa, MasterCard, AmEx y Carnet", d: "Físicas o virtuales (VCC), nacionales e internacionales. Comisión 4% en crédito." },
            { icon: Receipt, t: "3 meses fijos", d: "Difiere tu compra a 3 mensualidades. Comisión 9.5%." },
            { icon: Building2, t: "Vales de despensa", d: "Broxel, Edenred, Efectivale, Sí Vale, Sodexo, Toka y Winko." },
          ].map((c) => (
            <div key={c.t} className="bg-white/85 rounded-3xl border border-border p-5 flex gap-4">
              <div className="size-11 rounded-2xl bg-althea-gradient grid place-items-center text-white shrink-0">
                <c.icon className="size-5" />
              </div>
              <div>
                <h3 className="font-bold">{c.t}</h3>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{c.d}</p>
              </div>
            </div>
          ))}
          <p className="text-xs text-muted-foreground bg-accent/60 rounded-2xl p-4 border border-border">
            Todos los cobros se realizan en pesos mexicanos (MXN). Las comisiones por tarjeta de crédito o pagos a plazos
            no son cobradas por Althea: son cargos de las instituciones financieras correspondientes.
          </p>
        </div>
      </div>
    </Section>
  );
}
