"use client"
import Button, { buttonVariants } from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SelectContent, SelectItem, SelectTrigger } from "@/components/ui/Select";
import FormField from "@/components/ui/FormField";
import { Save, X } from "lucide-react";
import { propsIcons } from "@/components/layout/Sidebar";
import Link from "next/link";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { cn } from "@/utils/utils";
import React, { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { TypeDocumentEnum, typeDocumentOptions } from "@/options/typeDocumentOptions";
import { genderOptions, GenderOptionsEnum } from "@/options/genderOptions";
import { maritalStatusOptions, MaritalStatusOptionsEnum } from "@/options/maritalStatusOptions";
import { nationalityOptions, NationalityOptionsEnum } from "@/options/nationalityOptions";
import { municipalityOptions, MunicipalityOptionsEnum } from "@/options/municipalityOptions";
import { AddEmployeeSchema } from "@/validations/addEmployee.schema";
import { positionOptions, PositionOptionsEnum } from "@/options/positionOptions";
import { contractTypeOptions, ContractTypeOptionsEnum } from "@/options/ContractTypeOptions";

export interface AddEmployeeInputs {
    names: string;
    lastname: string;
    typeDocument: TypeDocumentEnum;
    numDocument: string;
    email: string;
    phone: string;
    birthday: string;
    address: string;
    nationality: NationalityOptionsEnum;
    gender: GenderOptionsEnum;
    maritalStatus: MaritalStatusOptionsEnum;
    municipality: MunicipalityOptionsEnum;
    position: PositionOptionsEnum;
    contractType: ContractTypeOptionsEnum;
    salary: string;
    startDate: string;
    emergencyContact: string;
    emergencyPhone: string;
}

export default function AddEmployee() {
    const { watch, setValue, register, handleSubmit, trigger, formState: { errors, isValid } } = useForm<AddEmployeeInputs>({
        resolver: zodResolver(AddEmployeeSchema),
        mode: "onChange"
    });

    const router = useRouter();
    const onSubmit: SubmitHandler<AddEmployeeInputs> = (data) => {
        console.log("Empleado guardado: ", data);
        toast.success("Empleado registrado exitosamente");
        setTimeout(() => {
            router.push("/dashboard/employees");
        }, 2000);
    }

    const hasErrors = Object.keys(errors).length > 0 || !isValid;
    const [isOpenDialog, setIsOpenDialog] = useState(false);

    const handleSaveClick = async (e: React.MouseEvent) => {
        e.preventDefault();
        const isValid = await trigger();
        if (!isValid) return;
        setIsOpenDialog(true);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-7">
            <div>
                <SectionTitle>Datos personales</SectionTitle>
                <div className="grid grid-cols-2 gap-4">
                    <FormField
                        label="Nombre"
                        name="names"
                        register={register}
                        errors={errors}
                        inputProps={{ placeholder: "Juan" }}
                    />
                    <FormField
                        label="Apellidos"
                        name="lastname"
                        register={register}
                        errors={errors}
                        inputProps={{ placeholder: "Pérez" }}
                    />
                    <FormField
                        label="Fecha de nacimiento"
                        name="birthday"
                        register={register}
                        errors={errors}
                        inputProps={{ type: "date" }}
                    />
                    <FormField
                        type="select"
                        label="Género"
                        name="gender"
                        setValue={setValue}
                        errors={errors}
                        trigger={trigger}
                    >
                        <SelectTrigger />
                        <SelectContent>
                            {genderOptions.map(option => (
                                <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                            ))}
                        </SelectContent>
                    </FormField>
                    <FormField
                        type="select"
                        label="Estado civil"
                        name="maritalStatus"
                        setValue={setValue}
                        errors={errors}
                        trigger={trigger}
                    >
                        <SelectTrigger />
                        <SelectContent>
                            {maritalStatusOptions.map(option => (
                                <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                            ))}
                        </SelectContent>
                    </FormField>
                    <FormField
                        type="select"
                        label="Nacionalidad"
                        name="nationality"
                        setValue={setValue}
                        errors={errors}
                        trigger={trigger}
                    >
                        <SelectTrigger />
                        <SelectContent>
                            {nationalityOptions.map(option => (
                                <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                            ))}
                        </SelectContent>
                    </FormField>
                </div>
            </div>

            <div>
                <SectionTitle>Documento de identidad</SectionTitle>
                <div className="grid grid-cols-2 gap-4">
                    <FormField
                        type="select"
                        label="Tipo de documento"
                        name="typeDocument"
                        setValue={setValue}
                        errors={errors}
                        trigger={trigger}
                    >
                        <SelectTrigger placeholder="Seleccione" />
                        <SelectContent>
                            {typeDocumentOptions.map(option => (
                                <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                            ))}
                        </SelectContent>
                    </FormField>
                    <FormField
                        label="Número de documento"
                        name="numDocument"
                        register={register}
                        errors={errors}
                        inputProps={{ placeholder: "123456789" }}
                    />
                </div>
            </div>

            <div>
                <SectionTitle>Información de contacto</SectionTitle>
                <div className="grid grid-cols-2 gap-4">
                    <FormField
                        label="Correo electrónico"
                        name="email"
                        register={register}
                        errors={errors}
                        inputProps={{ placeholder: "empleado@empresa.com" }}
                    />
                    <FormField
                        label="Teléfono"
                        name="phone"
                        register={register}
                        errors={errors}
                        inputProps={{ placeholder: "3001234567" }}
                    />
                    <FormField
                        label="Dirección"
                        name="address"
                        register={register}
                        errors={errors}
                        inputProps={{ placeholder: "Calle 123 #45-67" }}
                    />
                    <FormField
                        type="select"
                        label="Municipio"
                        name="municipality"
                        setValue={setValue}
                        errors={errors}
                        trigger={trigger}
                    >
                        <SelectTrigger />
                        <SelectContent>
                            {municipalityOptions.map(option => (
                                <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                            ))}
                        </SelectContent>
                    </FormField>
                </div>
            </div>

            <div>
                <SectionTitle>Información laboral</SectionTitle>
                <div className="grid grid-cols-2 gap-4">
                    <FormField
                        type="select"
                        label="Cargo"
                        name="position"
                        setValue={setValue}
                        errors={errors}
                        trigger={trigger}
                    >
                        <SelectTrigger />
                        <SelectContent>
                            {positionOptions.map(option => (
                                <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                            ))}
                        </SelectContent>
                    </FormField>
                    <FormField
                        type="select"
                        label="Tipo de contrato"
                        name="contractType"
                        setValue={setValue}
                        errors={errors}
                        trigger={trigger}
                    >
                        <SelectTrigger />
                        <SelectContent>
                            {contractTypeOptions.map(option => (
                                <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                            ))}
                        </SelectContent>
                    </FormField>
                    <FormField
                        label="Salario"
                        name="salary"
                        register={register}
                        errors={errors}
                        inputProps={{ placeholder: "$2.000.000", type: "text" }}
                    />
                    <FormField
                        label="Fecha de ingreso"
                        name="startDate"
                        register={register}
                        errors={errors}
                        inputProps={{ type: "date" }}
                    />
                </div>
            </div>

            <div>
                <SectionTitle>Contacto de emergencia</SectionTitle>
                <div className="grid grid-cols-2 gap-4">
                    <FormField
                        label="Nombre completo"
                        name="emergencyContact"
                        register={register}
                        errors={errors}
                        inputProps={{ placeholder: "María Gómez" }}
                    />
                    <FormField
                        label="Teléfono"
                        name="emergencyPhone"
                        register={register}
                        errors={errors}
                        inputProps={{ placeholder: "3109876543" }}
                    />
                </div>
            </div>

            <div className="flex justify-between gap-2">
                <Link href="/dashboard/employees">
                    <Button variant="destructive" className="flex items-center justify-center gap-1">
                        <X {...propsIcons} />
                        <span>Cancelar</span>
                    </Button>
                </Link>

                <Button
                    onClick={handleSaveClick}
                    type="button"
                    disabled={hasErrors}
                    className={cn("flex gap-1 items-center justify-center w-full", buttonVariants({ variant: hasErrors ? "disabled" : "primary" }))}
                >
                    <Save {...propsIcons} /> <span>Guardar</span>
                </Button>

                <AlertDialog open={isOpenDialog} onOpenChange={setIsOpenDialog}>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>¿Registrar empleado?</AlertDialogTitle>
                            <AlertDialogDescription>
                                Vas a registrar a:
                                <span className="font-semibold">
                                    {watch("names")} {watch("lastname")} - {watch("position")}
                                </span>
                                con salario de {watch("salary")}.
                                ¿Deseas continuar?
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancelar</AlertDialogCancel>
                            <AlertDialogAction type="button" onClick={() => handleSubmit(onSubmit)()}>
                                Confirmar
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </div>
        </form>
    )
}