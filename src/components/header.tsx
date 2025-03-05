"use client";

import Link from "next/link";
import { Pill, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { useQuery } from "@tanstack/react-query";
import { jwtDecode } from "jwt-decode";
import { api } from "@/lib/api/axios";
import { z } from "zod"
import { userSchema } from "@/types/users";


export default function Header() {

  const { data } = useQuery({
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

      const data = await api.get(`auth/users/${parsed.id}`)

      return userSchema.parse(data.data)
    },
  });

  return (
    <header className="w-full flex p-4" style={{ backgroundColor: "#005452" }}>
      <div className="container mx-auto px-2 py-2">
        <div className="flex items-center gap-8 w-full">
          <Link href="/" className="inline-flex items-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#007863]">
              <Pill className="h-8 w-8 text-primary-foreground" />
            </div>
          </Link>
          <span className="text-3xl font-bold text-white font-bebas-neue">
            FARMATORONTO
          </span>
          <div className="flex items-center ml-auto gap-4">
            <h2 className="text-white font-bold text-xl">{data?.email}</h2>
            <DropdownMenu>
              <div className="p-4 rounded-full bg-white">
                <DropdownMenuTrigger asChild>
                  <User className="size-8 text-xl" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Información del Usuario</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>{}</DropdownMenuItem>
                  <DropdownMenuItem>Otra información</DropdownMenuItem>
                </DropdownMenuContent>
              </div>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
