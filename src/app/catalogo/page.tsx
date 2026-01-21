"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ProductList } from "@/components/ProductList";
import { getProducts } from "@/services/products";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(0),
  });

  return (
      <>
      <Header />
      <main className="flex-1">
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-[#04232f]"></h2>
          {isLoading && (
            <div className="text-center text-emerald-600 text-xl">
              Loading...
            </div>
          )}
          <ProductList products={products || []}/>
        </section>
      </main>
      <Footer />
    </>
  );
}
