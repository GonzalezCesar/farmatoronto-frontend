"use client"

import type React from "react"

// Este archivo es un ejemplo simplificado de un hook de toast
// En un proyecto real, deberías usar una biblioteca como react-hot-toast o crear tu propio componente

import { createContext, useContext, useState } from "react"

type ToastVariant = "default" | "destructive"

interface ToastProps {
  title: string
  description?: string
  variant?: ToastVariant
}

const ToastContext = createContext<{
  toast: (props: ToastProps) => void
}>({
  toast: () => {},
})

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = useState<ToastProps[]>([])

  const addToast = (toast: ToastProps) => {
    setToasts((prev) => [...prev, toast])
    // Eliminar el toast después de 3 segundos
    setTimeout(() => {
      setToasts((prev) => prev.slice(1))
    }, 3000)
  }

  return (
    <ToastContext.Provider value={{ toast: addToast }}>
      {children}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
        {toasts.map((toast, index) => (
          <div
            key={index}
            className={`p-4 rounded-md shadow-md ${
              toast.variant === "destructive" ? "bg-red-500 text-white" : "bg-green-500 text-white"
            }`}
          >
            <h3 className="font-bold">{toast.title}</h3>
            {toast.description && <p>{toast.description}</p>}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export const useToast = () => {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider")
  }
  return context
}

export const toast = (props: ToastProps) => {
  // Esta es una implementación simplificada
  // En un proyecto real, usarías el contexto
  console.log("Toast:", props)
  alert(`${props.title}\n${props.description || ""}`)
}

