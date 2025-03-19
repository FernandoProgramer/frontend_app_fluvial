import { ReactNode } from 'react'
import './globals.css'
import { Noto_Sans } from 'next/font/google'
import { Toaster } from 'sonner'
import { CircleCheckBig, CircleX, Info, TriangleAlert } from 'lucide-react'

export const metadata = {
  title: "Lading Page - Home Page"
}

const notoSans = Noto_Sans({
  subsets: ["latin"]
})

export default function RootLayour({ children }: { children: ReactNode }) {
  return (
    <html>
      <body className={notoSans.className}>
        {children}
        <Toaster
          icons={{
            success: <CircleCheckBig />,
            info: <Info />,
            warning: <TriangleAlert />,
            error: <CircleX />,
          }} />
      </body>
    </html>
  )
}
