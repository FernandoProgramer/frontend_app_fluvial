import { cn } from '@/utils/utils'
import { cva, VariantProps } from 'class-variance-authority'
import { ReactNode } from 'react'

export const buttonVariants = cva(
  "rounded-md text-md transition-all cursor-pointer gap-2 justify-center items-center text-center",
  {
    variants: {
      variant: {
        primary: "bg-indigo-600 hover:bg-indigo-700 text-white aria-selected:bg-indigo-600",
        secondary: "bg-slate-300 hover:bg-slate-400 text-black",
        success: "bg-emerald-500 hover:bg-emerald-600 text-white",
        destructive: "bg-rose-600 hover:bg-rose-700 text-white",
        outline: "border border-slate-400 text-black hover:bg-slate-300",
        ghost: "bg-transparent hover:bg-black/10 text-black",
        link: "hover:underline",
        disabled: "bg-gray-300 text-gray-500 !cursor-not-allowed !pointer-events-none"
      },
      size: {
        sm: "px-5 py-2 text-sm",
        md: "px-6 py-2 text-md",
        lg: "px-7 py-3 text-md"
      }
    },
    defaultVariants: {
      variant: "primary",
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
  return <button
    className={cn(buttonVariants({ variant, size }), className)} {...props}
  >
    {children}
  </button >
}