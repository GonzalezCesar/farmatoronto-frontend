"use client"

import { useEffect, useState } from "react"
import { ProductList } from "@/components/ProductList"
import { getProducts } from "@/services/products"
import type { Product } from "@/types/product"
import CartGrid from "@/components/cart-grid"
import Navbar from "@/components/NavBar"

export default function Home() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect (() => {
    ( async () => {
      const result = await getProducts()
      setProducts(result)
    })()
  })
  return (
    <div className="min-h-screen bg-[#e0ffff]">
      <header className="bg-[rgb(0,84,82)] p-4">
          <Navbar />
      </header>

      <main className="p-8">
        <h1
          className="text-4xl md:text-6xl font-bold text-center mb-12 text-[#04232f] tracking-wider"
          style={{
            WebkitTextStroke: "2px #04232f",
            color: "transparent",
          }}
        >
          CARRITO DE COMPRA
        </h1>

        {/* Sección original de ProductList */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-[#04232f]"></h2>
          <ProductList products={products} />
        </section>

        {/* Nueva sección de CartGrid */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-[#04232f]"></h2>
          <CartGrid />
        </section>
      </main>
    </div>
  )
}

