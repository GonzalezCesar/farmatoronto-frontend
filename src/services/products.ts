import { api } from "@/lib/api/axios";
import { Product, productSchema } from "@/types/product";

export const getProducts = async (currentPage: number): Promise<Product[]> => {

  const reponse = await api.get(`/medicines/adminview?offset=${currentPage * 5}&limit=5`);

  return productSchema.array().parse(reponse.data)
  
};