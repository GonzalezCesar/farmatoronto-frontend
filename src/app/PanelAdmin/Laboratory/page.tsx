"use client"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import DataTable, { type Column } from "@/components/DataTable"
import { getLabs } from "@/services/labdatos"
import { Data } from "@/types/dataLabs"
export default function LaboratoryPage() {
  
  // Define columns for laboratory data
  const columns: Column<Data>[] = [
    { key: "id", header: "Código" },
    { key: "name", header: "Nombre Laboratorio" }, // Note: This field might need adjustment based on your actual data schema
    { key: "address", header: "Dirección" },
    { key: "phonenumber", header: "Teléfono" },
    
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
              LISTA DE PROVEEDORES
            </h1>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4 block m-5 max-w-5xl mx-auto">
          <div className="flex flex-col items-center justify-center px-5 gap-4 mb-4">
            <Link href="/PanelAdmin/Laboratory/Form">
              <Button className="bg-[#007863] text-white px-4 py-2 rounded-md flex items-center justify-center hover:bg-[#026553] transition-colors duration-[10s]">
                + Nuevo Registro
              </Button>
            </Link>
          </div>

          {/* DataTable component with laboratory data */}
          <div className="lab-table-container">

          <DataTable<Data>
            columns={columns}
            fetchData={getLabs}
            editRoute="/PanelAdmin/Laboratory/Edit"
            onDelete={(id) => {
              console.log(`Eliminar laboratorio con ID: ${id}`)
              // Aquí implementarías la lógica para eliminar el laboratorio
            }}
            className="text-center laboratory-table"
          />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

