import { ReactNode } from "react"

interface SectionLayoutProps {
    titlePage: string
    children: ReactNode
}

export default function SectionLayout({ titlePage, children }: SectionLayoutProps) {
    return <div className="w-full h-full flex flex-col relative z-50">
        <div className="sticky top-0 z-70">
            <h1 className="font-extrabold text-xl text-left w-full z-90 relative ps-4">{titlePage}</h1>
            <div className="w-full h-10 bg-white/20 backdrop-blur-sm z-80 absolute top-0"></div>
        </div>

        <div className="flex-1 w-full overflow-y-auto space-y-4 z-0 h-screen py-4 px-4">
            {children}
        </div>
    </div>
}
