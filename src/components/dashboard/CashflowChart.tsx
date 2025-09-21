import React from 'react';

export default function CashflowChart() {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const feeCollectionData = [450000, 520000, 480000, 650000, 580000, 550000, 720000, 780000, 680000, 620000, 580000, 520000];
  const expenseData = [250000, 300000, 280000, 350000, 320000, 300000, 400000, 420000, 380000, 350000, 320000, 280000];
  const maxValue = Math.max(...feeCollectionData, ...expenseData);

  return (
    <div className="bg-white rounded-lg p-3 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 h-[570px] flex flex-col w-full" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.1)'}}>
      <div className="flex items-center justify-between mb-3">
        <div>
          <h3 className="text-base font-bold text-gray-800 mb-1" style={{ lineHeight: '1.5' }}>School Cashflow</h3>
          <p className="text-xs text-gray-500" style={{ lineHeight: '1.5' }}>Fee Collection vs Expenses</p>
        </div>
        <select className="px-2 py-1 border border-gray-200 rounded-lg text-xs text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white" style={{ lineHeight: '1.5' }}>
          <option className="text-gray-800">This Year</option>
          <option className="text-gray-800">Last Year</option>
        </select>
      </div>

      <div className="space-y-4 flex-1 flex flex-col">
        {/* Legend */}
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-3">
            <div className="w-4 h-4 bg-green-600 rounded-full shadow-sm"></div>
            <span className="text-sm font-medium text-gray-700">Fee Collection</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-4 h-4 bg-green-300 rounded-full shadow-sm"></div>
            <span className="text-sm font-medium text-gray-700">School Expenses</span>
          </div>
        </div>

            {/* Chart */}
            <div className="flex-1 flex items-end space-x-1 relative min-h-[200px] ml-10">
          {/* Grid Lines */}
          <div className="absolute inset-0 flex flex-col justify-between">
            {[100, 75, 50, 25, 0].map((percent, i) => (
              <div key={i} className="border-t border-gray-100 flex items-center">
                <span className="text-xs text-gray-400 -ml-12 w-10 text-right">{Math.round((maxValue * percent) / 100).toLocaleString()}</span>
              </div>
            ))}
          </div>
          
          {months.map((month, index) => (
            <div key={month} className="flex-1 flex flex-col items-center space-y-1 group relative z-10">
              <div className="w-2/4 flex flex-col relative">
                <div
                  className="bg-green-600 rounded-t-lg hover:bg-green-700 transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg"
                  style={{
                    height: `${(feeCollectionData[index] / maxValue) * 200}px`,
                  }}
                  title={`Fee Collection: ₹${feeCollectionData[index].toLocaleString()}`}
                ></div>
                <div
                  className="bg-green-300 rounded-b-lg hover:bg-green-400 transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg"
                  style={{
                    height: `${(expenseData[index] / maxValue) * 200}px`,
                  }}
                  title={`School Expenses: ₹${expenseData[index].toLocaleString()}`}
                ></div>
              </div>
              <span className="text-xs font-medium text-gray-600 group-hover:text-gray-800 transition-colors">{month}</span>
            </div>
          ))}
        </div>

        {/* Tooltip for June */}
        <div className="bg-gray-50 rounded-xl p-4 text-sm mt-6">
          <div className="font-semibold text-gray-800 mb-2">June 2024</div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Fee Collection <span className="font-bold text-green-600">₹5,50,000</span></span>
            <span className="text-gray-600">School Expenses <span className="font-bold text-green-400">₹3,00,000</span></span>
          </div>
        </div>
      </div>
    </div>
  );
}
