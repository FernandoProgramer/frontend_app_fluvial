import { BranchTypeEnum } from "@/options/branches/branchTypeOptions";
import { CityOptionsEnum } from "@/options/branches/cityOptions";
import { z } from "zod";

export const AddBranchSchema = z.object({
    code: z.string()
        .min(3, "El código debe tener al menos 3 caracteres")
        .max(20, "El código no puede exceder 20 caracteres"),

    name: z.string()
        .min(3, "El nombre debe tener al menos 3 caracteres")
        .max(50, "El nombre no puede exceder 50 caracteres"),

    type: z.nativeEnum(BranchTypeEnum, {
        errorMap: () => ({ message: "Selecciona un tipo de sucursal válido" })
    }),

    address: z.string()
        .min(5, "La dirección debe tener al menos 5 caracteres")
        .max(100, "La dirección no puede exceder 100 caracteres"),

    city: z.nativeEnum(CityOptionsEnum, {
        errorMap: () => ({ message: "Selecciona una ciudad válida" })
    }),

    phone: z.string()
        .min(7, "El teléfono debe tener al menos 7 caracteres")
        .max(15, "El teléfono no puede exceder 15 caracteres"),

    email: z.string()
        .email("Ingresa un correo electrónico válido")
        .max(50, "El correo no puede exceder 50 caracteres"),

    manager: z.string()
        .min(3, "El nombre debe tener al menos 3 caracteres")
        .max(50, "El nombre no puede exceder 50 caracteres"),

    managerDocument: z.string()
        .min(5, "El documento debe tener al menos 5 caracteres")
        .max(20, "El documento no puede exceder 20 caracteres"),

    managerPhone: z.string()
        .min(7, "El teléfono debe tener al menos 7 caracteres")
        .max(15, "El teléfono no puede exceder 15 caracteres"),

    openingDate: z.string()
        .refine(val => !isNaN(Date.parse(val)), "Fecha inválida")
        .transform(val => new Date(val))
});

export type AddBranchInputs = z.infer<typeof AddBranchSchema>;