import { HTMLAttributes, forwardRef } from "react"
import { cn } from "@/lib/utils"

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6
  variant?: "default" | "muted" | "accent"
}

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  variant?: "default" | "muted" | "small" | "large"
  weight?: "normal" | "medium" | "semibold" | "bold"
}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level = 1, variant = "default", children, ...props }, ref) => {
    const baseStyles = "font-bold"
    
    const variants = {
      default: "text-gray-900",
      muted: "text-gray-600",
      accent: "text-green-600"
    }
    
    const levels = {
      1: "text-3xl",
      2: "text-2xl",
      3: "text-xl",
      4: "text-lg",
      5: "text-base",
      6: "text-sm"
    }

    const combinedClassName = cn(
      baseStyles,
      variants[variant],
      levels[level],
      className
    )

    switch (level) {
      case 1:
        return <h1 className={combinedClassName} ref={ref} {...props}>{children}</h1>
      case 2:
        return <h2 className={combinedClassName} ref={ref} {...props}>{children}</h2>
      case 3:
        return <h3 className={combinedClassName} ref={ref} {...props}>{children}</h3>
      case 4:
        return <h4 className={combinedClassName} ref={ref} {...props}>{children}</h4>
      case 5:
        return <h5 className={combinedClassName} ref={ref} {...props}>{children}</h5>
      case 6:
        return <h6 className={combinedClassName} ref={ref} {...props}>{children}</h6>
      default:
        return <h1 className={combinedClassName} ref={ref} {...props}>{children}</h1>
    }
  }
)

Heading.displayName = "Heading"

const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, variant = "default", weight = "normal", children, ...props }, ref) => {
    const baseStyles = "leading-relaxed"
    
    const variants = {
      default: "text-gray-700",
      muted: "text-gray-500",
      small: "text-sm text-gray-600",
      large: "text-lg text-gray-700"
    }
    
    const weights = {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold"
    }

    return (
      <p
        className={cn(
          baseStyles,
          variants[variant],
          weights[weight],
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </p>
    )
  }
)

Text.displayName = "Text"

export { Heading, Text }

