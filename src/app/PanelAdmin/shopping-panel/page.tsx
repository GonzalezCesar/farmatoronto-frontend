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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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

        <div className="bg-white shadow-md rounded-lg p-4 block m-5 mx-auto max-w-[60%]">
          <form>
            <div className="m-6 flex gap-5">
              <label className="text-[#024442] p-1 my-2"> Medicamento: </label>
              <Input
                type="text"
                placeholder="Nombre del medicamento a pedir"
                className="bg-[#F6FFFE] border-[#13CAC6] text-black placeholder:text-[#007863] p-2 my-1"
              />
            </div>
            <div className="m-6 flex gap-5">
              <label className="text-[#024442] p-1 my-2"> Cantidad: </label>
              <Input
                type="number"
                placeholder="Cantidad del pedido"
                className="bg-[#F6FFFE] border-[#13CAC6] text-black placeholder:text-[#007863] p-2 my-1"
              />
            </div>
            <div className="m-6 flex gap-5">
              <label className="text-[#024442] p-1 my-2"> Precio: </label>
              <Input
                type="number"
                placeholder="Precio del medicamento"
                className="bg-[#F6FFFE] border-[#13CAC6] text-black placeholder:text-[#007863] p-2 my-1"
              />
            </div>
            <div className="m-6 flex gap-5">
              <label className="text-[#024442] p-1 my-2"> Proveedor: </label>
                <Select>
                  <SelectTrigger className="bg-[#F6FFFE] border-[#13CAC6] text-black placeholder:text-[#007863] p-2 my-1">
                    <SelectValue placeholder="Nombre del laboratorio proveedor" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lab1">Laboratorio 1</SelectItem>
                    <SelectItem value="lab2">Laboratorio 2</SelectItem>
                    <SelectItem value="lab3">Laboratorio 3</SelectItem>
                  </SelectContent>
                </Select>
            </div>
            
          </form>
          <div className="flex flex-star">
            <Button
              type="submit"
              className="w-[3/10] font-bebas-neue font-bold bg-[#36C34B] hover:bg-[#2ca33e] transition-colors duration-[10s] text-white text-base rounded-lg m-3 text-center mx-auto"
            >
              Añadir
            </Button>
          </div>
        </div>

        <div className="mb-2 mt-10 flex items-center justify-center">
            <h2 className="text-6xl font-bold text-header mb-6 font-bebas-neue text-white text-shadow-outline tracking-wide">
              LISTADO
            </h2>
          </div>

        <div className="bg-white shadow-md rounded-lg p-4 block m-5 mx-auto max-w-[60%]">
          <div className="flex justify-center items-center mb-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="gap-2 px-4 py-2 rounded-md bg-[#007863] hover:bg-[#026553] text-white transition-colors duration-[10s] flex justify-center items-center"
                >
                  Laboratorios
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center">
                <DropdownMenuItem>Laboratorio 1</DropdownMenuItem>
                <DropdownMenuItem>Laboratorio 2</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          {/* Atributos de la BD*/}
          <div className="grid grid-cols-3 gap-4 m-1 mb-3 border-b-2 border-gray-30 justify-center text-justify">
            <h2 className="text-base text-[#727473] font-semibold text-header my-1.5 justify-center text-center">
              Medicamento
            </h2>
            <h2 className="text-base text-[#727473] font-semibold text-header my-1.5 justify-center text-center">
              Cantidad
            </h2>
            <h2 className="text-base text-[#727473] font-semibold text-header my-1.5 justify-center text-center">
              Precio
            </h2>
          </div>
          {/* Campos a llenar */}
          <div className="grid grid-cols-3 gap-4 m-1 mb-3 border-b-2 border-gray-30 justify-center text-justify">
            <h2 className="text-sm text-black font-ligth text-header my-1.5 justify-center text-center">
              Ibuprofeno
            </h2>
            <h2 className="text-sm text-black font-ligth text-header my-1.5 justify-center text-center">
              15
            </h2>
            <h2 className="text-sm text-black font-ligth text-header my-1.5 justify-center text-center">
              20
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-4 m-1 mb-3 border-b-2 border-gray-30 justify-center text-justify">
            <h2 className="text-sm text-black font-ligth text-header my-1.5 justify-center text-center">
              Ibuprofeno
            </h2>
            <h2 className="text-sm text-black font-ligth text-header my-1.5 justify-center text-center">
              15
            </h2>
            <h2 className="text-sm text-black font-ligth text-header my-1.5 justify-center text-center">
              20
            </h2>
          </div>
          {/* Calculos de las sumatorias entre precios y cantidades*/}
          <div className="grid grid-cols-3 gap-4 m-1 mb-3 border-b-2 border-gray-30 justify-center text-justify">
            <h2 className="text-base text-black font-semibold text-header my-1.5 justify-center text-center">
              TOTAL
            </h2>
            <h2 className="text-base text-black font-semibold text-header my-1.5 justify-center text-center">
              Suma de las cantidades
            </h2>
            <h2 className="text-base text-black font-semibold text-header my-1.5 justify-center text-center">
              Suma de los precios
            </h2>
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
