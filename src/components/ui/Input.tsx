"use client"
import { cn } from "@/utils/utils"
import { CalendarDays, Eye, EyeClosed } from "lucide-react"
import { useState } from "react"
import { sizeIcon } from "../layout/Sidebar"

interface InputProps extends React.HTMLAttributes<HTMLDivElement> {
    register?: any,
    name: string,
    errors?: any,
    typeInput?: "text" | "password" | "email"
}
export function Input({ typeInput = "text", errors, register, name, className, ...props }: InputProps) {
    const [showPassword, setShowPassword] = useState(false)
    const iconMap: Record<string, React.ElementType | null> = {
        password: showPassword ? Eye : EyeClosed,
        date: CalendarDays,
    }
    const IconTypeInput = iconMap[typeInput] || null;
    return <div className="flex flex-col w-full">
        <div className={cn("bg-[#17151F] overflow-hidden rounded-md w-full h-full flex items-center relative",
            errors && errors[name] && "border-[#E22259] border-2",
            className
        )}>
            <input
                className={cn(
                    "px-6 py-4 focus:outline-none placeholder:text-[#87868B] placeholder:font-light w-full h-full",
                    IconTypeInput && "pr-10",
                )}
                id={name}
                {...props}
                {...(register && register(name))}
                type={typeInput === "password" ? (showPassword ? "text" : "password") : typeInput}
            />
            {IconTypeInput && <button
                type="button"
                className={cn(
                    "text-[#87868B] absolute top-1/2 transform -translate-y-1/2 right-3"
                    , typeInput === "password" && "cursor-pointer"
                )}
                onClick={typeInput === "password" ? () => setShowPassword(!showPassword) : undefined}
            >
                <IconTypeInput size={sizeIcon} />
            </button>}
        </div>
    </div>
}