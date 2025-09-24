import { ReactNode } from "react";

interface ChartCardProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  headerAction?: ReactNode;
}

export default function ChartCard({
  title,
  subtitle,
  children,
  className = "",
  headerAction
}: ChartCardProps) {
  return (
    <div className={`bg-white p-6 rounded-xl shadow-sm border border-gray-100 ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          {subtitle && (
            <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
          )}
        </div>
        {headerAction}
      </div>
      {children}
    </div>
  );
}


