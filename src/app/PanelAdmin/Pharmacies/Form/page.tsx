import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Page() {
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ backgroundColor: "#E0FFFF" }}
    >
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-4 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-header mb-6 font-bebas-neue text-white text-shadow-outline tracking-wide">
            REGISTRO DE NUEVA SUCURSAL
          </h1>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4 block m-5 mx-auto max-w-[60%]">
          <form>
            <div className="m-6 flex gap-5">
              <label className="text-[#024442] p-1 my-2"> Dirección: </label>
              <Input
                type="text"
                placeholder="Ubicación de la farmacia"
                className="bg-[#F6FFFE] border-[#13CAC6] text-black placeholder:text-[#007863] p-2 my-1"
              />
            </div>
            <div className="m-6 flex gap-5">
              <label className="text-[#024442] p-1 my-2"> Contacto: </label>
              <Input
                type="email"
                placeholder="Correo electrónico de la nueva sucursal"
                className="bg-[#F6FFFE] border-[#13CAC6] text-black placeholder:text-[#007863] p-2 my-1"
              />
            </div>
            <div className="m-6 flex gap-2">
              <label className="text-[#024442] p-1 my-2">
                {" "}
                Ciudad:{" "}
              </label>
              <Input
                type="text"
                placeholder="Ciudad donde se encuentra la sucursal"
                className="bg-[#F6FFFE] border-[#13CAC6] text-black placeholder:text-[#007863] p-2 my-1"
              />
            </div>
            
          </form>
        </div>
        <div className="flex justify-center mt-6">
          <Button className="px-6 py-2 text-lg text-white bg-[#36C34B] hover:bg-[#2ca33e] transition-colors duration-[10s]">
            Registrar
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
