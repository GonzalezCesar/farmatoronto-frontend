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
            <Link href="/PanelAdmin/Pharmacies/Employees">
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
              REGISTRO DE NUEVO EMPLEADO
            </h1>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4 block m-5 mx-auto max-w-[60%]">
          <form>
            <div className="m-6 flex gap-5">
              <label className="text-[#024442] p-1 my-2"> Empleado: </label>
              <Input
                type="text"
                placeholder="Primer nombre"
                className="bg-[#F6FFFE] border-[#13CAC6] text-black placeholder:text-[#007863] p-2 my-1"
              />
              <Input
                type="text"
                placeholder="Primer apellido"
                className="bg-[#F6FFFE] border-[#13CAC6] text-black placeholder:text-[#007863] p-2 my-1"
              />
            </div>
            <div className="m-6 flex gap-5">
              <label className="text-[#024442] p-1 my-2"> Cédula: </label>
              <Input
                type="number"
                placeholder="Cédula de identidad"
                className="bg-[#F6FFFE] border-[#13CAC6] text-black placeholder:text-[#007863] p-2 my-1"
              />
            </div>
            <div className="m-6 flex gap-2">
              <label className="text-[#024442] p-1 my-2"> Dirección: </label>
              <Input
                type="text"
                placeholder="Dirección del empleado"
                className="bg-[#F6FFFE] border-[#13CAC6] text-black placeholder:text-[#007863] p-2 my-1"
              />
            </div>
            <div className="m-6 flex gap-2">
              <label className="text-[#024442] p-1 my-2"> Teléfono: </label>
              <Input
                type="number"
                placeholder="Número de teléfono"
                className="bg-[#F6FFFE] border-[#13CAC6] text-black placeholder:text-[#007863] p-2 my-1"
              />
            </div>
            <div className="m-6 flex gap-2">
              <label className="text-[#024442] p-1 my-2"> Email: </label>
              <Input
                type="email"
                placeholder="Correo electrónico del empleado"
                className="bg-[#F6FFFE] border-[#13CAC6] text-black placeholder:text-[#007863] p-2 my-1"
              />
            </div>
            <div className="m-6 flex gap-2">
              <label className="text-[#024442] p-1 my-2"> Ingreso: </label>
              <Input
                type="date"
                placeholder="Fecha de ingreso a la farmacia"
                className="bg-[#F6FFFE] border-[#13CAC6] text-black placeholder:text-[#007863] p-2 my-1"
              />
            </div>
            <div className="m-6 flex gap-5">
              <label className="text-[#024442] p-1 my-2"> Cargo actual: </label>
              <Select>
                <SelectTrigger className="bg-[#F6FFFE] border-[#13CAC6] text-black placeholder:text-[#007863] p-2 my-1">
                  <SelectValue placeholder="Cargo a ejercer en la farmacia" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cargo1">Administrador</SelectItem>
                  <SelectItem value="cargo2">Farmacéutico</SelectItem>
                  <SelectItem value="cargo3">Auxiliar de farmacia</SelectItem>
                  <SelectItem value="cargo4">Pasante de farmacia</SelectItem>
                  <SelectItem value="cargo5">Analista de compras</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="m-6 gap-5">
              <label className="text-[#024442] p-1 my-2">
                {" "}
                Cargos anteriormente ejercidos:{" "}
              </label>
              <div className="m-6">
                <div className="bg-white shadow-md rounded-lg p-4 block m-5">
                  <div className="grid grid-cols-3 gap-4 m-1 mb-3 border-b-2 border-gray-30 justify-center text-justify">
                    <h2 className="text-base text-[#727473] font-semibold text-header my-1.5 justify-center text-center">
                      Código
                    </h2>
                    <h2 className="text-base text-[#727473] font-semibold text-header my-1.5 justify-center text-center">
                      Cargos
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
                      Administrador
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
                      Farmacéutico
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
                      03
                    </h2>
                    <h2 className="text-base text-[#727473] text-header my-1.5 justify-center text-center">
                      Auxiliar de farmacia
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
                      04
                    </h2>
                    <h2 className="text-base text-[#727473] text-header my-1.5 justify-center text-center">
                      Pasante de farmacia
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
                      05
                    </h2>
                    <h2 className="text-base text-[#727473] text-header my-1.5 justify-center text-center">
                      Analista de compras
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
                      06
                    </h2>
                    <h2 className="text-base text-[#727473] text-header my-1.5 justify-center text-center">
                      Ninguno
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
          </form>
        </div>
        <div className="flex justify-center mt-6">
          <Link href="/PanelAdmin/Pharmacies/Employees">
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
