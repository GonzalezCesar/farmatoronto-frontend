import { z } from "zod";

export const pharmacieSchema = z.object({
    id: z.number(),
    city_id: z.number(),
    address: z.string(),
    phonenumber: z.string()
    
})

export type Pharmacie = z.infer<typeof pharmacieSchema>