"use client"
import { cn } from "@/utils/utils";
import { ChevronsUpDown } from "lucide-react";
import * as React from 'react'
import { sizeIcon } from "../layout/Sidebar";
import { UseFormSetValue, UseFormTrigger } from "react-hook-form";

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
interface SelectProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    errors: any
    name: string
    setValue?: UseFormSetValue<any>
    trigger?: UseFormTrigger<any>
}
export const Select = React.forwardRef<HTMLDivElement, SelectProps>(({ setValue, trigger, className, children, errors, name }, ref) => {

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
        <div ref={ref} className={cn("bg-[#17151F] rounded-md focus:outline-none w-ful h-fit cursor-pointer relative",
            errors?.[name] && "border-[#E22259] border-2",
            className)}
            tabIndex={0}
            onBlur={() => isOpen && setIsOpen(false)}
        >
            {children}
        </div>
    </SelectContext.Provider>
})
Select.displayName = "Select"

// ===========================================
// 3. Disparador para abrir las opciones del `<Select />`
// ===========================================
interface SelectTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    placeholder: string
}
export const SelectTrigger = React.forwardRef<HTMLButtonElement, SelectTriggerProps>(({ className, name, placeholder, ...props }, ref) => {

    const { setIsOpen, isOpen, selected } = useSelectContext();

    return <button
        ref={ref}
        className={cn("px-6 py-3.5 pr-10 flex items-center text-[#87868B] font-light w-full relative",
            selected.value && "text-white font-normal",
            className)}
        type="button"
        onClick={() => setIsOpen && setIsOpen(!isOpen)}
        {...props}
    >
        <span>{selected.label || placeholder}</span>
        <ChevronsUpDown size={sizeIcon} className="text-[#87868B] absolute top-1/2 transform -translate-y-1/2 right-3" />

    </button>
})
SelectTrigger.displayName = "SelectTrigger"

// ===========================================
// 4. Contenedor para las opciones del `<Select />`
// ===========================================
interface SelectContentProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}
export const SelectContent = React.forwardRef<HTMLDivElement, SelectContentProps>(({ className, children, ...props }, ref) => {
    const { isOpen } = useSelectContext();

    if (!isOpen) return null;

    return <div ref={ref} className={cn("bg-[#17151F] absolute left-0 top-full z-50 mt-1 w-full flex flex-col p-1 rounded-md", className)} {...props}>
        {children}
    </div>
})
SelectContent.displayName = "SelectContent"

// ===========================================
// 5. Item de opciones para el `<Select />`
// ===========================================
export interface SelectItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: string
    value: string
}
export const SelectItem = React.forwardRef<HTMLButtonElement, SelectItemProps>(({ className, children, value, ...props }, ref) => {
    const { setSelected } = useSelectContext();
    return <button ref={ref} className={cn("px-3 py-2 w-full hover:bg-[#413932] rounded-md text-left", className)}
        type="button"
        onMouseDown={() => setSelected({ value, label: children })}
        {...props}
    >
        {children}
    </button>
})
SelectItem.displayName = "SelectItem"