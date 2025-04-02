import { TypeDocument } from "@/options/typeDocumentOptions";
import { z } from "zod";


export enum Gender {
    Masculino = "Masculino",
    Femenino = "Femenino",
    Otro = "Otro",
}

export enum MaritalStatus {
    Soltero = "Soltero",
    Casado = "Casado",
    Divorciado = "Divorciado",
    Viudo = "Viudo",
}

export enum TypeCustomer {
    Natural = "Natural",
    Juridico = "Jurídico",
}


export const AddCustomerSchema = z.object({
    names: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
    lastname: z.string().min(2, { message: "El apellido debe tener al menos 2 caracteres." }),
    typeDocument: z.nativeEnum(TypeDocument, { message: "Elija una de las opciones" }),
    numDocument: z
        .string()
        .min(5, { message: "El número de documento debe tener al menos 5 caracteres." })
        .max(15, { message: "El número de documento no debe superar los 15 caracteres." })
        .regex(/^\d+$/, { message: "El número de documento solo debe contener números." }),
    email: z.string().email({ message: "Debe ingresar un correo electrónico válido." }),
    phone: z
        .string()
        .min(7, { message: "El número de teléfono debe tener al menos 7 dígitos." })
        .max(15, { message: "El número de teléfono no debe superar los 15 dígitos." })
        .regex(/^\d+$/, { message: "El número de teléfono solo debe contener números." }),
    birthday: z.string().refine((date) => !isNaN(Date.parse(date)), {
        message: "Debe ingresar una fecha válida.",
    }),
    address: z.string().min(5, { message: "La dirección debe tener al menos 5 caracteres." }),
    nationality: z.string().min(3, { message: "La nacionalidad debe tener al menos 3 caracteres." }),
    gender: z.nativeEnum(Gender),
    maritalStatus: z.nativeEnum(MaritalStatus),
    typeCustomer: z.nativeEnum(TypeCustomer),
    city: z.string().min(2, { message: "Debe seleccionar una ciudad válida." }),
});
