import { api } from "@/lib/api/axios";
import { Data, dataSchema } from "@/types/dataLabs";

export const getLabs = async (currentPage: number): Promise<Data[]> => {

  const reponse = await api.get(`/labs?offset=${currentPage * 5}&limit=5`);

  return dataSchema.array().parse(reponse.data)
  
};