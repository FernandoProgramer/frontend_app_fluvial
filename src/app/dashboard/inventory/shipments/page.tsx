"use client"
import { propsIcons } from "@/components/layout/Sidebar";
import Button from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import Pagination from "@/components/ui/Pagination";
import Table, { ActionsTable, BodyElements, BodyRow, BodyTable, HeadElement, HeadRow, HeadTable } from "@/components/ui/Table";
import { usePagination } from "@/hooks/usePagination";
import useSearch from "@/hooks/useSearch";
import { Pencil, Plus, Ship } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const riverShipments = [
  {
    id: "1a2b3c4d",
    shipmentNumber: "FLV-2023-001",
    vessel: "Barco Carguero Amazonas",
    departurePort: "Puerto Leticia",
    arrivalPort: "Puerto Inírida",
    cargoType: "Granos",
    weight: "500 ton",
    departureDate: "2023-06-10",
    estimatedArrival: "2023-06-18",
    status: "En navegación"
  },
  {
    id: "5e6f7g8h",
    shipmentNumber: "FLV-2023-002",
    vessel: "Remolcador Magdalena",
    departurePort: "Puerto Barranquilla",
    arrivalPort: "Puerto Magangué",
    cargoType: "Combustible",
    weight: "300 ton",
    departureDate: "2023-06-05",
    estimatedArrival: "2023-06-08",
    status: "Descargando"
  },
  {
    id: "9i0j1k2l",
    shipmentNumber: "FLV-2023-003",
    vessel: "Barcaza Orinoco",
    departurePort: "Puerto Puerto Carreño",
    arrivalPort: "Puerto Arauca",
    cargoType: "Materiales de construcción",
    weight: "750 ton",
    departureDate: "2023-06-12",
    estimatedArrival: "2023-06-20",
    status: "En puerto"
  },
  {
    id: "3m4n5o6p",
    shipmentNumber: "FLV-2023-004",
    vessel: "Carguero Putumayo",
    departurePort: "Puerto Tarapacá",
    arrivalPort: "Puerto Leguízamo",
    cargoType: "Productos agrícolas",
    weight: "420 ton",
    departureDate: "2023-06-08",
    estimatedArrival: "2023-06-15",
    status: "Retrasado por clima"
  },
  {
    id: "7q8r9s0t",
    shipmentNumber: "FLV-2023-005",
    vessel: "Transportador Caquetá",
    departurePort: "Puerto Araracuara",
    arrivalPort: "Puerto La Pedrera",
    cargoType: "Equipos industriales",
    weight: "180 ton",
    departureDate: "2023-06-15",
    estimatedArrival: "2023-06-22",
    status: "En ruta"
  },
];

export default function RiverShipmentsPage() {
  // Barra de búsqueda
  const [searchTerm, setSearchTerm] = useState("");
  const shipmentsFiltered = useSearch({
    fields: riverShipments,
    searchTerm
  });

  // Paginación
  const [currentPage, setCurrentPage] = useState(1);
  const { finalIndex, totalPages, initialIndex } = usePagination({
    totalElements: shipmentsFiltered.length,
    elementsPerPag: 6,
    currentPage
  });
  const shipmentsPagination = shipmentsFiltered.slice(initialIndex, finalIndex + 1);

  return (
    <>
      <div className="flex items-center w-full justify-between">
        <div>
          <Input
            onChange={(e) => setSearchTerm(e.target.value)}
            type="search"
            name="search"
            placeholder="Buscar envíos fluviales"
            value={searchTerm}
          />
        </div>
        <Button variant="secondary">
          Descargar informe
        </Button>
        <Button>
          <Link href="/dashboard/river-shipments/add/" className="flex items-center gap-2">
            <Plus {...propsIcons} /><span>Nuevo envío fluvial</span>
          </Link>
        </Button>
      </div>

      <Table>
        <HeadTable>
          <HeadRow>
            <HeadElement>N° de envío</HeadElement>
            <HeadElement>Embarcación</HeadElement>
            <HeadElement>Puerto salida</HeadElement>
            <HeadElement>Puerto destino</HeadElement>
            <HeadElement>Tipo de carga</HeadElement>
            <HeadElement>Peso</HeadElement>
            <HeadElement>Fecha salida</HeadElement>
            <HeadElement>Estimado llegada</HeadElement>
            <HeadElement>Estado</HeadElement>
            <HeadElement>Acciones</HeadElement>
          </HeadRow>
        </HeadTable>
        <BodyTable>
          {shipmentsPagination.map((shipment) => (
            <BodyRow key={shipment.id}>
              <BodyElements>{shipment.shipmentNumber}</BodyElements>
              <BodyElements>{shipment.vessel}</BodyElements>
              <BodyElements>{shipment.departurePort}</BodyElements>
              <BodyElements>{shipment.arrivalPort}</BodyElements>
              <BodyElements>{shipment.cargoType}</BodyElements>
              <BodyElements>{shipment.weight}</BodyElements>
              <BodyElements>{shipment.departureDate}</BodyElements>
              <BodyElements>{shipment.estimatedArrival}</BodyElements>
              <BodyElements>
                <span className={`px-2 py-1 rounded-full text-xs ${shipment.status.includes("Retrasado") ? "bg-rose-100 text-rose-800" :
                  shipment.status.includes("En navegación") || shipment.status.includes("En ruta") ? "bg-indigo-100 text-indigo-800" :
                    shipment.status.includes("Descargando") ? "bg-purple-100 text-purple-800" :
                      "bg-emerald-100 text-emerald-800"
                  }`}>
                  {shipment.status}
                </span>
              </BodyElements>
              <ActionsTable>
                <Button variant="ghost" className="p-1">
                  <Pencil size={20} {...propsIcons} />
                </Button>
              </ActionsTable>
            </BodyRow>
          ))}

          <BodyRow className="px-6 py-3 text-center hover:!bg-transparent">
            <BodyElements colSpan={10}>
              <Pagination
                totalPages={totalPages}
                onPageChange={setCurrentPage}
                currentPage={currentPage}
              />
            </BodyElements>
          </BodyRow>
        </BodyTable>
      </Table>
    </>
  )
}