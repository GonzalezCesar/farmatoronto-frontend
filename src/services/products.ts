import { Product } from "@/types/product";

export const getProducts = async (): Promise<Product[]> => {
  // TO DO: Validar los datos del backend

  const reponse = await fetch("http://localhost:8081/v1/medicamentos");
  const data = await reponse.json();

  return data;
};


