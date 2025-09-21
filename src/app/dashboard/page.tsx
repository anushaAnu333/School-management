import React from 'react';
import { 
  DashboardLayout,
  UserProfileCard,
  SummaryCards,
  ActionButtons,
  DailyLimit,
  SavingPlans,
  CashflowChart,
  StatisticsChart,
  RecentTransactions,
  RecentActivity,
} from '@/components/dashboard';

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="flex-1 p-3 space-y-3 max-w-9xl mx-auto">
        {/* Header */}
        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4 mb-8">
          <div className="flex-1 max-w-lg">
            <input
              type="text"
              placeholder="Search students, classes, or fees..."
              className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent shadow-sm text-base text-gray-800 placeholder-gray-500"
            />
          </div>
          <div className="flex items-center justify-between xl:justify-end space-x-4 xl:space-x-6">
            <div className="flex items-center space-x-3 xl:space-x-4">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer hover:scale-110 transform duration-300">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5-5-5h5v-5a7.5 7.5 0 00-15 0v5h5l-5 5-5-5h5V12a9 9 0 0118 0v5z" />
                </svg>
              </div>
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer hover:scale-110 transform duration-300">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer hover:scale-110 transform duration-300">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
            <div className="flex items-center space-x-4 xl:space-x-4 xl:pl-6 xl:border-l xl:border-gray-200">
              <div className="text-right flex flex-col justify-center">
                <div className="text-sm font-semibold text-gray-800 leading-tight">Principal Admin</div>
                <div className="text-xs text-emerald-600 font-semibold leading-tight">Full Access</div>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                PA
              </div>
            </div>
          </div>
        </div>

        {/* Top Row - School Info and Summary Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <UserProfileCard />
          </div>
          <div className="lg:col-span-3">
            <SummaryCards />
          </div>
        </div>

        {/* Main Content Grid - Three Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 max-w-7xl mx-auto items-start">
          {/* Left Column - Quick Actions, Daily Limit, Saving Plans */}
          <div className="flex flex-col space-y-2">
            <ActionButtons />
            <DailyLimit />
            <SavingPlans />
          </div>

          {/* Center Column - Cashflow Chart, Recent Transactions */}
          <div className="flex flex-col space-y-2">
            <CashflowChart />
            <RecentTransactions />
          </div>

          {/* Right Column - Statistics Chart, Recent Activity */}
          <div className="flex flex-col space-y-2">
            <StatisticsChart />
            <RecentActivity />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-gray-500">
            <div>Copyright © 2024 School Management System</div>
            <div className="flex flex-wrap gap-4 sm:gap-6">
              <a href="#" className="hover:text-emerald-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-emerald-600 transition-colors">Terms and conditions</a>
              <a href="#" className="hover:text-emerald-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}