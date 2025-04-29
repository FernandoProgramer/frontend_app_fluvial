import { Option } from "@/interfaces/options";

export enum PositionOptionsEnum {
    MANAGER = "Gerente",
    ASSISTANT = "Asistente",
    TECHNICIAN = "Técnico",
    OPERATOR = "Operador",
}

export const positionOptions: Option[] = [
    { value: PositionOptionsEnum.MANAGER, label: "Gerente" },
    { value: PositionOptionsEnum.ASSISTANT, label: "Asistente" },
    { value: PositionOptionsEnum.TECHNICIAN, label: "Técnico" },
    { value: PositionOptionsEnum.OPERATOR, label: "Operador" },
];
