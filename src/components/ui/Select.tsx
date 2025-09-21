import { SelectHTMLAttributes, forwardRef, ReactNode, useId } from "react"
import { cn } from "@/lib/utils"

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  label?: string
  error?: string
  helperText?: string
  leftIcon?: ReactNode
  size?: "sm" | "md" | "lg"
  options: { value: string; label: string }[]
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ 
    className, 
    label, 
    error, 
    helperText, 
    leftIcon, 
    size = "md",
    options,
    id,
    ...props 
  }, ref) => {
    const generatedId = useId()
    const fieldId = id || generatedId
    
    const sizes = {
      sm: "h-8 px-3 text-sm",
      md: "h-12 px-3 text-sm", // Increased height for floating label
      lg: "h-14 px-4 text-base"
    }

    const iconSizes = {
      sm: "w-4 h-4",
      md: "w-4 h-4",
      lg: "w-5 h-5"
    }

    const paddingLeft = leftIcon ? "pl-9" : "pl-3"

    const handleFocus = (e: React.FocusEvent<HTMLSelectElement>) => {
      props.onFocus?.(e)
    }

    const handleBlur = (e: React.FocusEvent<HTMLSelectElement>) => {
      props.onBlur?.(e)
    }

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      props.onChange?.(e)
    }

    return (
      <div className="space-y-1">
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-10">
              <div className={iconSizes[size]}>{leftIcon}</div>
            </div>
          )}
          
          <select
            id={fieldId}
            className={cn(
              "w-full border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none bg-white text-gray-900",
              sizes[size],
              paddingLeft,
              "pr-8 pt-4", // Add top padding for floating label
              error
                ? "border-red-300 focus:ring-red-500"
                : "border-gray-300",
              className
            )}
            ref={ref}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            {...props}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          
          {label && (
            <label
              htmlFor={fieldId}
              className={cn(
                "absolute left-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-500",
                leftIcon && "left-9"
              )}
            >
              {label}
            </label>
          )}
          
          {/* Custom dropdown arrow */}
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        
        {error && (
          <p className="text-sm text-red-600">{error}</p>
        )}
        
        {helperText && !error && (
          <p className="text-sm text-gray-500">{helperText}</p>
        )}
      </div>
    )
  }
)

Select.displayName = "Select"

export { Select }
