import React from 'react'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import ImageLogo from "@/Image/login-imagen.png"

export default function Page() {
  return (

    <div className="relative p-20 flex flex-col items-center justify-center min-h-screen bg-[#e0ffff]" >
      <div className="absolute inset-0" />

      <div className="relative z-10 w-full  max-w-[468px] p-5 min-h-[407px] space-y-8 bg-[#b6fcf0] rounded-lg md:p-16">
        <div className="flex items-center mb-6 justify-center gap-6">
          <div className="mb-4 flex items-center justify-center">
            <Image 
              src={ImageLogo} 
              alt="Logo" 
              width={100} 
              height={100} 
              className="rounded-full" />
          </div>
          <h1 className="text-5xl not-italic font-extrabold text-white text-shadow-outline font-bebas-neue">INGRESO</h1>
        </div>

        <form className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="username" className="block text-3xl font-medium text-[#005452] mb-4 font-bebas-neue">Usuario</label>
            <Input 
              id="username" 
              type="text" 
              placeholder="Coloque su nombre de usuario" 
              className="w-full font-bebas-neue text-2xl bg-[#005452] border-0 rounded-md text-white placeholder:text-[#E4FFFC]"/>
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="block text-3xl font-medium text-[#005452] mb-4 font-bebas-neue">Contraseña</label>
            <Input 
              id="password" 
              type="password" 
              placeholder="Coloque su contraseña" 
              className="w-full font-bebas-neue text-2xl bg-[#005452] border-0 rounded-md text-white placeholder:text-[#E4FFFC]"/>
          </div>
          <Button type="submit" className="w-[3/10] font-bebas-neue font-bold bg-[#36C34B] hover:bg-[#2ca33e] transition-colors duration-[10s] text-white text-base rounded-3xl block mt-6 text-center mx-auto">Iniciar sesión</Button>
        </form>
      </div>
    </div>
)
}
