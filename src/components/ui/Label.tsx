import { ReactNode } from "react"

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    children: ReactNode
}

export default function Label({ children, ...props }: LabelProps) {
    return (
        <label
            className="font-medium text-md p-2"
            {...props}
        >
            {children}
        </label>
    )
}
