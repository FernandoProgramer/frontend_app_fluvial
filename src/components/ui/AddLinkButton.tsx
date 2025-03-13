import Link from 'next/link'
import React, { ReactNode } from 'react'

interface AddLinkButtonProps {
    children: ReactNode,
    className?: string,
    link: string
}

export default function AddLinkButton({ children, className, link }: AddLinkButtonProps) {
    return (
        <Link
            className={`p-2 rounded-md ${className}`}
            href={link}
        >
            {children}
        </Link>
    )
}
