import { propsIcons } from "@/components/layout/Sidebar";
import Button from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import Pagination from "@/components/ui/Pagination";
import Table, { ActionsTable, BodyElements, BodyRow, BodyTable, HeadElement, HeadRow, HeadTable } from "@/components/ui/Table";
import { Pencil, Plus } from "lucide-react";
import Link from "next/link";

const warehousesFakes = [
    {
        id: "1a2b3c4d",
        codigo: "BOD-001",
        nombre: "Bodega Principal",
        ubicacion: "Zona Industrial Norte",
        capacidad: "5,000 m²",
        tipo: "Almacén Seco",
        responsable: "Carlos Méndez",
        productos: "Electrodomésticos"
    },
    {
        id: "5e6f7g8h",
        codigo: "BOD-002",
        nombre: "Centro Logístico Este",
        ubicacion: "Parque Industrial",
        capacidad: "8,000 m²",
        tipo: "Refrigerado",
        responsable: "María Rodríguez",
        productos: "Alimentos perecederos"
    },
    {
        id: "9i0j1k2l",
        codigo: "BOD-003",
        nombre: "Almacén Sur",
        ubicacion: "Zona Franca",
        capacidad: "3,500 m²",
        tipo: "Seco",
        responsable: "Juan Pérez",
        productos: "Materiales de construcción"
    },
    {
        id: "3m4n5o6p",
        codigo: "BOD-004",
        nombre: "Bodega Occidente",
        ubicacion: "Centro Distribución",
        capacidad: "6,200 m²",
        tipo: "Controlado",
        responsable: "Laura Gómez",
        productos: "Farmacéuticos"
    },
    {
        id: "7q8r9s0t",
        codigo: "BOD-005",
        nombre: "Terminal Logística",
        ubicacion: "Puerto Seco",
        capacidad: "12,000 m²",
        tipo: "Multipropósito",
        responsable: "Andrés López",
        productos: "Mercancía general"
    },
];

export default function WineriesPage() {
    return (
        <>
            <div className="flex gap-2 justify-between items-center">
                <div>
                    <Input type="search" name="search" placeholder="Buscar bodega" />
                </div>
                <Button variant="secondary">
                    Descargar informe
                </Button>

                <Button>
                    <Link href="/dashboard/warehouses/add/" className="flex items-center gap-2">
                        <Plus {...propsIcons} /><span>Agregar bodega</span>
                    </Link>
                </Button>
            </div>

            <Table>
                <HeadTable>
                    <HeadRow>
                        <HeadElement>Código</HeadElement>
                        <HeadElement>Nombre</HeadElement>
                        <HeadElement>Ubicación</HeadElement>
                        <HeadElement>Capacidad</HeadElement>
                        <HeadElement>Tipo</HeadElement>
                        <HeadElement>Productos</HeadElement>
                        <HeadElement>Responsable</HeadElement>
                        <HeadElement>Acciones</HeadElement>
                    </HeadRow>
                </HeadTable>
                <BodyTable>
                    {warehousesFakes.map((warehouse) => (
                        <BodyRow key={warehouse.id}>
                            <BodyElements>{warehouse.codigo}</BodyElements>
                            <BodyElements>{warehouse.nombre}</BodyElements>
                            <BodyElements>{warehouse.ubicacion}</BodyElements>
                            <BodyElements>{warehouse.capacidad}</BodyElements>
                            <BodyElements>{warehouse.tipo}</BodyElements>
                            <BodyElements>{warehouse.productos}</BodyElements>
                            <BodyElements>{warehouse.responsable}</BodyElements>
                            <ActionsTable>
                                <Button variant="ghost" className="p-1">
                                    <Pencil size={20} {...propsIcons} />
                                </Button>
                            </ActionsTable>
                        </BodyRow>
                    ))}

                    <BodyRow className="px-6 py-3 text-center hover:!bg-transparent">
                        <BodyElements colSpan={8}>
                            <Pagination />
                        </BodyElements>
                    </BodyRow>
                </BodyTable>
            </Table>
        </>
    )
}