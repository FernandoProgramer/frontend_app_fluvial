import { Option } from "@/interfaces/options";

export enum MunicipalityOptionsEnum {
    SAN_JOSE_DEL_GUAVIARE = "SAN_JOSE_DEL_GUAVIARE",
    CALAMAR = "CALAMAR",
    EL_RETORNO = "EL_RETORNO",
    MIRAFLORES = "MIRAFLORES"
}

export const municipalityOptions: Option[] = [
    { value: MunicipalityOptionsEnum.SAN_JOSE_DEL_GUAVIARE, label: "San José del Guaviare" },
    { value: MunicipalityOptionsEnum.CALAMAR, label: "Calamar" },
    { value: MunicipalityOptionsEnum.EL_RETORNO, label: "El Retorno" },
    { value: MunicipalityOptionsEnum.MIRAFLORES, label: "Miraflores" }
];
