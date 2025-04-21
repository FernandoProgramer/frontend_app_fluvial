"use client"
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import { SubmitHandler, useForm } from "react-hook-form";
import { TypeDocumentEnum, typeDocumentOptions } from "@/options/typeDocumentOptions";
import { zodResolver } from "@hookform/resolvers/zod";
import { SelectContent, SelectItem, SelectTrigger } from "@/components/ui/Select";
import FormField from "@/components/ui/FormField";
import { genderOptions, GenderOptionsEnum } from "@/options/genderOptions";
import { maritalStatusOptions, MaritalStatusOptionsEnum } from "@/options/maritalStatusOptions";
import { CustomerTypeEnum, customerTypeOptions } from "@/options/customerTypeOptions";
import { AddCustomerSchema } from "@/validations/addCustomer.schema";
import { nationalityOptions } from "@/options/nationalityOptions";
import { municipalityOptions, MunicipalityOptionsEnum } from "@/options/municipalityOptions";

export interface AddCustomerInputs {
    names: string;
    lastname: string;
    typeDocument: TypeDocumentEnum;
    numDocument: string;
    email: string;
    phone: string;
    birthday: string;
    address: string;
    nationality: string;
    gender: GenderOptionsEnum;
    maritalStatus: MaritalStatusOptionsEnum;
    typeCustomer: CustomerTypeEnum;
    municipality: MunicipalityOptionsEnum;
}

export default function AddCustomer() {

    const { watch, setValue, register, handleSubmit, trigger, formState: { errors } } = useForm<AddCustomerInputs>({
        resolver: zodResolver(AddCustomerSchema),
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
                    <FormField
                        label="Apellidos"
                        name="lastname"
                        register={register}
                        errors={errors}
                        inputProps={{ placeholder: "Jhon Doe" }}
                    />

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

                    <FormField
                        label="Número de documento"
                        name="numDocument"
                        register={register}
                        errors={errors}
                        inputProps={{ placeholder: "1120415241" }}
                    />

                    <FormField
                        label="Correo electronico"
                        name="email"
                        register={register}
                        errors={errors}
                        inputProps={{ placeholder: "example@hotmail.com" }}
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
                        label="Nacionalidad"
                        name="nationality"
                        setValue={setValue}
                        errors={errors}
                        trigger={trigger}
                    >
                        <SelectTrigger />
                        <SelectContent>
                            {nationalityOptions.map((option) => (
                                <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                            ))}
                        </SelectContent>
                    </FormField>

                    <FormField
                        type="select"
                        label="Genero"
                        name="gender"
                        setValue={setValue}
                        errors={errors}
                        trigger={trigger}
                    >
                        <SelectTrigger />
                        <SelectContent>
                            {genderOptions.map((option) => (
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
                            {maritalStatusOptions.map((option) => (
                                <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                            ))}
                        </SelectContent>
                    </FormField>

                    <FormField
                        type="select"
                        label="Tipo de cliente"
                        name="typeCustomer"
                        setValue={setValue}
                        errors={errors}
                        trigger={trigger}
                    >
                        <SelectTrigger />
                        <SelectContent>
                            {customerTypeOptions.map((option) => (
                                <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                            ))}
                        </SelectContent>
                    </FormField>

                    {watch("typeCustomer") === CustomerTypeEnum.LEGAL_PERSON && <>
                        <FormField
                            label="NIT de la empresa"
                            name="nitCompany"
                            register={register}
                            errors={errors}
                        />
                        <FormField
                            label="Nombre de la empresa"
                            name="nameCompany"
                            register={register}
                            errors={errors}
                        />
                    </>}

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
                            {municipalityOptions.map((option) => (
                                <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                            ))}
                        </SelectContent>
                    </FormField>

                </div>
            </div>

            <Button>Guardar</Button>

        </form>
    )
}