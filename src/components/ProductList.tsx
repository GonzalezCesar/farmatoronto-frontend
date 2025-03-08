"use client"

import type React from "react"
import type { Product } from "@/types/product"
import Link from "next/link"

interface ProductListProps {
  products: Product[]
}

export const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="contsiner px-4 sm:px-6 lg:px-8 mx-auto">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
        {products.map((product) => (
          <li
            key={product.id}
            className="flex flex-col gap-4 rounded-md bg-blue-300 text-white w-72 p-6 text-center border text-card-foreground group relative bg-gradient-to-br from-[#c0fff5] to-[#538c83]/10 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >

            <Link href="/producto-descripcion" className="hover:underline">
              <h3 className="text-lg font-semibold m-0">{product.name}</h3>
            </Link>

            <div className="items-center text-center">
              <span className="text-xl font-bold text-blue-600 text-center">${product.price.toFixed(2)}</span>
            </div>

            <div className="flex gap-1 justify-center products-buttons">{/* Add your buttons here */}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}

