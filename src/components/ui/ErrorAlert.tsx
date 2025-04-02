import { cn } from "@/utils/utils"
import React, { HTMLAttributes, ReactNode } from "react"

interface ErrorAlertProps extends HTMLAttributes<HTMLSpanElement> {
    children?: string
}
export default function ErrorAlert({ children, className, ...props }: ErrorAlertProps) {

    return (
        <span className={cn("text-[#E22259]", className)} {...props}>
            {children}
        </span>
    )
}
