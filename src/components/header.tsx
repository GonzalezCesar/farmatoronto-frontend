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

interface HeaderProps {
  userEmail: string;
}

export default function Header({ userEmail }: HeaderProps) {
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
            <h2 className="text-white font-bold text-xl">Usuario conectado</h2>
            <DropdownMenu>
              <div className="p-4 rounded-full bg-white">
                <DropdownMenuTrigger asChild>
                  <User className="size-8 text-xl" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Información del Usuario</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>{userEmail}</DropdownMenuItem>
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
