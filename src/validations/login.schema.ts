import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().email({ message: 'Correo invalido' }).nonempty({ message: 'Campo requerido' }),
    password: z.string().nonempty({ message: 'Campo requerido' }).min(6, { message: 'Minimo 6 caracteres' })
});