import { Option } from "@/interfaces/options";

export enum BranchTypeEnum {
    PRINCIPAL = "Principal",
    SECUNDARIA = "Secundaria",
    EXPRESS = "Express",
    ALMACEN = "Almacén",
    VIRTUAL = "Virtual"
}

export const branchTypeOptions: Option[] = [
    { value: BranchTypeEnum.PRINCIPAL, label: "Sucursal Principal" },
    { value: BranchTypeEnum.SECUNDARIA, label: "Sucursal Secundaria" },
    { value: BranchTypeEnum.EXPRESS, label: "Sucursal Express" },
    { value: BranchTypeEnum.ALMACEN, label: "Almacén" },
    { value: BranchTypeEnum.VIRTUAL, label: "Sucursal Virtual" }
];