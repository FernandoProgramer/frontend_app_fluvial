import { z } from "zod";
import { BoatTypeOptionsEnum } from "@/options/boats/boatTypeOptions";

export const AddBoatSchema = z.object({
    registration: z.string()
        .min(3, "La matrícula debe tener al menos 3 caracteres")
        .max(20, "La matrícula no puede exceder 20 caracteres")
        .regex(/^[A-Za-z0-9]+$/, "La matrícula solo puede contener letras y números"),

    name: z.string()
        .min(3, "El nombre debe tener al menos 3 caracteres")
        .max(50, "El nombre no puede exceder 50 caracteres"),

    type: z.nativeEnum(BoatTypeOptionsEnum, {
        errorMap: () => ({ message: "Selecciona un tipo de embarcación válido" })
    }),

    length: z.string()
        .regex(/^\d+(\.\d{1,2})?$/, "Ingresa un valor válido (ej: 12.5)")
        .transform(val => parseFloat(val))
        .refine(val => val > 0, "La eslora debe ser mayor a 0"),

    beam: z.string()
        .regex(/^\d+(\.\d{1,2})?$/, "Ingresa un valor válido (ej: 4.2)")
        .transform(val => parseFloat(val))
        .refine(val => val > 0, "La manga debe ser mayor a 0"),

    draft: z.string()
        .regex(/^\d+(\.\d{1,2})?$/, "Ingresa un valor válido (ej: 1.8)")
        .transform(val => parseFloat(val))
        .refine(val => val > 0, "El calado debe ser mayor a 0"),

    capacity: z.string()
        .regex(/^\d+$/, "Ingresa un número válido")
        .transform(val => parseInt(val))
        .refine(val => val > 0, "La capacidad debe ser mayor a 0"),

    engine: z.string()
        .min(3, "Descripción del motor demasiado corta")
        .max(50, "Descripción del motor demasiado larga"),

    fuelType: z.string()
        .min(3, "Tipo de combustible demasiado corto")
        .max(30, "Tipo de combustible demasiado largo"),

    constructionYear: z.string()
        .refine(val => !isNaN(Date.parse(val)), "Fecha de construcción inválida")
        .transform(val => new Date(val)),

    ownerName: z.string()
        .min(3, "Nombre demasiado corto")
        .max(100, "Nombre demasiado largo")
        .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, "Nombre solo puede contener letras"),

    ownerDocument: z.string()
        .min(5, "Documento demasiado corto")
        .max(20, "Documento demasiado largo")
        .regex(/^[0-9]+$/, "Documento solo puede contener números"),

    ownerPhone: z.string()
        .min(7, "Teléfono demasiado corto")
        .max(15, "Teléfono demasiado largo")
        .regex(/^[0-9+]+$/, "Teléfono solo puede contener números y +"),

    ownerEmail: z.string()
        .email("Ingresa un correo electrónico válido")
        .max(100, "Correo demasiado largo"),
});

export type AddBoatInputs = z.infer<typeof AddBoatSchema>;