import React from 'react';
import { UseFormRegister, FieldError } from 'react-hook-form';

interface FormCheckboxProps {
  label: string;
  name: string;
  register: UseFormRegister<Record<string, unknown>>;
  error?: FieldError;
  className?: string;
}

export const FormCheckbox: React.FC<FormCheckboxProps> = ({
  label,
  name,
  register,
  error,
  className = ''
}) => {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <input
        type="checkbox"
        className={`form-checkbox ${error ? 'border-red-300' : ''}`}
        {...register(name)}
      />
      <label className="text-sm font-medium text-gray-700">
        {label}
      </label>
      {error && (
        <p className="text-sm text-red-600 mt-1">{error.message}</p>
      )}
    </div>
  );
};
