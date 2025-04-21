import { CustomerTypeEnum } from "@/options/customerTypeOptions";
import { GenderOptionsEnum } from "@/options/genderOptions";
import { MaritalStatusOptionsEnum } from "@/options/maritalStatusOptions";
import { MunicipalityOptionsEnum } from "@/options/municipalityOptions";
import { TypeDocumentEnum } from "@/options/typeDocumentOptions";
import { z } from "zod";


export const AddCustomerSchema = z.object({
    names: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
    lastname: z.string().min(2, { message: "El apellido debe tener al menos 2 caracteres." }),
    typeDocument: z.nativeEnum(TypeDocumentEnum, { message: "Elija una de las opciones" }),
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
    gender: z.nativeEnum(GenderOptionsEnum, { message: "Elija una de las opciones" }),
    maritalStatus: z.nativeEnum(MaritalStatusOptionsEnum, { message: "Elija una de las opciones" }),
    typeCustomer: z.nativeEnum(CustomerTypeEnum, { message: "Elija una de las opciones" }),
    municipality: z.nativeEnum(MunicipalityOptionsEnum, { message: "Elija una de las opciones" }),

    nitCompany: z.string().optional(),
    nameCompany: z.string().optional(),
})
    .superRefine((data, ctx) => {
        if (data.typeCustomer === CustomerTypeEnum.LEGAL_PERSON) {
            if (!data.nitCompany || data.nitCompany.trim().length < 5) {
                ctx.addIssue({
                    path: ["nitCompany"],
                    code: z.ZodIssueCode.custom,
                    message: "El NIT de la empresa debe tener al menos 5 caracteres.",
                });
            }
            if (!data.nameCompany || data.nameCompany.trim().length < 3) {
                ctx.addIssue({
                    path: ["nameCompany"],
                    code: z.ZodIssueCode.custom,
                    message: "El nombre de la empresa debe tener al menos 3 caracteres.",
                });
            }
        }
    })
