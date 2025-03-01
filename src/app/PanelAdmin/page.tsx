import React from "react";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
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
          <div className="bg-white shadow-md rounded-lg p-4 block m-5">
            <Link href="/shopping-panel">
              <h2 className="text-2xl text-[#0C4835] font-semibold text-header mb-1">
                Compra de insumos
              </h2>
              <p>Gestión de compra de insumos para la farmacia.</p>
            </Link>
          </div>

          <div className="bg-white shadow-md rounded-lg p-4 block m-5">
            <Link href="">
              <h2 className="text-2xl text-[#0C4835] font-semibold text-header mb-1">
                Medicamentos
              </h2>
              <p>Gestión de medicamentos disponibles en la farmacia.</p>
            </Link>
          </div>

          <div className="bg-white shadow-md rounded-lg p-4 block m-5">
            <Link href="">
              <h2 className="text-2xl text-[#0C4835] font-semibold text-header mb-1">
                Laboratorios
              </h2>
              <p>Información de los proveedores asociados a la farmacia.</p>
            </Link>
          </div>

          <div className="bg-white shadow-md rounded-lg p-4 block m-5">
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
