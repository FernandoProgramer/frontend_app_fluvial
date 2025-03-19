import Sidebar from '@/components/layout/Sidebar'
import { outfit } from '@/fonts'
import { ReactNode } from 'react'

export const metadata = {
    title: "Dashboard | Home"
}

export default function DashboardLayout({ children }: { children: ReactNode }) {
    return (
        <div className={`${outfit.className} flex w-full h-screen bg-[#0A0F14]`}>
            <Sidebar />
            <section className="p-4 max-w-full flex-1 overflow-y-auto">
                {children}
            </section>
        </div>
    )
}
