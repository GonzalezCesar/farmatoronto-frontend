import { api } from "@/lib/api/axios";
import { Product, productSchema } from "@/types/product";

export const getProducts = async (page: number): Promise<Product[]> => {

  const reponse = await api.get(`/medicines?offset=${page}&limit=10`);

  return productSchema.array().parse(reponse.data)
  
};