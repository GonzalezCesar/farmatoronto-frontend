import axios, { AxiosError } from "axios";

const createInstance = () => {
    const instance = axios.create({
        baseURL: "http://localhost:8081/v1",
    })

    instance.interceptors.request.use((config) => {
        const token = localStorage.getItem('token')
        
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }

        return config
    })

    instance.interceptors.response.use(
        (res) => res,
        (error) => {
            if (error instanceof AxiosError && error.status === 401) {
                localStorage.removeItem('token')
            }

            return Promise.reject(error)
        }
    )

    return instance
}

export const api = createInstance()