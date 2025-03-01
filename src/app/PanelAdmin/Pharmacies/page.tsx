import React from 'react'
import { Button } from "@/components/ui/button";
import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'
import PharmacyThing from '@/components/ui/pharmacyThing';

export default function page() {
  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: "#E0FFFF" }}>
        <Header/>
        <main className="flex-grow container mx-auto px-4 py-8">
            <div className="mb-4 flex items-center justify-center">
                <h1 className="text-6xl font-bold text-header mb-6 font-bebas-neue text-white text-shadow-outline tracking-wide">SUCURSALES</h1>
            </div>
            
            <div className="bg-white shadow-md rounded-lg p-4 block m-5">
                <PharmacyThing />
                <div className="grid grid-cols-5 gap-4 m-1 mb-3 border-b-2 border-gray-30 justify-center text-justify">
                    <h2 className="text-base text-[#727473] font-semibold text-header my-1.5 justify-center text-center">Codigo</h2>
                    <h2 className="text-base text-[#727473] font-semibold text-header my-1.5 justify-center text-center">Ubicación</h2>
                    <h2 className="text-base text-[#727473] font-semibold text-header my-1.5 justify-center text-center">Contacto</h2>
                    <h2 className="text-base text-[#727473] font-semibold text-header my-1.5 justify-center text-center">Historial de pedidos</h2>
                    <h2 className="text-base text-[#727473] font-semibold text-header my-1.5 justify-center text-center">Historial de compras</h2>
                </div>
                <div className="grid grid-cols-5 gap-4 m-1 mb-3 border-b-2 border-gray-30 justify-center text-justify">
                    <h2 className="text-sm text-black font-light text-header my-1.5 justify-center text-center">01</h2>
                    <h2 className="text-sm text-black font-ligth text-header my-1.5 justify-center text-center">Av. Guarapiche</h2>
                    <h2 className="text-sm text-black font-ligth text-header my-1.5 justify-center text-center">toronto1@gmail.com</h2>
                    <h2 className="text-sm text-black font-ligth text-header my-1.5 justify-center text-center">Pedido de rifaximina, ibuprofeno...</h2>
                    <h2 className="text-sm text-black font-ligth text-header my-1.5 justify-center text-center">Compra de loratadina. alcohol isopropílico,....</h2>
                </div>
                <div className="grid grid-cols-5 gap-4 m-1 mb-3 border-b-2 border-gray-30 justify-center text-justify">
                    <h2 className="text-sm text-black font-light text-header my-1.5 justify-center text-center">02</h2>
                    <h2 className="text-sm text-black font-ligth text-header my-1.5 justify-center text-center">Av. Guarapiche</h2>
                    <h2 className="text-sm text-black font-ligth text-header my-1.5 justify-center text-center">toronto2@gmail.com</h2>
                    <h2 className="text-sm text-black font-ligth text-header my-1.5 justify-center text-center">Pedido de rifaximina, ibuprofeno...</h2>
                    <h2 className="text-sm text-black font-ligth text-header my-1.5 justify-center text-center">Compra de loratadina. alcohol isopropílico,....</h2>
                </div>
            </div>
            <div className="flex flex-star">
                <Button type="submit" className="w-[3/10] font-bebas-neue font-bold bg-[#4875D8] hover:bg-[#35569B] transition-colors duration-[10s] text-white text-base rounded-lg m-3 text-center mx-auto">Personal</Button>
            </div>
        </main>
        <Footer/>
    </div>
  )
}
