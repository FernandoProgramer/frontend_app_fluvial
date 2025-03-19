import Link from "next/link";
import { LinkProps } from "./LinkSimple";


export default function LinkButton({ className, children, ...props }: LinkProps) {
    return (
        <Link
            className={`p-2 rounded-md ${className}`}
            {...props}
        >
            {children}
        </Link>
    )
}

