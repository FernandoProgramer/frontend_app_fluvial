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
import { BranchTypeEnum, branchTypeOptions } from "@/options/branches/branchTypeOptions";
import { cityOptions, CityOptionsEnum } from "@/options/branches/cityOptions";
import { AddBranchSchema } from "@/validations/branches/addBranch.schema";


export interface AddBranchInputs {
    code: string;
    name: string;
    type: BranchTypeEnum;
    address: string;
    city: CityOptionsEnum;
    phone: string;
    email: string;
    manager: string;
    managerDocument: string;
    managerPhone: string;
    openingDate: Date;
}

export default function AddBranch() {
    const { watch, setValue, register, handleSubmit, trigger, formState: { errors, isValid } } = useForm<AddBranchInputs>({
        resolver: zodResolver(AddBranchSchema),
        mode: "onChange"
    });
    const router = useRouter();
    const onSubmit: SubmitHandler<AddBranchInputs> = (data) => {
        console.log("Datos guardados: ", data);
        toast.success("Sucursal registrada exitosamente");
        setTimeout(() => {
            router.push("/dashboard/branches");
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
                <SectionTitle>Datos de la sucursal</SectionTitle>
                <div className="grid grid-cols-2 gap-4">
                    <FormField
                        label="Código"
                        name="code"
                        register={register}
                        errors={errors}
                        inputProps={{ placeholder: "SUC-001" }}
                    />
                    <FormField
                        label="Nombre"
                        name="name"
                        register={register}
                        errors={errors}
                        inputProps={{ placeholder: "Sucursal Principal" }}
                    />
                    <FormField
                        type="select"
                        label="Tipo de sucursal"
                        name="type"
                        setValue={setValue}
                        errors={errors}
                        trigger={trigger}
                    >
                        <SelectTrigger />
                        <SelectContent>
                            {branchTypeOptions.map(option => (
                                <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                            ))}
                        </SelectContent>
                    </FormField>
                    <FormField
                        label="Dirección"
                        name="address"
                        register={register}
                        errors={errors}
                        inputProps={{ placeholder: "Calle 123 #45-67" }}
                    />
                    <FormField
                        type="select"
                        label="Ciudad"
                        name="city"
                        setValue={setValue}
                        errors={errors}
                        trigger={trigger}
                    >
                        <SelectTrigger />
                        <SelectContent>
                            {cityOptions.map(option => (
                                <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                            ))}
                        </SelectContent>
                    </FormField>
                    <FormField
                        label="Teléfono"
                        name="phone"
                        register={register}
                        errors={errors}
                        inputProps={{ placeholder: "601 1234567" }}
                    />
                    <FormField
                        label="Correo electrónico"
                        name="email"
                        register={register}
                        errors={errors}
                        inputProps={{ placeholder: "sucursal@empresa.com", type: "email" }}
                    />
                    <FormField
                        label="Fecha de apertura"
                        name="openingDate"
                        register={register}
                        errors={errors}
                        inputProps={{ type: "date" }}
                    />
                </div>
            </div>

            <div>
                <SectionTitle>Datos del gerente</SectionTitle>
                <div className="grid grid-cols-2 gap-4">
                    <FormField
                        label="Nombre del gerente"
                        name="manager"
                        register={register}
                        errors={errors}
                        inputProps={{ placeholder: "Carlos Méndez" }}
                    />
                    <FormField
                        label="Documento del gerente"
                        name="managerDocument"
                        register={register}
                        errors={errors}
                        inputProps={{ placeholder: "123456789" }}
                    />
                    <FormField
                        label="Teléfono del gerente"
                        name="managerPhone"
                        register={register}
                        errors={errors}
                        inputProps={{ placeholder: "3001234567" }}
                    />
                </div>
            </div>

            <div className="flex justify-between gap-2">
                <Link href="/dashboard/branches">
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
                            <AlertDialogTitle>¿Registrar sucursal?</AlertDialogTitle>
                            <AlertDialogDescription>
                                Vas a registrar la sucursal:
                                <span className="font-semibold">
                                    {watch("name")} - Código: {watch("code")}
                                </span>
                                . Recuerda validar la información antes de guardar.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancelar</AlertDialogCancel>
                            <AlertDialogAction type="button" onClick={() => handleSubmit(onSubmit)()}>Continuar</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </div>
        </form>
    )
}