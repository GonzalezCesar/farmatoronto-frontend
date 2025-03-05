import React from "react";
import Image from "next/image";
import buscar from "@/Image/buscar.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";

export default function AdminThings() {
  return (
    <div className="flex justify-between items-center mb-4 px-5">
      <div className="flex items-center bg-[#E0FFFF] rounded-full px-4 py-2">
        <input
          type="text"
          placeholder="Buscar"
          className="bg-transparent outline-none text-gray-600 placeholder-gray-400 w-full"
        />
        <div className="w-8 h-8 bg-[#007863] rounded-full flex items-center justify-center ml-2">
          <Image src={buscar} alt="Logo" width={16} height={16} />
        </div>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="gap-2 px-4 py-2 rounded-md bg-[#007863] hover:bg-[#026553] text-white transition-colors duration-[10s]"
          >
            Sucursales
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>Sucursal 1</DropdownMenuItem>
          <DropdownMenuItem>Sucursal 2</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Button className="bg-[#007863] text-white px-4 py-2 rounded-md flex items-center hover:bg-[#026553] transition-colors duration-[10s]">
        + Nuevo Registro
      </Button>
    </div>
  );
}
