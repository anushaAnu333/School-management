import React from 'react';
import { UseFormRegister, FieldError } from 'react-hook-form';

interface SelectOption {
  value: string;
  label: string;
}

interface FormSelectProps {
  label: string;
  name: string;
  options: SelectOption[];
  required?: boolean;
  register: UseFormRegister<Record<string, unknown>>;
  error?: FieldError;
  className?: string;
}

export const FormSelect: React.FC<FormSelectProps> = ({
  label,
  name,
  options,
  required = false,
  register,
  error,
  className = ''
}) => {
  return (
    <div className="space-y-2">
      <label className="form-label">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        className={`form-select ${className}`}
        {...register(name, { 
          required: required ? `${label} is required` : false
        })}
      >
        <option value="">Select {label}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="text-sm text-red-600 mt-1">{error.message}</p>
      )}
    </div>
  );
};
