"use client";

import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getProducts } from "@/services/products";
import { ProductList } from "@/components/ProductList";

export default function Home() {
  const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["products"],
    queryFn: ({ pageParam = 0 }) => getProducts(pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length ? allPages.length : undefined;
    },
  });

  const products = data?.pages.flat() || [];

  return (
    <div className="flex flex-col min-h-screen bg-[#e0ffff]">
      <header className="bg-[rgb(0,84,82)] p-4">
        <Navbar />
      </header>

      <main className="flex-grow p-8">
        <div className="mb-4 flex items-center justify-center">
          <h1 className="text-6xl font-bold text-header mb-6 font-bebas-neue text-white text-shadow-outline tracking-wide">
            CATALAGO
          </h1>
        </div>

        <section>
          {isLoading && (
            <div className="text-center text-emerald-600 text-xl">
              Loading...
            </div>
          )}
          <ProductList products={products} />

          <div className="flex justify-center mt-8">
            <button
              onClick={() => fetchNextPage()}
              disabled={!hasNextPage}
              className="px-4 py-2 bg-[rgb(0,84,82)] text-white rounded-md disabled:opacity-50"
            >
              Cargar más
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
