import React from 'react';

export default function DailyLimit() {
  const collected = 245000;
  const target = 500000;
  const percentage = (collected / target) * 100;

  return (
    <div className="bg-white rounded-lg p-4 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 min-h-[200px]" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
      <div className="mb-4">
        <h3 className="text-lg font-bold text-gray-800 mb-1" style={{ lineHeight: '1.5' }}>Daily Limit</h3>
        <p className="text-sm text-gray-500" style={{ lineHeight: '1.5' }}>Fee collection progress</p>
      </div>
      <div className="space-y-3">
        <div className="flex justify-between items-center text-sm" style={{ lineHeight: '1.5' }}>
          <span className="text-gray-600">Amount Collected</span>
          <span className="font-bold text-gray-900">₹{collected.toLocaleString()}</span>
        </div>
        <div className="flex justify-between items-center text-sm" style={{ lineHeight: '1.5' }}>
          <span className="text-gray-600">Monthly Target</span>
          <span className="font-bold text-gray-900">₹{target.toLocaleString()}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mt-3 shadow-inner">
          <div
            className="bg-gradient-to-r from-green-400 to-green-500 h-2 rounded-full transition-all duration-500 shadow-sm"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <div className="text-right text-sm font-semibold text-green-600 mt-2" style={{ lineHeight: '1.5' }}>
          {percentage.toFixed(1)}% collected
        </div>
      </div>
    </div>
  );
}
