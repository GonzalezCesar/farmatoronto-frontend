"use client";

import type React from "react";
import type { ChangeEvent } from "react";
import { useFilters } from "../hooks/useFilters";
import { Search, MapPin, ChevronDown, Pill } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";
import Link from "next/link";

export const Filters: React.FC = () => {
  const { filters, setFilters } = useFilters();

  const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    const newName = event.target.value;
    setFilters((prevState) => ({
      ...prevState,
      name: newName,
    }));
  };

  const handleChangeCategory = (category: string) => {
    setFilters((prevState) => ({
      ...prevState,
      category: category,
    }));
  };

  return (
    <div className="mx-auto flex w-full max-w-7xl items-center gap-4">
      {/* Logo y título */}
      <div className="flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#007863]">
          <Link href="/">
            <Pill className="h-8 w-8 text-primary-foreground" />
          </Link>
        </div>
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-primary-foreground">
            FARMATORONTO
          </h1>
          <Link href="/login">
            <button className="text-sm text-primary-foreground bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-2 px-4 rounded cursor-pointer transition duration-300 ease-in-out">
              Administrador
            </button>
          </Link>
        </div>
      </div>

      {/* Contenedor centrado para la barra de búsqueda y el selector de categorías */}
      <div className="flex flex-1 justify-center gap-4 max-w-3xl">
        {/* Barra de búsqueda */}
        <div className="relative flex flex-1 max-w-xl">
          <Input
            type="search"
            placeholder="Buscar"
            className="w-full bg-secondary text-secondary-foreground placeholder:text-secondary-foreground/70 px-4 py-2 rounded-lg"
            onChange={handleChangeName}
            value={filters.name}
          />
          <Search className="absolute right-4 top-2.5 w-5 h-5 text-gray-500" />
        </div>

        {/* Selector de categorías */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="gap-2 text-black bg-[#ffffff] hover:bg-secondary/80 px-4 py-2 rounded-lg"
            >
              Categorías
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onSelect={() => handleChangeCategory("Medicamentos")}
            >
              Medicamentos
            </DropdownMenuItem>
            <DropdownMenuItem
              onSelect={() => handleChangeCategory("Cuidado Personal")}
            >
              Cuidado Personal
            </DropdownMenuItem>
            <DropdownMenuItem
              onSelect={() => handleChangeCategory("Vitaminas")}
            >
              Belleza
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Icono de ubicación */}
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#007863]">
        <MapPin className="h-6 w-6 text-primary-foreground" />
      </div>
    </div>
  );
};
