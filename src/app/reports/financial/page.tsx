"use client"

import React from 'react';
import { useSchoolData } from '@/context/SchoolDataContext';

export default function FinancialReportPage() {
  const { data } = useSchoolData();

  // Calculate financial metrics
  const totalRevenue = data.fees.reduce((sum, fee) => sum + fee.amount, 0);
  const totalExpenses = data.expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const netProfit = totalRevenue - totalExpenses;
  const profitMargin = totalRevenue > 0 ? (netProfit / totalRevenue) * 100 : 0;

  const paidFees = data.fees.filter(fee => fee.status === 'paid');
  const pendingFees = data.fees.filter(fee => fee.status === 'pending');
  const overdueFees = data.fees.filter(fee => fee.status === 'overdue');

  const paidExpenses = data.expenses.filter(expense => expense.status === 'paid');
  const pendingExpenses = data.expenses.filter(expense => expense.status === 'pending');

  const getExpenseByCategory = () => {
    const categories: { [key: string]: number } = {};
    data.expenses.forEach(expense => {
      categories[expense.category] = (categories[expense.category] || 0) + expense.amount;
    });
    return categories;
  };

  const expenseByCategory = getExpenseByCategory();

  const getFeeByType = () => {
    const types: { [key: string]: number } = {};
    data.fees.forEach(fee => {
      types[fee.feeType] = (types[fee.feeType] || 0) + fee.amount;
    });
    return types;
  };

  const feeByType = getFeeByType();

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Financial Report</h1>
        <p className="text-gray-600 mt-2">Revenue, expenses, and financial performance analysis</p>
      </div>

      {/* Financial Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900">Total Revenue</h3>
              <p className="text-2xl font-bold text-green-600">₹{totalRevenue.toLocaleString()}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900">Total Expenses</h3>
              <p className="text-2xl font-bold text-red-600">₹{totalExpenses.toLocaleString()}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900">Net Profit</h3>
              <p className={`text-2xl font-bold ${netProfit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                ₹{netProfit.toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900">Profit Margin</h3>
              <p className="text-2xl font-bold text-purple-600">{profitMargin.toFixed(1)}%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Fee Collection Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Fee Collection Status</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="font-medium text-gray-900">Paid Fees</h3>
                  <p className="text-sm text-gray-600">{paidFees.length} payments</p>
                </div>
              </div>
              <span className="text-sm font-medium text-gray-900">
                ₹{paidFees.reduce((sum, fee) => sum + fee.amount, 0).toLocaleString()}
              </span>
            </div>

            <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="font-medium text-gray-900">Pending Fees</h3>
                  <p className="text-sm text-gray-600">{pendingFees.length} payments</p>
                </div>
              </div>
              <span className="text-sm font-medium text-gray-900">
                ₹{pendingFees.reduce((sum, fee) => sum + fee.amount, 0).toLocaleString()}
              </span>
            </div>

            <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="font-medium text-gray-900">Overdue Fees</h3>
                  <p className="text-sm text-gray-600">{overdueFees.length} payments</p>
                </div>
              </div>
              <span className="text-sm font-medium text-gray-900">
                ₹{overdueFees.reduce((sum, fee) => sum + fee.amount, 0).toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Expense Status</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="font-medium text-gray-900">Paid Expenses</h3>
                  <p className="text-sm text-gray-600">{paidExpenses.length} payments</p>
                </div>
              </div>
              <span className="text-sm font-medium text-gray-900">
                ₹{paidExpenses.reduce((sum, expense) => sum + expense.amount, 0).toLocaleString()}
              </span>
            </div>

            <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="font-medium text-gray-900">Pending Expenses</h3>
                  <p className="text-sm text-gray-600">{pendingExpenses.length} payments</p>
                </div>
              </div>
              <span className="text-sm font-medium text-gray-900">
                ₹{pendingExpenses.reduce((sum, expense) => sum + expense.amount, 0).toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Revenue by Fee Type */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Revenue by Fee Type</h2>
          <div className="space-y-3">
            {Object.entries(feeByType).map(([type, amount]) => (
              <div key={type} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-sm font-medium text-gray-900">{type}</span>
                <span className="text-sm font-medium text-gray-900">₹{amount.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Expenses by Category</h2>
          <div className="space-y-3">
            {Object.entries(expenseByCategory).map(([category, amount]) => (
              <div key={category} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-sm font-medium text-gray-900">{category}</span>
                <span className="text-sm font-medium text-gray-900">₹{amount.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Export Options */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Export Report</h2>
            <p className="text-sm text-gray-600">Download financial report in various formats</p>
          </div>
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
              Export PDF
            </button>
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              Export Excel
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Print Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
