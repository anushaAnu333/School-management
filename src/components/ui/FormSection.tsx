import React from 'react';

interface FormSectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export const FormSection: React.FC<FormSectionProps> = ({
  title,
  description,
  children,
  className = ''
}) => {
  return (
    <div className={`bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden ${className}`}>
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 px-8 py-8 text-white">
        <h2 className="text-3xl font-bold mb-3">
          {title}
        </h2>
        {description && (
          <p className="text-lg text-green-100">
            {description}
          </p>
        )}
      </div>
      <div className="p-8 bg-gray-50">
        {children}
      </div>
    </div>
  );
};
