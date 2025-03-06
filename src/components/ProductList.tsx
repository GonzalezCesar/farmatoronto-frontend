"use client";

import type React from "react";
import { Product } from "@/types/product";


interface ProductListProps {
  products: Product[];
}

export const ProductList: React.FC<ProductListProps> = ({ products }) => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-stone-400">
      {products.map((product) => (
        <div
          key={product.id}
          className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          {/* <Image
            // src={product.image || "/placeholder.svg"}
            alt={product.title}
            width={200}
            height={200}
            className="w-full h-48 object-cover mb-4 rounded"
          /> */}
          <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-blue-600">
              ${product.price.toFixed(2)}
            </span>
            {/* <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
              {product.category}
            </span> */}
          </div>
        </div>
      ))}
    </div>
  );
};
