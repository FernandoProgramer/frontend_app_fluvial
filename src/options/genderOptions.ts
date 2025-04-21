import { Option } from "@/interfaces/options";

export enum GenderOptionsEnum {
    MASCULINE = "Masculino",
    FEMININE = "Femenino",
    OTHER = "Otro",
}
export const genderOptions: Option[] = [
    { value: GenderOptionsEnum.MASCULINE, label: "Masculino" },
    { value: GenderOptionsEnum.FEMININE, label: "Femenino" },
    { value: GenderOptionsEnum.OTHER, label: "Otro" },
];