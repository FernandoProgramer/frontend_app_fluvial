import { propsIcons } from "@/components/layout/Sidebar";
import Button from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import Pagination from "@/components/ui/Pagination";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/Select";
import Table, { ActionElement, ActionsTable, BodyElements, BodyRow, BodyTable, HeadElement, HeadRow, HeadTable } from "@/components/ui/Table";
import { Eye, Pencil, Plus } from "lucide-react";
import Link from "next/link";

const clientsFakes = [
    {
        id: "1a2b3c4d", // ID único
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
];


export default function ClientsPage() {
    return (
        <>
            <div className="flex gap-2 justify-between items-center">

                <div>
                    <Input type="search" name="search" placeholder="Buscar aqui" />
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
                    {clientsFakes.map((client) => (
                        <BodyRow key={client.id}>
                            <BodyElements>{client.documento}</BodyElements>
                            <BodyElements>{client.nombre}</BodyElements>
                            <BodyElements>{client.correo}</BodyElements>
                            <BodyElements>{client.telefono}</BodyElements>
                            <BodyElements>{client.direccion}</BodyElements>
                            <ActionsTable>
                                <Button variant="ghost" className="p-1">
                                    <Pencil {...propsIcons} />
                                </Button>
                                <Button variant="link" className="p-1 !pb-0 border-b-[1.5px] border-transparent hover:border-black rounded-none">
                                    <Eye {...propsIcons} />
                                </Button>
                            </ActionsTable>
                        </BodyRow>
                    ))}

                    <BodyRow className="px-6 py-3 text-center hover:!bg-transparent">
                        <BodyElements colSpan={6}>
                            <Pagination />
                        </BodyElements>
                    </BodyRow>

                </BodyTable>
            </Table>
        </>
    )
}
