import { Option } from "@/interfaces/options";

export enum WarehouseTypeEnum {
    DRY = "Seco",
    REFRIGERATED = "Refrigerado",
    FROZEN = "Congelado",
    CONTROLLED = "Controlado",
    HAZARDOUS = "Materiales peligrosos",
    GENERAL = "Multipropósito"
}

export const warehouseTypeOptions: Option[] = [
    { value: WarehouseTypeEnum.DRY, label: "Almacén seco" },
    { value: WarehouseTypeEnum.REFRIGERATED, label: "Refrigerado" },
    { value: WarehouseTypeEnum.FROZEN, label: "Congelado" },
    { value: WarehouseTypeEnum.CONTROLLED, label: "Controlado (clima)" },
    { value: WarehouseTypeEnum.HAZARDOUS, label: "Materiales peligrosos" },
    { value: WarehouseTypeEnum.GENERAL, label: "Multipropósito" }
];