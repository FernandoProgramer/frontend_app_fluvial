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

const clientsFakes = [
    {
        id: "1a2b3c4d",
        documento: "123456789",
        nombre: "Juan Pérez",
        correo: "juan.perez@example.com",
        telefono: "3001234567",
        direccion: "Calle 123 #45-67, Bogotá"
    },
    {
        id: "5e6f7g8h",
        documento: "987654321",
        nombre: "María González",
        correo: "maria.gonzalez@example.com",
        telefono: "3207654321",
        direccion: "Carrera 50 #10-20, Medellín"
    },
    {
        id: "9i0j1k2l",
        documento: "456789123",
        nombre: "Carlos Rodríguez",
        correo: "carlos.rodriguez@example.com",
        telefono: "3109876543",
        direccion: "Avenida Siempre Viva 742, Cali"
    },
    {
        id: "3m4n5o6p",
        documento: "741852963",
        nombre: "Laura Martínez",
        correo: "laura.martinez@example.com",
        telefono: "3154567890",
        direccion: "Calle Falsa 123, Barranquilla"
    },
    {
        id: "7q8r9s0t",
        documento: "159753468",
        nombre: "Andrés Torres",
        correo: "andres.torres@example.com",
        telefono: "3121239876",
        direccion: "Diagonal 98 #23-45, Cartagena"
    },
    {
        id: "u1v2w3x4",
        documento: "321654987",
        nombre: "Sofía Ramírez",
        correo: "sofia.ramirez@example.com",
        telefono: "3182345678",
        direccion: "Carrera 70 #25-30, Bucaramanga"
    },
    {
        id: "y5z6a7b8",
        documento: "852369741",
        nombre: "Diego Castillo",
        correo: "diego.castillo@example.com",
        telefono: "3012347890",
        direccion: "Avenida Las Américas, Manizales"
    },
    {
        id: "c9d0e1f2",
        documento: "963852741",
        nombre: "Valentina Mora",
        correo: "valentina.mora@example.com",
        telefono: "3147654321",
        direccion: "Transversal 8 #33-44, Pereira"
    },
    {
        id: "g3h4i5j6",
        documento: "789456123",
        nombre: "Mateo López",
        correo: "mateo.lopez@example.com",
        telefono: "3004567891",
        direccion: "Calle 45 #12-89, Ibagué"
    },
    {
        id: "k7l8m9n0",
        documento: "147258369",
        nombre: "Camila Vega",
        correo: "camila.vega@example.com",
        telefono: "3119876543",
        direccion: "Carrera 15 #76-98, Neiva"
    },
    {
        id: "o1p2q3r4",
        documento: "654321987",
        nombre: "Sebastián Reyes",
        correo: "sebastian.reyes@example.com",
        telefono: "3164561230",
        direccion: "Calle 89 #32-16, Santa Marta"
    },
    {
        id: "s5t6u7v8",
        documento: "112233445",
        nombre: "Daniela Patiño",
        correo: "daniela.patino@example.com",
        telefono: "3173216549",
        direccion: "Carrera 9 #45-12, Cúcuta"
    }
];


export default function ClientsPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const { finalIndex, totalPages, initialIndex } = usePagination({
        totalElements: clientsFakes.length,
        elementsPerPag: 6,
        currentPage
    });

    const customersPagination = clientsFakes.slice(initialIndex, finalIndex + 1);
    return (
        <>
            <div className="flex gap-2 justify-between items-center">

                <div>
                    <Input type="search" name="search" placeholder="Buscar cliente" />
                </div>
                <Button variant="secondary">
                    Descargar informe
                </Button>

                <Button>
                    <Link href="/dashboard/customers/add/" className="flex items-center gap-2">
                        <Plus {...propsIcons} /><span>Agregar cliente</span>
                    </Link>
                </Button>
            </div>

            <Table>
                <HeadTable>
                    <HeadRow>
                        <HeadElement>Documento</HeadElement>
                        <HeadElement>Nombre</HeadElement>
                        <HeadElement>Correo</HeadElement>
                        <HeadElement>Telefono</HeadElement>
                        <HeadElement>Dirección</HeadElement>
                        {/* Acciones */}
                        <HeadElement>Acciones</HeadElement>

                    </HeadRow>
                </HeadTable>
                <BodyTable>
                    {customersPagination.map((client) => (
                        <BodyRow key={client.id}>
                            <BodyElements>{client.documento}</BodyElements>
                            <BodyElements>{client.nombre}</BodyElements>
                            <BodyElements>{client.correo}</BodyElements>
                            <BodyElements>{client.telefono}</BodyElements>
                            <BodyElements>{client.direccion}</BodyElements>
                            <ActionsTable>
                                <Button variant="ghost" className="p-1">
                                    <Pencil size={20} {...propsIcons} />
                                </Button>
                            </ActionsTable>
                        </BodyRow>
                    ))}

                    <BodyRow className="px-6 py-3 text-center hover:!bg-transparent">
                        <BodyElements colSpan={6}>
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
