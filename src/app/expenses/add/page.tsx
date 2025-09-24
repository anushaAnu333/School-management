"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AddExpensePage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    paymentVoucherNumber: `PV-${Date.now()}`,
    vendorName: '',
    taxableAmount: '',
    gstRate: '',
    gstAmount: '',
    totalInvoiceValue: '',
    natureOfExpenses: ''
  });

  const [showVendorForm, setShowVendorForm] = useState(false);
  const [newVendor, setNewVendor] = useState({
    name: '',
    contact: '',
    address: '',
    gstNumber: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Calculate GST and total when taxable amount or GST rate changes
    if (name === 'taxableAmount' || name === 'gstRate') {
      const taxable = parseFloat(formData.taxableAmount) || 0;
      const gstRate = parseFloat(formData.gstRate) || 0;
      const gstAmount = (taxable * gstRate) / 100;
      const total = taxable + gstAmount;
      
      setFormData(prev => ({
        ...prev,
        gstAmount: gstAmount.toString(),
        totalInvoiceValue: total.toString()
      }));
    }
  };

  const handleVendorChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewVendor(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Expense Data:', formData);
    alert('Expense added successfully!');
    router.push('/expenses');
  };

  const handleVendorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('New Vendor:', newVendor);
    alert('Vendor added successfully!');
    setShowVendorForm(false);
    setFormData(prev => ({
      ...prev,
      vendorName: newVendor.name
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Make a Payment (Except Salaries)</h1>
          <p className="text-gray-600 mt-2">Record school expenses and vendor payments</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Payment Voucher Number
                </label>
                <input
                  type="text"
                  name="paymentVoucherNumber"
                  value={formData.paymentVoucherNumber}
                  readOnly
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Vendor Name (search) <span className="text-red-500">*</span>
                </label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    name="vendorName"
                    value={formData.vendorName}
                    onChange={handleInputChange}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Search or enter vendor name"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowVendorForm(true)}
                    className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                  >
                    New
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Taxable Amount <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="taxableAmount"
                  value={formData.taxableAmount}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter taxable amount"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  GST Rate (%) <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="gstRate"
                  value={formData.gstRate}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter GST rate"
                  step="0.01"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  GST Amount
                </label>
                <input
                  type="number"
                  name="gstAmount"
                  value={formData.gstAmount}
                  readOnly
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Total Invoice Value
                </label>
                <input
                  type="number"
                  name="totalInvoiceValue"
                  value={formData.totalInvoiceValue}
                  readOnly
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nature of Expenses <span className="text-red-500">*</span>
                </label>
                <select
                  name="natureOfExpenses"
                  value={formData.natureOfExpenses}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
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
                Add Expense
              </button>
            </div>
          </form>
        </div>

        {/* New Vendor Modal */}
        {showVendorForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
              <h3 className="text-lg font-semibold mb-4">Create New Vendor</h3>
              <form onSubmit={handleVendorSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Vendor Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={newVendor.name}
                    onChange={handleVendorChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    name="contact"
                    value={newVendor.contact}
                    onChange={handleVendorChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address
                  </label>
                  <textarea
                    name="address"
                    value={newVendor.address}
                    onChange={handleVendorChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={3}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    GST Number
                  </label>
                  <input
                    type="text"
                    name="gstNumber"
                    value={newVendor.gstNumber}
                    onChange={handleVendorChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setShowVendorForm(false)}
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                  >
                    Add Vendor
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}