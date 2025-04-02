import { Option } from "@/interfaces/options";

export enum TypeDocument {
  CC = "CC",
  TI = "TI",
  CE = "CE",
  PAS = "PAS",
}
export const typeDocumentOptions: Option[] = [
  { value: TypeDocument.CC, label: "Cédula de ciudadanía" },
  { value: TypeDocument.TI, label: "Tarjeta de identidad" },
  { value: TypeDocument.CE, label: "Cédula extranjera" },
  { value: TypeDocument.PAS, label: "Pasaporte" },
];