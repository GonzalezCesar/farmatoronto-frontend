"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { useEffect, useState } from "react";
import { ProductList } from "@/components/ProductList";
import { getProducts } from "@/services/products";
import type { Product } from "@/types/product";


export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  
    useEffect(() => {
      (async () => {
        const result = await getProducts();
        setProducts(result);
      })();
    });
  
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ backgroundColor: "#E0FFFF" }}
    >
      <Header />
      <main>
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-[#04232f]"></h2>
          <ProductList products={products} />
        </section>
      </main>
      <Footer />
    </div>
  );
}
