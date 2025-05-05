"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { cn } from "@/utils/utils";
import Button, { buttonVariants } from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import FormField from "@/components/ui/FormField";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
    SelectTrigger,
    SelectContent,
    SelectItem,
} from "@/components/ui/Select";

import { Save, X } from "lucide-react";
import { propsIcons } from "@/components/layout/Sidebar";
import { AddProductSchema } from "@/validations/inventory/products/addProduct.schema";

export interface AddProductInputs {
    productName: string;
    sku: string;
    category: string;
    price: string;
    stock: string;
    supplier: string;
    supplierPhone: string;
    supplierEmail: string;
}

export default function AddProducts() {
    const {
        watch,
        setValue,
        register,
        handleSubmit,
        trigger,
        formState: { errors, isValid },
    } = useForm<AddProductInputs>({
        resolver: zodResolver(AddProductSchema),
        mode: "onChange",
    });

    const router = useRouter();
    const [isOpenDialog, setIsOpenDialog] = useState(false);

    const onSubmit: SubmitHandler<AddProductInputs> = (data) => {
        console.log("Producto guardado:", data);
        toast.success("Producto agregado exitosamente");
        setTimeout(() => {
            router.push("/dashboard/inventory/products");
        }, 2000);
    };

    const hasErrors = Object.keys(errors).length > 0 || !isValid;

    const handleSaveClick = async (e: React.MouseEvent) => {
        e.preventDefault();
        const isValid = await trigger();
        if (!isValid) return;
        setIsOpenDialog(true);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-7">
            <div>
                <SectionTitle>Información del producto</SectionTitle>
                <div className="grid grid-cols-2 gap-4">
                    <FormField
                        label="Nombre del producto"
                        name="productName"
                        register={register}
                        errors={errors}
                        inputProps={{ placeholder: "Ej. Laptop Dell" }}
                    />
                    <FormField
                        label="SKU"
                        name="sku"
                        register={register}
                        errors={errors}
                        inputProps={{ placeholder: "PROD-001" }}
                    />
                    <FormField
                        type="select"
                        label="Categoría"
                        name="category"
                        setValue={setValue}
                        errors={errors}
                        trigger={trigger}
                    >
                        <SelectTrigger />
                        <SelectContent>
                            <SelectItem value="Electrónica">Electrónica</SelectItem>
                            <SelectItem value="Ropa">Ropa</SelectItem>
                            <SelectItem value="Alimentos">Alimentos</SelectItem>
                            <SelectItem value="Hogar">Hogar</SelectItem>
                        </SelectContent>
                    </FormField>
                    <FormField
                        label="Precio"
                        name="price"
                        register={register}
                        errors={errors}
                        inputProps={{ placeholder: "100000", type: "number" }}
                    />
                    <FormField
                        label="Stock"
                        name="stock"
                        register={register}
                        errors={errors}
                        inputProps={{ placeholder: "50", type: "number" }}
                    />
                </div>
            </div>

            <div>
                <SectionTitle>Información del proveedor</SectionTitle>
                <div className="grid grid-cols-2 gap-4">
                    <FormField
                        label="Nombre del proveedor"
                        name="supplier"
                        register={register}
                        errors={errors}
                        inputProps={{ placeholder: "Distribuciones XYZ" }}
                    />
                    <FormField
                        label="Teléfono del proveedor"
                        name="supplierPhone"
                        register={register}
                        errors={errors}
                        inputProps={{ placeholder: "3109876543" }}
                    />
                    <FormField
                        label="Correo del proveedor"
                        name="supplierEmail"
                        register={register}
                        errors={errors}
                        inputProps={{ placeholder: "proveedor@empresa.com", type: "email" }}
                    />
                </div>
            </div>

            <div className="flex justify-between gap-2">
                <Link href="/dashboard/products">
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
                            <AlertDialogTitle>¿Agregar producto?</AlertDialogTitle>
                            <AlertDialogDescription>
                                Vas a registrar el producto:{" "}
                                <span className="font-semibold">
                                    {watch("productName")} - SKU: {watch("sku")}
                                </span>
                                . Por favor, asegúrate de que toda la información es correcta.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancelar</AlertDialogCancel>
                            <AlertDialogAction type="button" onClick={() => handleSubmit(onSubmit)()}>
                                Continuar
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </div>
        </form>
    );
}
