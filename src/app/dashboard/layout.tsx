import Sidebar from '@/components/layout/Sidebar'
import { outfit } from '@/fonts'
import { ReactNode } from 'react'

export default function DashboardLayout({ children }: { children: ReactNode }) {
    return (
        <div className={`${outfit.className} flex w-full h-screen bg-[#0A0F14]`}>
            <Sidebar />
            <div className="p-4 max-w-full flex-1">
                {children}
            </div>
        </div>
    )
}
