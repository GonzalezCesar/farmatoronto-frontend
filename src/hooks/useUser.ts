"use client"
import { api } from "@/lib/api/axios";
import { userSchema } from "@/types/users";
import { useQuery } from "@tanstack/react-query";
import { jwtDecode } from "jwt-decode";
import { z } from "zod";

export default function useUser() {

 return useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("que hay aquí");
      }
      const decoded = jwtDecode(token)

      const tokenSchema = z.object({
        id: z.number()
      });
      const parsed = tokenSchema.parse(decoded);
      console.log(parsed)

      const data = await api.get(`auth/users/${parsed.id}`)
      return userSchema.parse(data.data)
    },
  });
  
}
