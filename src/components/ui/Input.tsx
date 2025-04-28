"use client"
import { cn } from "@/utils/utils"
import { CalendarDays, Eye, EyeClosed, Search } from "lucide-react"
import React, { useState } from "react"
import { propsIcons } from "../layout/Sidebar"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    register?: any,
    name: string,
    errors?: any,
}
export function Input({ value, errors, register, name, className, type = "text", ...props }: InputProps) {
    const [showPassword, setShowPassword] = useState(false)
    const iconMap: Record<string, React.ElementType | null> = {
        password: showPassword ? Eye : EyeClosed,
        date: CalendarDays,
        search: Search
    }
    const IconTypeInput = iconMap[type] || null;

    return <div className="flex flex-col w-full h-fit">
        <div className={cn("bg-white dark:bg-transparent dark:text-amber-600 border border-slate-300 overflow-hidden rounded-md w-full h-full flex items-center relative",
            errors && errors[name] && "border-rose-600 border",
            className
        )}>
            <input
                className={cn(
                    "px-6 py-4 focus:outline placeholder:text-slate-400 placeholder:font-light w-full h-full",
                    IconTypeInput && "pr-10",
                    type === "date" && "py-3.5",
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

                {IconTypeInput && <IconTypeInput {...propsIcons} />}
                {/* {type === "date"
                    ? <>
                        <Popover>
                            <PopoverTrigger asChild>
                                <IconTypeInput {...propsIcons} />
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <Calendar
                                    mode="single"
                                    // selected={date}
                                    // onSelect={setDate}
                                    initialFocus
                                />
                            </PopoverContent>

                        </Popover>
                    </>

                    : <IconTypeInput {...propsIcons} />
                } */}
            </button>}
        </div>
    </div>
}