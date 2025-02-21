"use client";

import { useContext } from "react";
import { FiltersContext } from "../context/filters";
import { Product } from "@/types/product";

export function useFilters() {
  const context = useContext(FiltersContext);

  if (context === undefined) {
    throw new Error("useFilters must be used within a FiltersProvider");
  }

  const { filters, setFilters } = context;

  const filterProducts = (products: Product[]) => {
    return products.filter((product) => {
      return (
        product.title.toLowerCase().includes(filters.name.toLowerCase()) && (filters.category === "all" || product.category === filters.category)
      )
    });
  };

  return { filters, filterProducts, setFilters };
}
