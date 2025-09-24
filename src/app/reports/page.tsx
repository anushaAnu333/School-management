"use client"

import React, { useState } from 'react';

export default function ReportsPage() {
  const [selectedReport, setSelectedReport] = useState('fee-summary');
  const [selectedClass, setSelectedClass] = useState('All Classes');
  const [selectedSection, setSelectedSection] = useState('All Sections');
  const [academicYear, setAcademicYear] = useState('2024-25');

  // Sample data for reports
  const feeSummaryData = [
    { class: 'Class 1', feeReceivable: 150000, feeReceived: 120000, outstanding: 30000 },
    { class: 'Class 2', feeReceivable: 160000, feeReceived: 140000, outstanding: 20000 },
    { class: 'Class 3', feeReceivable: 170000, feeReceived: 150000, outstanding: 20000 },
    { class: 'Class 4', feeReceivable: 180000, feeReceived: 160000, outstanding: 20000 },
    { class: 'Class 5', feeReceivable: 190000, feeReceived: 170000, outstanding: 20000 },
    { class: 'Class 6', feeReceivable: 200000, feeReceived: 180000, outstanding: 20000 },
    { class: 'Class 7', feeReceivable: 210000, feeReceived: 190000, outstanding: 20000 },
    { class: 'Class 8', feeReceivable: 220000, feeReceived: 200000, outstanding: 20000 },
    { class: 'Class 9', feeReceivable: 230000, feeReceived: 210000, outstanding: 20000 },
    { class: 'Class 10', feeReceivable: 240000, feeReceived: 220000, outstanding: 20000 }
  ];

  const admissionSummaryData = [
    { class: 'Class 1', totalAdmissions: 45, newAdmissions: 12, schoolTransfers: 2 },
    { class: 'Class 2', totalAdmissions: 48, newAdmissions: 15, schoolTransfers: 1 },
    { class: 'Class 3', totalAdmissions: 52, newAdmissions: 18, schoolTransfers: 3 },
    { class: 'Class 4', totalAdmissions: 50, newAdmissions: 14, schoolTransfers: 2 },
    { class: 'Class 5', totalAdmissions: 47, newAdmissions: 11, schoolTransfers: 1 },
    { class: 'Class 6', totalAdmissions: 49, newAdmissions: 13, schoolTransfers: 2 },
    { class: 'Class 7', totalAdmissions: 46, newAdmissions: 10, schoolTransfers: 1 },
    { class: 'Class 8', totalAdmissions: 44, newAdmissions: 9, schoolTransfers: 2 },
    { class: 'Class 9', totalAdmissions: 42, newAdmissions: 8, schoolTransfers: 1 },
    { class: 'Class 10', totalAdmissions: 40, newAdmissions: 7, schoolTransfers: 1 }
  ];

  const expenseSummaryData = [
    { category: 'Electricity & Water', amount: 45000, month: 'January 2024' },
    { category: 'Repairs & Maintenance', amount: 35000, month: 'January 2024' },
    { category: 'Printing & Stationery', amount: 25000, month: 'January 2024' },
    { category: 'Transport Fuel & Maintenance', amount: 30000, month: 'January 2024' },
    { category: 'Software Subscriptions', amount: 15000, month: 'January 2024' },
    { category: 'Audit & Legal Fees', amount: 20000, month: 'January 2024' },
    { category: 'Miscellaneous / Contingency', amount: 10000, month: 'January 2024' },
    { category: 'PT/PF/GST', amount: 50000, month: 'January 2024' }
  ];

  const totalFeeReceivable = feeSummaryData.reduce((sum, item) => sum + item.feeReceivable, 0);
  const totalFeeReceived = feeSummaryData.reduce((sum, item) => sum + item.feeReceived, 0);
  const totalOutstanding = feeSummaryData.reduce((sum, item) => sum + item.outstanding, 0);

  const renderFeeSummaryReport = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900">Fee Receivable Summary</h3>
          <p className="text-2xl font-bold text-blue-600">₹{totalFeeReceivable.toLocaleString()}</p>
        </div>
        <div className="bg-green-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-green-900">Fee Collection Summary</h3>
          <p className="text-2xl font-bold text-green-600">₹{totalFeeReceived.toLocaleString()}</p>
        </div>
        <div className="bg-red-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-red-900">Fees Outstanding/Dues Report</h3>
          <p className="text-2xl font-bold text-red-600">₹{totalOutstanding.toLocaleString()}</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Fee Summary by Class</h2>
          <p className="text-gray-600">Reports Based on multiple filters (Class wise/section wise/academic year wise)</p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Particulars
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fee Receivable
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fee Received
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Outstanding
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {feeSummaryData.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {item.class}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ₹{item.feeReceivable.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ₹{item.feeReceived.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ₹{item.outstanding.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot className="bg-gray-50">
              <tr className="font-semibold">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Total</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  ₹{totalFeeReceivable.toLocaleString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  ₹{totalFeeReceived.toLocaleString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  ₹{totalOutstanding.toLocaleString()}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );

  const renderAdmissionSummaryReport = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Admissions/Students Summary</h2>
          <p className="text-gray-600">Total Admissions, New Admissions, School Transfers (Needed class Wise)</p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Class
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total Admissions
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  New Admissions
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  School Transfers
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {admissionSummaryData.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {item.class}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {item.totalAdmissions}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {item.newAdmissions}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {item.schoolTransfers}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderExpenseSummaryReport = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Expense Summary</h2>
          <p className="text-gray-600">Category wise, Month/year/till date</p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Month
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {expenseSummaryData.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {item.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ₹{item.amount.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {item.month}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Reports & Analytics</h1>
          <p className="text-gray-600 mt-2">Comprehensive financial and student reports</p>
        </div>

        {/* Report Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Report Type</label>
              <select
                value={selectedReport}
                onChange={(e) => setSelectedReport(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="fee-summary">Fee Summary</option>
                <option value="admission-summary">Admission Summary</option>
                <option value="expense-summary">Expense Summary</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Class</label>
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="All Classes">All Classes</option>
                <option value="Class 1">Class 1</option>
                <option value="Class 2">Class 2</option>
                <option value="Class 3">Class 3</option>
                <option value="Class 4">Class 4</option>
                <option value="Class 5">Class 5</option>
                <option value="Class 6">Class 6</option>
                <option value="Class 7">Class 7</option>
                <option value="Class 8">Class 8</option>
                <option value="Class 9">Class 9</option>
                <option value="Class 10">Class 10</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Section</label>
              <select
                value={selectedSection}
                onChange={(e) => setSelectedSection(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="All Sections">All Sections</option>
                <option value="A">Section A</option>
                <option value="B">Section B</option>
                <option value="C">Section C</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Academic Year</label>
              <select
                value={academicYear}
                onChange={(e) => setAcademicYear(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="2024-25">2024-25</option>
                <option value="2023-24">2023-24</option>
                <option value="2022-23">2022-23</option>
              </select>
            </div>
          </div>
        </div>

        {/* Report Content */}
        {selectedReport === 'fee-summary' && renderFeeSummaryReport()}
        {selectedReport === 'admission-summary' && renderAdmissionSummaryReport()}
        {selectedReport === 'expense-summary' && renderExpenseSummaryReport()}

        {/* Export Options */}
        <div className="mt-6 flex justify-end space-x-4">
          <button className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors">
            Print Report
          </button>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Export to Excel
          </button>
          <button className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
            Export to PDF
          </button>
        </div>
      </div>
    </div>
  );
}
