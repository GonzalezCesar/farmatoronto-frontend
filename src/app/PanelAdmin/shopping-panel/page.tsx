"use client";

import { useState } from "react";
import { ArrowLeft, Pill } from "lucide-react";
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

export default function PurchaseForm() {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="min-h-screen bg-[#e0ffff]">
      {/* Header */}
      <header className="bg-[#005452] p-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#007863]">
            <Link href="/">
              <Pill className="h-8 w-8 text-primary-foreground" />
            </Link>
          </div>
          <h1 className="text-white text-4xl font-bold">FARMATORONTO</h1>
        </div>
        <div className="w-12 h-12 bg-[#c5ddd6] rounded-full flex items-center justify-center">
          <div className="w-6 h-6 border-4 border-[#005452] rounded-full" />
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6 max-w-6xl mx-auto">
        <Button
          variant="ghost"
          className="mb-8 bg-[#68e99d] hover:bg-[#68e99d]/90 h-12 w-12"
        >
          <Link href="/PanelAdmin">
            <ArrowLeft className="h-6 w-6" />
          </Link>
        </Button>

        <h2
          className="text-6xl font-bold text-center mb-12 text-[#04232f] tracking-wider"
          style={{
            WebkitTextStroke: "2px currentColor",
            WebkitTextFillColor: "transparent",
          }}
        >
          COMPRA DE INSUMOS
        </h2>

        <div className="grid md:grid-cols-[1fr_auto] gap-8">
          {/* Form Card */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-[#005452] text-3xl font-bold mb-8">
              ORDEN DE COMPRA
            </h3>

            <div className="space-y-6">
              <div className="grid gap-2">
                <label className="text-xl">Nombre</label>
                <Input
                  placeholder="Nombre del medicamento"
                  className="bg-[#e0ffff] border-none h-12"
                />
              </div>

              <div className="grid gap-2">
                <label className="text-xl">Forma de pago</label>
                <Input
                  placeholder="Pago"
                  className="bg-[#e0ffff] border-none h-12"
                />
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

            </div>
          </div>

          {/* Price and Quantity Section */}
          <div className="flex flex-col items-center gap-6">
            <div className="text-6xl font-bold text-[#04232f]">$$$</div>

            <div className="flex items-center gap-4">
              <Button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="bg-[#68e99d] hover:bg-[#68e99d]/90 h-12 w-12 text-2xl"
              >
                -
              </Button>
              <span className="text-xl font-medium">Cantidad</span>
              <Button
                onClick={() => setQuantity(quantity + 1)}
                className="bg-[#68e99d] hover:bg-[#68e99d]/90 h-12 w-12 text-2xl"
              >
                +
              </Button>
            </div>

            <div className="flex flex-col items-center gap-2">
              <Button className="bg-[#36c34b] hover:bg-[#36c34b]/90 text-white rounded-full px-12 py-6 text-xl">
                Comprar
              </Button>
              <span className="text-center text-sm">
                Crear pdf del
                <br />
                pedido y la
                <br />
                compra
              </span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#04232f] text-white p-4 text-center mt-12">
        2025 - FarmaToronto
      </footer>
    </div>
  );
}
