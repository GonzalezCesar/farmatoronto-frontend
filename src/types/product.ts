import { z } from "zod";

export const productSchema = z.object({
  id: z.number(),
  name: z.string(),
  maincomponent: z.string(),
  price: z.number(),
  presentation: z.string(),
  action: z.string(),
  lab_name: z.string(),
  amount: z.number()
});

export type Product = z.infer<typeof productSchema>