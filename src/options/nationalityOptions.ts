import { Option } from "@/interfaces/options";

export enum NationalityOptionsEnum {
    CO = "CO",
    VE = "VE",
    EC = "EC",
    PE = "PE",
    OTHER = "Otro",
}

export const nationalityOptions: Option[] = [
    { value: NationalityOptionsEnum.CO, label: "Colombiano" },
    { value: NationalityOptionsEnum.VE, label: "Venezolano" },
    { value: NationalityOptionsEnum.EC, label: "Ecuatoriano" },
    { value: NationalityOptionsEnum.PE, label: "Peruano" },
    { value: NationalityOptionsEnum.OTHER, label: "Otra nacionalidad" },
];
