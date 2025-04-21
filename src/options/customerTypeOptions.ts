import { Option } from "@/interfaces/options";

export enum CustomerTypeEnum {
    NATURAL_PERSON = "Natural",
    LEGAL_PERSON = "Juridica",
}
export const customerTypeOptions: Option[] = [
    { value: CustomerTypeEnum.NATURAL_PERSON, label: "Persona Natural" },
    { value: CustomerTypeEnum.LEGAL_PERSON, label: "Persona Jurídica" },
];
