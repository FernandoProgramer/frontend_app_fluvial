"use client"
import { cn } from "@/utils/utils"
import { CalendarDays, Eye, EyeClosed } from "lucide-react"
import { useState } from "react"
import { sizeIcon } from "../layout/Sidebar"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    register?: any,
    name: string,
    errors?: any,
}
export function Input({ errors, register, name, className, type = "text", ...props }: InputProps) {
    const [showPassword, setShowPassword] = useState(false)
    const iconMap: Record<string, React.ElementType | null> = {
        password: showPassword ? Eye : EyeClosed,
        date: CalendarDays,
    }
    const IconTypeInput = iconMap[type] || null;
    return <div className="flex flex-col w-full h-fit">
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
                type={type === "password" ? (showPassword ? "text" : "password") : type}
            />
            {IconTypeInput && <button
                type="button"
                className={cn(
                    "text-[#87868B] absolute top-1/2 transform -translate-y-1/2 right-3"
                    , type === "password" && "cursor-pointer"
                )}
                onClick={type === "password" ? () => setShowPassword(!showPassword) : undefined}
            >
                <IconTypeInput size={sizeIcon} />
            </button>}
        </div>
    </div>
}