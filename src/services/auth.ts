import { api } from "@/lib/api/axios"

// yae
export const login = async (email: string, password: string) => {
    const data = await  api.post('auth/login', {email, password} )
    localStorage.setItem ('token', data.data.token)

}