import React from 'react';

export default function RecentActivity() {
  const activities = [
    {
      day: 'Today',
      items: [
        {
          name: 'Mrs. Priya Sharma',
          action: 'submitted new admission form for Class 9',
          time: '16:05',
          avatar: 'PS',
        },
        {
          name: 'Mr. Rajesh Kumar',
          action: 'paid monthly fee for Rahul Kumar',
          time: '13:05',
          avatar: 'RK',
        },
        {
          name: 'Admin',
          action: 'updated class schedule for Class 10A',
          time: '02:05',
          avatar: 'AD',
        },
      ],
    },
    {
      day: 'Yesterday',
      items: [
        {
          name: 'Mrs. Sunita Patel',
          action: 'requested transport facility for Arjun',
          time: '21:05',
          avatar: 'SP',
        },
        {
          name: 'Mr. Vikram Singh',
          action: 'completed hostel fee payment',
          time: '09:05',
          avatar: 'VS',
        },
      ],
    },
  ];

  return (
    <div className="bg-white rounded-lg p-3 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.1)'}}>
      <div className="mb-3">
        <h3 className="text-base font-bold text-gray-800 mb-1" style={{ lineHeight: '1.5' }}>School Activities</h3>
        <p className="text-xs text-gray-500" style={{ lineHeight: '1.5' }}>Latest admissions, payments and school updates</p>
      </div>

      <div className="max-h-74 overflow-y-auto">
        <div className="space-y-4">
          {activities.map((day, dayIndex) => (
            <div key={dayIndex}>
              <h4 className="text-sm font-semibold text-gray-700 mb-3 px-3 py-1 bg-gradient-to-r from-green-50 to-teal-50 rounded-full inline-block border border-green-100" style={{ lineHeight: '1.5' }}>{day.day}</h4>
              <div className="space-y-2">
                {day.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start space-x-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 hover:shadow-md transition-all duration-300 group border border-gray-100 mb-1" style={{ minHeight: '50px', lineHeight: '1.5' }}>
                    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {item.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-semibold text-gray-800 truncate" style={{ lineHeight: '1.5' }}>{item.name}</span>
                        <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded-full flex-shrink-0 ml-2 font-medium border border-gray-200" style={{ lineHeight: '1.5' }}>{item.time}</span>
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed font-medium" style={{ lineHeight: '1.5' }}>{item.action}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
