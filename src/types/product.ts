import { z } from "zod";

export const productSchema = z.object({
  id: z.number(),
  name: z.string(),
  presentation: z.string(),
  maincomponent: z.string(),
  action_id: z.number(), // Agregado action_id
  price: z.number(),
  amount: z.number(),
  lab_name: z.string(),
  drugs: z.string().nullable(), // Agregado drugs y lo hago nullable por si es null.
});

export type Product = z.infer<typeof productSchema>;