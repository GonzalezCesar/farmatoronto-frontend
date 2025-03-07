"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function PurchaseForm() {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="min-h-screen bg-[#e0ffff]">
      <Header />

      {/* Main Content */}
      <main className="p-6 max-w-6xl mx-auto">

        <div className="flex items-center justify-center mb-4">
          <div className="absolute left-0 ml-4">
            <Link href="/PanelAdmin/shopping-panel">
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
              COMPRA DE INSUMOS
            </h1>
          </div>
        </div>

        <div className="grid md:grid-cols-[1fr_auto] gap-8">
          {/* Form Card */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-[#005452] text-3xl font-bold mb-8">
              ORDEN DE COMPRA
            </h3>

            <div className="space-y-6">
              <div className="grid gap-2">
                <label className="text-xl">
                  Forma de pago
                </label>
                <Select>
                  <SelectTrigger className="bg-[#e0ffff] border-none h-12">
                    <SelectValue placeholder="Pago" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pago1">Contado</SelectItem>
                    <SelectItem value="pago2">5 días</SelectItem>
                    <SelectItem value="pago3">15 días</SelectItem>
                    <SelectItem value="pago4">30 días</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <label className="text-xl">
                  Laboratorio que lo comercializa
                </label>
                <Select>
                  <SelectTrigger className="bg-[#e0ffff] border-none h-12">
                    <SelectValue placeholder="Nombre del laboratorio" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lab1">Laboratorio 1</SelectItem>
                    <SelectItem value="lab2">Laboratorio 2</SelectItem>
                    <SelectItem value="lab3">Laboratorio 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <label className="text-xl">Fecha de emisión</label>
                <Input
                  type="date"
                  className="bg-[#e0ffff] border-none h-12"
                />
              </div>

              <div className="grid gap-2">
                <label className="text-xl">
                  Sucursal
                </label>
                <Select>
                  <SelectTrigger className="bg-[#e0ffff] border-none h-12">
                    <SelectValue placeholder="Sucursal de la farmacia" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="suc1">Sucursal 1</SelectItem>
                    <SelectItem value="suc2">Sucursal 2</SelectItem>
                    <SelectItem value="suc3">Sucursal 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>

            </div>
          </div>

          {/* Price and Quantity Section */}
          <div className="flex flex-col items-center gap-6">
            <div className="text-6xl font-bold text-[#04232f]">$$$</div>

            <div className="flex items-center gap-4">
              <p className="text-xl text-black font-ligth text-header my-1.5 justify-center text-center">
                NUM# Cantidad total de insumos
              </p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <Button className="bg-[#36c34b] hover:bg-[#36c34b]/90 text-white rounded-full px-12 py-6 text-xl">
                Emitir pedido
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
