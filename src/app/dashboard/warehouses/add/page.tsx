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
import { WarehouseTypeEnum, warehouseTypeOptions } from "@/options/warehouses/warehouseTypeOptions";
import { AddWarehouseSchema } from "@/validations/warehouses/addWarehouse.schema";

export interface AddWarehouseInputs {
  code: string;
  name: string;
  type: WarehouseTypeEnum;
  area: number;
  capacity: number;
  location: string;
  temperatureControl?: string;
  responsible: string;
  responsibleDocument: string;
  responsiblePhone: string;
  responsibleEmail: string;
  products: string;
}

export default function AddWarehouse() {
  const { watch, setValue, register, handleSubmit, trigger, formState: { errors, isValid } } = useForm<AddWarehouseInputs>({
    resolver: zodResolver(AddWarehouseSchema),
    mode: "onChange"
  });
  const router = useRouter();
  const onSubmit: SubmitHandler<AddWarehouseInputs> = (data) => {
    console.log("Datos guardados: ", data);
    toast.success("Bodega registrada exitosamente");
    setTimeout(() => {
      router.push("/dashboard/warehouses");
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
        <SectionTitle>Datos de la bodega</SectionTitle>
        <div className="grid grid-cols-2 gap-4">
          <FormField
            label="Código"
            name="code"
            register={register}
            errors={errors}
            inputProps={{ placeholder: "BOD-001" }}
          />
          <FormField
            label="Nombre"
            name="name"
            register={register}
            errors={errors}
            inputProps={{ placeholder: "Bodega Principal" }}
          />
          <FormField
            type="select"
            label="Tipo de bodega"
            name="type"
            setValue={setValue}
            errors={errors}
            trigger={trigger}
          >
            <SelectTrigger />
            <SelectContent>
              {warehouseTypeOptions.map(option => (
                <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
              ))}
            </SelectContent>
          </FormField>
          <FormField
            label="Área (m²)"
            name="area"
            register={register}
            errors={errors}
            inputProps={{ placeholder: "5000" }}
          />
          <FormField
            label="Capacidad (kg/pallets)"
            name="capacity"
            register={register}
            errors={errors}
            inputProps={{ placeholder: "10000" }}
          />
          <FormField
            label="Ubicación"
            name="location"
            register={register}
            errors={errors}
            inputProps={{ placeholder: "Zona Industrial Norte" }}
          />
          <FormField
            label="Control de temperatura"
            name="temperatureControl"
            register={register}
            errors={errors}
            inputProps={{ placeholder: "15°C - 25°C" }}
          />
          <FormField
            label="Productos almacenados"
            name="products"
            register={register}
            errors={errors}
            inputProps={{ placeholder: "Electrodomésticos, muebles" }}
          />
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
            inputProps={{ placeholder: "Carlos Méndez" }}
          />
          <FormField
            label="Documento del responsable"
            name="responsibleDocument"
            register={register}
            errors={errors}
            inputProps={{ placeholder: "123456789" }}
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
        <Link href="/dashboard/warehouses">
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
              <AlertDialogTitle>¿Registrar bodega?</AlertDialogTitle>
              <AlertDialogDescription>
                Vas a registrar la bodega:
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