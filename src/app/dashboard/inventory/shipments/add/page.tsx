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
// import { AddShipmentSchema } from "@/validations/inventory/shipments/addShipment.schema";

export interface AddShipmentInputs {
    shipmentNumber: string;
    vessel: string;
    departurePort: string;
    arrivalPort: string;
    cargoType: string;
    weight: number;
    departureDate: string;
    estimatedArrival: string;
    status: string;
    responsible: string;
    responsiblePhone: string;
    responsibleEmail: string;
}

export default function AddShipment() {
    const { watch, setValue, register, handleSubmit, trigger, formState: { errors, isValid } } = useForm<AddShipmentInputs>({
        // resolver: zodResolver(AddShipmentSchema),
        mode: "onChange"
    });

    const router = useRouter();
    const onSubmit: SubmitHandler<AddShipmentInputs> = (data) => {
        console.log("Datos guardados: ", data);
        toast.success("Envío registrado exitosamente");
        setTimeout(() => {
            router.push("/dashboard/shipments");
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
                <SectionTitle>Datos del envío</SectionTitle>
                <div className="grid grid-cols-2 gap-4">
                    <FormField
                        label="N° de envío"
                        name="shipmentNumber"
                        register={register}
                        errors={errors}
                        inputProps={{ placeholder: "ENV-001" }}
                    />
                    <FormField
                        label="Embarcación"
                        name="vessel"
                        register={register}
                        errors={errors}
                        inputProps={{ placeholder: "Barco Caribe" }}
                    />
                    <FormField
                        label="Puerto de salida"
                        name="departurePort"
                        register={register}
                        errors={errors}
                        inputProps={{ placeholder: "Puerto de Cartagena" }}
                    />
                    <FormField
                        label="Puerto de destino"
                        name="arrivalPort"
                        register={register}
                        errors={errors}
                        inputProps={{ placeholder: "Puerto de Miami" }}
                    />
                    <FormField
                        label="Tipo de carga"
                        name="cargoType"
                        register={register}
                        errors={errors}
                        inputProps={{ placeholder: "Contenedores" }}
                    />
                    <FormField
                        label="Peso (kg)"
                        name="weight"
                        register={register}
                        errors={errors}
                        inputProps={{ placeholder: "50000", type: "number" }}
                    />
                    <FormField
                        label="Fecha de salida"
                        name="departureDate"
                        register={register}
                        errors={errors}
                        inputProps={{ type: "date" }}
                    />
                    <FormField
                        label="Fecha estimada de llegada"
                        name="estimatedArrival"
                        register={register}
                        errors={errors}
                        inputProps={{ type: "date" }}
                    />
                    <FormField
                        type="select"
                        label="Estado"
                        name="status"
                        setValue={setValue}
                        errors={errors}
                        trigger={trigger}
                    >
                        <SelectTrigger />
                        <SelectContent>
                            <SelectItem value="Pendiente">Pendiente</SelectItem>
                            <SelectItem value="En ruta">En ruta</SelectItem>
                            <SelectItem value="Retrasado">Retrasado</SelectItem>
                            <SelectItem value="Descargando">Descargando</SelectItem>
                            <SelectItem value="Completado">Completado</SelectItem>
                        </SelectContent>
                    </FormField>
                </div>
            </div>

            <div>
                <SectionTitle>Datos del responsable</SectionTitle>
                <div className="grid grid-cols-2 gap-4">
                    <FormField
                        label="Nombre del responsable"
                        name="responsible"
                        register={register}
                        errors={errors}
                        inputProps={{ placeholder: "Juan Pérez" }}
                    />
                    <FormField
                        label="Teléfono del responsable"
                        name="responsiblePhone"
                        register={register}
                        errors={errors}
                        inputProps={{ placeholder: "3001234567" }}
                    />
                    <FormField
                        label="Correo del responsable"
                        name="responsibleEmail"
                        register={register}
                        errors={errors}
                        inputProps={{ placeholder: "responsable@empresa.com", type: "email" }}
                    />
                </div>
            </div>

            <div className="flex justify-between gap-2">
                <Link href="/dashboard/shipments">
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
                            <AlertDialogTitle>¿Registrar envío?</AlertDialogTitle>
                            <AlertDialogDescription>
                                Vas a registrar el envío:
                                <span className="font-semibold">
                                    {watch("shipmentNumber")} - Embarcación: {watch("vessel")}
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