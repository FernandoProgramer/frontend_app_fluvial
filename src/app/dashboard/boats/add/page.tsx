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
import { boatTypeOptions, BoatTypeOptionsEnum } from "@/options/boats/boatTypeOptions";
import { AddBoatSchema } from "@/validations/boats/addBoat.schema";

export interface AddBoatInputs {
    registration: string;
    name: string;
    type: BoatTypeOptionsEnum;
    length: number;
    beam: number;
    draft: number;
    capacity: number;
    engine: string;
    fuelType: string;
    constructionYear: Date;
    ownerName: string;
    ownerDocument: string;
    ownerPhone: string;
    ownerEmail: string;
}

export default function AddBoat() {
    const { watch, setValue, register, handleSubmit, trigger, formState: { errors, isValid } } = useForm<AddBoatInputs>({
        resolver: zodResolver(AddBoatSchema),
        mode: "onChange"
    });
    const router = useRouter();
    const onSubmit: SubmitHandler<AddBoatInputs> = (data) => {
        console.log("Datos guardados: ", data);
        toast.success("Embarcación registrada exitosamente");
        setTimeout(() => {
            router.push("/dashboard/boats");
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
                <SectionTitle>Datos de la embarcación</SectionTitle>
                <div className="grid grid-cols-2 gap-4">
                    <FormField
                        label="Matrícula"
                        name="registration"
                        register={register}
                        errors={errors}
                        inputProps={{ placeholder: "ABC123" }}
                    />
                    <FormField
                        label="Nombre"
                        name="name"
                        register={register}
                        errors={errors}
                        inputProps={{ placeholder: "María del Mar" }}
                    />
                    <FormField
                        type="select"
                        label="Tipo de embarcación"
                        name="type"
                        setValue={setValue}
                        errors={errors}
                        trigger={trigger}
                    >
                        <SelectTrigger />
                        <SelectContent>
                            {boatTypeOptions.map(option => (
                                <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                            ))}
                        </SelectContent>
                    </FormField>
                    <FormField
                        label="Eslora (m)"
                        name="length"
                        register={register}
                        errors={errors}
                        inputProps={{ placeholder: "12.5" }}
                    />
                    <FormField
                        label="Manga (m)"
                        name="beam"
                        register={register}
                        errors={errors}
                        inputProps={{ placeholder: "4.2" }}
                    />
                    <FormField
                        label="Calado (m)"
                        name="draft"
                        register={register}
                        errors={errors}
                        inputProps={{ placeholder: "1.8" }}
                    />
                    <FormField
                        label="Capacidad (personas)"
                        name="capacity"
                        register={register}
                        errors={errors}
                        inputProps={{ placeholder: "8" }}
                    />
                    <FormField
                        label="Motor"
                        name="engine"
                        register={register}
                        errors={errors}
                        inputProps={{ placeholder: "2 x 150HP" }}
                    />
                    <FormField
                        label="Tipo de combustible"
                        name="fuelType"
                        register={register}
                        errors={errors}
                        inputProps={{ placeholder: "Diésel" }}
                    />
                    <FormField
                        label="Año de construcción"
                        name="constructionYear"
                        register={register}
                        errors={errors}
                        inputProps={{ type: "date" }}
                    />
                </div>
            </div>

            <div>
                <SectionTitle>Datos del propietario</SectionTitle>
                <div className="grid grid-cols-2 gap-4">
                    <FormField
                        label="Nombre del propietario"
                        name="ownerName"
                        register={register}
                        errors={errors}
                        inputProps={{ placeholder: "Juan Pérez" }}
                    />
                    <FormField
                        label="Documento del propietario"
                        name="ownerDocument"
                        register={register}
                        errors={errors}
                        inputProps={{ placeholder: "123456789" }}
                    />
                    <FormField
                        label="Teléfono del propietario"
                        name="ownerPhone"
                        register={register}
                        errors={errors}
                        inputProps={{ placeholder: "3001234567" }}
                    />
                    <FormField
                        label="Correo del propietario"
                        name="ownerEmail"
                        register={register}
                        errors={errors}
                        inputProps={{ placeholder: "propietario@example.com", type: "email" }}
                    />
                </div>
            </div>

            <div className="flex justify-between gap-2">
                <Link href="/dashboard/boats">
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
                            <AlertDialogTitle>¿Registrar embarcación?</AlertDialogTitle>
                            <AlertDialogDescription>
                                Vas a registrar la embarcación:
                                <span className="font-semibold">
                                    {watch("name")} - Matrícula: {watch("registration")}
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