import { Option } from "@/interfaces/options";

export enum BoatTypeOptionsEnum {
    SAILBOAT = "Velero",
    YACHT = "Yate",
    MOTORBOAT = "Lancha",
    CATAMARAN = "Catamarán",
    FISHING_BOAT = "Barco pesquero",
    SPEEDBOAT = "Bote rápido",
    CRUISE_SHIP = "Barco de crucero",
    TUGBOAT = "Remolcador",
}

export const boatTypeOptions: Option[] = [
    { value: BoatTypeOptionsEnum.SAILBOAT, label: "Velero" },
    { value: BoatTypeOptionsEnum.YACHT, label: "Yate" },
    { value: BoatTypeOptionsEnum.MOTORBOAT, label: "Lancha" },
    { value: BoatTypeOptionsEnum.CATAMARAN, label: "Catamarán" },
    { value: BoatTypeOptionsEnum.FISHING_BOAT, label: "Barco pesquero" },
    { value: BoatTypeOptionsEnum.SPEEDBOAT, label: "Bote rápido" },
    { value: BoatTypeOptionsEnum.CRUISE_SHIP, label: "Barco de crucero" },
    { value: BoatTypeOptionsEnum.TUGBOAT, label: "Remolcador" },
];