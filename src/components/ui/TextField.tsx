import { InputHTMLAttributes, forwardRef, ReactNode, useId } from "react"
import { cn } from "@/lib/utils"

export interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string
  error?: string
  helperText?: string
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  onRightIconClick?: () => void
  size?: "sm" | "md" | "lg"
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ 
    className, 
    type = "text", 
    label, 
    error, 
    helperText, 
    leftIcon, 
    rightIcon, 
    onRightIconClick,
    size = "md",
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
    const paddingRight = rightIcon ? "pr-9" : "pr-3"

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      props.onFocus?.(e)
    }

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      props.onBlur?.(e)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      props.onChange?.(e)
    }

    const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
      props.onInput?.(e)
    }

    return (
      <div className="space-y-2">
        {label && (
          <label
            htmlFor={fieldId}
            className="block text-sm font-medium text-gray-700"
          >
            {label}
          </label>
        )}
        
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-10">
              <div className={iconSizes[size]}>{leftIcon}</div>
            </div>
          )}
          
          <input
            id={fieldId}
            type={type}
            className={cn(
              "w-full border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 text-gray-900 placeholder-gray-400 bg-white",
              sizes[size],
              paddingLeft,
              paddingRight,
              error
                ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                : "border-gray-300 focus:ring-green-500 focus:border-green-500",
              className
            )}
            ref={ref}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            onInput={handleInput}
            {...props}
          />
          
          {error && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          )}
          
          {rightIcon && !error && (
            <button
              type="button"
              onClick={onRightIconClick}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 z-10"
            >
              <div className={iconSizes[size]}>{rightIcon}</div>
            </button>
          )}
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

TextField.displayName = "TextField"

export { TextField }
