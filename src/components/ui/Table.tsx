import { cn } from "@/utils/utils";
import Link from "next/link";
import { AnchorHTMLAttributes, ComponentType, HTMLAttributes, ReactNode, TableHTMLAttributes, TdHTMLAttributes, ThHTMLAttributes } from "react";
import { buttonVariants } from "./Button";

/**
 * Componente que define la cabecera de la tabla.
 * Sirve para agrupar los encabezados de la tabla dentro de un `<thead>`.
 */
interface HeadTableProps extends HTMLAttributes<HTMLTableSectionElement> {
    children: ReactNode,
}
export function HeadTable({ children, className, ...props }: HeadTableProps) {
    return <thead className={cn("", className)} {...props}>
        {children}
    </thead>
}

/**
 * Componente que representa una fila dentro de la cabecera de la tabla.
 * Se renderiza como un `<tr>` y permite personalizar su estilo.
 */
interface HeadRowProps extends HTMLAttributes<HTMLTableRowElement> {
    children: ReactNode,
}
export function HeadRow({ children, className, ...props }: HeadRowProps) {
    return <tr className={cn("border-b border-slate-500 text-left ", className)} {...props}>
        {children}
    </tr>
}

/**
 * Componente para los elementos dentro de la cabecera de la tabla.
 * Sirve para definir cada celda de encabezado dentro de un `<th>`.
 */
interface HeadElementProps extends ThHTMLAttributes<HTMLTableCellElement> {
    children: string,
}
export function HeadElement({ children, className, ...props }: HeadElementProps) {
    return <th className={cn("px-6 py-3 text-slate-500", className)} {...props}>
        {children}
    </th>
}

/**
 * Componente que define el cuerpo de la tabla.
 * Agrupa todas las filas de datos dentro de un `<tbody>`.
 */
interface BodyTableProps extends HTMLAttributes<HTMLTableSectionElement> {
    children: ReactNode,
}
export function BodyTable({ children, className, ...props }: BodyTableProps) {
    return <tbody className={cn("", className)}{...props}>
        {children}
    </tbody>
}

/**
 * Componente que representa una fila dentro del cuerpo de la tabla.
 * Se renderiza como un `<tr>` y tiene efectos hover para mejor visualización.
 */
interface BodyRowProps extends HTMLAttributes<HTMLTableRowElement> {
    children: ReactNode,
}
export function BodyRow({ children, className, ...props }: BodyRowProps) {
    return <tr className={cn("border-b border-slate-400 transition duration-300", buttonVariants({ variant: "ghost" }), className)} {...props}>
        {children}
    </tr>
}


/**
 * Componente para las celdas dentro del cuerpo de la tabla.
 * Renderiza los datos en un `<td>` con padding y estilos personalizables.
 */
interface BodyElementsProps extends TdHTMLAttributes<HTMLTableCellElement> {
    children: ReactNode,
}
export function BodyElements({ children, className, ...props }: BodyElementsProps) {
    return <td className={cn("px-6 py-3 text-black font-semibold", className)}  {...props}>{children}</td>

}

/**
 * Componente para las celdas que contienen acciones en la tabla.
 * Se utiliza para mostrar botones o iconos dentro de un `<td>` con disposición flexbox.
 */
interface ActionsTableProps extends TdHTMLAttributes<HTMLTableCellElement> {
    children: ReactNode,
}
export function ActionsTable({ children, className, ...props }: ActionsTableProps) {
    return <td className={cn("px-6 py-3 flex gap-2 items-center justify-between", className)} {...props}>
        {children}
    </td>
}

/**
 * Componente para los botones de acción dentro de la tabla.
 * Usa un `Link` de Next.js que envuelve un ícono interactivo.
 */
interface ActionElementProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    Icon: ComponentType<any>,
    className?: string,
    link: string
}
export function ActionElement({ Icon, className, link, ...props }: ActionElementProps) {
    return <Link href={link} className={cn("p-2 rounded-full transition duration-300", className)} {...props}>
        <Icon size={20} />
    </Link>
}

/**
 * Componente principal que envuelve toda la tabla.
 * Se encarga de la estructura y el diseño general.
 */
interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
    children: ReactNode,
    className?: string
}
export default function Table({ children, className, ...props }: TableProps) {
    return (
        <div className={cn("h-fit rounded-sm py-4 bg-white text-sm overflow-auto w-fit max-w-[990px]", className)}>
            <table className="table-auto w-full" {...props}>
                {children}
            </table>
        </div>
    );
}