import React from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";

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
              SELECCIÓN DE MEDICINAS
            </h1>
          </div>
          <div className="absolute right-0 mr-4">
            <Link href="/PanelAdmin/shopping-panel/pay-panel">
              <Button
                variant="ghost"
                className="mb-8 bg-[#68e99d] hover:bg-[#68e99d]/90 h-12 w-12"
              >
                <ArrowRight className="h-6 w-6" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4 block m-5">
          <div className="flex justify-center items-center mb-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="gap-2 px-4 py-2 rounded-md bg-[#007863] hover:bg-[#026553] text-white transition-colors duration-[10s] flex justify-center items-center"
                >
                  Sucursales
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center">
                <DropdownMenuItem>Sucursal 1</DropdownMenuItem>
                <DropdownMenuItem>Sucursal 2</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          {/* Atributos de la BD*/}
          <div className="grid grid-cols-5 gap-4 m-1 mb-3 border-b-2 border-gray-30 justify-center text-justify">
            <h2 className="text-base text-[#727473] font-semibold text-header my-1.5 justify-center text-center">
              Código
            </h2>
            <h2 className="text-base text-[#727473] font-semibold text-header my-1.5 justify-center text-center">
              Medicamento
            </h2>
            <h2 className="text-base text-[#727473] font-semibold text-header my-1.5 justify-center text-center">
              Cantidad
            </h2>
            <h2 className="text-base text-[#727473] font-semibold text-header my-1.5 justify-center text-center">
              Precio
            </h2>
            <h2 className="text-base text-[#727473] font-semibold text-header my-1.5 justify-center text-center">
              Selección
            </h2>
          </div>
          {/* Campos a llenar */}
          <div className="grid grid-cols-5 gap-4 m-1 mb-3 border-b-2 border-gray-30 justify-center text-justify">
            <h2 className="text-sm text-black font-light text-header my-1.5 justify-center text-center">
              01
            </h2>
            <h2 className="text-sm text-black font-ligth text-header my-1.5 justify-center text-center">
              Ibuprofeno
            </h2>
            <Input
              type="number"
              placeholder="Cantidad"
              className="bg-[#F6FFFE] border-[#13CAC6] text-black text-sm placeholder:text-[#007863] p-2 my-1"
            />
            <h2 className="text-sm text-black font-ligth text-header my-1.5 justify-center text-center">
              20$
            </h2>
            <div className="text-black flex justify-center gap-1">
              <Input
                type="checkbox"
                className="form-checkbox h-8 w-8 text-[#13CAC6] border-[#13CAC6] rounded-md transition duration-150 ease-in-out"
              />
            </div>
          </div>
          <div className="grid grid-cols-5 gap-4 m-1 mb-3 border-b-2 border-gray-30 justify-center text-justify">
            <h2 className="text-sm text-black font-light text-header my-1.5 justify-center text-center">
              02
            </h2>
            <h2 className="text-sm text-black font-ligth text-header my-1.5 justify-center text-center">
              Loratadina
            </h2>
            <Input
              type="number"
              placeholder="Cantidad"
              className="bg-[#F6FFFE] border-[#13CAC6] text-black text-sm placeholder:text-[#007863] p-2 my-1"
            />
            <h2 className="text-sm text-black font-ligth text-header my-1.5 justify-center text-center">
              12.99$
            </h2>
            <div className="text-black flex justify-center gap-1">
              <Input
                type="checkbox"
                className="form-checkbox h-8 w-8 text-[#13CAC6] border-[#13CAC6] rounded-md transition duration-150 ease-in-out"
              />
            </div>
          </div>
          {/* Calculos de las sumatorias entre precios y cantidades*/}
          <div className="grid grid-cols-5 gap-4 m-1 mb-3 border-b-2 border-gray-30 justify-center text-justify">
            <span></span>
            <h2 className="text-base text-black font-semibold text-header my-1.5 justify-center text-center">
              TOTAL
            </h2>
            <h2 className="text-base text-black font-semibold text-header my-1.5 justify-center text-center">
              Suma de las cantidades
            </h2>
            <h2 className="text-base text-black font-semibold text-header my-1.5 justify-center text-center">
              Suma de los precios
            </h2>
            <span></span>
          </div>
        </div>

        <div className="flex flex-star">
          <Link
            href="/PanelAdmin/shopping-panel/pay-panel"
            className="text-center mx-auto"
          >
            <Button
              type="submit"
              className="w-[3/10] font-bebas-neue font-bold bg-[#36C34B] hover:bg-[#2ca33e] transition-colors duration-[10s] text-white text-base rounded-lg m-3 text-center mx-auto"
            >
              Siguiente
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
