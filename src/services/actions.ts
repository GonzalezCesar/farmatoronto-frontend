"use server"

import { cookies } from "next/headers"

// Tipo para los datos de login
type LoginCredentials = {
  username: string
  password: string
}

// Tipo para la respuesta del login
type LoginResponse = {
  success: boolean
  error?: string
}

// Función de autenticación del servidor
export async function login(credentials: LoginCredentials): Promise<LoginResponse> {
  // Validación del servidor
  if (!credentials.username || !credentials.password) {
    return {
      success: false,
      error: "El nombre de usuario y la contraseña son obligatorios",
    }
  }

  try {
    // Aquí iría la lógica real de autenticación con tu base de datos
    // Por ejemplo, usando Prisma, Supabase, Firebase, etc.

    // Ejemplo simulado (reemplazar con tu lógica real):
    const isValidUser = await validateUserCredentials(credentials)

    if (!isValidUser) {
      return {
        success: false,
        error: "Nombre de usuario o contraseña incorrectos",
      }
    }

    // Si la autenticación es exitosa, establecer una cookie de sesión
    const sessionToken = generateSessionToken()

    // Establecer cookie segura con httpOnly
    cookies().set({
      name: "session",
      value: sessionToken,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 1 semana
      path: "/",
    })

    return {
      success: true,
    }
  } catch (error) {
    console.error("Error de autenticación:", error)
    return {
      success: false,
      error: "Ocurrió un error durante la autenticación",
    }
  }
}

// Función para validar credenciales (simulada)
async function validateUserCredentials(credentials: LoginCredentials): Promise<boolean> {
  // Aquí deberías implementar la lógica real para verificar las credenciales
  // contra tu base de datos o servicio de autenticación

  // Ejemplo simulado (REEMPLAZAR con tu implementación real):
  // return await prisma.user.findFirst({
  //   where: {
  //     username: credentials.username,
  //     password: hashedPassword // Nunca almacenes contraseñas en texto plano
  //   }
  // }) !== null;

  // Simulación para demostración:
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simula un usuario válido para demostración
      const isValid = credentials.username === "admin" && credentials.password === "password123"
      resolve(isValid)
    }, 1000) // Simula un retraso de red
  })
}

// Función para generar un token de sesión (simulada)
function generateSessionToken(): string {
  // En una implementación real, usarías una biblioteca como uuid, nanoid o crypto
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

