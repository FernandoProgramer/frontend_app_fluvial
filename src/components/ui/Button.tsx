import { cn } from '@/utils/utils'
import { cva, VariantProps } from 'class-variance-authority'
import { ReactNode } from 'react'

const buttonVariants = cva(
  "rounded-md text-md transition-all cursor-pointer gap-2 justify-center text-center items-center",
  {
    variants: {
      variant: {
        default: "bg-[#D06942] hover:bg-[#cd3700]",
        destructive: "bg-[#E22259] hover:bg-[#6A1435]",
        success: "bg-[#6dc723] hover:bg-[#437d13]",
        secondary: "bg-[#692FEE] hover:bg-[#4b23a8]",
        light: "bg-gray-200 text-[#0A0F14] hover:bg-gray-400",
        outline: "border-2 border-[#D06942] text-[#D06942] hover:bg-[#D06942] hover:text-white",
        "outline-destructive": "border-2 text-[#E22259] border-[#E22259] hover:bg-[#E22259] hover:text-white",
        "outline-secondary": "border-2 text-[#692FEE] border-[#692FEE] hover:bg-[#692FEE] hover:text-white",
        "outline-light": "border-2 text-gray-200 border-gray-200 hover:bg-gray-200 hover:text-[#0A0F14]",
      },
      size: {
        sm: "px-5 py-2 text-sm",
        md: "px-6 py-2 text-md",
        lg: "px-7 py-3 text-md"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  children: ReactNode,
  className?: string,
}

export default function Button({ variant, size, children, className, ...props }: ButtonProps) {
  return <button className={cn(buttonVariants({ variant, size }), className)} {...props}>
    {children}
  </button >
}