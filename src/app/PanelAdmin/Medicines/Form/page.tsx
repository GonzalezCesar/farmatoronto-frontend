import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Page() {
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ backgroundColor: "#E0FFFF" }}
    >
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex items-center justify-center mb-4">
          <div className="absolute left-0 ml-4">
            <Link href="/PanelAdmin/Medicines">
              <Button
                variant="ghost"
                className="mb-8 bg-[#68e99d] hover:bg-[#68e99d]/90 h-12 w-12"
              >
                <ArrowLeft className="h-6 w-6" />
              </Button>
            </Link>
          </div>
          <div className="mb-4 flex items-center justify-center">
            <h1 className="text-5xl font-bold text-header mb-6 font-bebas-neue text-white text-shadow-outline tracking-wide">
              REGISTRO DE NUEVO MEDICAMENTO
            </h1>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4 block m-5 mx-auto max-w-[60%]">
          <form>
            <div className="m-6 flex gap-5">
              <label className="text-[#024442] p-1 my-2"> Nombre: </label>
              <Input
                type="text"
                placeholder="Nombre del medicamento"
                className="bg-[#F6FFFE] border-[#13CAC6] text-black placeholder:text-[#007863] p-2 my-1"
              />
            </div>
            <div className="m-6 flex gap-5">
              <label className="text-[#024442] p-1 my-2"> Componente: </label>
              <Input
                type="text"
                placeholder="Nombre del componente principal"
                className="bg-[#F6FFFE] border-[#13CAC6] text-black placeholder:text-[#007863] p-2 my-1"
              />
            </div>
            <div className="m-6 flex gap-5">
              <label className="text-[#024442] p-1 my-2"> Presentación: </label>
              <Input
                type="text"
                placeholder="Presentación del medicamento"
                className="bg-[#F6FFFE] border-[#13CAC6] text-black placeholder:text-[#007863] p-2 my-1"
              />
            </div>
            <div className="m-6 flex gap-5">
              <label className="text-[#024442] p-1 my-2"> Proveedor: </label>
              <Select>
                <SelectTrigger className="bg-[#F6FFFE] border-[#13CAC6] text-black placeholder:text-[#007863] p-2 my-1">
                  <SelectValue placeholder="Nombre del laboratorio" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="lab1">Laboratorio 1</SelectItem>
                  <SelectItem value="lab2">Laboratorio 2</SelectItem>
                  <SelectItem value="lab3">Laboratorio 3</SelectItem>
                </SelectContent>
              </Select>
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
              <label className="text-[#024442] p-1 my-2"> Cantidad: </label>
              <Input
                type="number"
                placeholder="Cantidad a guardar del medicamento"
                className="bg-[#F6FFFE] border-[#13CAC6] text-black placeholder:text-[#007863] p-2 my-1"
              />
            </div>
            <div className="m-6 block gap-5">
              <div className="m-6 flex gap-5">
                <label className="text-[#024442] p-1 my-2">Acción terapéutica:</label>
                <Select>
                  <SelectTrigger className="bg-[#F6FFFE] border-[#13CAC6] text-black placeholder:text-[#007863] p-2 my-1">
                    <SelectValue placeholder="Acción terapéutica" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="accTerap1">Acción 1</SelectItem>
                    <SelectItem value="accTerap2">Acción 2</SelectItem>
                    <SelectItem value="accTerap3">Acción 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-[#024442] p-1 my-2">Nueva acción terapéutica:</label>
                <div className="flex items-center gap-2">
                  <Input
                    type="text"
                    placeholder="Nueva acción terapéutica"
                    className="bg-[#F6FFFE] border-[#13CAC6] text-black placeholder:text-[#007863] p-2 my-1 flex-grow"
                  />
                  <Button className="bg-[#007863] text-white px-4 py-2 flex items-center justify-center rounded-md hover:bg-[#026553] transition-colors duration-[10s]">Nueva acción</Button>
                </div>
              </div>
            </div>
            <div className="m-6 flex gap-5">
              <label className="text-[#024442] p-1 my-2"> Sucursal: </label>
              <Select>
                <SelectTrigger className="bg-[#F6FFFE] border-[#13CAC6] text-black placeholder:text-[#007863] p-2 my-1">
                  <SelectValue placeholder="Sucursal de la farmacia" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="suc1">Sucursal 1</SelectItem>
                  <SelectItem value="suc2">Sucursal 2</SelectItem>
                  <SelectItem value="suc3">Sucursal 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="m-6">
              <label className="text-[#024442] p-1 my-2"> Monodrogas: </label>
              <div className="bg-white shadow-md rounded-lg p-4 block m-5">
                <div className="grid grid-cols-3 gap-4 m-1 mb-3 border-b-2 border-gray-30 justify-center text-justify">
                  <h2 className="text-base text-[#727473] font-semibold text-header my-1.5 justify-center text-center">
                    Código
                  </h2>
                  <h2 className="text-base text-[#727473] font-semibold text-header my-1.5 justify-center text-center">
                    Monodroga
                  </h2>
                  <h2 className="text-base text-[#727473] font-semibold text-header my-1.5 justify-center text-center">
                    Selección
                  </h2>
                </div>
                <div className="grid grid-cols-3 gap-4 m-1 mb-3 border-b-2 border-gray-30 justify-center text-justify">
                  <h2 className="text-base text-[#727473] text-header my-1.5 justify-center text-center">
                    01
                  </h2>
                  <h2 className="text-base text-[#727473] text-header my-1.5 justify-center text-center">
                    Ibuprofeno
                  </h2>
                  <div className="text-black flex justify-center gap-1">
                    <Input
                      type="checkbox"
                      className="form-checkbox h-6 w-6 text-[#13CAC6] border-[#13CAC6] rounded-md transition duration-150 ease-in-out"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 m-1 mb-3 border-b-2 border-gray-30 justify-center text-justify">
                  <h2 className="text-base text-[#727473] text-header my-1.5 justify-center text-center">
                    02
                  </h2>
                  <h2 className="text-base text-[#727473] text-header my-1.5 justify-center text-center">
                    Omeprazol
                  </h2>
                  <div className="text-black flex justify-center gap-1">
                    <Input
                      type="checkbox"
                      className="form-checkbox h-6 w-6 text-[#13CAC6] border-[#13CAC6] rounded-md transition duration-150 ease-in-out"
                    />
                  </div>
                </div>
                <div />
              </div>
            </div>
          </form>
        </div>
        <div className="flex justify-center mt-6">
          <Link href="/PanelAdmin/Medicines">
            <Button className="px-6 py-2 text-lg text-white bg-[#36C34B] hover:bg-[#2ca33e] transition-colors duration-[10s]">
              Registrar
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
