"use client";

import { useEffect, useState } from "react";
import { ProductList } from "@/components/ProductList";
import { getProducts } from "@/services/products";
import type { Product } from "@/types/product";
import CartGrid from "@/components/cart-grid";
import Navbar from "@/components/NavBar";
import Footer from "@/components/footer";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    (async () => {
      const result = await getProducts();
      setProducts(result);
    })();
  });

  return (
    <div className="min-h-screen bg-[#e0ffff]">
      <header className="bg-[rgb(0,84,82)] p-4">
        <Navbar />
      </header>

      <main className="p-8">
        <div className="mb-4 flex items-center justify-center">
          <h1 className="text-6xl font-bold text-header mb-6 font-bebas-neue text-white text-shadow-outline tracking-wide">
            CATALAGO
          </h1>
        </div>

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
      <Footer />
    </div>
  );
}
