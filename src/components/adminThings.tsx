import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import { Search } from 'lucide-react';

export default function AdminThings() {
  return (
    <div className="flex items-center w-full">
      {/* <div className="flex items-center bg-[#E0FFFF] rounded-full px-4 py-2">
        <input
          type="text"
          placeholder="Buscar"
          className="bg-transparent outline-none text-gray-600 placeholder-gray-400 w-full"
        />
        <div className="w-8 h-8 bg-[#007863] rounded-full flex items-center justify-center ml-2">
          <Search className='text-white' />
        </div>
      </div> */}

      <div className="flex-1"></div>

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
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Sucursal 1</DropdownMenuItem>
            <DropdownMenuItem>Sucursal 2</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      
        <div className="flex-1"></div>

      {/* <div className="flex-1 flex justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="gap-2 px-4 py-2 rounded-md bg-[#007863] hover:bg-[#026553] text-white transition-colors duration-[10s] flex justify-center items-center"
            >
              Monodrogas
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Monodroga 1</DropdownMenuItem>
            <DropdownMenuItem>Monodroga 2</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div> */}
    </div>
  );
}
