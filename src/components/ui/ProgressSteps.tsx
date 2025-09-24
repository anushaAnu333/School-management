import React from 'react';

interface Step {
  id: string;
  title: string;
  description: string;
}

interface ProgressStepsProps {
  steps: Step[];
  currentStep: string;
  onStepClick: (stepId: string) => void;
}

export const ProgressSteps: React.FC<ProgressStepsProps> = ({
  steps,
  currentStep,
  onStepClick
}) => {
  const getCurrentStepIndex = () => {
    return steps.findIndex(s => s.id === currentStep);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 mb-8">
      <div className="flex items-center justify-center overflow-x-auto">
        <div className="flex items-center space-x-0 min-w-max">
          {steps.map((step, index) => {
            const isCompleted = index < getCurrentStepIndex();
            const isCurrent = step.id === currentStep;
            
            return (
              <div key={step.id} className="flex items-center">
                {/* Step Circle and Content */}
                <div className="flex flex-col items-center">
                  <button
                    onClick={() => onStepClick(step.id)}
                    className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center text-lg font-bold transition-all duration-300 shadow-lg ${
                      isCurrent
                        ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white scale-110 shadow-green-200'
                        : isCompleted
                        ? 'bg-gradient-to-r from-green-600 to-emerald-700 text-white scale-105 shadow-green-200'
                        : 'bg-gray-200 text-gray-500 hover:bg-gray-300 hover:scale-105'
                    }`}
                  >
                    {isCompleted ? '✓' : index + 1}
                  </button>
                  <div className="mt-4 text-center max-w-28">
                    <div className={`text-xs font-bold ${
                      isCurrent ? 'text-green-600' : isCompleted ? 'text-green-600' : 'text-gray-400'
                    }`}>
                      Step {index + 1}
                    </div>
                    <div className={`text-sm font-semibold mt-1 leading-tight ${
                      isCurrent ? 'text-gray-900' : isCompleted ? 'text-gray-700' : 'text-gray-500'
                    }`}>
                      {step.title}
                    </div>
                  </div>
                </div>
                
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="flex-1 mx-8">
                    <div className={`h-3 rounded-full transition-all duration-500 ${
                      isCompleted 
                        ? 'bg-gradient-to-r from-green-500 to-emerald-600 shadow-sm' 
                        : 'bg-gray-200'
                    }`} style={{ width: '100px' }}></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
