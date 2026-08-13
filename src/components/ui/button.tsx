import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "default" | "sm" | "lg" | "icon"
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", asChild = false, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-bold transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-[var(--honda-red)] text-white hover:bg-[var(--honda-red-hover)]": variant === "primary",
            "bg-zinc-900 text-white hover:bg-zinc-800": variant === "secondary",
            "border border-zinc-200 bg-white hover:bg-zinc-100": variant === "outline",
            "hover:bg-zinc-100 text-zinc-900": variant === "ghost",
            "h-10 px-6 py-2": size === "default",
            "h-8 rounded-md px-4 text-xs": size === "sm",
            "h-12 rounded-md px-8 text-base": size === "lg",
            "h-10 w-10": size === "icon",
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
