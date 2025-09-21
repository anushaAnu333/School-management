import React from 'react';

export default function SummaryCards() {
  const cards = [
    {
      title: 'Fee Collection Summary',
      amount: '₹7,25,000',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      iconBg: 'bg-green-100',
    },
    {
      title: 'Outstanding Fees',
      amount: '₹1,25,000',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      iconBg: 'bg-orange-100',
    },
    {
      title: 'Total Admissions',
      amount: '1,250',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
      ),
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      iconBg: 'bg-blue-100',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      {cards.map((card, index) => (
        <div key={index} className={`${card.bgColor} rounded-lg p-5 shadow-md hover:shadow-lg transition-all duration-300 group flex flex-col justify-center`} style={{ height: '150px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <div className="flex items-center space-x-4">
            <div className={`w-12 h-12 ${card.iconBg} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
              <span className={card.color}>
                {card.icon}
              </span>
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-600 font-medium mb-1" style={{ lineHeight: '1.5' }}>{card.title}</p>
              <p className={`text-2xl font-bold ${card.color} leading-tight`} style={{ lineHeight: '1.5' }}>{card.amount}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
