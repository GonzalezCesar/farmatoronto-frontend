"use client";

import type React from "react";
import { useFilters } from "../hooks/useFilters";
import Image from "next/image";

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

interface ProductListProps {
  products: Product[];
}

export const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const { filterProducts } = useFilters();
  const filteredProducts = filterProducts(products);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-stone-400">
      {filteredProducts.map((product) => (
        <div
          key={product.id}
          className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <Image
            // src={product.image || "/placeholder.svg"}
            alt={product.title}
            width={200}
            height={200}
            className="w-full h-48 object-cover mb-4 rounded"
          />
          <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
          {/* <p className="text-gray-600 mb-4 h-20 overflow-hidden">{product.description}</p> */}
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-blue-600">
              ${product.price.toFixed(2)}
            </span>
            <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
              {product.category}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
