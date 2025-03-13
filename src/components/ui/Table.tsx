import Link from "next/link";
import { ComponentType, ReactNode } from "react";

/**
 * Componente que define la cabecera de la tabla.
 * Sirve para agrupar los encabezados de la tabla dentro de un `<thead>`.
 */
interface HeadTableProps {
    children: ReactNode,
    className?: string
}
export function HeadTable({ children, className }: HeadTableProps) {
    return <thead className={className}>
        {children}
    </thead>
}

/**
 * Componente que representa una fila dentro de la cabecera de la tabla.
 * Se renderiza como un `<tr>` y permite personalizar su estilo.
 */
interface HeadRowProps {
    children: ReactNode,
    className?: string
}
export function HeadRow({ children, className }: HeadRowProps) {
    return <tr className={`border-b-4 border-[#0A0F14] text-left ${className}`}>
        {children}
    </tr>
}

/**
 * Componente para los elementos dentro de la cabecera de la tabla.
 * Sirve para definir cada celda de encabezado dentro de un `<th>`.
 */
interface HeadElementProps {
    children: ReactNode,
    className?: string
}
export function HeadElement({ children, className }: HeadElementProps) {
    return <th className={`px-6 py-3 ${className}`}>
        {children}
    </th>
}

/**
 * Componente que define el cuerpo de la tabla.
 * Agrupa todas las filas de datos dentro de un `<tbody>`.
 */
interface BodyTableProps {
    children: ReactNode,
    className?: string
}
export function BodyTable({ children, className }: BodyTableProps) {
    return <tbody className={`${className}`}>
        {children}
    </tbody>
}

/**
 * Componente que representa una fila dentro del cuerpo de la tabla.
 * Se renderiza como un `<tr>` y tiene efectos hover para mejor visualización.
 */
interface BodyRowProps {
    children: ReactNode,
    className?: string
}
export function BodyRow({ children, className }: BodyRowProps) {
    return <tr className={`border-b-4 border-[#0A0F14] hover:bg-[#413932] transition duration-300 text-gray-200 ${className}`}>
        {children}
    </tr>
}


/**
 * Componente para las celdas dentro del cuerpo de la tabla.
 * Renderiza los datos en un `<td>` con padding y estilos personalizables.
 */
interface BodyElementsProps {
    children: ReactNode,
    className?: string
}
export function BodyElements({ children, className }: BodyElementsProps) {
    return <td className={`px-6 py-3 ${className}`}>{children}</td>

}

/**
 * Componente para las celdas que contienen acciones en la tabla.
 * Se utiliza para mostrar botones o iconos dentro de un `<td>` con disposición flexbox.
 */
interface ActionsTableProps {
    children: ReactNode,
    className?: string
}
export function ActionsTable({ children, className }: ActionsTableProps) {
    return <td className={`px-6 py-3 flex gap-1 items-center justify-between ${className}`}>
        {children}
    </td>
}

/**
 * Componente para los botones de acción dentro de la tabla.
 * Usa un `Link` de Next.js que envuelve un ícono interactivo.
 */
interface ActionElementProps {
    Icon: ComponentType<any>,
    className?: string,
    link: string
}
export function ActionElement({ Icon, className, link }: ActionElementProps) {
    return <Link href={link} className={`p-2 rounded-full transition duration-300 ${className}`}>
        <Icon size={20} />
    </Link>
}

/**
 * Componente principal que envuelve toda la tabla.
 * Se encarga de la estructura y el diseño general.
 */
interface TableProps {
    children: ReactNode,
}
export default function Table({ children }: TableProps) {
    return (
        <div className="overflow-x-auto rounded-sm py-4 bg-[#17151F] text-sm text-gray-500">
            <table className="w-full border-collapse">
                {children}
            </table>
        </div>
    )
}
