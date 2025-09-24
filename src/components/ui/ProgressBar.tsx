interface ProgressBarProps {
  value: number;
  max?: number;
  label?: string;
  showPercentage?: boolean;
  color?: string;
  bgColor?: string;
  className?: string;
}

export default function ProgressBar({
  value,
  max = 100,
  label,
  showPercentage = true,
  color = "bg-green-500",
  bgColor = "bg-gray-200",
  className = ""
}: ProgressBarProps) {
  const percentage = Math.min((value / max) * 100, 100);

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-600">{label}</span>
          {showPercentage && (
            <span className="text-sm font-medium text-gray-900">
              {Math.round(percentage)}%
            </span>
          )}
        </div>
      )}
      <div className={`w-full ${bgColor} rounded-full h-2`}>
        <div
          className={`${color} h-2 rounded-full transition-all duration-300`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}


