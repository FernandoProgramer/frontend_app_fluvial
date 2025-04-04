"use client"
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import { SubmitHandler, useForm } from "react-hook-form";
import { TypeDocument, typeDocumentOptions } from "@/options/typeDocumentOptions";
import { zodResolver } from "@hookform/resolvers/zod";
import { AddCustomerSchema, Gender, MaritalStatus, TypeCustomer } from "@/validations/addCustomer.schema";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/Select";
import FormField from "@/components/ui/FormField";

interface AddCustomerInputs {
    names: string;
    lastname: string;
    typeDocument: TypeDocument;
    numDocument: string;
    email: string;
    phone: string;
    birthday: string;
    address: string;
    nationality: string;
    gender: Gender;
    maritalStatus: MaritalStatus;
    typeCustomer: TypeCustomer;
    city: string;
}

export default function AddCustomer() {

    const { setValue, register, handleSubmit, trigger, formState: { errors } } = useForm<AddCustomerInputs>({
        resolver: zodResolver(AddCustomerSchema)
    });

    const onSubmit: SubmitHandler<AddCustomerInputs> = (data) => {
        console.log("Datos guarados: ", data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-7">

            {/* Información personal */}
            <div>
                <SectionTitle>Información personal</SectionTitle>
                <div className="grid grid-cols-2 gap-4">

                    <FormField
                        label="Nombre"
                        name="names"
                        register={register}
                        errors={errors}
                        inputProps={{ placeholder: "Jhon Doe" }}
                    />
                    {/* <FormField
                        label="Apellidos"
                        name="lastname"
                        register={register}
                        errors={errors}
                        inputProps={{ placeholder: "Jhon Doe" }}
                    /> */}

                    {/* <FormField
                        label="Correo electronico"
                        name="email"
                        register={register}
                        errors={errors}
                        inputProps={{ placeholder: "example@hotmail.com" }}
                    /> */}

                    <FormField
                        type="select"
                        label="Tipo de documento"
                        name="typeDocument"
                        setValue={setValue}
                        errors={errors}
                        trigger={trigger}
                    >
                        <SelectTrigger placeholder="Tipo de documento" />
                        <SelectContent>
                            {typeDocumentOptions.map((option) => (
                                <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                            ))}
                        </SelectContent>
                    </FormField>

                    {/* <FormField
                        label="Número de documento"
                        name="numDocument"  
                        register={register}
                        errors={errors}
                        inputProps={{ placeholder: "1120415241" }}
                    /> */}
                </div>
            </div>

            <Button>Guardar</Button>

        </form>
    )
}