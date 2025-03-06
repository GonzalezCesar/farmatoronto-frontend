import { api } from "@/lib/api/axios";
import { Product, productSchema } from "@/types/product";

export const getProducts = async (): Promise<Product[]> => {

  const reponse = await api.get("/medicines");

  return productSchema.array().parse(reponse.data)
  
};


