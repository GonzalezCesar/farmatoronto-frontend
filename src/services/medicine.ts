// services/medicine.ts
import { api } from "@/lib/api/axios"; // Asegúrate de que la ruta sea correcta
import { Laboratory, Branch, TherapeuticAction, Monodrug, MedicineP } from "@/types/medicine"; // Importa tus interfaces

export const fetchLaboratories = async (): Promise<Laboratory[]> => {
  const response = await api.get("/labs");
  return response.data;
};

export const fetchBranches = async (): Promise<Branch[]> => {
  const response = await api.get("/branches");
  return response.data;
};

export const fetchTherapeuticActions = async (): Promise<TherapeuticAction[]> => {
  const response = await api.get("/actions");
  return response.data;
};

export const fetchMonodrugs = async (): Promise<Monodrug[]> => {
  const response = await api.get("/drugs");
  return response.data;
};


export const createMedicine = async (medicineData: MedicineP): Promise<MedicineP> => {
  const response = await api.post("/adminview/medicines?limit=2&offset=0", medicineData);
  return response.data;
};