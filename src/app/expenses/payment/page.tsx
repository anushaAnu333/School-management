"use client"

import React, { useState } from 'react';
import { useSchoolData } from '@/context/SchoolDataContext';
import { useRouter } from 'next/navigation';

export default function MakePaymentPage() {
  const { data, dispatch } = useSchoolData();
  const router = useRouter();
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    paymentVoucherNumber: '',
    vendorName: '',
    taxableAmount: '',
    gstRate: '',
    gstAmount: '',
    totalInvoiceValue: '',
    natureOfExpenses: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newPayment = {
      id: Date.now().toString(),
      category: formData.natureOfExpenses,
      description: `Payment to ${formData.vendorName}`,
      amount: parseFloat(formData.totalInvoiceValue),
      vendor: formData.vendorName,
      date: formData.date,
      status: 'paid' as const,
      receipt: formData.paymentVoucherNumber
    };

    dispatch({ type: 'ADD_EXPENSE', payload: newPayment });
    router.push('/expenses');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const calculateGST = () => {
    const taxable = parseFloat(formData.taxableAmount || '0');
    const rate = parseFloat(formData.gstRate || '0');
    const gstAmount = (taxable * rate) / 100;
    const total = taxable + gstAmount;
    
    setFormData(prev => ({
      ...prev,
      gstAmount: gstAmount.toString(),
      totalInvoiceValue: total.toString()
    }));
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Make a Payment (Except Salaries)</h1>
        <p className="text-gray-600 mt-2">Record payment to vendors and suppliers</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Payment Voucher</h2>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date *
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Payment Voucher Number *
              </label>
              <input
                type="text"
                name="paymentVoucherNumber"
                value={formData.paymentVoucherNumber}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Auto generated"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Vendor Name *
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  name="vendorName"
                  value={formData.vendorName}
                  onChange={handleInputChange}
                  required
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Search vendor"
                />
                <button
                  type="button"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  New
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-1">(new: Create Vendor Option)</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Taxable Amount (₹) *
              </label>
              <input
                type="number"
                name="taxableAmount"
                value={formData.taxableAmount}
                onChange={(e) => {
                  handleInputChange(e);
                  calculateGST();
                }}
                required
                min="0"
                step="0.01"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter taxable amount"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                GST Rate (%) *
              </label>
              <input
                type="number"
                name="gstRate"
                value={formData.gstRate}
                onChange={(e) => {
                  handleInputChange(e);
                  calculateGST();
                }}
                required
                min="0"
                max="100"
                step="0.01"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter GST rate"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                GST Amount (₹)
              </label>
              <input
                type="number"
                name="gstAmount"
                value={formData.gstAmount}
                readOnly
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-100"
                placeholder="Auto calculated"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Total Invoice Value (₹)
              </label>
              <input
                type="number"
                name="totalInvoiceValue"
                value={formData.totalInvoiceValue}
                readOnly
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-100"
                placeholder="Auto calculated"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nature of Expenses *
              </label>
              <select
                name="natureOfExpenses"
                value={formData.natureOfExpenses}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select Nature of Expenses</option>
                <option value="Electricity & Water">Electricity & Water</option>
                <option value="Repairs & Maintenance">Repairs & Maintenance</option>
                <option value="Printing & Stationery">Printing & Stationery</option>
                <option value="Transport Fuel & Maintenance">Transport Fuel & Maintenance</option>
                <option value="Software Subscriptions">Software Subscriptions</option>
                <option value="Audit & Legal Fees">Audit & Legal Fees</option>
                <option value="Miscellaneous / Contingency">Miscellaneous / Contingency</option>
                <option value="PT/PF/GST">PT/PF/GST</option>
              </select>
            </div>
          </div>


          <div className="mt-8 flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => router.back()}
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Record Payment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
