import React from 'react'; 
import { Search } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';

export default function AdminThings() {
  return (
    <div className="flex justify-between items-center mb-4 px-5">
      <div className="flex items-center bg-[#E0FFFF] rounded-full px-4 py-2">
        <input
          type="text"
          placeholder="Buscar"
          className="bg-transparent outline-none text-gray-600 placeholder-gray-400 w-full"
        />
        <div className="w-8 h-8 bg-[#007863] rounded-full flex items-center justify-center ml-2 text-white">
          <Search />
        </div>
      </div>
      <div className="flex flex-1 items-center">
            <Link href="/PanelAdmin/Pharmacies/Form">
              <Button className="bg-[#007863] text-white px-4 py-2 rounded-md flex items-center hover:bg-[#026553] transition-colors duration-[10s]">
                + Nuevo Registro
              </Button>
            </Link>
          </div>
    </div>
  );
}