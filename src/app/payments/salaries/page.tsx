"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SalaryPaymentsPage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('All Months');
  const [selectedStatus, setSelectedStatus] = useState('All Status');
  
  // Sample salary payment data
  const salaries = [
    {
      id: 'SAL001',
      employeeName: 'John Doe',
      employeeId: 'EMP001',
      department: 'Teaching',
      designation: 'Senior Teacher',
      salaryMonth: 'September 2024',
      basic: 25000,
      da: 5000,
      allowances: 3000,
      others: 2000,
      grossSalary: 35000,
      pf: 1750,
      pt: 200,
      incomeTax: 1500,
      others: 500,
      deductions: 3950,
      netSalary: 31050,
      paymentMode: 'Bank Transfer',
      bankAccount: '1234567890',
      ifscCode: 'SBIN0001234',
      status: 'Paid',
      paymentDate: '2024-09-30',
      approvedBy: 'Principal'
    },
    {
      id: 'SAL002',
      employeeName: 'Jane Smith',
      employeeId: 'EMP002',
      department: 'Administration',
      designation: 'Accountant',
      salaryMonth: 'September 2024',
      basic: 20000,
      da: 4000,
      allowances: 2500,
      others: 1500,
      grossSalary: 28000,
      pf: 1400,
      pt: 200,
      incomeTax: 1200,
      others: 300,
      deductions: 3100,
      netSalary: 24900,
      paymentMode: 'Bank Transfer',
      bankAccount: '2345678901',
      ifscCode: 'HDFC0001234',
      status: 'Paid',
      paymentDate: '2024-09-30',
      approvedBy: 'Principal'
    },
    {
      id: 'SAL003',
      employeeName: 'Mike Johnson',
      employeeId: 'EMP003',
      department: 'Teaching',
      designation: 'Teacher',
      salaryMonth: 'September 2024',
      basic: 18000,
      da: 3600,
      allowances: 2000,
      others: 1000,
      grossSalary: 24600,
      pf: 1230,
      pt: 200,
      incomeTax: 800,
      others: 200,
      deductions: 2430,
      netSalary: 22170,
      paymentMode: 'Cash',
      bankAccount: null,
      ifscCode: null,
      status: 'Paid',
      paymentDate: '2024-09-30',
      approvedBy: 'Principal'
    },
    {
      id: 'SAL004',
      employeeName: 'Sarah Wilson',
      employeeId: 'EMP004',
      department: 'Support',
      designation: 'Librarian',
      salaryMonth: 'September 2024',
      basic: 15000,
      da: 3000,
      allowances: 1500,
      others: 500,
      grossSalary: 20000,
      pf: 1000,
      pt: 200,
      incomeTax: 500,
      others: 100,
      deductions: 1800,
      netSalary: 18200,
      paymentMode: 'Bank Transfer',
      bankAccount: '3456789012',
      ifscCode: 'ICICI0001234',
      status: 'Pending',
      paymentDate: null,
      approvedBy: null
    },
    {
      id: 'SAL005',
      employeeName: 'David Brown',
      employeeId: 'EMP005',
      department: 'Teaching',
      designation: 'Physical Education Teacher',
      salaryMonth: 'September 2024',
      basic: 16000,
      da: 3200,
      allowances: 1800,
      others: 800,
      grossSalary: 21800,
      pf: 1090,
      pt: 200,
      incomeTax: 600,
      others: 150,
      deductions: 2040,
      netSalary: 19760,
      paymentMode: 'Bank Transfer',
      bankAccount: '4567890123',
      ifscCode: 'AXIS0001234',
      status: 'Approved',
      paymentDate: null,
      approvedBy: 'Principal'
    }
  ];

  const getStatusConfig = (status: string) => {
    switch (status) {
      case 'Paid':
        return {
          bg: 'bg-emerald-50',
          text: 'text-emerald-700',
          border: 'border-emerald-200',
          label: 'Paid'
        };
      case 'Approved':
        return {
          bg: 'bg-blue-50',
          text: 'text-blue-700',
          border: 'border-blue-200',
          label: 'Approved'
        };
      case 'Pending':
        return {
          bg: 'bg-amber-50',
          text: 'text-amber-700',
          border: 'border-amber-200',
          label: 'Pending'
        };
      case 'Rejected':
        return {
          bg: 'bg-rose-50',
          text: 'text-rose-700',
          border: 'border-rose-200',
          label: 'Rejected'
        };
      default:
        return {
          bg: 'bg-gray-50',
          text: 'text-gray-700',
          border: 'border-gray-200',
          label: 'Unknown'
        };
    }
  };

  const getPaymentModeConfig = (mode: string) => {
    switch (mode) {
      case 'Bank Transfer':
        return {
          bg: 'bg-blue-50',
          text: 'text-blue-700',
          border: 'border-blue-200',
          label: 'Bank Transfer'
        };
      case 'Cash':
        return {
          bg: 'bg-green-50',
          text: 'text-green-700',
          border: 'border-green-200',
          label: 'Cash'
        };
      default:
        return {
          bg: 'bg-gray-50',
          text: 'text-gray-700',
          border: 'border-gray-200',
          label: 'Unknown'
        };
    }
  };

  const filteredSalaries = salaries.filter(salary => {
    const matchesSearch = salary.employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         salary.employeeId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         salary.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesMonth = selectedMonth === 'All Months' || salary.salaryMonth === selectedMonth;
    const matchesStatus = selectedStatus === 'All Status' || salary.status === selectedStatus;
    
    return matchesSearch && matchesMonth && matchesStatus;
  });

  // Calculate summary stats
  const totalEmployees = filteredSalaries.length;
  const paidEmployees = filteredSalaries.filter(s => s.status === 'Paid').length;
  const pendingEmployees = filteredSalaries.filter(s => s.status === 'Pending').length;
  const totalSalary = filteredSalaries.reduce((sum, s) => sum + s.netSalary, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Salary Payments</h1>
              <p className="mt-1 text-sm text-gray-600">Manage employee salary payments and payroll</p>
            </div>
            <div className="flex items-center space-x-3">
              <button 
                onClick={() => router.push('/payments/salaries/new')}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-slate-700 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Process Salary
              </button>
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition-colors">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Export Payroll
              </button>
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Employees</p>
                <p className="text-2xl font-semibold text-gray-900">{totalEmployees}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Paid</p>
                <p className="text-2xl font-semibold text-emerald-600">{paidEmployees}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Pending</p>
                <p className="text-2xl font-semibold text-amber-600">{pendingEmployees}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Salary</p>
                <p className="text-2xl font-semibold text-blue-600">₹{totalSalary.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-lg border border-gray-200 mb-6">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Search employees, ID, or department..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="block w-80 pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-slate-500 focus:border-slate-500"
                  />
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <select
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-500 focus:border-slate-500 text-sm bg-white min-w-[150px]"
                >
                  <option value="All Months">All Months</option>
                  <option value="September 2024">September 2024</option>
                  <option value="August 2024">August 2024</option>
                  <option value="July 2024">July 2024</option>
                  <option value="June 2024">June 2024</option>
                </select>
                
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-500 focus:border-slate-500 text-sm bg-white min-w-[120px]"
                >
                  <option value="All Status">All Status</option>
                  <option value="Paid">Paid</option>
                  <option value="Approved">Approved</option>
                  <option value="Pending">Pending</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Employee Details
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Salary Breakdown
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Net Salary
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Payment Mode
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredSalaries.map((salary) => {
                  const statusConfig = getStatusConfig(salary.status);
                  const paymentModeConfig = getPaymentModeConfig(salary.paymentMode);
                  return (
                    <tr key={salary.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0">
                            <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center">
                              <span className="text-sm font-medium text-slate-700">
                                {salary.employeeName.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{salary.employeeName}</div>
                            <div className="text-sm text-gray-500">{salary.employeeId}</div>
                            <div className="text-sm text-gray-500">{salary.department} • {salary.designation}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          <div>Gross: ₹{salary.grossSalary.toLocaleString()}</div>
                          <div className="text-gray-500">Basic: ₹{salary.basic.toLocaleString()}</div>
                          <div className="text-gray-500">Deductions: ₹{salary.deductions.toLocaleString()}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-semibold text-gray-900">₹{salary.netSalary.toLocaleString()}</div>
                        <div className="text-sm text-gray-500">{salary.salaryMonth}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-3 py-1 text-xs font-medium rounded-full border ${paymentModeConfig.bg} ${paymentModeConfig.text} ${paymentModeConfig.border}`}>
                          {paymentModeConfig.label}
                        </span>
                        {salary.bankAccount && (
                          <div className="text-xs text-gray-500 mt-1">
                            {salary.bankAccount}
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-3 py-1 text-xs font-medium rounded-full border ${statusConfig.bg} ${statusConfig.text} ${statusConfig.border}`}>
                          {statusConfig.label}
                        </span>
                        {salary.paymentDate && (
                          <div className="text-xs text-gray-500 mt-1">
                            Paid: {salary.paymentDate}
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <button className="text-slate-600 hover:text-slate-900 text-sm font-medium px-3 py-1 rounded transition-colors">
                            View
                          </button>
                          <button className="text-slate-600 hover:text-slate-900 text-sm font-medium px-3 py-1 rounded transition-colors">
                            Edit
                          </button>
                          {salary.status === 'Pending' && (
                            <button className="text-blue-600 hover:text-blue-900 text-sm font-medium px-3 py-1 rounded transition-colors">
                              Pay
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          
          {/* Table Footer */}
          <div className="bg-gray-50 px-6 py-3 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-700">
                Showing <span className="font-medium">{filteredSalaries.length}</span> of <span className="font-medium">{salaries.length}</span> employees
              </div>
              <div className="text-sm text-gray-500">
                Last updated: September 23, 2024
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
