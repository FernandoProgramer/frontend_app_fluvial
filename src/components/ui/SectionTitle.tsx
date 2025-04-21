import { cn } from "@/utils/utils"
import { ReactNode } from "react"

interface SectionTitleProps {
    children: string
    className?: string
}

export default function SectionTitle({ className, children }: SectionTitleProps) {
    return <h1 className={cn("font-bold text-xl text-[#D06942] text-center flex", className)}>
        {children}
    </h1>

}
