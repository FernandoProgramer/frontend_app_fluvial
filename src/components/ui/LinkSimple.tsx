import Link from "next/link";
import { ReactNode, ComponentPropsWithoutRef } from "react";

export interface LinkProps extends ComponentPropsWithoutRef<typeof Link> {
    children: ReactNode
    className?: string
}

export default function LinkForms({ className, children, ...props }: LinkProps) {
    return (
        <Link
            className={`font-bold text-[#D06942] border-b border-[#D06942] transition duration-100 hover:text-[#cd3700] hover:border-[#cd3700] ${className}`}
            {...props}
        >
            {children}
        </Link>
    );
}
