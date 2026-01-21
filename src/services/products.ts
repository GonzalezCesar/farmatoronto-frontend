import { api } from "@/lib/api/axios";
import { Product, productSchema } from "@/types/product";

export const getProducts = async (currentPage: number): Promise<Product[]> => {
  try {
    const response = await api.get(`/adminview/medicines?offset=${currentPage * 2}&limit=2`);
    console.log("data", response.data);

    // Extraer el array 'items' de la respuesta
    const items = response.data.items;

    // Parsear el array de items con el esquema
    return productSchema.array().parse(items);
  } catch (error) {
    console.error("Error fetching products:", error);
    // Manejar el error adecuadamente (por ejemplo, lanzar una excepción o devolver un array vacío)
    throw error; // Propagar el error para que el componente lo maneje
  }
};