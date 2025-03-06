"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { ProductList } from "@/components/ProductList";
import { getProducts } from "@/services/products";
import { useQuery } from "@tanstack/react-query";


export default function Home() {
  const { data: products, isLoading } =

  useQuery ({
    queryKey: ["products"],
    queryFn: () => getProducts(),
    
  })
  
  
  
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ backgroundColor: "#E0FFFF" }}
    >
      <Header />
      <main>
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-[#04232f]"></h2>
          {isLoading && <div className="text-center text-emerald-600 text-xl">Loading...</div>}
          <ProductList products={products || []} />
        </section>
      </main>
      <Footer />
    </div>
  );
}
