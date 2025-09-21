import { HTMLAttributes, forwardRef } from "react"
import { cn } from "@/lib/utils"

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outlined" | "elevated"
  padding?: "none" | "sm" | "md" | "lg"
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", padding = "md", children, ...props }, ref) => {
    const baseStyles = "rounded-lg"
    
    const variants = {
      default: "bg-white",
      outlined: "bg-white border border-gray-200",
      elevated: "bg-white shadow-lg"
    }
    
    const paddings = {
      none: "",
      sm: "p-4",
      md: "p-6",
      lg: "p-8"
    }

    return (
      <div
        className={cn(
          baseStyles,
          variants[variant],
          paddings[padding],
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = "Card"

export { Card }

