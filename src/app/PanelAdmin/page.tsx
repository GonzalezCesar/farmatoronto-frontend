"use client";

import React from "react";
import Footer from "@/components/Footer";
import Link from "next/link";
import useUser from "@/hooks/useUser";
import Header from "@/components/Header";

type Role =
  | "administrador"
  | "farmaceutico"
  | "auxiliar"
  | "pasante"
  | "analista";

const panelsByRole: Record<Role, { name: string; path: string }[]> = {
  administrador: [
    { name: "Compra de insumos", path: "PanelAdmin/shopping-panel" },
    { name: "Órdenes de compra", path: "PanelAdmin/orders" },
    { name: "Medicamentos", path: "PanelAdmin/Medicines" },
    { name: "Laboratorios", path: "PanelAdmin/Laboratory" },
    { name: "Sucursales", path: "PanelAdmin/Pharmacies" },
  ],
  farmaceutico: [{ name: "Medicamentos", path: "PanelAdmin/Medicines" }],
  auxiliar: [{ name: "Medicamentos", path: "PanelAdmin/Medicines" }],
  pasante: [{ name: "Medicamentos", path: "PanelAdmin/Medicines" }],
  analista: [
    { name: "Compra de insumos", path: "PanelAdmin/shopping-panel" },
    { name: "Órdenes de compra", path: "PanelAdmin/orders" },
    { name: "Laboratorios", path: "PanelAdmin/Laboratory" },
  ],
};

export default function Home() {
  const { data: user, isLoading, error } = useUser();

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar el usuario</p>;

  const role = user?.user_type as Role;
  const panels = panelsByRole[role] ?? [];

  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ backgroundColor: "#E0FFFF" }}
    >
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-4 flex items-center justify-center">
          <h1 className="text-6xl font-bold text-header mb-6 font-bebas-neue text-white text-shadow-outline tracking-wide">
            PANEL DE ADMINISTRACIÓN
          </h1>
        </div>
        <div className="block">
          {panels.map((panel) => (
            <div
              key={panel.name}
              className="bg-white block m-5 border text-card-foreground group relative bg-gradient-to-br from-[#c0fff5] to-[#538c83]/10 rounded-3xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <Link href={panel.path}>
                <h2 className="text-2xl text-[#0C4835] font-semibold text-header mb-1">
                  {panel.name}
                </h2>
              </Link>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
