import ProgressBar from "./ProgressBar";

interface SavingPlan {
  id: string;
  name: string;
  current: number;
  target: number;
  percentage: number;
}

interface SavingPlanCardProps {
  plans: SavingPlan[];
  title: string;
  totalSavings: string;
  className?: string;
  onAddPlan?: () => void;
}

export default function SavingPlanCard({
  plans,
  title,
  totalSavings,
  className = "",
  onAddPlan
}: SavingPlanCardProps) {
  return (
    <div className={`bg-white p-6 rounded-xl shadow-sm border border-gray-100 ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <button
          onClick={onAddPlan}
          className="text-sm font-medium text-green-600 hover:text-green-700"
        >
          + Add Plan
        </button>
      </div>
      
      <div className="mb-6">
        <p className="text-2xl font-bold text-gray-900">{totalSavings}</p>
        <p className="text-sm text-gray-500">Total Savings</p>
      </div>
      
      <div className="space-y-4">
        {plans.map((plan) => (
          <div key={plan.id} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-900">{plan.name}</span>
              <span className="text-sm text-gray-500">
                ${plan.current.toLocaleString()} {plan.percentage}%
              </span>
            </div>
            <ProgressBar
              value={plan.percentage}
              color="bg-green-500"
              bgColor="bg-gray-200"
            />
            <p className="text-xs text-gray-500">
              Target: ${plan.target.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

