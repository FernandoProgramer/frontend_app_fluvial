import { InputForm } from "@/components/ui/Input";
import { LabelForm } from "@/components/ui/Label";
import SectionTitle from "@/components/ui/SectionTitle";

export default function AddCustomer() {
    return <div className="">
        <SectionTitle>Información personal</SectionTitle>
        <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col text-left justify-center gap-1.5">
                <LabelForm>Nombres</LabelForm>
                <InputForm />
            </div>
            <div className="flex flex-col text-left justify-center gap-1.5">
                <LabelForm>Apellidos</LabelForm>
                <InputForm />
            </div>
            <div className="flex flex-col text-left justify-center gap-1.5">
                <LabelForm>Documento</LabelForm>
                <InputForm />
            </div>
            <div className="flex flex-col text-left justify-center gap-1.5">
                <LabelForm>Correo Electronico</LabelForm>
                <InputForm />
            </div>
            <div className="flex flex-col text-left justify-center gap-1.5">
                <LabelForm>Telefono</LabelForm>
                <InputForm />
            </div>
            <div className="flex flex-col text-left justify-center gap-1.5">
                <LabelForm>Dirección de residencia</LabelForm>
                <InputForm />
            </div>

        </div>
    </div>
}