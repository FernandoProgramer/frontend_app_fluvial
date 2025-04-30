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

const employeesFakes = [
    {
        id: "1a2b3c4d",
        documento: "123456789",
        nombre: "Carlos Gómez",
        correo: "carlos.gomez@example.com",
        telefono: "3001234567",
        cargo: "Desarrollador Frontend",
        salario: "$5.000.000"
    },
    {
        id: "5e6f7g8h",
        documento: "987654321",
        nombre: "Ana López",
        correo: "ana.lopez@example.com",
        telefono: "3207654321",
        cargo: "Diseñadora UX",
        salario: "$4.500.000"
    },
    {
        id: "9i0j1k2l",
        documento: "456789123",
        nombre: "Pedro Ramírez",
        correo: "pedro.ramirez@example.com",
        telefono: "3109876543",
        cargo: "Backend Developer",
        salario: "$6.200.000"
    },
    {
        id: "3m4n5o6p",
        documento: "741852963",
        nombre: "Sofía Castro",
        correo: "sofia.castro@example.com",
        telefono: "3154567890",
        cargo: "Gerente de Proyectos",
        salario: "$7.800.000"
    },
    {
        id: "7q8r9s0t",
        documento: "159753468",
        nombre: "Jorge Méndez",
        correo: "jorge.mendez@example.com",
        telefono: "3121239876",
        cargo: "QA Tester",
        salario: "$4.000.000"
    },
];

export default function EmployeesPage() {

    const [currentPage, setCurrentPage] = useState(1);
    const { finalIndex, totalPages, initialIndex } = usePagination({
        totalElements: employeesFakes.length,
        elementsPerPag: 6,
        currentPage
    });

    const employeesPagination = employeesFakes.slice(initialIndex, finalIndex + 1);

    return (
        <>
            <div className="flex gap-2 justify-between items-center">
                <div>
                    <Input type="search" name="search" placeholder="Buscar empleados" />
                </div>
                <Button variant="secondary">
                    Descargar informe
                </Button>
                <Button>
                    <Link href="/dashboard/employees/add/" className="flex items-center gap-2">
                        <Plus {...propsIcons} /><span>Registrar empleado</span>
                    </Link>
                </Button>
            </div>

            <Table>
                <HeadTable>
                    <HeadRow>
                        <HeadElement>Documento</HeadElement>
                        <HeadElement>Nombre</HeadElement>
                        <HeadElement>Correo</HeadElement>
                        <HeadElement>Teléfono</HeadElement>
                        <HeadElement>Cargo</HeadElement>
                        <HeadElement>Salario</HeadElement>
                        <HeadElement>Acciones</HeadElement>
                    </HeadRow>
                </HeadTable>
                <BodyTable>
                    {employeesPagination.map((employee) => (
                        <BodyRow key={employee.id}>
                            <BodyElements>{employee.documento}</BodyElements>
                            <BodyElements>{employee.nombre}</BodyElements>
                            <BodyElements>{employee.correo}</BodyElements>
                            <BodyElements>{employee.telefono}</BodyElements>
                            <BodyElements>{employee.cargo}</BodyElements>
                            <BodyElements>{employee.salario}</BodyElements>
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