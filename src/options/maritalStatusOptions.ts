import { Option } from "@/interfaces/options";

export enum MaritalStatusOptionsEnum {
  SINGLE = "Solterto",
  MARRIED = "Casado",
  DIVORDEC = "Divorciado",
  WIDOWER = "Viudo",
}

export const maritalStatusOptions: Option[] = [
  { value: MaritalStatusOptionsEnum.SINGLE, label: "Soltero" },
  { value: MaritalStatusOptionsEnum.MARRIED, label: "Casado" },
  { value: MaritalStatusOptionsEnum.DIVORDEC, label: "Divorciado" },
  { value: MaritalStatusOptionsEnum.WIDOWER, label: "Viudo" },
];