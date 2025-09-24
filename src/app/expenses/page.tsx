"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ExpensesPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'overview' | 'expenses' | 'payments' | 'vendors'>('overview');
  
  // Sample data for expenses and payments
  const expensesData = [
    {
      id: 'EXP001',
      date: '2024-01-15',
      category: 'Utilities',
      description: 'Electricity Bill - January',
      vendor: 'Power Corp',
      amount: 15000,
      status: 'paid',
      paymentMethod: 'Online Transfer',
      invoiceNumber: 'INV-2024-001'
    },
    {
      id: 'EXP002',
      date: '2024-01-14',
      category: 'Maintenance',
      description: 'Building Repair - Roof Leak',
      vendor: 'BuildFix Ltd',
      amount: 25000,
      status: 'pending',
      paymentMethod: 'Cheque',
      invoiceNumber: 'INV-2024-002'
    },
    {
      id: 'EXP003',
      date: '2024-01-13',
      category: 'Supplies',
      description: 'Stationery Items - Q1',
      vendor: 'Office Depot',
      amount: 8500,
      status: 'paid',
      paymentMethod: 'Cash',
      invoiceNumber: 'INV-2024-003'
    },
    {
      id: 'EXP004',
      date: '2024-01-12',
      category: 'Staff',
      description: 'Teacher Training Workshop',
      vendor: 'EduTech Solutions',
      amount: 12000,
      status: 'paid',
      paymentMethod: 'Online Transfer',
      invoiceNumber: 'INV-2024-004'
    },
    {
      id: 'EXP005',
      date: '2024-01-11',
      category: 'Utilities',
      description: 'Water Bill - January',
      vendor: 'Water Board',
      amount: 5000,
      status: 'pending',
      paymentMethod: 'Online Transfer',
      invoiceNumber: 'INV-2024-005'
    }
  ];

  const paymentsData = [
    {
      id: 'PAY001',
      date: '2024-01-15',
      vendor: 'Power Corp',
      amount: 15000,
      status: 'completed',
      method: 'Online Transfer',
      reference: 'TXN-2024-001'
    },
    {
      id: 'PAY002',
      date: '2024-01-13',
      vendor: 'Office Depot',
      amount: 8500,
      status: 'completed',
      method: 'Cash',
      reference: 'CASH-2024-001'
    },
    {
      id: 'PAY003',
      date: '2024-01-12',
      vendor: 'EduTech Solutions',
      amount: 12000,
      status: 'completed',
      method: 'Online Transfer',
      reference: 'TXN-2024-002'
    },
    {
      id: 'PAY004',
      date: '2024-01-10',
      vendor: 'BuildFix Ltd',
      amount: 25000,
      status: 'pending',
      method: 'Cheque',
      reference: 'CHQ-2024-001'
    }
  ];

  const vendorsData = [
    { name: 'Power Corp', type: 'Utilities', totalAmount: 45000, pendingAmount: 0, lastPayment: '2024-01-15' },
    { name: 'BuildFix Ltd', type: 'Maintenance', totalAmount: 35000, pendingAmount: 25000, lastPayment: '2024-01-10' },
    { name: 'Office Depot', type: 'Supplies', totalAmount: 25000, pendingAmount: 0, lastPayment: '2024-01-13' },
    { name: 'EduTech Solutions', type: 'Training', totalAmount: 20000, pendingAmount: 0, lastPayment: '2024-01-12' },
    { name: 'Water Board', type: 'Utilities', totalAmount: 15000, pendingAmount: 5000, lastPayment: '2024-01-11' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'paid':
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'overdue':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Utilities':
        return 'bg-blue-100 text-blue-800';
      case 'Maintenance':
        return 'bg-yellow-100 text-yellow-800';
      case 'Supplies':
        return 'bg-green-100 text-green-800';
      case 'Staff':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Calculate totals
  const totalExpenses = expensesData.reduce((sum, exp) => sum + exp.amount, 0);
  const paidExpenses = expensesData.filter(exp => exp.status === 'paid').reduce((sum, exp) => sum + exp.amount, 0);
  const pendingExpenses = expensesData.filter(exp => exp.status === 'pending').reduce((sum, exp) => sum + exp.amount, 0);
  const totalVendors = vendorsData.length;
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Expenses & Payments</h1>
              <p className="mt-1 text-sm text-gray-600">Manage school expenses, vendor payments, and financial transactions</p>
            </div>
            <div className="flex items-center space-x-3">
              <button 
                onClick={() => router.push('/expenses/add')}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Add Expense
              </button>
              <button 
                onClick={() => router.push('/expenses/payment')}
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Make Payment
              </button>
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Expenses</p>
                <p className="text-2xl font-semibold text-gray-900">₹{totalExpenses.toLocaleString()}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Paid Expenses</p>
                <p className="text-2xl font-semibold text-green-600">₹{paidExpenses.toLocaleString()}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Pending Bills</p>
                <p className="text-2xl font-semibold text-yellow-600">₹{pendingExpenses.toLocaleString()}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Vendors</p>
                <p className="text-2xl font-semibold text-purple-600">{totalVendors}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg border border-gray-200 mb-6">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8 px-6">
              {[
                { id: 'overview', name: 'Overview', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
                { id: 'expenses', name: 'Expenses', icon: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z' },
                { id: 'payments', name: 'Payments', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1' },
                { id: 'vendors', name: 'Vendors', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-red-500 text-red-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={tab.icon} />
                    </svg>
                    {tab.name}
                  </div>
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Recent Expenses */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Expenses</h3>
                  <div className="space-y-3">
                    {expensesData.slice(0, 3).map((expense) => (
                      <div key={expense.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(expense.category)}`}>
                              {expense.category}
                            </span>
                          </div>
                          <div className="ml-4">
                            <p className="text-sm font-medium text-gray-900">{expense.description}</p>
                            <p className="text-sm text-gray-500">{expense.vendor} • {expense.date}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-gray-900">₹{expense.amount.toLocaleString()}</p>
                          <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(expense.status)}`}>
                            {expense.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Expense Categories Breakdown */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Expense Categories</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                      { name: 'Utilities', amount: 20000, color: 'bg-blue-100 text-blue-800' },
                      { name: 'Maintenance', amount: 25000, color: 'bg-yellow-100 text-yellow-800' },
                      { name: 'Supplies', amount: 8500, color: 'bg-green-100 text-green-800' },
                      { name: 'Staff', amount: 12000, color: 'bg-purple-100 text-purple-800' }
                    ].map((category) => (
                      <div key={category.name} className="bg-white rounded-lg border border-gray-200 p-4">
                        <div className="flex items-center justify-between">
                          <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${category.color}`}>
                            {category.name}
                          </span>
                          <span className="text-sm font-medium text-gray-900">₹{category.amount.toLocaleString()}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'expenses' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">All Expenses</h3>
                  <button 
                    onClick={() => router.push('/expenses/add')}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Add Expense
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vendor</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {expensesData.map((expense) => (
                        <tr key={expense.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{expense.date}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(expense.category)}`}>
                              {expense.category}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{expense.description}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{expense.vendor}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">₹{expense.amount.toLocaleString()}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(expense.status)}`}>
                              {expense.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                            <button className="text-red-600 hover:text-red-900 mr-3">Edit</button>
                            <button className="text-gray-600 hover:text-gray-900">View</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'payments' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Payment History</h3>
                  <button 
                    onClick={() => router.push('/expenses/payment')}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Make Payment
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vendor</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Method</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reference</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {paymentsData.map((payment) => (
                        <tr key={payment.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{payment.date}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{payment.vendor}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">₹{payment.amount.toLocaleString()}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{payment.method}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{payment.reference}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(payment.status)}`}>
                              {payment.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'vendors' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Vendor Management</h3>
                  <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Add Vendor
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {vendorsData.map((vendor, index) => (
                    <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                            <span className="text-sm font-medium text-purple-600">
                              {vendor.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div className="ml-3">
                            <h4 className="text-sm font-medium text-gray-900">{vendor.name}</h4>
                            <p className="text-sm text-gray-500">{vendor.type}</p>
                          </div>
                        </div>
                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                          vendor.pendingAmount > 0 ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
                        }`}>
                          {vendor.pendingAmount > 0 ? 'Pending' : 'Clear'}
                        </span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Total Amount:</span>
                          <span className="font-medium">₹{vendor.totalAmount.toLocaleString()}</span>
                        </div>
                        {vendor.pendingAmount > 0 && (
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Pending:</span>
                            <span className="font-medium text-red-600">₹{vendor.pendingAmount.toLocaleString()}</span>
                          </div>
                        )}
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Last Payment:</span>
                          <span className="font-medium">{vendor.lastPayment}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}