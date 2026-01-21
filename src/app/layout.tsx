import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FiltersProvider } from "../context/filters";
import Providers from "@/components/Providers";
// import "styles.css"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Búsqueda de Productos",
  description: "Aplicación de búsqueda de productos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Providers>
      <html lang="es">
        <body className={inter.className}>
          <FiltersProvider>
            <div className="flex flex-col min-h-screen" style={{ backgroundColor: "#E0FFFF" }}>
              {children}
            </div>
          </FiltersProvider>
        </body>
      </html>
    </Providers>
  )
}
