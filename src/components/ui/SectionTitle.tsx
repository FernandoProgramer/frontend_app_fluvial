import { cn } from "@/utils/utils"

interface SectionTitleProps {
    children: string
    className?: string
}

export default function SectionTitle({ className, children }: SectionTitleProps) {
    return <h1 className={cn("font-bold text-xl text-center flex text-indigo-600", className)}>
        {children}
    </h1>

}
