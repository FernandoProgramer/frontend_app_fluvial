import Sidebar from '@/components/layout/Sidebar'
import { outfit } from '@/theme/fonts'
import { cn } from '@/utils/utils'
import { ReactNode } from 'react'

export const metadata = {
    title: "Dashboard | Home"
}

export default function DashboardLayout({ children }: { children: ReactNode }) {
    return (
        <div className={cn("flex w-full h-screen bg-[#0A0F14] overflow-hidden", outfit.className)}>
            <Sidebar />
            <section className="p-4 flex-1 overflow-hidden">
                {children}
            </section>
        </div>
    )
}
