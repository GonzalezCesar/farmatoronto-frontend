import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";

export default function Home() {

  
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ backgroundColor: "#E0FFFF" }}
    >
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-4 flex items-center justify-center">
          <h1 className="text-6xl font-bold text-header mb-6 font-bebas-neue text-white text-shadow-outline tracking-wide">
            PANEL DE ADMINISTRACION
          </h1>
        </div>
        <div className="block">
          <div className="bg-white block m-5 border text-card-foreground group relative bg-gradient-to-br from-[#c0fff5] to-[#538c83]/10 rounded-3xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <Link href="/shopping-panel" className="">
              <h2 className="text-2xl text-[#0C4835] font-semibold text-header mb-1 ">
                Compra de insumos
              </h2>
              <p>Gestión de compra de insumos para la farmacia.</p>
            </Link>
          </div>

          <div className="bg-white block m-5 border text-card-foreground group relative bg-gradient-to-br from-[#c0fff5] to-[#538c83]/10 rounded-3xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <Link href="">
              <h2 className="text-2xl text-[#0C4835] font-semibold text-header mb-1">
                Medicamentos
              </h2>
              <p>Gestión de medicamentos disponibles en la farmacia.</p>
            </Link>
          </div>

          <div className="bg-white block m-5 border text-card-foreground group relative bg-gradient-to-br from-[#c0fff5] to-[#538c83]/10 rounded-3xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <Link href="">
              <h2 className="text-2xl text-[#0C4835] font-semibold text-header mb-1">
                Laboratorios
              </h2>
              <p>Información de los proveedores asociados a la farmacia.</p>
            </Link>
          </div>

          <div className="bg-white block m-5 border text-card-foreground group relative bg-gradient-to-br from-[#c0fff5] to-[#538c83]/10 rounded-3xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <Link href="">
              <h2 className="text-2xl text-[#0C4835] font-semibold text-header mb-1">
                Sucursales
              </h2>
              <p>Gestión de las sucursales y los empleados de la farmacia.</p>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

// export default function page() {
//   return (
//     <div>page
//         <h1>Hola gente</h1>
//     </div>
//   )
// }
