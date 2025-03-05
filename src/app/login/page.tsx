"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import ImageLogo from "@/Image/login-imagen.png"
import { useRouter } from 'next/navigation';
import { useState } from "react";
import { login } from "@/services/auth";


export default function Page() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState<{ username?: string; password?: string; general?: string }>({})
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const validateForm = () => {
    const newErrors:  { username?: string; password?: string }  = {}
    if (!username.trim()) {
      newErrors.username = "El correo electrónico es obligatorio"
    } else if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(username)) {
      newErrors.username = "Por favor, ingrese un correo electrónico válido"
    }

    if (!password) {
      newErrors.password = "La contraseña es obligatoria"
    } else if (password.length < 8) {
      newErrors.password = "La contraseña debe tener al menos 8 caracteres"
    } else if (!/[*!@#$%&]/.test(password)) {
      newErrors.password = "La contraseña debe contener al menos un carácter especial (*!@#$%&)"
    }

      setErrors(newErrors)
      return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsLoading(true)

    try {
      await login( username, password )
      router.push("/PanelAdmin")
      
    } catch (error) {
      console.error("Error durante el inicio de sesión: ", error) 
      setErrors({ general: "Ocurrio un error al iniciar sesion" })
    } finally {
      setIsLoading(false)
    }
  }

  return (

    <div className="relative p-20 flex flex-col items-center justify-center min-h-screen bg-[#e0ffff]" >
      <div className="absolute inset-0" />

      <div className="relative z-10 w-full  max-w-[468px] p-5 min-h-[407px] space-y-8 bg-[#b6fcf0] rounded-lg md:p-16">
        <div className="flex flex-col items-center mb-6 justify-center gap-6">
          <div className="flex items-center justify-center">
            <Image 
              src={ImageLogo} 
              alt="Logo" 
              width={100} 
              height={100} 
              className="rounded-full" />
          </div>
          <h1 className="text-5xl not-italic font-extrabold text-white text-shadow-outline font-bebas-neue">INGRESO</h1>
        </div>

        {errors.general && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <span className="block sm:inline">
              {errors.general}
            </span>
          </div>
        )}

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label htmlFor="username" className="block text-3xl font-medium text-[#005452] mb-4 font-bebas-neue">Correo</label>
            <Input 
              id="username" 
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Coloque su nombre de usuario" 
              className="w-full font-bebas-neue text-2xl bg-[#005452] border-0 rounded-md text-white placeholder:text-[#E4FFFC]"/>
              {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="block text-3xl font-medium text-[#005452] mb-4 font-bebas-neue">Contraseña</label>
            <Input 
              id="password" 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Coloque su contraseña" 
              className="w-full font-bebas-neue text-2xl bg-[#005452] border-0 rounded-md text-white placeholder:text-[#E4FFFC]"/>
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>
          <Button 
            type="submit" 
            disabled={isLoading}
            className="w-[3/10] font-bebas-neue font-bold bg-[#36C34B] hover:bg-[#2ca33e] transition-colors duration-[10s] text-white text-base rounded-3xl block mt-6 text-center mx-auto">
              {isLoading ? "Cargando...": "Iniciar sesión"}
            </Button>
        </form>
      </div>
    </div>
)
}
