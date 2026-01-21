import { z } from "zod";

export const dataSchema = z.object({
  // Problamente necesites ajustar los tipos de los campos según tu esquema de datos
  // id probablemente sea un número
  id: z.number(),
  name: z.string(),
  address: z.string(),
  phonenumber: z.string(),
})

export type Data = z.infer<typeof dataSchema>
