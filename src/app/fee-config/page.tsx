"use client"

import React, { useState } from 'react';

export default function FeeConfigPage() {
  const [formData, setFormData] = useState({
    academicYear: '2024-25',
    class5Fee: 3600,
    class6Fee: 4000,
    class7Fee: 4200,
    class8Fee: 4500,
    class9Fee: 4800,
    class10Fee: 5000,
    lateFeeAmount: 100,
    lateFeePercentage: 2,
    discountPercentage: 5,
    discountCriteria: 'Early Payment'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Fee Configuration:', formData);
    alert('Fee configuration saved successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900">Fee Master Configuration</h1>
          <p className="mt-1 text-sm text-gray-600">Configure fee structure for different classes and academic year</p>
        </div>

        {/* Fee Configuration Form */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Academic Year */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Academic Year
              </label>
              <input
                type="text"
                name="academicYear"
                value={formData.academicYear}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
                placeholder="e.g., 2024-25"
              />
            </div>

            {/* Class-wise Fee Structure */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Class-wise Monthly Fee Structure</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { class: 'Class 5', field: 'class5Fee', amount: formData.class5Fee },
                  { class: 'Class 6', field: 'class6Fee', amount: formData.class6Fee },
                  { class: 'Class 7', field: 'class7Fee', amount: formData.class7Fee },
                  { class: 'Class 8', field: 'class8Fee', amount: formData.class8Fee },
                  { class: 'Class 9', field: 'class9Fee', amount: formData.class9Fee },
                  { class: 'Class 10', field: 'class10Fee', amount: formData.class10Fee }
                ].map(({ class: className, field, amount }) => (
                  <div key={field}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {className} Monthly Fee (₹)
                    </label>
                    <input
                      type="number"
                      name={field}
                      value={amount}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
                      placeholder="Enter monthly fee"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Late Fee Configuration */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Late Fee Configuration</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Late Fee Amount (₹)
                  </label>
                  <input
                    type="number"
                    name="lateFeeAmount"
                    value={formData.lateFeeAmount}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
                    placeholder="Enter late fee amount"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Late Fee Percentage (%)
                  </label>
                  <input
                    type="number"
                    name="lateFeePercentage"
                    value={formData.lateFeePercentage}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
                    placeholder="Enter late fee percentage"
                  />
                </div>
              </div>
            </div>

            {/* Discount Configuration */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Discount Configuration</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Discount Percentage (%)
                  </label>
                  <input
                    type="number"
                    name="discountPercentage"
                    value={formData.discountPercentage}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
                    placeholder="Enter discount percentage"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Discount Criteria
                  </label>
                  <select
                    name="discountCriteria"
                    value={formData.discountCriteria}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
                  >
                    <option value="Early Payment">Early Payment</option>
                    <option value="Sibling Discount">Sibling Discount</option>
                    <option value="Merit Scholarship">Merit Scholarship</option>
                    <option value="Financial Aid">Financial Aid</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Fee Structure Summary */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Fee Structure Summary</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { class: 'Class 5', monthly: formData.class5Fee, annual: formData.class5Fee * 10 },
                  { class: 'Class 6', monthly: formData.class6Fee, annual: formData.class6Fee * 10 },
                  { class: 'Class 7', monthly: formData.class7Fee, annual: formData.class7Fee * 10 },
                  { class: 'Class 8', monthly: formData.class8Fee, annual: formData.class8Fee * 10 },
                  { class: 'Class 9', monthly: formData.class9Fee, annual: formData.class9Fee * 10 },
                  { class: 'Class 10', monthly: formData.class10Fee, annual: formData.class10Fee * 10 }
                ].map(({ class: className, monthly, annual }) => (
                  <div key={className} className="bg-white rounded-lg p-4 border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2">{className}</h4>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Monthly:</span>
                        <span className="font-medium">₹{monthly.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Annual:</span>
                        <span className="font-medium">₹{annual.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-4 pt-6 border-t">
              <button
                type="button"
                className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-slate-700 text-white rounded-md hover:bg-slate-800 transition-colors"
              >
                Save Configuration
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

