import Sidebar from '@/components/layout/Sidebar'
import { ReactNode } from 'react'



export default function DashboardLayout({ children }: { children: ReactNode }) {
    return (
        <div className="flex w-full h-screen bg-[#0A0F14]">
            <Sidebar />
            <div className="p-2 max-w-full flex-1">
                {children}
            </div>
        </div>
    )
}
