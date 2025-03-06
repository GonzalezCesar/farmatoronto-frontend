"use client"
import React, { useState, KeyboardEvent, ChangeEvent } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { WithContext as ReactTags, Tag } from 'react-tag-input';

const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

export default function Page() {
  const [tags, setTags] = useState<Tag[]>([]);

  const handleDelete = (i: number) => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  const handleAddition = (tag: Tag) => {
    setTags([...tags, tag]);
  };

  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ backgroundColor: "#E0FFFF" }}
    >
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-4 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-header mb-6 font-bebas-neue text-white text-shadow-outline tracking-wide">
            REGISTRO DE NUEVO MEDICAMENTO
          </h1>
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
              <select
                className="bg-[#F6FFFE] text-base border border-[#13CAC6] text-black p-2 my-1 rounded-md w-[4/10]"
                defaultValue=""
              >
                <option value="" disabled className="text-gray-900">
                  Laboratorio proveedor
                </option>
                <option value="1" className="text-gray-900">
                  LAB 1
                </option>
                <option value="2" className="text-gray-900">
                  LAB 2
                </option>
              </select>
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
            <div className="m-6 flex gap-5">
              <label className="text-[#024442] p-1 my-2"> Acción: </label>
              <Input
                type="text"
                placeholder="Acción terapéutica del medicamento"
                className="bg-[#F6FFFE] border-[#13CAC6] text-black placeholder:text-[#007863] p-2 my-1"
              />
            </div>
            <div className="m-6 flex gap-5">
              <label className="text-[#024442] p-1 my-2"> Monodrogas: </label>
              <ReactTags
                tags={tags}
                delimiters={delimiters}
                handleDelete={handleDelete}
                handleAddition={handleAddition}
                inputFieldPosition="bottom"
                autocomplete
                placeholder="Ingrese monodroga"
                classNames={{
                  tagInput: "bg-[#F6FFFE] border border-[#13CAC6] p-2 my-1 text-black rounded-md",
                  tag: "bg-[#E0FFFF] text-[#024442] border-[#13CAC6] rounded p-1 m-1 rounded-md",
                  remove: "text-[#13CAC6] hover:text-[#007863]"
                }}
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
