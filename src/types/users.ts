import { z } from "zod";

export const userSchema = z.object({
    id: z.number(),
    email: z.string(),
    password: z.string(),
    user_type: z.string(),
    employee_id: z.number()
})

