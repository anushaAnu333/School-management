"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PaymentVouchersPage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedStatus, setSelectedStatus] = useState('All Status');
  
  // Sample payment voucher data
  const vouchers = [
    {
      id: 'PV001',
      voucherNumber: 'PV-2024-001',
      date: '2024-09-29',
      vendorName: 'ABC Stationery',
      vendorContact: '9876543210',
      taxableAmount: 10000,
      gstRate: 18,
      gstAmount: 1800,
      totalInvoiceValue: 11800,
      natureOfExpense: 'Printing & Stationery',
      paymentMode: 'Online',
      transactionReference: 'TXN123456789',
      status: 'Paid',
      approvedBy: 'John Doe',
    },
    {
      id: 'PV002',
      voucherNumber: 'PV-2024-002',
      date: '2024-09-28',
      vendorName: 'XYZ Electric',
      vendorContact: '9876543212',
      taxableAmount: 25000,
      gstRate: 18,
      gstAmount: 4500,
      totalInvoiceValue: 29500,
      natureOfExpense: 'Electricity & Water',
      paymentMode: 'Cash',
      transactionReference: null,
      status: 'Paid',
      approvedBy: 'John Doe',
    },
    {
      id: 'PV003',
      voucherNumber: 'PV-2024-003',
      date: '2024-09-27',
      vendorName: 'DEF Maintenance',
      vendorContact: '9876543214',
      taxableAmount: 15000,
      gstRate: 18,
      gstAmount: 2700,
      totalInvoiceValue: 17700,
      natureOfExpense: 'Repairs & Maintenance',
      paymentMode: 'Online',
      transactionReference: 'TXN987654321',
      status: 'Pending',
      approvedBy: null,
    },
    {
      id: 'PV004',
      voucherNumber: 'PV-2024-004',
      date: '2024-09-26',
      vendorName: 'GHI Transport',
      vendorContact: '9876543216',
      taxableAmount: 30000,
      gstRate: 18,
      gstAmount: 5400,
      totalInvoiceValue: 35400,
      natureOfExpense: 'Transport Fuel & Maintenance',
      paymentMode: 'Online',
      transactionReference: 'TXN456789123',
      status: 'Paid',
      approvedBy: 'John Doe',
    },
    {
      id: 'PV005',
      voucherNumber: 'PV-2024-005',
      date: '2024-09-25',
      vendorName: 'JKL Software',
      vendorContact: '9876543218',
      taxableAmount: 50000,
      gstRate: 18,
      gstAmount: 9000,
      totalInvoiceValue: 59000,
      natureOfExpense: 'Software Subscriptions',
      paymentMode: 'Online',
      transactionReference: 'TXN789123456',
      status: 'Approved',
      approvedBy: 'John Doe',
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
      case 'Online':
        return {
          bg: 'bg-blue-50',
          text: 'text-blue-700',
          border: 'border-blue-200',
          label: 'Online'
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

  const filteredVouchers = vouchers.filter(voucher => {
    const matchesSearch = voucher.vendorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         voucher.voucherNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         voucher.natureOfExpense.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All Categories' || voucher.natureOfExpense === selectedCategory;
    const matchesStatus = selectedStatus === 'All Status' || voucher.status === selectedStatus;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  // Calculate summary stats
  const totalVouchers = filteredVouchers.length;
  const paidVouchers = filteredVouchers.filter(v => v.status === 'Paid').length;
  const pendingVouchers = filteredVouchers.filter(v => v.status === 'Pending').length;
  const totalAmount = filteredVouchers.reduce((sum, v) => sum + v.totalInvoiceValue, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Payment Vouchers</h1>
              <p className="mt-1 text-sm text-gray-600">Manage vendor payments and expense vouchers</p>
            </div>
            <div className="flex items-center space-x-3">
              <button 
                onClick={() => router.push('/payments/vouchers/new')}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-slate-700 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                New Voucher
              </button>
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition-colors">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Export Report
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Vouchers</p>
                <p className="text-2xl font-semibold text-gray-900">{totalVouchers}</p>
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
                <p className="text-2xl font-semibold text-emerald-600">{paidVouchers}</p>
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
                <p className="text-2xl font-semibold text-amber-600">{pendingVouchers}</p>
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
                <p className="text-sm font-medium text-gray-600">Total Amount</p>
                <p className="text-2xl font-semibold text-blue-600">₹{totalAmount.toLocaleString()}</p>
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
                    placeholder="Search vendors, voucher numbers, or expenses..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="block w-80 pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-slate-500 focus:border-slate-500"
                  />
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-500 focus:border-slate-500 text-sm bg-white min-w-[150px]"
                >
                  <option value="All Categories">All Categories</option>
                  <option value="Electricity & Water">Electricity & Water</option>
                  <option value="Repairs & Maintenance">Repairs & Maintenance</option>
                  <option value="Printing & Stationery">Printing & Stationery</option>
                  <option value="Transport Fuel & Maintenance">Transport Fuel & Maintenance</option>
                  <option value="Software Subscriptions">Software Subscriptions</option>
                  <option value="Audit & Legal Fees">Audit & Legal Fees</option>
                  <option value="Miscellaneous / Contingency">Miscellaneous / Contingency</option>
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
                    Voucher Details
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Vendor
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
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
                {filteredVouchers.map((voucher) => {
                  const statusConfig = getStatusConfig(voucher.status);
                  const paymentModeConfig = getPaymentModeConfig(voucher.paymentMode);
                  return (
                    <tr key={voucher.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{voucher.voucherNumber}</div>
                        <div className="text-sm text-gray-500">{voucher.date}</div>
                        <div className="text-sm text-blue-600">{voucher.natureOfExpense}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{voucher.vendorName}</div>
                        <div className="text-sm text-gray-500">{voucher.vendorContact}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-semibold text-gray-900">₹{voucher.totalInvoiceValue.toLocaleString()}</div>
                        <div className="text-sm text-gray-500">
                          Tax: ₹{voucher.taxableAmount.toLocaleString()} + GST: ₹{voucher.gstAmount.toLocaleString()}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-3 py-1 text-xs font-medium rounded-full border ${paymentModeConfig.bg} ${paymentModeConfig.text} ${paymentModeConfig.border}`}>
                          {paymentModeConfig.label}
                        </span>
                        {voucher.transactionReference && (
                          <div className="text-xs text-gray-500 mt-1">
                            Ref: {voucher.transactionReference}
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-3 py-1 text-xs font-medium rounded-full border ${statusConfig.bg} ${statusConfig.text} ${statusConfig.border}`}>
                          {statusConfig.label}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <button className="text-slate-600 hover:text-slate-900 text-sm font-medium px-3 py-1 rounded transition-colors">
                            View
                          </button>
                          <button className="text-slate-600 hover:text-slate-900 text-sm font-medium px-3 py-1 rounded transition-colors">
                            Edit
                          </button>
                          {voucher.status === 'Pending' && (
                            <button className="text-blue-600 hover:text-blue-900 text-sm font-medium px-3 py-1 rounded transition-colors">
                              Approve
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
                Showing <span className="font-medium">{filteredVouchers.length}</span> of <span className="font-medium">{vouchers.length}</span> vouchers
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
