// src/validations/inventory/products/addProduct.schema.ts

import { z } from "zod";

export const AddProductSchema = z.object({
    productName: z
        .string()
        .min(2, { message: "El nombre del producto debe tener al menos 2 caracteres." }),

    sku: z
        .string()
        .min(3, { message: "El SKU debe tener al menos 3 caracteres." }),

    category: z
        .string()
        .min(1, { message: "Debe seleccionar una categoría válida." }),

    price: z
        .string()
        .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
            message: "El precio debe ser un número positivo.",
        }),

    stock: z
        .string()
        .refine((val) => /^\d+$/.test(val) && Number(val) >= 0, {
            message: "El stock debe ser un número entero no negativo.",
        }),

    supplier: z
        .string()
        .min(2, { message: "El nombre del proveedor debe tener al menos 2 caracteres." }),

    supplierPhone: z
        .string()
        .min(7, { message: "El teléfono debe tener al menos 7 dígitos." })
        .max(15, { message: "El teléfono no debe superar los 15 dígitos." })
        .regex(/^\d+$/, { message: "El teléfono solo debe contener números." }),

    supplierEmail: z
        .string()
        .email({ message: "Debe ingresar un correo electrónico válido." }),
});
