import React from 'react';
import { UseFormRegister, FieldError } from 'react-hook-form';

interface FormFileUploadProps {
  label: string;
  name: string;
  accept?: string;
  required?: boolean;
  register: UseFormRegister<Record<string, unknown>>;
  error?: FieldError;
  className?: string;
}

export const FormFileUpload: React.FC<FormFileUploadProps> = ({
  label,
  name,
  accept = "*",
  required = false,
  register,
  error,
  className = ''
}) => {
  return (
    <div className={`space-y-2 ${className}`}>
      <label className="form-label">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type="file"
        accept={accept}
        className={`form-file ${className}`}
        {...register(name, { 
          required: required ? `${label} is required` : false
        })}
      />
      {error && (
        <p className="text-sm text-red-600 mt-1">{error.message}</p>
      )}
    </div>
  );
};
