import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  change?: {
    value: string;
    type: 'increase' | 'decrease';
  };
  icon?: LucideIcon;
  iconColor?: string;
  iconBg?: string;
  className?: string;
}

export default function StatCard({
  title,
  value,
  change,
  icon: Icon,
  iconColor = "text-green-600",
  iconBg = "bg-green-100",
  className = ""
}: StatCardProps) {
  return (
    <div className={`bg-white p-6 rounded-xl shadow-sm border border-gray-100 ${className}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {Icon && (
            <div className={`p-3 ${iconBg} rounded-lg`}>
              <Icon className={`h-6 w-6 ${iconColor}`} />
            </div>
          )}
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-600">{title}</p>
            <p className="text-2xl font-bold text-gray-900">{value}</p>
          </div>
        </div>
        {change && (
          <div className={`flex items-center ${change.type === 'increase' ? 'text-green-600' : 'text-red-600'}`}>
            {change.type === 'increase' ? (
              <TrendingUp className="w-4 h-4 mr-1" />
            ) : (
              <TrendingDown className="w-4 h-4 mr-1" />
            )}
            <span className="text-sm font-medium">{change.value}</span>
          </div>
        )}
      </div>
    </div>
  );
}


