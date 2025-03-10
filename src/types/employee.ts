import { z } from "zod";

export const employeeSchema = z.object ({
    id: z.number(),
    name: z.string(),
    lastname: z.string(),
    birthday: z.string(),
    c_id: z.string(),
    role: z.string(),
    address: z.string(),
    phonenumber: z.string(),
    email: z.string(),

})

export type Employee = z.infer<typeof employeeSchema>