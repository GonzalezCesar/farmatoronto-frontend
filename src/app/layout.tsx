import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FiltersProvider } from "../context/filters";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Búsqueda de Productos",
  description: "Aplicación de búsqueda de productos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <FiltersProvider>{children}</FiltersProvider>
      </body>
    </html>
  );
}
