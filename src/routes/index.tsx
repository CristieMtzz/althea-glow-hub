import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/althea/Navbar";
import { Hero } from "@/components/althea/Hero";
import { Gancho } from "@/components/althea/Gancho";
import { Envios } from "@/components/althea/Envios";
import { Pagos } from "@/components/althea/Pagos";
import { Seguros } from "@/components/althea/Seguros";
import { Resenas } from "@/components/althea/Resenas";
import { Albergues } from "@/components/althea/Albergues";
import { Marcas } from "@/components/althea/Marcas";
import { Contacto } from "@/components/althea/Contacto";
import { LoginModal } from "@/components/althea/LoginModal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Althea · Pet Wellness Community" },
      { name: "description", content: "Comunidad de bienestar animal: productos curados, envíos a todo México, pagos flexibles, seguros y rescate. Únete a la Comunidad Althea." },
      { property: "og:title", content: "Althea · Pet Wellness Community" },
      { property: "og:description", content: "Cuidamos hoy para un mañana mejor. Productos curados, envíos, pagos, seguros y comunidad." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
  const [loginOpen, setLoginOpen] = useState(false);
  const openLogin = () => setLoginOpen(true);

  return (
    <div className="min-h-screen">
      <Navbar onLogin={openLogin} />
      <main className="grid gap-8 pb-10">
        <Hero onLogin={openLogin} />
        <Gancho />
        <Envios />
        <Pagos />
        <Seguros />
        <Resenas onLogin={openLogin} />
        <Albergues />
        <Marcas />
      </main>
      <Contacto />
      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
    </div>
  );
}
