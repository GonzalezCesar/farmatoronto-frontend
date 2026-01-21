"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PharmacyThing from "@/components/PharmacyThing";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import DataTable, { Column } from "@/components/DataTable";
import { Pharmacie } from "@/types/pharmacie";
import { getPharmacies } from "@/services/labdatos";

export default function page() {
  const columns: Column<Pharmacie>[] = [
    { key: "id", header: "Código" },
    { key: "address", header: "Dirección" },
    { key: "name", header: "Contacto" }, // Note: This field might need adjustment based on your actual data schema
    { key: "city_id", header: "Ciudad" },
    { key: "phonenumber", header: "Estado" },
  ];

  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ backgroundColor: "#E0FFFF" }}
    >
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex items-center justify-center mb-4">
          <div className="absolute left-0 ml-4">
            <Link href="/PanelAdmin">
              <Button
                variant="ghost"
                className="mb-8 bg-[#68e99d] hover:bg-[#68e99d]/90 h-12 w-12"
              >
                <ArrowLeft className="h-6 w-6" />
              </Button>
            </Link>
          </div>
          <div className="mb-4 flex items-center justify-center">
            <h1 className="text-6xl font-bold text-header mb-6 font-bebas-neue text-white text-shadow-outline tracking-wide">
              SUCURSALES
            </h1>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4 block m-5 max-w-5xl mx-auto">
          <PharmacyThing />
          {/* Atributos de la BD*/}

          {/* Campos a llenar */}

          <div className="lab-table-container">
            <DataTable<Pharmacie>
              columns={columns}
              fetchData={getPharmacies}
              editRoute="/PanelAdmin/Laboratory/Edit"
              onDelete={(id) => {
                console.log(`Eliminar laboratorio con ID: ${id}`);
                // Aquí implementarías la lógica para eliminar el laboratorio
              }}
              className="text-center pharmacies-table"
            />
          </div>
        </div>
        <div className="flex flex-star">
          <Link
            href="/PanelAdmin/Pharmacies/Employees"
            className="text-center mx-auto"
          >
            <Button
              type="submit"
              className="w-[3/10] font-bebas-neue font-bold bg-[#4875D8] hover:bg-[#35569B] transition-colors duration-[10s] text-white text-base rounded-lg m-3 text-center mx-auto"
            >
              Personal
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
