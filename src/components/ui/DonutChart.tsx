import { useEffect, useRef } from "react";

interface DonutChartProps {
  data: Array<{
    label: string;
    value: number;
    color: string;
  }>;
  size?: number;
  strokeWidth?: number;
  className?: string;
}

export default function DonutChart({
  data,
  size = 120,
  strokeWidth = 20,
  className = ""
}: DonutChartProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    if (!svgRef.current) return;

    const total = data.reduce((sum, item) => sum + item.value, 0);
    let cumulativePercentage = 0;

    data.forEach((item, index) => {
      const percentage = (item.value / total) * 100;
      const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`;
      const strokeDashoffset = -cumulativePercentage * circumference / 100;

      const path = svgRef.current?.querySelector(`#segment-${index}`) as SVGPathElement;
      if (path) {
        path.style.strokeDasharray = strokeDasharray;
        path.style.strokeDashoffset = strokeDashoffset.toString();
      }

      cumulativePercentage += percentage;
    });
  }, [data, circumference]);

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <svg
        ref={svgRef}
        width={size}
        height={size}
        className="transform -rotate-90"
      >
        {data.map((item, index) => (
          <circle
            key={index}
            id={`segment-${index}`}
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={item.color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-in-out"
            style={{
              strokeDasharray: `0 ${circumference}`,
              strokeDashoffset: 0
            }}
          />
        ))}
      </svg>
      
      <div className="mt-4 space-y-2">
        {data.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div 
              className="w-3 h-3 rounded-full" 
              style={{ backgroundColor: item.color }}
            />
            <span className="text-sm text-gray-600">{item.label}</span>
            <span className="text-sm font-medium text-gray-900">
              {item.value}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}


