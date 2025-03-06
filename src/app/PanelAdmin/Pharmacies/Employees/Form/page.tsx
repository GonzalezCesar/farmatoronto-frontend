"use client"
import React, { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { WithContext as ReactTags, Tag } from 'react-tag-input';
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

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
            <div className="m-6 flex gap-2">
              <label className="text-[#024442] p-1 my-2"> Cargo actual: </label>
              <Input
                type="text"
                placeholder="Cargo a ejercer en la farmacia"
                className="bg-[#F6FFFE] border-[#13CAC6] text-black placeholder:text-[#007863] p-2 my-1"
              />
            </div>
            <div className="m-6 flex gap-5">
              <label className="text-[#024442] p-1 my-2"> Cargos pasados: </label>
              <ReactTags
                tags={tags}
                delimiters={delimiters}
                handleDelete={handleDelete}
                handleAddition={handleAddition}
                inputFieldPosition="bottom"
                autocomplete
                placeholder="Ingrese cargos pasados"
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
                  Ubicación de la sucursal a trabajar
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
