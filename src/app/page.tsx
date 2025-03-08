"use client";

import CartGrid from "@/components/CartGrid";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function Home() {
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
