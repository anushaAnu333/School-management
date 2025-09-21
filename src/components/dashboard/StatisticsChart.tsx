import React from 'react';

export default function StatisticsChart() {
  const data = [
    { category: 'Electricity & Water', amount: 125000, percentage: 35, color: 'bg-green-600', strokeColor: '#16a34a' },
    { category: 'Repairs & Maintenance', amount: 75000, percentage: 21, color: 'bg-green-400', strokeColor: '#4ade80' },
    { category: 'Printing & Stationery', amount: 45000, percentage: 13, color: 'bg-blue-400', strokeColor: '#60a5fa' },
    { category: 'Transport Fuel', amount: 35000, percentage: 10, color: 'bg-orange-400', strokeColor: '#fb923c' },
    { category: 'Software Subscriptions', amount: 25000, percentage: 7, color: 'bg-purple-400', strokeColor: '#a78bfa' },
    { category: 'Audit & Legal Fees', amount: 20000, percentage: 6, color: 'bg-gray-400', strokeColor: '#9ca3af' },
    { category: 'Miscellaneous', amount: 15000, percentage: 4, color: 'bg-gray-400', strokeColor: '#9ca3af' },
    { category: 'PT/PF/GST', amount: 10000, percentage: 3, color: 'bg-gray-400', strokeColor: '#9ca3af' },
  ];

  const totalExpense = data.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="bg-white rounded-lg p-4 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 min-h-[200px] max-h-[500px]" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-1" style={{ lineHeight: '1.5' }}>School Expenses</h3>
          <p className="text-sm text-gray-500" style={{ lineHeight: '1.5' }}>Monthly expense breakdown by category</p>
        </div>
        <select className="px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white" style={{ lineHeight: '1.5' }}>
          <option className="text-gray-800">This Month</option>
          <option className="text-gray-800">Last Month</option>
        </select>
      </div>

      <div className="flex items-center justify-center mb-4">
        <div className="relative w-32 h-32">
          {/* Donut Chart */}
          <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="8"
            />
            {data.map((item, index) => {
              const circumference = 2 * Math.PI * 40;
              const strokeDasharray = `${(item.percentage / 100) * circumference} ${circumference}`;
              const strokeDashoffset = data.slice(0, index).reduce((acc, curr) => acc - (curr.percentage / 100) * circumference, 0);
              
              return (
                <circle
                  key={index}
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke={item.strokeColor}
                  strokeWidth="8"
                  strokeDasharray={strokeDasharray}
                  strokeDashoffset={strokeDashoffset}
                  className="transition-all duration-300"
                />
              );
            })}
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-sm text-gray-800">Total Expense ₹{totalExpense.toLocaleString()}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4 max-h-70 overflow-y-auto">
        {data.map((item, index) => (
          <div key={index} className="flex items-center justify-between py-3 px-3 rounded-xl hover:bg-gray-50 transition-colors duration-300 group">
            <div className="flex items-center space-x-4">
              <div className={`w-4 h-4 rounded-full ${item.color} flex-shrink-0 shadow-sm`}></div>
              <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">{item.category}</span>
            </div>
            <div className="text-right flex-shrink-0">
              <div className="text-sm font-bold text-gray-800"> ₹{item.amount.toLocaleString()}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
