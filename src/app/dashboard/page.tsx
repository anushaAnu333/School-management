import React from 'react';
import { 
  UserProfileCard,
  SummaryCards,
  ActionButtons,
  SavingPlans,
  CashflowChart,
  StatisticsChart,
  RecentTransactions,
  RecentActivity,
} from '@/components/dashboard';

export default function DashboardPage() {
  return (
    <div className="flex-1 p-3 space-y-3 max-w-9xl mx-auto">

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
  );
}