"use client"


import { Button } from "@/components/ui/button"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import AdminThings from "@/components/adminThings"
import { ArrowLeft, ChevronDown, Pencil, Trash2 } from "lucide-react"
import Link from "next/link"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { getProducts } from "@/services/products"
import type { Product } from "@/types/product"
import DataTable, { Column } from "@/components/DataTable"


export default function MedicinesPage() {
  
  const columns: Column<Product>[] = [
    { key: "id", header: "Codigo" },
    { key: "name", header: "Nombre" },
    { key: "maincomponent", header: "Componente principal" },
    { key: "presentation", header: "Presentacion" },
    { key: "lab_name", header: "Laboratorio" },
    {
      key: "price",
      header: "Precio",
      render: (item: Product) => `$${item.price.toFixed(2)}`,
    },
    { key: "amount", header: "Total stock" },
    { key: "action", header: "Acción" },
    // Columna vacía para mantener el grid-cols-10 (9 columnas + acciones)
    { key: "", header: "" },
  ]

  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: "#E0FFFF" }}>
      <Header />

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex items-center justify-center mb-4">
          <div className="absolute left-0 ml-4">
            <Link href="/PanelAdmin">
              <Button variant="ghost" className="mb-8 bg-[#68e99d] hover:bg-[#68e99d]/90 h-12 w-12">
                <ArrowLeft className="h-6 w-6" />
              </Button>
            </Link>
          </div>
          <div className="mb-4 flex items-center justify-center">
            <h1 className="text-6xl font-bold text-header mb-6 font-bebas-neue text-white text-shadow-outline tracking-wide">
              MEDICAMENTOS
            </h1>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4 m-5">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between px-5 gap-4">
            <AdminThings />
            <div className="flex-1 flex justify-end">
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
            </div>

            <Link href="/PanelAdmin/Medicines/Form">
              <Button className="bg-[#007863] text-white px-4 py-2 rounded-md hover:bg-[#026553] transition-colors duration-[10s]">
                + Nuevo Registro
              </Button>
            </Link>
          </div>

          <DataTable<Product>
            columns={columns}
            fetchData={getProducts as (page: number) => Promise<Product[]>}
            editRoute="/PanelAdmin/Medicines/Edit"
            onDelete={(id) => {
              console.log(`Eliminar medicamento con ID: ${id}`)
              // Aquí implementarías la lógica para eliminar el medicamento
            }}
          />

          {/* <div className="grid grid-cols-10 gap-4 m-1 mb-3 border-b-2 border-gray-30 justify-center text-justify">
            <h2 className="text-base text-[#727473] font-semibold text-header my-1.5 justify-center text-center">
              Codigo
            </h2>
            <h2 className="text-base text-[#727473] font-semibold text-header my-1.5 justify-center text-center">
              Nombre
            </h2>
            <h2 className="text-base text-[#727473] font-semibold text-header my-1.5 justify-center text-center">
              Componente principal
            </h2>
            <h2 className="text-base text-[#727473] font-semibold text-header my-1.5 justify-center text-center">
              Presentacion
            </h2>
            <h2 className="text-base text-[#727473] font-semibold text-header my-1.5 justify-center text-center">
              Laboratorio
            </h2>
            <h2 className="text-base text-[#727473] font-semibold text-header my-1.5 justify-center text-center">
              Precio
            </h2>
            <h2 className="text-base text-[#727473] font-semibold text-header my-1.5 justify-center text-center">
              Total stock
            </h2>
            <h2 className="text-base text-[#727473] font-semibold text-header my-1.5 justify-center text-center">
              Monodrogas
            </h2>
            <h2 className="text-base text-[#727473] font-semibold text-header my-1.5 justify-center text-center">
              Acciones
            </h2>
        
          </div> */}

          {/* {loading ? (
            <div className="text-center py-4">Cargando medicamentos...</div>
          ) : error ? (
            <div className="text-center py-4 text-red-500">{error}</div>
          ) : medicines.length === 0 ? (
            <div className="text-center py-4">No hay medicamentos disponibles</div>
          ) : (
            medicines.map((medicine) => (
              <div
                key={medicine.id}
                className="grid grid-cols-10 gap-4 m-1 mb-3 border-b-2 border-gray-30 justify-center text-justify"
              >
                <div className="text-center">{medicine.id || "-"}</div>
                <div className="text-center">{medicine.name || "-"}</div>
                <div className="text-center">{medicine.maincomponent || "-"}</div>
                <div className="text-center">{medicine.presentation || "-"}</div>
                <div className="text-center">{medicine.lab_name || "-"}</div>
                <div className="text-center">${medicine.price?.toFixed(2) || "-"}</div>
                <div className="text-center">{medicine.amount || "0"}</div>
                {/* <div className="text-center">{medicine.action?.join(", ") || "-"}</div> */}
                {/* <div className="text-center"></div>
                <div className="text-center">{medicine.action || "0"}</div>
                <div className="text-black flex justify-center gap-1">
                  <Link href={`/PanelAdmin/Medicines/Edit/${medicine.id}`}>
                    <Button className="bg-[#26BCB5] hover:bg-[#25CFC7] h-8 w-8">
                      <Pencil className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Button
                    className="bg-[#B12412] hover:bg-[#DE321B] h-8 w-8"
                    onClick={() => {
                      // Aquí puedes implementar la lógica para eliminar
                      if (window.confirm("¿Estás seguro de que deseas eliminar este medicamento?")) {
                        // Lógica de eliminación
                      }
                    }}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))
          )}

          {/* Paginación */}
          {/* <div className="flex justify-center mt-4 gap-2">
            <Button onClick={handlePrevPage} disabled={currentPage === 0 || loading} variant="outline" size="sm">
              <ChevronLeft className="h-4 w-4" />
              Anterior
            </Button>
            <span className="flex items-center px-3">Página {currentPage + 1}</span>
            <Button onClick={handleNextPage} disabled={medicines.length < 5 || loading} variant="outline" size="sm">
              Siguiente
              <ChevronRight className="h-4 w-4" />
            </Button> 
          </div>  */}
        </div>

        <div className="mb-4 flex items-center justify-center">
            <h2 className="text-6xl font-bold text-header mb-6 font-bebas-neue text-white text-shadow-outline tracking-wide">
              MONODROGAS
            </h2>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4 m-5">
          <div className="flex items-center justify-center px-5 gap-4">
            <Link href="/PanelAdmin/Medicines/formMonodrogs">
            <Button className="bg-[#007863] text-white px-4 py-2 flex items-center justify-center rounded-md hover:bg-[#026553] transition-colors duration-[10s]"> 
              + Nuevo Registro
            </Button>
            </Link>
          </div>

          <div className="grid grid-cols-4 gap-4 m-1 mb-3 border-b-2 border-gray-30 justify-center text-justify">
            <h2 className="text-base text-[#727473] font-semibold text-header my-1.5 justify-center text-center">
              Codigo
            </h2>
            <h2 className="text-base text-[#727473] font-semibold text-header my-1.5 justify-center text-center">
              Nombre
            </h2>
            <h2 className="text-base text-[#727473] font-semibold text-header my-1.5 justify-center text-center">
              Descripción
            </h2>
          </div>
          <div className="grid grid-cols-4 gap-4 m-1 mb-3 border-b-2 border-gray-30 justify-center text-justify">
            <h2 className="text-sm text-black font-light text-header my-1.5 justify-center text-center">
              01
            </h2>
            <h2 className="text-sm text-black font-ligth text-header my-1.5 justify-center text-center">
              Rifaximina
            </h2>
            <h2 className="text-sm text-black font-ligth text-header my-1.5 justify-center text-center">
              Para el dolor de cabeza
            </h2>
            <div className="text-black flex justify-center gap-1">
              <Button className="bg-[#26BCB5] hover:bg-[#25CFC7] h-8 w-8">
                <Pencil />
              </Button>
              <Button className="bg-[#B12412] hover:bg-[#DE321B] h-8 w-8">
                <Trash2 />
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-star">
          <Button
            type="submit"
            className="w-[3/10] font-bebas-neue font-bold bg-[#4875D8] hover:bg-[#35569B] transition-colors duration-[10s] text-white text-base rounded-lg m-3 text-center mx-auto"
          >
            Generar reporte
          </Button>
          <Button
            type="submit"
            className="w-[3/10] font-bebas-neue font-bold bg-[#09379A] hover:bg-[#0C307C] transition-colors duration-[10s] text-white text-base rounded-lg m-3 text-center mx-auto"
          >
            Reporte de medicamento
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  )
}

