import React from 'react';

export default function UserProfileCard() {
  // This should match the total from SavingPlans component
  const totalStudents = 1250; // Using consistent total across components
  
  return (
    <div className="bg-gradient-to-br from-teal-600 to-teal-800 rounded-lg p-5 text-white relative overflow-hidden shadow-md" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-white opacity-10 rounded-full -translate-y-12 translate-x-12"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-white opacity-10 rounded-full translate-y-8 -translate-x-8"></div>
      
      {/* School Icon */}
      <div className="absolute top-3 right-3 w-7 h-7 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      </div>
      
      <div className="relative z-10">
        <h2 className="text-lg font-bold mb-1" style={{ lineHeight: '1.5' }}>Greenwood High School</h2>
        <div className="text-2xl font-bold mb-2" style={{ lineHeight: '1.5' }}>{totalStudents.toLocaleString()}</div>
        <div className="text-xs text-teal-100" style={{ lineHeight: '1.5' }}>
          <div>Total Students</div>
          <div>Academic Year 2024-25</div>
          <div>CBSE/ICSE/State Board</div>
        </div>
      </div>
    </div>
  );
}
