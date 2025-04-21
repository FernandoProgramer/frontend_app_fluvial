import { Option } from "@/interfaces/options";

export enum TypeDocumentEnum {
  CC = "CC",
  TI = "TI",
  CE = "CE",
  PAS = "PAS",
}
export const typeDocumentOptions: Option[] = [
  { value: TypeDocumentEnum.CC, label: "Cédula de ciudadanía" },
  { value: TypeDocumentEnum.TI, label: "Tarjeta de identidad" },
  { value: TypeDocumentEnum.CE, label: "Cédula extranjera" },
  { value: TypeDocumentEnum.PAS, label: "Pasaporte" },
];