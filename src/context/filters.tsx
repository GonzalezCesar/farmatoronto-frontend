"use client"

import { createContext, useState, type ReactNode } from "react"

export interface Filters {
  category: string
  minPrice: number
  name: string
}

interface FiltersContextType {
  filters: Filters
  setFilters: React.Dispatch<React.SetStateAction<Filters>>
}

export const FiltersContext = createContext<FiltersContextType | undefined>(undefined)

interface FiltersProviderProps {
  children: ReactNode
}

export function FiltersProvider({ children }: FiltersProviderProps) {
  const [filters, setFilters] = useState<Filters>({
    name: "",
    category: "",
    minPrice: 0,
  })

  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  )
}

