import React from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Generalthing from "@/components/GeneralThing";
import { ArrowLeft, Pencil, Trash2 } from "lucide-react";
import Link from "next/link";

export default function page() {
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ backgroundColor: "#E0FFFF" }}
    >
      <Header />

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex items-center justify-center mb-4">
          <div className="absolute left-0 ml-4">
            <Button
              variant="ghost"
              className="mb-8 bg-[#68e99d] hover:bg-[#68e99d]/90 h-12 w-12"
            >
              <Link href="/PanelAdmin">
                <ArrowLeft className="h-6 w-6" />
              </Link>
            </Button>
          </div>
          <div className="mb-4 flex items-center justify-center">
            <h1 className="text-6xl font-bold text-header mb-6 font-bebas-neue text-white text-shadow-outline tracking-wide">
              ÓRDEN DE COMPRA
            </h1>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4 m-5">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between px-5 gap-4">
            <Generalthing />
          </div>

          <div className="grid grid-cols-7 gap-4 m-1 mb-3 border-b-2 border-gray-30 justify-center text-justify">
            <h2 className="text-base text-[#727473] font-semibold text-header my-1.5 justify-center text-center">
              Codigo
            </h2>
            <h2 className="text-base text-[#727473] font-semibold text-header my-1.5 justify-center text-center">
              Nombre del laboratorio
            </h2>
            <h2 className="text-base text-[#727473] font-semibold text-header my-1.5 justify-center text-center">
              Analista de compra
            </h2>
            <h2 className="text-base text-[#727473] font-semibold text-header my-1.5 justify-center text-center">
              Fecha de emisión
            </h2>
            <h2 className="text-base text-[#727473] font-semibold text-header my-1.5 justify-center text-center">
              Forma de pago
            </h2>
            <h2 className="text-base text-[#727473] font-semibold text-header my-1.5 justify-center text-center">
              Medicinas
            </h2>
          </div>
          <div className="grid grid-cols-7 gap-4 m-1 mb-3 border-b-2 border-gray-30 justify-center text-justify">
            <h2 className="text-sm text-black font-light text-header my-1.5 justify-center text-center">
              01
            </h2>
            <h2 className="text-sm text-black font-ligth text-header my-1.5 justify-center text-center">
              ELMOR
            </h2>
            <h2 className="text-sm text-black font-ligth text-header my-1.5 justify-center text-center">
              Pablo Perez
            </h2>
            <h2 className="text-sm text-black font-ligth text-header my-1.5 justify-center text-center">
              06-03-2025
            </h2>
            <h2 className="text-sm text-black font-ligth text-header my-1.5 justify-center text-center">
              Contado
            </h2>
            <h2 className="text-sm text-black font-ligth text-header my-1.5 justify-center text-center">
              Listado de todas las medicinas
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
          <div className="grid grid-cols-7 gap-4 m-1 mb-3 border-b-2 border-gray-30 justify-center text-justify">
            <h2 className="text-sm text-black font-light text-header my-1.5 justify-center text-center">
              02
            </h2>
            <h2 className="text-sm text-black font-ligth text-header my-1.5 justify-center text-center">
              ANGI
            </h2>
            <h2 className="text-sm text-black font-ligth text-header my-1.5 justify-center text-center">
              Fabiana Martínez
            </h2>
            <h2 className="text-sm text-black font-ligth text-header my-1.5 justify-center text-center">
              04-03-2025
            </h2>
            <h2 className="text-sm text-black font-ligth text-header my-1.5 justify-center text-center">
              5 días
            </h2>
            <h2 className="text-sm text-black font-ligth text-header my-1.5 justify-center text-center">
              Listado de todas las medicinas
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
      </main>
      <Footer />
    </div>
  );
}
