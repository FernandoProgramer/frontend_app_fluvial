import { ReactNode } from 'react'
import './globals.css'
import { Noto_Sans } from 'next/font/google'

export const metadata = {
  title: "Lading Page - Home Page"
}

const notoSans = Noto_Sans({
  subsets: ["latin"]
})

export default function RootLayour({ children }: { children: ReactNode }) {
  return (
    <html>
      <body className={notoSans.className}>{children}</body>
    </html>
  )
}
