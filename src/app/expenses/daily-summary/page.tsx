"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DailySummaryPage() {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [summaryData, setSummaryData] = useState({
    openingBalance: {
      cash: 5000,
      online: 0,
      others: 0
    },
    feeCollected: {
      cash: 25000,
      online: 15000,
      others: 0
    },
    feeRefunded: {
      cash: 2000,
      online: 0,
      others: 0
    },
    paymentsMade: {
      cash: 8000,
      online: 5000,
      others: 0
    },
    salariesPaid: {
      cash: 0,
      online: 45000,
      others: 0
    },
    amountDeposited: {
      cash: 15000,
      online: 0,
      others: 0
    }
  });

  const [vouchers] = useState([
    { voucherNumber: 'RCP-001', studentName: 'Rajesh Kumar', amount: 25000, type: 'Fee Collection' },
    { voucherNumber: 'RCP-002', studentName: 'Priya Sharma', amount: 18000, type: 'Fee Collection' },
    { voucherNumber: 'PV-001', vendorName: 'Power Corp', amount: 15000, type: 'Payment Voucher' },
    { voucherNumber: 'PV-002', vendorName: 'BuildFix Ltd', amount: 25000, type: 'Payment Voucher' },
    { voucherNumber: 'REF-001', studentName: 'Arjun Singh', amount: 2000, type: 'Refund Voucher' }
  ]);

  const calculateClosingBalance = () => {
    const opening = summaryData.openingBalance.cash + summaryData.openingBalance.online + summaryData.openingBalance.others;
    const collected = summaryData.feeCollected.cash + summaryData.feeCollected.online + summaryData.feeCollected.others;
    const refunded = summaryData.feeRefunded.cash + summaryData.feeRefunded.online + summaryData.feeRefunded.others;
    const payments = summaryData.paymentsMade.cash + summaryData.paymentsMade.online + summaryData.paymentsMade.others;
    const salaries = summaryData.salariesPaid.cash + summaryData.salariesPaid.online + summaryData.salariesPaid.others;
    const deposited = summaryData.amountDeposited.cash + summaryData.amountDeposited.online + summaryData.amountDeposited.others;
    
    return opening + collected - refunded - payments - salaries - deposited;
  };

  const handleInputChange = (category: string, field: string, value: number) => {
    setSummaryData(prev => ({
      ...prev,
      [category]: {
        ...prev[category as keyof typeof prev],
        [field]: value
      }
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Daily Summary Data:', { date: selectedDate, summaryData, vouchers });
    alert('Daily summary saved successfully!');
  };

  const closingBalance = calculateClosingBalance();

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Daily Collection Summary</h1>
          <p className="text-gray-600 mt-2">Track daily financial transactions and cash flow</p>
        </div>

        <div className="space-y-6">
          {/* Date Selection */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center space-x-4">
              <label className="block text-sm font-medium text-gray-700">
                Select Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Daily Summary Form */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Daily Collection Summary</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Opening Balance */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Opening Balance</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Cash</label>
                    <input
                      type="number"
                      value={summaryData.openingBalance.cash}
                      onChange={(e) => handleInputChange('openingBalance', 'cash', parseFloat(e.target.value) || 0)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Online</label>
                    <input
                      type="number"
                      value={summaryData.openingBalance.online}
                      onChange={(e) => handleInputChange('openingBalance', 'online', parseFloat(e.target.value) || 0)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Others</label>
                    <input
                      type="number"
                      value={summaryData.openingBalance.others}
                      onChange={(e) => handleInputChange('openingBalance', 'others', parseFloat(e.target.value) || 0)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Fee Collected */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Fee Collected (+)</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Cash</label>
                    <input
                      type="number"
                      value={summaryData.feeCollected.cash}
                      onChange={(e) => handleInputChange('feeCollected', 'cash', parseFloat(e.target.value) || 0)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Online</label>
                    <input
                      type="number"
                      value={summaryData.feeCollected.online}
                      onChange={(e) => handleInputChange('feeCollected', 'online', parseFloat(e.target.value) || 0)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Others</label>
                    <input
                      type="number"
                      value={summaryData.feeCollected.others}
                      onChange={(e) => handleInputChange('feeCollected', 'others', parseFloat(e.target.value) || 0)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Fee Refunded */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Fee Refunded (-)</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Cash</label>
                    <input
                      type="number"
                      value={summaryData.feeRefunded.cash}
                      onChange={(e) => handleInputChange('feeRefunded', 'cash', parseFloat(e.target.value) || 0)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Online</label>
                    <input
                      type="number"
                      value={summaryData.feeRefunded.online}
                      onChange={(e) => handleInputChange('feeRefunded', 'online', parseFloat(e.target.value) || 0)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Others</label>
                    <input
                      type="number"
                      value={summaryData.feeRefunded.others}
                      onChange={(e) => handleInputChange('feeRefunded', 'others', parseFloat(e.target.value) || 0)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Payments Made */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Payments Made (expenses) (-)</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Cash</label>
                    <input
                      type="number"
                      value={summaryData.paymentsMade.cash}
                      onChange={(e) => handleInputChange('paymentsMade', 'cash', parseFloat(e.target.value) || 0)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Online</label>
                    <input
                      type="number"
                      value={summaryData.paymentsMade.online}
                      onChange={(e) => handleInputChange('paymentsMade', 'online', parseFloat(e.target.value) || 0)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Others</label>
                    <input
                      type="number"
                      value={summaryData.paymentsMade.others}
                      onChange={(e) => handleInputChange('paymentsMade', 'others', parseFloat(e.target.value) || 0)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Salaries Paid */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Salaries Paid (-)</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Cash</label>
                    <input
                      type="number"
                      value={summaryData.salariesPaid.cash}
                      onChange={(e) => handleInputChange('salariesPaid', 'cash', parseFloat(e.target.value) || 0)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Online</label>
                    <input
                      type="number"
                      value={summaryData.salariesPaid.online}
                      onChange={(e) => handleInputChange('salariesPaid', 'online', parseFloat(e.target.value) || 0)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Others</label>
                    <input
                      type="number"
                      value={summaryData.salariesPaid.others}
                      onChange={(e) => handleInputChange('salariesPaid', 'others', parseFloat(e.target.value) || 0)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Amount Hand over/Deposited in Bank */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Amount Hand over/Deposited in Bank (-)</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Cash</label>
                    <input
                      type="number"
                      value={summaryData.amountDeposited.cash}
                      onChange={(e) => handleInputChange('amountDeposited', 'cash', parseFloat(e.target.value) || 0)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Online</label>
                    <input
                      type="number"
                      value={summaryData.amountDeposited.online}
                      onChange={(e) => handleInputChange('amountDeposited', 'online', parseFloat(e.target.value) || 0)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Others</label>
                    <input
                      type="number"
                      value={summaryData.amountDeposited.others}
                      onChange={(e) => handleInputChange('amountDeposited', 'others', parseFloat(e.target.value) || 0)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Closing Balance */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Closing Balance</h3>
                <div className="text-2xl font-bold text-gray-900">
                  ₹{closingBalance.toLocaleString()}
                </div>
              </div>

              <div className="flex justify-end space-x-4 pt-6 border-t">
                <button
                  type="button"
                  onClick={() => router.back()}
                  className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Save Summary
                </button>
              </div>
            </form>
          </div>

          {/* Vouchers List */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">List of Receipt Vouchers/Refund Voucher/Payment Voucher</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Voucher Number
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Student/Vendor Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {vouchers.map((voucher, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {voucher.voucherNumber}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {voucher.studentName || voucher.vendorName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        ₹{voucher.amount.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          voucher.type === 'Fee Collection' ? 'bg-green-100 text-green-800' :
                          voucher.type === 'Payment Voucher' ? 'bg-blue-100 text-blue-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {voucher.type}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}