import { z } from "zod";

export const userSchema = z.object({
    id: z.string(),
    email: z.string(),
    password: z.string(),
    user_type: z.string()
})

