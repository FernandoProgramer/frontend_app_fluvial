import { Option } from "@/interfaces/options";

export enum ContractTypeOptionsEnum {
    INDEFINITE = "Indefinido",
    FIXED_TERM = "Término fijo",
    TEMPORARY = "Temporal",
    APPRENTICESHIP = "Aprendizaje",
}

export const contractTypeOptions: Option[] = [
    { value: ContractTypeOptionsEnum.INDEFINITE, label: "Indefinido" },
    { value: ContractTypeOptionsEnum.FIXED_TERM, label: "Término fijo" },
    { value: ContractTypeOptionsEnum.TEMPORARY, label: "Temporal" },
    { value: ContractTypeOptionsEnum.APPRENTICESHIP, label: "Aprendizaje" },
];
