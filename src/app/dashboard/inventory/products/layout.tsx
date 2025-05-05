import SectionLayout from '@/components/layout/SectionLayout'
import React, { ReactNode } from 'react'

export default function ProductsLayout({children}: {children: ReactNode}) {
    return <SectionLayout titlePage="PRODUCTOS">
        {children}
    </SectionLayout>
}
