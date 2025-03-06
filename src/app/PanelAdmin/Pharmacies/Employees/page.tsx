import React from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import Footer from "@/components/footer";
import AdminThings from "@/components/adminThings";
import { Pencil, Trash2 } from "lucide-react";
import Link from "next/link";

export default function page() {
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ backgroundColor: "#E0FFFF" }}
    >
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-4 flex items-center justify-center">
          <h1 className="text-6xl font-bold text-header mb-6 font-bebas-neue text-white text-shadow-outline tracking-wide">
            EMPLEADOS
          </h1>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4 block m-5">

        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between px-5 gap-4">
            <AdminThings />
            <Link href="/PanelAdmin/Pharmacies/Employes/Form">
              <Button className="bg-[#007863] text-white px-4 py-2 rounded-md flex items-center hover:bg-[#026553] transition-colors duration-[10s]">
                + Nuevo Registro
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-8 gap-2.5 m-1 mb-3 border-b-2 border-gray-30 justify-center text-justify">
            <h2 className="text-base text-[#727473] font-semibold text-header my-1.5 justify-center text-center">
              Codigo
            </h2>
            <h2 className="text-base text-[#727473] font-semibold text-header my-1.5 justify-center text-center">
              Nombre
            </h2>
            <h2 className="text-base text-[#727473] font-semibold text-header my-1.5 justify-center text-center">
              Apellido
            </h2>
            <h2 className="text-base text-[#727473] font-semibold text-header my-1.5 justify-center text-center">
              Cédula
            </h2>
            <h2 className="text-base text-[#727473] font-semibold text-header my-1.5 justify-center text-center">
              Dirección
            </h2>
            <h2 className="text-base text-[#727473] font-semibold text-header my-1.5 justify-center text-center">
              Teléfono
            </h2>
            <h2 className="text-base text-[#727473] font-semibold text-header my-1.5 justify-center text-center">
              Email
            </h2>
            <h2 className="text-base text-[#727473] font-semibold text-header my-1.5 justify-center text-center">
              Fecha de Ingreso
            </h2>
          </div>
          <div className="grid grid-cols-9 gap-2.5 m-1 mb-3 border-b-2 border-gray-30 justify-center text-justify">
            <h2 className="text-sm text-black font-light text-header my-1.5 justify-center text-center">
              01
            </h2>
            <h2 className="text-sm text-black font-ligth text-header my-1.5 justify-center text-center">
              Fabiana
            </h2>
            <h2 className="text-sm text-black font-ligth text-header my-1.5 justify-center text-center">
              Martínez
            </h2>
            <h2 className="text-sm text-black font-ligth text-header my-1.5 justify-center text-center">
              23456789
            </h2>
            <h2 className="text-sm text-black font-ligth text-header my-1.5 justify-center text-center">
              Av. Atlántico
            </h2>
            <h2 className="text-sm text-black font-ligth text-header my-1.5 justify-center text-center">
              0426543789
            </h2>
            <h2 className="text-sm text-black font-ligth text-header my-1.5 justify-center text-center">
              mjhf@gmail.com
            </h2>
            <h2 className="text-sm text-black font-ligth text-header my-1.5 justify-center text-center">
              02-02-2024
            </h2>
            <div className="text-black flex justify-center gap-1">
              <Button className="bg-[#26BCB5] hover:bg-[#25CFC7] h-8 w-8">
                <Pencil />
              </Button>
              <Button className="bg-[#B12412] hover:bg-[#DE321B] h-8 w-8">
                <Trash2 />
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-star">
          <Button
            type="submit"
            className="w-[3/10] font-bebas-neue font-bold bg-[#09379A] hover:bg-[#0C307C] transition-colors duration-[10s] text-white text-base rounded-lg m-3 text-center mx-auto"
          >
            Ficha de trabajo
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
