import HeaderLading from '@/components/layout/HeaderLading'
import React, { ReactNode } from 'react'
import './globals.css'

export const metadata = {
  title: "Lading Page - Home Page"
}

export default function RootLayour({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        <HeaderLading />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
