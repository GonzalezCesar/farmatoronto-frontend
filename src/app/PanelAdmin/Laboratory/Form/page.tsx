import React from 'react'
import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: "#E0FFFF" }}>
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-4 flex items-center justify-center">
            <h1 className="text-5xl font-bold text-header mb-6 font-bebas-neue text-white text-shadow-outline tracking-wide">REGISTRO DE NUEVO PROVEEDOR</h1>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4 block m-5 mx-auto max-w-[60%]">
          <form>
            <div className="m-6 flex gap-5">
              <label className="text-[#024442] p-1 my-2"> Nombre: </label>
              <Input
                type="text"
                placeholder="Nombre del laboratorio a registrar"
                className="bg-[#F6FFFE] border-[#13CAC6] text-black placeholder:text-[#007863] p-2 my-1"
              />
            </div>
            <div className="m-6 flex gap-5">
              <label className="text-[#024442] p-1 my-2"> Dirección: </label>
              <Input
                type="text"
                placeholder="Ubicación del laboratorio"
                className="bg-[#F6FFFE] border-[#13CAC6] text-black placeholder:text-[#007863] p-2 my-1"
              />
            </div>
            <div className="m-6 flex gap-5">
              <label className="text-[#024442] p-1 my-2"> Teléfono: </label>
              <Input
                type="tel"
                placeholder="Teléfono de contacto del laboratorio"
                className="bg-[#F6FFFE] border-[#13CAC6] text-black placeholder:text-[#007863] p-2 my-1"
              />
            </div>
            <div className="m-6 flex gap-5">
              <label className="text-[#024442] p-1 my-2"> Productos: </label>
              <Input
                type="number"
                placeholder="Cantidad de productos proporcionados"
                className="bg-[#F6FFFE] border-[#13CAC6] text-black placeholder:text-[#007863] p-2 my-1"
              />
            </div>
            <div className="m-6 flex gap-5">
              <label className="text-[#024442] p-1 my-2"> Acciones: </label>
              <Input
                type="text"
                placeholder="Listado de medicamentos que otorga el LAB"
                className="bg-[#F6FFFE] border-[#13CAC6] text-black placeholder:text-[#007863] p-2 my-1"
              />
            </div>
            <div className="m-6 flex gap-5">
              <label className="text-[#024442] p-1 my-2"> Sucursal: </label>
              <select
                className="bg-[#F6FFFE] text-base border border-[#13CAC6] text-black p-2 my-1 rounded-md w-[4/10]"
                defaultValue=""
              >
                <option value="" disabled className="text-gray-900">
                  Ubicación del stock de la sucursal
                </option>
                <option value="1" className="text-gray-900">
                  Farmacia 1
                </option>
                <option value="2" className="text-gray-900">
                  Farmacia 2
                </option>
              </select>
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