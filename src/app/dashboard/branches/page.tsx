"use client"
import { propsIcons } from "@/components/layout/Sidebar";
import Button from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import Pagination from "@/components/ui/Pagination";
import Table, { ActionsTable, BodyElements, BodyRow, BodyTable, HeadElement, HeadRow, HeadTable } from "@/components/ui/Table";
import { usePagination } from "@/hooks/usePagination";
import { Pencil, Plus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const branchesFakes = [
    {
        id: "1a2b3c4d",
        codigo: "SUC-001",
        nombre: "Sucursal Principal",
        direccion: "Calle 123 #45-67, Bogotá",
        ciudad: "Bogotá",
        telefono: "601 1234567",
        responsable: "Carlos Méndez"
    },
    {
        id: "5e6f7g8h",
        codigo: "SUC-002",
        nombre: "Sucursal Norte",
        direccion: "Carrera 50 #10-20, Medellín",
        ciudad: "Medellín",
        telefono: "604 7654321",
        responsable: "María Rodríguez"
    },
    {
        id: "9i0j1k2l",
        codigo: "SUC-003",
        nombre: "Sucursal Costa",
        direccion: "Avenida Siempre Viva 742, Cali",
        ciudad: "Cali",
        telefono: "602 9876543",
        responsable: "Juan Pérez"
    },
    {
        id: "3m4n5o6p",
        codigo: "SUC-004",
        nombre: "Sucursal Caribe",
        direccion: "Calle Falsa 123, Barranquilla",
        ciudad: "Barranquilla",
        telefono: "605 4567890",
        responsable: "Laura Gómez"
    },
    {
        id: "7q8r9s0t",
        codigo: "SUC-005",
        nombre: "Sucursal Sur",
        direccion: "Diagonal 98 #23-45, Cartagena",
        ciudad: "Cartagena",
        telefono: "605 1239876",
        responsable: "Andrés López"
    },
];

export default function BranchesPage() {

    const [currentPage, setCurrentPage] = useState(1);
    const { finalIndex, totalPages, initialIndex } = usePagination({
        totalElements: branchesFakes.length,
        elementsPerPag: 6,
        currentPage
    });

    const branchesPagination = branchesFakes.slice(initialIndex, finalIndex + 1);

    return (
        <>
            <div className="flex gap-2 justify-between items-center">
                <div>
                    <Input type="search" name="search" placeholder="Buscar sucursal" />
                </div>
                <Button variant="secondary">
                    Descargar informe
                </Button>

                <Button>
                    <Link href="/dashboard/branches/add/" className="flex items-center gap-2">
                        <Plus {...propsIcons} /><span>Agregar sucursal</span>
                    </Link>
                </Button>
            </div>

            <Table>
                <HeadTable>
                    <HeadRow>
                        <HeadElement>Código</HeadElement>
                        <HeadElement>Nombre</HeadElement>
                        <HeadElement>Dirección</HeadElement>
                        <HeadElement>Ciudad</HeadElement>
                        <HeadElement>Teléfono</HeadElement>
                        <HeadElement>Responsable</HeadElement>
                        <HeadElement>Acciones</HeadElement>
                    </HeadRow>
                </HeadTable>
                <BodyTable>
                    {branchesPagination.map((branch) => (
                        <BodyRow key={branch.id}>
                            <BodyElements>{branch.codigo}</BodyElements>
                            <BodyElements>{branch.nombre}</BodyElements>
                            <BodyElements>{branch.direccion}</BodyElements>
                            <BodyElements>{branch.ciudad}</BodyElements>
                            <BodyElements>{branch.telefono}</BodyElements>
                            <BodyElements>{branch.responsable}</BodyElements>
                            <ActionsTable>
                                <Button variant="ghost" className="p-1">
                                    <Pencil size={20} {...propsIcons} />
                                </Button>
                            </ActionsTable>
                        </BodyRow>
                    ))}

                    <BodyRow className="px-6 py-3 text-center hover:!bg-transparent">
                        <BodyElements colSpan={7}>
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