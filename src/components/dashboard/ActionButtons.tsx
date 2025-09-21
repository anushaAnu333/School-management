import React from 'react';

export default function ActionButtons() {
  const buttons = [
    { 
      label: 'New Admission', 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
      ), 
      color: 'bg-green-500 hover:bg-green-600' 
    },
    { 
      label: 'Fee Collection', 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ), 
      color: 'bg-green-500 hover:bg-green-600' 
    },
    { 
      label: 'Reports', 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ), 
      color: 'bg-green-500 hover:bg-green-600' 
    },
    { 
      label: 'Expenses', 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ), 
      color: 'bg-green-500 hover:bg-green-600' 
    },
  ];

  return (
    <div className="bg-white rounded-lg p-4 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 min-h-[200px]" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
      <div className="mb-4">
        <h3 className="text-lg font-bold text-gray-800 mb-1" style={{ lineHeight: '1.5' }}>School Management</h3>
        <p className="text-sm text-gray-500" style={{ lineHeight: '1.5' }}>Essential school administration tasks</p>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {buttons.map((button, index) => (
          <button
            key={index}
            className="border-2 border-green-200 text-green-600 bg-white rounded-lg p-3 flex flex-col items-center justify-center space-y-1 hover:bg-green-50 hover:border-green-300 hover:shadow-lg transform hover:scale-105 transition-all duration-300 group"
            style={{ height: '70px', lineHeight: '1.5' }}
          >
            <span className="flex items-center justify-center text-green-600 group-hover:scale-110 transition-transform duration-300">{button.icon}</span>
            <span className="text-xs font-semibold text-center leading-tight" style={{ lineHeight: '1.5' }}>{button.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
