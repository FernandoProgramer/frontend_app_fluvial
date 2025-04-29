import { z } from "zod";
import { WarehouseTypeEnum } from "@/options/warehouses/warehouseTypeOptions";

export const AddWarehouseSchema = z.object({
    code: z.string()
        .min(3, "El código debe tener al menos 3 caracteres")
        .max(20, "El código no puede exceder 20 caracteres"),

    name: z.string()
        .min(3, "El nombre debe tener al menos 3 caracteres")
        .max(50, "El nombre no puede exceder 50 caracteres"),

    type: z.nativeEnum(WarehouseTypeEnum, {
        errorMap: () => ({ message: "Selecciona un tipo de bodega válido" })
    }),

    area: z.string()
        .regex(/^\d+$/, "Ingresa un valor válido")
        .transform(val => parseInt(val))
        .refine(val => val > 0, "El área debe ser mayor a 0"),

    capacity: z.string()
        .regex(/^\d+$/, "Ingresa un número válido")
        .transform(val => parseInt(val))
        .refine(val => val > 0, "La capacidad debe ser mayor a 0"),

    location: z.string()
        .min(5, "Ubicación demasiado corta")
        .max(100, "Ubicación demasiado larga"),

    temperatureControl: z.string()
        .max(50, "Descripción demasiado larga")
        .optional(),

    products: z.string()
        .min(3, "Descripción demasiado corta")
        .max(200, "Descripción demasiado larga"),

    responsible: z.string()
        .min(3, "Nombre demasiado corto")
        .max(100, "Nombre demasiado largo"),

    responsibleDocument: z.string()
        .min(5, "Documento demasiado corto")
        .max(20, "Documento demasiado largo"),

    responsiblePhone: z.string()
        .min(7, "Teléfono demasiado corto")
        .max(15, "Teléfono demasiado largo"),

    responsibleEmail: z.string()
        .email("Ingresa un correo válido")
        .max(100, "Correo demasiado largo")
});

export type AddWarehouseInputs = z.infer<typeof AddWarehouseSchema>;