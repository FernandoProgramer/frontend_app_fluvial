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

const boatsFakes = [
    {
        id: "1a2b3c4d",
        matricula: "ABC123",
        nombre: "María del Mar",
        tipo: "Velero",
        eslora: "12 metros",
        capacidad: "8 personas",
        puerto: "Cartagena"
    },
    {
        id: "5e6f7g8h",
        matricula: "DEF456",
        nombre: "Neptuno",
        tipo: "Yate",
        eslora: "20 metros",
        capacidad: "12 personas",
        puerto: "Santa Marta"
    },
    {
        id: "9i0j1k2l",
        matricula: "GHI789",
        nombre: "Poseidón",
        tipo: "Lancha",
        eslora: "8 metros",
        capacidad: "6 personas",
        puerto: "Barranquilla"
    },
    {
        id: "3m4n5o6p",
        matricula: "JKL012",
        nombre: "Sirena",
        tipo: "Catamarán",
        eslora: "15 metros",
        capacidad: "10 personas",
        puerto: "San Andrés"
    },
    {
        id: "7q8r9s0t",
        matricula: "MNO345",
        nombre: "Tritón",
        tipo: "Bote",
        eslora: "5 metros",
        capacidad: "4 personas",
        puerto: "Providencia"
    },
];

export default function BoatsPage() {

    const [currentPage, setCurrentPage] = useState(1);
    const { finalIndex, totalPages, initialIndex } = usePagination({
        totalElements: boatsFakes.length,
        elementsPerPag: 6,
        currentPage
    });

    const boatsPagination = boatsFakes.slice(initialIndex, finalIndex + 1);

    return (
        <>
            <div className="flex gap-2 justify-between items-center">
                <div>
                    <Input type="search" name="search" placeholder="Buscar barco" />
                </div>
                <Button variant="secondary">
                    Descargar informe
                </Button>

                <Button>
                    <Link href="/dashboard/boats/add/" className="flex items-center gap-2">
                        <Plus {...propsIcons} /><span>Agregar barco</span>
                    </Link>
                </Button>
            </div>

            <Table>
                <HeadTable>
                    <HeadRow>
                        <HeadElement>Matrícula</HeadElement>
                        <HeadElement>Nombre</HeadElement>
                        <HeadElement>Tipo</HeadElement>
                        <HeadElement>Eslora</HeadElement>
                        <HeadElement>Capacidad</HeadElement>
                        <HeadElement>Puerto</HeadElement>
                        <HeadElement>Acciones</HeadElement>
                    </HeadRow>
                </HeadTable>
                <BodyTable>
                    {boatsPagination.map((boat) => (
                        <BodyRow key={boat.id}>
                            <BodyElements>{boat.matricula}</BodyElements>
                            <BodyElements>{boat.nombre}</BodyElements>
                            <BodyElements>{boat.tipo}</BodyElements>
                            <BodyElements>{boat.eslora}</BodyElements>
                            <BodyElements>{boat.capacidad}</BodyElements>
                            <BodyElements>{boat.puerto}</BodyElements>
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