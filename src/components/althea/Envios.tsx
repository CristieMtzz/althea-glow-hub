import envios from "@/assets/envios.png";
import { Truck, MapPin, CalendarClock, PackageCheck } from "lucide-react";
import { Section } from "./Section";

export function Envios() {
  return (
    <Section id="envios" eyebrow="Envíos" title="El bienestar llega hasta tu hogar"
      intro="Entregas rápidas y seguras en todo México con paqueterías confiables. En CDMX, opción de entrega vía Uber.">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { icon: Truck, t: "Cobertura nacional", d: "Tiempo estimado de 48 a 72 horas en todo México." },
            { icon: MapPin, t: "CDMX Express", d: "Entrega vía Uber en ~24 h. Solicitar con un día de anticipación." },
            { icon: PackageCheck, t: "Paqueterías aliadas", d: "DHL, FedEx, Estafeta, Paquetexpress y UPS." },
            { icon: CalendarClock, t: "Pide antes del miércoles", d: "Evita que tu pedido se cruce con el fin de semana." },
          ].map((c) => (
            <div key={c.t} className="bg-white/85 rounded-3xl border border-border p-5 hover:shadow-althea transition">
              <div className="size-11 rounded-2xl bg-althea-gradient grid place-items-center text-white">
                <c.icon className="size-5" />
              </div>
              <h3 className="mt-4 font-bold">{c.t}</h3>
              <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{c.d}</p>
            </div>
          ))}
          <p className="sm:col-span-2 text-xs text-muted-foreground bg-accent/60 rounded-2xl p-4 border border-border">
            Los costos generados por el traslado de los productos no son cubiertos por Althea y deberán ser cubiertos por el cliente.
          </p>
        </div>
        <div className="relative order-first lg:order-last">
          <div className="absolute -inset-4 bg-althea-gradient opacity-15 blur-3xl rounded-[3rem]" />
          <img src={envios} alt="Envíos Althea" className="relative w-full rounded-[2rem] shadow-althea object-cover" />
        </div>
      </div>
    </Section>
  );
}
