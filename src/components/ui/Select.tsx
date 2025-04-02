"use client"
import { cn } from "@/utils/utils";
import { ChevronsUpDown } from "lucide-react";
import React, { ReactNode, useState } from "react";
import { sizeIcon } from "../layout/Sidebar";
import { UseFormSetValue } from "react-hook-form";
import validateChildren from "@/utils/validateChildren";

export interface SelectItemProps {
    toggleSelected?: (option: { value: string, label: string }) => void
    value: string
    children: ReactNode
}
export function SelectItem({ toggleSelected, children, value }: SelectItemProps) {
    return <button className="px-3 py-2 w-full hover:bg-[#413932] rounded-md text-left" type="button" onMouseDown={() => toggleSelected && toggleSelected({ label: children as string, value })}>{children}</button>
}

interface SelectProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactElement<SelectItemProps>[],
    name: string
    errors?: any
    setValue: UseFormSetValue<any>
    trigger: any
}
export function Select({ trigger, errors, name, className, setValue, children, ...props }: SelectProps) {

    validateChildren(children, SelectItem)

    const [selected, setSelected] = useState<Record<string, string>>({ Label: "", value: "" });
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleSelected = ({ label, value }: { label: string, value: string }): void => {
        setIsOpen(false);
        setValue(name, value);
        trigger(name);
        setSelected({ label, value });
    };

    return <div tabIndex={0} onBlur={() => isOpen && setIsOpen(!isOpen)} className={cn("bg-[#17151F] rounded-md focus:outline-none w-full h-fit cursor-pointer relative",
        errors?.[name] && "border-[#E22259] border-2",
        className)} {...props}>
        <div className="px-6 py-3.5 pr-10 flex items-center text-[#87868B] font-light w-full relative" onClick={() => setIsOpen(!isOpen)}>
            <span className={cn("text-[#87868B] font-light w-full h-full",
                selected.value && "text-white font-normal"
            )}>
                {selected.label || "Selecione"}
            </span>
            <ChevronsUpDown size={sizeIcon} className="text-[#87868B] absolute top-1/2 transform -translate-y-1/2 right-3" />
        </div>
        {isOpen && <div className="bg-[#17151F] absolute left-0 top-full z-50 mt-1 w-full flex flex-col p-1 rounded-md">
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child) && child.type === SelectItem) {
                    return React.cloneElement(child as React.ReactElement<SelectItemProps>, { toggleSelected });
                }
                return child
            })}
        </div>}
    </div>
}