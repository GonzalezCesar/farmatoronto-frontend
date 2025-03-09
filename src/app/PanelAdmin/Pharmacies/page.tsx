import React from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PharmacyThing from "@/components/PharmacyThing";
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
            <Link href="/PanelAdmin">
              <Button
                variant="ghost"
                className="mb-8 bg-[#68e99d] hover:bg-[#68e99d]/90 h-12 w-12"
              >
                <ArrowLeft className="h-6 w-6" />
              </Button>
            </Link>
          </div>
          <div className="mb-4 flex items-center justify-center">
            <h1 className="text-6xl font-bold text-header mb-6 font-bebas-neue text-white text-shadow-outline tracking-wide">
              SUCURSALES
            </h1>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4 block m-5">
          <PharmacyThing />
          {/* Atributos de la BD*/}
          <div className="grid grid-cols-6 gap-4 m-1 mb-3 border-b-2 border-gray-30 justify-center text-justify">
            <h2 className="text-base text-[#727473] font-semibold text-header my-1.5 justify-center text-center">
              Codigo
            </h2>
            <h2 className="text-base text-[#727473] font-semibold text-header my-1.5 justify-center text-center">
              Dirección
            </h2>
            <h2 className="text-base text-[#727473] font-semibold text-header my-1.5 justify-center text-center">
              Contacto
            </h2>
            <h2 className="text-base text-[#727473] font-semibold text-header my-1.5 justify-center text-center">
              Ciudad
            </h2>
            <h2 className="text-base text-[#727473] font-semibold text-header my-1.5 justify-center text-center">
              Estado
            </h2>
          </div>
          {/* Campos a llenar */}
          <div className="grid grid-cols-6 gap-4 m-1 mb-3 border-b-2 border-gray-30 justify-center text-justify">
            <h2 className="text-sm text-black font-light text-header my-1.5 justify-center text-center">
              01
            </h2>
            <h2 className="text-sm text-black font-ligth text-header my-1.5 justify-center text-center">
              Av. Guarapiche
            </h2>
            <h2 className="text-sm text-black font-ligth text-header my-1.5 justify-center text-center">
              toronto1@gmail.com
            </h2>
            <h2 className="text-sm text-black font-ligth text-header my-1.5 justify-center text-center">
              Ciudad Guayana
            </h2>
            <h2 className="text-sm text-black font-ligth text-header my-1.5 justify-center text-center">
              Bolívar
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
          <Link
            href="/PanelAdmin/Pharmacies/Employees"
            className="text-center mx-auto"
          >
            <Button
              type="submit"
              className="w-[3/10] font-bebas-neue font-bold bg-[#4875D8] hover:bg-[#35569B] transition-colors duration-[10s] text-white text-base rounded-lg m-3 text-center mx-auto"
            >
              Personal
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
