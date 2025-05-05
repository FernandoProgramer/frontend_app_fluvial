"use client"
import { propsIcons } from "@/components/layout/Sidebar";
import Button from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import Pagination from "@/components/ui/Pagination";
import Table, { ActionsTable, BodyElements, BodyRow, BodyTable, HeadElement, HeadRow, HeadTable } from "@/components/ui/Table";
import { usePagination } from "@/hooks/usePagination";
import useSearch from "@/hooks/useSearch";
import { Pencil, Plus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const productList = [
  {
    id: "p1",
    code: "PRD-001",
    name: "Arroz Premium",
    category: "Granos",
    stock: "1200 kg",
    supplier: "AgroColombia",
    price: "$3.500",
    entryDate: "2023-05-10",
    status: "Disponible"
  },
  {
    id: "p2",
    code: "PRD-002",
    name: "Aceite vegetal",
    category: "Aceites",
    stock: "800 L",
    supplier: "Aceites del Sur",
    price: "$4.200",
    entryDate: "2023-06-01",
    status: "Bajo stock"
  },
  {
    id: "p3",
    code: "PRD-003",
    name: "Maíz amarillo",
    category: "Granos",
    stock: "500 kg",
    supplier: "CampoFresco",
    price: "$2.800",
    entryDate: "2023-06-15",
    status: "Agotado"
  }
];

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const productsFiltered = useSearch({
    fields: productList,
    searchTerm
  });

  const [currentPage, setCurrentPage] = useState(1);
  const { finalIndex, totalPages, initialIndex } = usePagination({
    totalElements: productsFiltered.length,
    elementsPerPag: 6,
    currentPage
  });
  const productsPagination = productsFiltered.slice(initialIndex, finalIndex + 1);

  return (
    <>
      <div className="flex items-center w-full justify-between">
        <div>
          <Input
            onChange={(e) => setSearchTerm(e.target.value)}
            type="search"
            name="search"
            placeholder="Buscar productos"
            value={searchTerm}
          />
        </div>
        <Button variant="secondary">
          Descargar informe
        </Button>
        <Button>
          <Link href="/dashboard/inventory/products/add/" className="flex items-center gap-2">
            <Plus {...propsIcons} /><span>Nuevo producto</span>
          </Link>
        </Button>
      </div>

      <Table>
        <HeadTable>
          <HeadRow>
            <HeadElement>Código</HeadElement>
            <HeadElement>Nombre</HeadElement>
            <HeadElement>Categoría</HeadElement>
            <HeadElement>Stock</HeadElement>
            <HeadElement>Proveedor</HeadElement>
            <HeadElement>Precio</HeadElement>
            <HeadElement>Fecha ingreso</HeadElement>
            <HeadElement>Estado</HeadElement>
            <HeadElement>Acciones</HeadElement>
          </HeadRow>
        </HeadTable>
        <BodyTable>
          {productsPagination.map((product) => (
            <BodyRow key={product.id}>
              <BodyElements>{product.code}</BodyElements>
              <BodyElements>{product.name}</BodyElements>
              <BodyElements>{product.category}</BodyElements>
              <BodyElements>{product.stock}</BodyElements>
              <BodyElements>{product.supplier}</BodyElements>
              <BodyElements>{product.price}</BodyElements>
              <BodyElements>{product.entryDate}</BodyElements>
              <BodyElements>
                <span className={`px-2 py-1 rounded-full text-xs ${product.status === "Agotado" ? "bg-rose-100 text-rose-800" :
                    product.status === "Bajo stock" ? "bg-yellow-100 text-yellow-800" :
                      "bg-emerald-100 text-emerald-800"
                  }`}>
                  {product.status}
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
            <BodyElements colSpan={9}>
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
  );
}
