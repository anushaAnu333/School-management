import React from 'react';

export default function SavingPlans() {
  const plans = [
    {
      name: 'Class 10',
      current: 120,
      target: 150,
      percentage: 80,
    },
    {
      name: 'Class 12',
      current: 95,
      target: 120,
      percentage: 79,
    },
    {
      name: 'Class 9',
      current: 110,
      target: 140,
      percentage: 78,
    },
    {
      name: 'Class 11',
      current: 105,
      target: 130,
      percentage: 81,
    },
    {
      name: 'Class 8',
      current: 125,
      target: 150,
      percentage: 83,
    },
    {
      name: 'Class 7',
      current: 130,
      target: 160,
      percentage: 81,
    },
    {
      name: 'Class 6',
      current: 140,
      target: 170,
      percentage: 82,
    },
    {
      name: 'Class 5',
      current: 135,
      target: 165,
      percentage: 82,
    },
    {
      name: 'Class 4',
      current: 125,
      target: 155,
      percentage: 81,
    },
    {
      name: 'Class 3',
      current: 120,
      target: 150,
      percentage: 80,
    },
    {
      name: 'Class 2',
      current: 115,
      target: 145,
      percentage: 79,
    },
    {
      name: 'Class 1',
      current: 110,
      target: 140,
      percentage: 79,
    },
  ];

  // Calculate actual total from all classes
  const calculatedTotal = plans.reduce((sum, plan) => sum + plan.current, 0);

  return (
    <div className="bg-white rounded-lg p-3 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 min-h-320px]" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
      <div className="flex items-center justify-between mb-3">
        <div>
        <h3 className="text-base font-bold text-gray-800 mb-1" style={{ lineHeight: '1.5' }}>Class-wise Enrollment</h3>
        <p className="text-xs text-gray-500" style={{ lineHeight: '1.5' }}>Student distribution across classes</p>
        </div>
        <button className="bg-green-500 text-white px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-green-600 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
          Manage Classes
        </button>
      </div>
      
      <div className="mb-3 p-2 bg-gradient-to-r from-green-50 to-teal-50 rounded-lg border border-green-100">
        <div className="text-xs font-medium text-gray-600 mb-1" style={{ lineHeight: '1.5' }}>Total Students</div>
        <div className="text-xl font-bold text-green-600" style={{ lineHeight: '1.5' }}>{calculatedTotal.toLocaleString()}</div>
        <div className="text-xs text-gray-500 mt-1" style={{ lineHeight: '1.5' }}>Across all classes</div>
      </div>

      <div className="max-h-110 overflow-y-auto">
        <div className="space-y-2">
          {plans.map((plan, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-2 hover:border-green-200 hover:shadow-md transition-all duration-300 group bg-gray-50" style={{ height: '60px', minHeight: '60px' }}>
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-semibold text-gray-800 text-sm" style={{ lineHeight: '1.5' }}>{plan.name}</h4>
                <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full border border-green-200">{plan.percentage}%</span>
              </div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-bold text-green-600" style={{ lineHeight: '1.5' }}>
                  {plan.current} Students
                </span>
                <span className="text-xs text-gray-500 font-medium" style={{ lineHeight: '1.5' }}>
                  Capacity: {plan.target}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5 shadow-inner">
                <div
                  className="bg-gradient-to-r from-green-400 to-green-500 h-1.5 rounded-full transition-all duration-500 shadow-sm"
                  style={{ width: `${plan.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
