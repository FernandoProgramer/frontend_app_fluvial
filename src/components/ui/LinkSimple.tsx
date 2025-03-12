import Link from "next/link";
import { ReactNode, ComponentPropsWithoutRef } from "react";

export interface LinkProps extends ComponentPropsWithoutRef<typeof Link> {
    children: ReactNode;
}

export default function LinkForms({ children, ...props }: LinkProps) {
    return (
        <Link
            className="font-bold text-blue-600 border-b transition duration-100 hover:text-blue-300"
            {...props}
        >
            {children}
        </Link>
    );
}
