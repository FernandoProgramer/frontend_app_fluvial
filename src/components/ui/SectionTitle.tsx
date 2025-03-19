import { ReactNode } from "react"

interface SectionTitleProps {
    children: ReactNode
    className?: string
}

export default function SectionTitle({ className, children }: SectionTitleProps) {
    return <h1 className={`font-bold text-lg text-[#D06942] ${className}`}>
        {children}
    </h1>

}
