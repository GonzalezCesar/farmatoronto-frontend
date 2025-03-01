import Navbar from "@/components/NavBar";

export default function VistaProductos() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-[rgb(0,84,82)] p-4">
        <Navbar />
      </header>

      {/* Main Content */}
      <div className="flex-1 bg-[#e0ffff] p-8">
        {/* Catalog Header */}
        <div className="flex justify-between items-center mb-8">
          <h2
            className="text-[#04232f] text-7xl font-bold tracking-wider text-center mx-auto"
            style={{ WebkitTextStroke: "1px #04232f", WebkitTextFillColor: "transparent" }}
          >
            CATALOGO
          </h2>
        </div>

        {/* Medication Card */}
        <div className="bg-[#c0fff5] max-w-4xl mx-auto rounded-3xl p-8 flex gap-12 relative shadow-lg">
          {/* Pill Image */}
          <div className="flex flex-col items-center gap-2">
            <div className="border-2 border-[#04232f] rounded-full w-64 h-64 flex items-center justify-center relative">
              <div className="w-48 h-48 relative">
                <svg viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 50 L150 50" stroke="#04232f" strokeWidth="2" />
                  <path d="M50 25 L150 25" stroke="#04232f" strokeWidth="2" />
                  <path d="M50 75 L150 75" stroke="#04232f" strokeWidth="2" />
                  <ellipse cx="100" cy="50" rx="80" ry="40" stroke="#04232f" strokeWidth="2" fill="transparent" />
                </svg>
              </div>
            </div>
            <span className="text-[#04232f] text-xl font-medium">IMAGEN</span>
          </div>

          {/* Medication Details */}
          <div className="flex flex-col gap-4 py-4">
            <h3 className="text-[#04232f] text-4xl font-bold">Nombre del medicamento</h3>
            <p className="text-[#04232f] text-3xl font-bold">$$$</p>
            <p className="text-[#04232f] text-xl">
              Descripción de propiedades
              <br />
              del medicamento
            </p>
            <p className="text-[#04232f] text-xl">Laboratorio distrbuidor</p>
            <p className="text-[#04232f] text-xl">Aplicación</p>
            <p className="text-[#04232f] text-xl">
              Ubicación de la sucursar de
              <br />
              farmatoronto
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

