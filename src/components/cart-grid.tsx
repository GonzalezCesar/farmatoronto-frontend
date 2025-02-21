import type React from "react"
import { Pill, Syringe, BugIcon, SmileIcon } from "lucide-react"
import MedicationCard  from "@/components/medication-cart"

type MedicationCardProps = React.ComponentProps<typeof MedicationCard>

const medications: MedicationCardProps[] = [
  {
    icon: <Pill className="w-12 h-12 stroke-[1.5]" />,
    name: "Nombre del medicamento",
    presentation: "Presentación del medicamento",
  },
  {
    icon: <Pill className="w-12 h-12 stroke-[1.5]" />,
    name: "Nombre del medicamento",
    presentation: "Presentación del medicamento",
  },
  {
    icon: <BugIcon className="w-12 h-12 stroke-[1.5]" />,
    name: "Nombre del medicamento",
    presentation: "Presentación del medicamento",
  },
  {
    icon: <Syringe className="w-12 h-12 stroke-[1.5]" />,
    name: "Nombre del medicamento",
    presentation: "Presentación del medicamento",
  },
  {
    icon: <SmileIcon className="w-12 h-12 stroke-[1.5]" />,
    name: "Nombre del medicamento",
    presentation: "Presentación del medicamento",
  },
]

export default function CartGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {medications.map((medication, index) => (
        <MedicationCard key={index} {...medication} />
      ))}
    </div>
  )
}

