import { z } from "zod";

export const dataSchema = z.object({
  id: z.number(),
  address: z.string(),
  phonenumber: z.string(),
})

export type Data = z.infer<typeof dataSchema>
