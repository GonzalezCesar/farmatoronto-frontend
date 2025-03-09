"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Pencil, Trash2 } from "lucide-react"
import Link from "next/link"

// Tipo base para los elementos de la tabla
export interface TableItem {
  id: number
  [key: string]: string | number | boolean | null | undefined
}

// Tipo para la configuración de columnas
export interface Column<T extends TableItem> {
  key: string
  header: string
  render?: (item: T) => React.ReactNode
}

// Props del componente con tipos genéricos
interface DataTableProps<T extends TableItem> {
  columns: Column<T>[]
  fetchData: (page: number) => Promise<T[]>
  editRoute?: string
  onDelete?: (id: number) => void
  pageSize?: number
  className?: string
}

// Componente con grid-cols-10 fijo
export default function DataTable<T extends TableItem>({
  columns,
  fetchData,
  editRoute,
  onDelete,
  pageSize = 5,
  className = "",
}: DataTableProps<T>) {
  const [data, setData] = useState<T[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(0)

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true)
        const items = await fetchData(currentPage)
        setData(items)
        setError(null)
      } catch (err) {
        console.error("Error fetching data:", err)
        setError("Error al cargar los datos. Por favor, intente nuevamente.")
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [currentPage, fetchData])

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1)
  }

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : 0))
  }

  const handleDelete = (id: number) => {
    if (onDelete && window.confirm("¿Estás seguro de que deseas eliminar este elemento?")) {
      onDelete(id)
    }
  }

  return (
    <div className={`bg-white shadow-md rounded-lg p-4 ${className}`}>
      {/* Encabezados de la tabla con grid-cols-10 fijo */}
      <div className="grid grid-cols-10 gap-4 m-1 mb-3 border-b-2 border-gray-30 justify-center text-justify">
        {columns.map((column) => (
          <h2
            key={column.key}
            className="text-base text-[#727473] font-semibold text-header my-1.5 justify-center text-center"
          >
            {column.header}
          </h2>
        ))}
        {(editRoute || onDelete) && (
          <h2 className="text-base text-[#727473] font-semibold text-header my-1.5 justify-center text-center">
            Acciones
          </h2>
        )}
      </div>

      {/* Contenido de la tabla */}
      {loading ? (
        <div className="text-center py-4">Cargando datos...</div>
      ) : error ? (
        <div className="text-center py-4 text-red-500">{error}</div>
      ) : data.length === 0 ? (
        <div className="text-center py-4">No hay datos disponibles</div>
      ) : (
        data.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-10 gap-4 m-1 mb-3 border-b-2 border-gray-30 justify-center text-justify"
          >
            {columns.map((column) => (
              <div key={column.key} className="text-center">
                {column.render ? column.render(item) : item[column.key] !== undefined ? String(item[column.key]) : "-"}
              </div>
            ))}
            {(editRoute || onDelete) && (
              <div className="text-black flex justify-center gap-1">
                {editRoute && (
                  <Link href={`${editRoute}/${item.id}`}>
                    <Button className="bg-[#26BCB5] hover:bg-[#25CFC7] h-8 w-8">
                      <Pencil className="h-4 w-4" />
                    </Button>
                  </Link>
                )}
                {onDelete && (
                  <Button className="bg-[#B12412] hover:bg-[#DE321B] h-8 w-8" onClick={() => handleDelete(item.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                )}
              </div>
            )}
          </div>
        ))
      )}

      {/* Paginación */}
      <div className="flex justify-center mt-4 gap-2">
        <Button onClick={handlePrevPage} disabled={currentPage === 0 || loading} variant="outline" size="sm">
          <ChevronLeft className="h-4 w-4" />
          Anterior
        </Button>
        <span className="flex items-center px-3">Página {currentPage + 1}</span>
        <Button onClick={handleNextPage} disabled={data.length < pageSize || loading} variant="outline" size="sm">
          Siguiente
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

