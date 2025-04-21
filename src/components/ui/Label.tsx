import { cn } from "@/utils/utils"
import { ReactNode } from "react"

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    children: ReactNode
    className?: string
}

export function Label({ className, children, ...props }: LabelProps) {
    return <label className={cn("font-medium text-md text-black", className)} {...props}>
        {children}
    </label>

}

