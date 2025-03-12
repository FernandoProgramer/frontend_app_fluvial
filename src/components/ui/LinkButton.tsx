import Link from "next/link";
import { LinkProps } from "./LinkSimple";

export default function LinkButton({ children, ...props }: LinkProps) {
    return (
        <Link
            className="p-2 border rounded-md"
            {...props}
        >
            {children}
        </Link>
    )
}

