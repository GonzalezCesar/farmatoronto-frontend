import { Pill, Syringe, BugIcon as Bacteria, SmileIcon as Tooth } from "lucide-react"

export default function PharmacyCart() {
  const medications = [
    {
      icon: <Pill className="w-12 h-12 stroke-[1.5]" />,
      name: "Nombre del medicamento",
    },
    {
      icon: <Pill className="w-12 h-12 stroke-[1.5]" />,
      name: "Nombre del medicamento",
    },
    {
      icon: <Bacteria className="w-12 h-12 stroke-[1.5]" />,
      name: "Nombre del medicamento",
    },
    {
      icon: <Syringe className="w-12 h-12 stroke-[1.5]" />,
      name: "Nombre del medicamento",
    },
    {
      icon: <Tooth className="w-12 h-12 stroke-[1.5]" />,
      name: "Nombre del medicamento",
    },
  ]

  return (
    <div className="min-h-screen bg-[#e0ffff] p-8">
      <h1
        className="text-6xl font-bold text-center mb-12 text-[#04232f] tracking-wider"
        style={{
          WebkitTextStroke: "2px #04232f",
          textStroke: "2px #04232f",
          color: "transparent",
        }}
      >
        CARRITO DE COMPRA
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {medications.map((med, index) => (
          <div
            key={index}
            className="group relative bg-gradient-to-br from-[#c0fff5] to-[#538c83]/10 rounded-3xl p-6 
                     shadow-lg transition-all duration-300 hover:shadow-xl
                     hover:translate-y-[-4px]"
          >
            <div className="flex flex-col items-center text-center gap-4">
              <div className="text-[#04232f]">{med.icon}</div>
              <p className="text-sm text-[#04232f]/70">Presentación del medicamento</p>
              <h3 className="text-lg font-semibold text-[#04232f]">{med.name}</h3>

              <button
                className="opacity-0 group-hover:opacity-100 
                               bg-[#6aba6d] text-white px-4 py-2 rounded-full
                               transition-opacity duration-300 mt-2"
              >
                Agregar al pedido
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

