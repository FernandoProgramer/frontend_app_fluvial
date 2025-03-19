import { ReactNode } from "react"

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    children: ReactNode
    className?: string
}

export function Label({ className, children, ...props }: LabelProps) {
    return <label className={`font-medium text-md p-2 ${className}`} {...props}>
        {children}
    </label>

}

export function LabelForm({ className, children, ...props }: LabelProps) {
    return <label className={`font-medium text-sm text-gray-400 ${className}`} {...props}>
        {children}
    </label>

}
