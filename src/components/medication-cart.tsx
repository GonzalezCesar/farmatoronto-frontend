import type { ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export interface MedicationCardProps {
  icon: ReactNode
  name: string
  presentation: string
}

export default function MedicationCard({ icon, name, presentation }: MedicationCardProps) {
  return (
    <Card
      className="group relative bg-gradient-to-br from-[#c0fff5] to-[#538c83]/10 rounded-3xl p-6 
                   shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      <div className="flex flex-col items-center text-center gap-4">
        <div className="text-[#04232f]">{icon}</div>
        <p className="text-sm text-[#04232f]/70">{presentation}</p>
        <h3 className="text-lg font-semibold text-[#04232f]">{name}</h3>

        <Button
          className="opacity-0 group-hover:opacity-100 bg-[#6aba6d] text-white hover:bg-[#5aa95c] transition-all duration-300"
          onClick={() => alert("Producto agregado al carrito")}
        >
          Agregar al pedido
        </Button>
      </div>
    </Card>
  )
}

