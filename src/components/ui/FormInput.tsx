import React from 'react';
import { UseFormRegister, FieldError } from 'react-hook-form';

interface FormInputProps {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'tel' | 'date' | 'number' | 'password';
  placeholder?: string;
  required?: boolean;
  pattern?: string;
  maxLength?: number;
  register: UseFormRegister<Record<string, unknown>>;
  error?: FieldError;
  className?: string;
  style?: React.CSSProperties;
  onBlur?: () => void;
}

export const FormInput: React.FC<FormInputProps> = ({
  label,
  name,
  type = 'text',
  placeholder,
  required = false,
  pattern,
  maxLength,
  register,
  error,
  className = '',
  style,
  onBlur
}) => {
  return (
    <div className="space-y-2">
      <label className="form-label">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        maxLength={maxLength}
        style={style}
        className={`form-input ${className}`}
        {...register(name, { 
          required: required ? `${label} is required` : false,
          pattern: pattern ? { value: new RegExp(pattern), message: `Invalid ${label.toLowerCase()}` } : undefined
        })}
        onBlur={onBlur}
      />
      {error && (
        <p className="text-sm text-red-600 mt-1">{error.message}</p>
      )}
    </div>
  );
};
