"use client"
import { cn } from "@/utils/utils";
import { ChevronsUpDown } from "lucide-react";
import * as React from 'react'
import { propsIcons } from "../layout/Sidebar";
import { FieldErrors, UseFormSetValue, UseFormTrigger } from "react-hook-form";
import Button, { buttonVariants } from "./Button";

// ===========================================
// 1. Contexto para las acciones del `<Select />`
// ===========================================
type SelectedType = {
    label: string
    value: string
}
interface SelectContextProps {
    isOpen: boolean,
    setIsOpen: (value: boolean) => void,
    selected: SelectedType
    setSelected: (selected: SelectedType) => void
}
const SelectContext = React.createContext<SelectContextProps | null>(null);

const useSelectContext = () => {
    const context = React.useContext(SelectContext);
    if (!context) {
        throw new Error("Select components must be wrapped in <Select />")
    }
    return context
}

// ===========================================
// 2. Componente principal proveedor del contexto `<Select />`
// ===========================================
interface SelectProps
    extends React.HTMLAttributes<HTMLDivElement> {
    children:
    | React.ReactElement<SelectTriggerProps>
    | React.ReactElement<SelectContentProps>
    | React.ReactElement<SelectContentProps>[]
    errors?: any
    name: any
    setValue?: UseFormSetValue<any>
    trigger?: UseFormTrigger<any>
}
export const Select = ({ setValue, trigger, className, children, errors, name }: SelectProps) => {

    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    const [selected, setSelected] = React.useState<SelectedType>({ label: "", value: "" });

    const handleSelect = (newSelected: SelectedType) => {
        setSelected(newSelected);
        setIsOpen(false);
        setValue?.(name, newSelected.value);
        trigger?.(name);
    }

    return <SelectContext.Provider value={{
        isOpen,
        setIsOpen,
        selected,
        setSelected: handleSelect

    }}>
        <div className={cn("bg-white rounded-md focus:outline-none w-ful h-fit cursor-pointer relative",
            errors?.[name] && "border-rose-500 border",
            className)}
            tabIndex={0}
            onBlur={() => isOpen && setIsOpen(false)}
        >
            {children}
        </div>
    </SelectContext.Provider>
}
Select.displayName = "Select"

// ===========================================
// 3. Disparador para abrir las opciones del `<Select />`
// ===========================================
interface SelectTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    placeholder?: string
}
export const SelectTrigger = ({ className, name, placeholder = "Seleccione", ...props }: SelectTriggerProps) => {

    const { setIsOpen, isOpen, selected } = useSelectContext();

    return <button
        className={cn("px-6 py-3.5 pr-10 flex items-center text-slate-400 font-light w-full relative",
            selected.value && "text-black font-normal",
            className)}
        type="button"
        onClick={() => setIsOpen && setIsOpen(!isOpen)}
        {...props}
    >
        <span>{selected.label || placeholder}</span>
        <ChevronsUpDown {...propsIcons} className="text-slate-400 absolute top-1/2 transform -translate-y-1/2 right-3" />

    </button>
}
SelectTrigger.displayName = "SelectTrigger"

// ===========================================
// 4. Contenedor para las opciones del `<Select />`
// ===========================================
interface SelectContentProps extends React.HTMLAttributes<HTMLDivElement> {
    children:
    | React.ReactElement<SelectItemProps>
    | React.ReactElement<SelectItemProps>[]
    | React.ReactNode
}
export const SelectContent = ({ className, children, ...props }: SelectContentProps) => {
    const { isOpen } = useSelectContext();

    if (!isOpen) return null;

    return <div className={cn("bg-white border border-slate-300 absolute left-0 top-full z-50 mt-1 w-full flex flex-col p-1 rounded-md", className)} {...props}>
        {children}
    </div>
}
SelectContent.displayName = "SelectContent"

// ===========================================
// 5. Item de opciones para el `<Select />`
// ===========================================
export interface SelectItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: string
    value: string
}
export const SelectItem = ({ className, children, value, ...props }: SelectItemProps) => {
    const { setSelected } = useSelectContext();
    return <Button variant="ghost" className={cn("px-3 py-2 w-full text-left", className)}
        type="button"
        onMouseDown={() => setSelected({ value, label: children })}
        {...props}
    >
        {children}
    </Button>
}
SelectItem.displayName = "SelectItem"