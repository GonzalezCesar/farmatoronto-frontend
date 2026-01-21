import { api } from "@/lib/api/axios";
import { Data, dataSchema } from "@/types/dataLabs";
import { Employee, employeeSchema } from "@/types/employee";
import { Pharmacie, pharmacieSchema } from "@/types/pharmacie";

export const getLabs = async (currentPage: number): Promise<Data[]> => {

  try {
    const reponse = await api.get(`/labs?offset=${currentPage * 2}&limit=2`);

    const items = reponse.data.items;

    return dataSchema.array().parse(items);
  } catch (error) {
    console.error("Error fetching products:", error);
    // Manejar el error adecuadamente (por ejemplo, lanzar una excepción o devolver un array vacío)
    throw error; // Propagar el error para que el componente lo maneje
  }
};

export const getPharmacies = async (currentPage: number): Promise<Pharmacie[]> => {

  try {
    const reponse = await api.get(`/branches?offset=${currentPage * 2}&limit=2`);
  
    const items = reponse.data.items

    return pharmacieSchema.array().parse(items)
  }
  catch (error) {
    console.error("Error fetching pharmacies:", error);
    // Manejar el error adecuadamente (por ejemplo, lanzar una excepción o devolver un array vacío)
    throw error; // Propagar el error para que el componente lo maneje
  }
  
};

export const getEmployees = async (currentPage: number): Promise<Employee[]> => {
  
  try {
    const reponse = await api.get(`/adminview/employees?offset=${currentPage * 2}&limit=2`);

    const items = reponse.data.items;

    return employeeSchema.array().parse(items);
    
  } catch (error) {
    console.error("Error fetching products:", error);
    // Manejar el error adecuadamente (por ejemplo, lanzar una excepción o devolver un array vacío)
    throw error; // Propagar el error para que el componente lo maneje
  }
}