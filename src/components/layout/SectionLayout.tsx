import { ReactNode } from "react"

interface SectionLayoutProps {
    titlePage: string
    children: ReactNode
}

export default function SectionLayout({ titlePage, children }: SectionLayoutProps) {
    return (
        <div className="w-full h-full flex flex-col gap-4 overflow-y-auto pr-5">
            <h1 className="font-extrabold text-xl text-left">{titlePage}</h1>
            {children}
        </div>
    )
}
