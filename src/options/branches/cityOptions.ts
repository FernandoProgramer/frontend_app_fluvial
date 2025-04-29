import { Option } from "@/interfaces/options";

export enum CityOptionsEnum {
    BOGOTA = "Bogotá",
    MEDELLIN = "Medellín",
    CALI = "Cali",
    BARRANQUILLA = "Barranquilla",
    CARTAGENA = "Cartagena",
    BUCARAMANGA = "Bucaramanga",
    PEREIRA = "Pereira",
    MANIZALES = "Manizales",
    ARMENIA = "Armenia",
    IBAGUE = "Ibagué"
}

export const cityOptions: Option[] = [
    { value: CityOptionsEnum.BOGOTA, label: "Bogotá" },
    { value: CityOptionsEnum.MEDELLIN, label: "Medellín" },
    { value: CityOptionsEnum.CALI, label: "Cali" },
    { value: CityOptionsEnum.BARRANQUILLA, label: "Barranquilla" },
    { value: CityOptionsEnum.CARTAGENA, label: "Cartagena" },
    { value: CityOptionsEnum.BUCARAMANGA, label: "Bucaramanga" },
    { value: CityOptionsEnum.PEREIRA, label: "Pereira" },
    { value: CityOptionsEnum.MANIZALES, label: "Manizales" },
    { value: CityOptionsEnum.ARMENIA, label: "Armenia" },
    { value: CityOptionsEnum.IBAGUE, label: "Ibagué" }
];