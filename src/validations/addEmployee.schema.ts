import { ContractTypeOptionsEnum } from "@/options/ContractTypeOptions";
import { GenderOptionsEnum } from "@/options/genderOptions";
import { MaritalStatusOptionsEnum } from "@/options/maritalStatusOptions";
import { MunicipalityOptionsEnum } from "@/options/municipalityOptions";
import { NationalityOptionsEnum } from "@/options/nationalityOptions";
import { PositionOptionsEnum } from "@/options/positionOptions";
import { TypeDocumentEnum } from "@/options/typeDocumentOptions";
import { z } from "zod";


// Validaciones comunes
const documentNumberRegex = /^[0-9]{6,12}$/;
const phoneRegex = /^[0-9]{10,15}$/;
const salaryRegex = /^\$?\d{1,3}(?:\.?\d{3})*$/;

// Función para validar fechas
const isValidDate = (value: string) => {
    const date = new Date(value);
    return !isNaN(date.getTime());
};

export const AddEmployeeSchema = z.object({
    // Datos personales
    names: z.string()
        .min(2, "Mínimo 2 caracteres")
        .max(50, "Máximo 50 caracteres")
        .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, "Solo letras y espacios"),

    lastname: z.string()
        .min(2, "Mínimo 2 caracteres")
        .max(50, "Máximo 50 caracteres")
        .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, "Solo letras y espacios"),

    birthday: z.string()
        .refine(isValidDate, { message: "Fecha inválida" })
        .transform(val => val), // Mantenemos como string para el input date

    gender: z.nativeEnum(GenderOptionsEnum, {
        errorMap: () => ({ message: "Seleccione una opción válida" })
    }),

    maritalStatus: z.nativeEnum(MaritalStatusOptionsEnum, {
        errorMap: () => ({ message: "Seleccione una opción válida" })
    }),

    nationality: z.nativeEnum(NationalityOptionsEnum, {
        errorMap: () => ({ message: "Seleccione una opción válida" })
    }),

    // Documento de identidad
    typeDocument: z.nativeEnum(TypeDocumentEnum, {
        errorMap: () => ({ message: "Seleccione un tipo de documento" })
    }),

    numDocument: z.string()
        .regex(documentNumberRegex, "Número de documento inválido")
        .min(6, "Mínimo 6 dígitos")
        .max(12, "Máximo 12 dígitos"),

    // Información de contacto
    email: z.string()
        .email("Correo electrónico inválido")
        .max(100, "Máximo 100 caracteres"),

    phone: z.string()
        .regex(phoneRegex, "Teléfono inválido")
        .min(10, "Mínimo 10 dígitos"),

    address: z.string()
        .min(5, "Mínimo 5 caracteres")
        .max(100, "Máximo 100 caracteres"),

    municipality: z.nativeEnum(MunicipalityOptionsEnum, {
        errorMap: () => ({ message: "Seleccione un municipio" })
    }),

    // Información laboral
    position: z.nativeEnum(PositionOptionsEnum, {
        errorMap: () => ({ message: "Seleccione un cargo" })
    }),

    contractType: z.nativeEnum(ContractTypeOptionsEnum, {
        errorMap: () => ({ message: "Seleccione un tipo de contrato" })
    }),

    salary: z.string()
        .regex(salaryRegex, "Formato inválido (ej: $2.000.000)")
        .min(4, "Mínimo 4 caracteres"),

    startDate: z.string()
        .refine(isValidDate, { message: "Fecha inválida" })
        .transform(val => val), // Mantenemos como string para el input date

    // Contacto de emergencia
    emergencyContact: z.string()
        .min(5, "Mínimo 5 caracteres")
        .max(50, "Máximo 50 caracteres"),

    emergencyPhone: z.string()
        .regex(phoneRegex, "Teléfono inválido")
        .min(10, "Mínimo 10 dígitos")

}).refine(data => {
    const birthDate = new Date(data.birthday);
    const today = new Date();
    const minAgeDate = new Date(
        today.getFullYear() - 18,
        today.getMonth(),
        today.getDate()
    );
    return birthDate <= minAgeDate;
}, {
    message: "El empleado debe ser mayor de edad",
    path: ["birthday"]
});

export type AddEmployeeInputs = z.infer<typeof AddEmployeeSchema>;