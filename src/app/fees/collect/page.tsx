"use client"

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { getStudentByAdmissionNumber } from '@/data/students';

export default function FeeCollectionPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    studentAdmissionNumber: '',
    studentName: '',
    studentClass: '',
    section: '',
    totalFees: 0,
    feesPaidTillDate: 0,
    currentMonthFee: 0,
    feesPaid: 0,
    paymentMode: 'Cash',
    transactionReference: '',
    remainingDue: 0,
    paymentPeriod: 'Monthly',
    selectedMonth: new Date().toISOString().slice(0, 7) // YYYY-MM format
  });

  const [showReceipt, setShowReceipt] = useState(false);
  const [receiptNumber] = useState(`RCP-${Date.now()}`);

  // Get student from URL params
  useEffect(() => {
    const studentParam = searchParams.get('student');
    if (studentParam) {
      const student = getStudentByAdmissionNumber(studentParam);
      if (student) {
        setFormData(prev => ({
          ...prev,
          studentAdmissionNumber: student.admissionNumber,
          studentName: student.name,
          studentClass: student.class,
          section: student.section,
          totalFees: student.totalFees,
          feesPaidTillDate: student.feesPaidTillDate,
          currentMonthFee: student.monthlyFee,
          remainingDue: student.totalFees - student.feesPaidTillDate
        }));
      }
    }
  }, [searchParams]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Auto-populate student details when admission number is entered
    if (name === 'studentAdmissionNumber') {
      const student = getStudentByAdmissionNumber(value);
      if (student) {
        setFormData(prev => ({
          ...prev,
          studentName: student.name,
          studentClass: student.class,
          section: student.section,
          totalFees: student.totalFees,
          feesPaidTillDate: student.feesPaidTillDate,
          currentMonthFee: student.monthlyFee,
          remainingDue: student.totalFees - student.feesPaidTillDate
        }));
      }
    }

    // Calculate remaining due when fees paid changes
    if (name === 'feesPaid') {
      const paidAmount = parseFloat(value) || 0;
      const totalFees = formData.totalFees;
      const feesPaidTillDate = formData.feesPaidTillDate;
      const newTotalPaid = feesPaidTillDate + paidAmount;
      const remaining = totalFees - newTotalPaid;
      
      setFormData(prev => ({
        ...prev,
        remainingDue: remaining,
        feesPaid: paidAmount
      }));

      // Show warning if payment exceeds total fees
      if (newTotalPaid > totalFees) {
        alert('Warning: Total payment exceeds annual fee!');
      }
    }

    // Update current month fee when payment period changes
    if (name === 'paymentPeriod') {
      const student = getStudentByAdmissionNumber(formData.studentAdmissionNumber);
      if (student) {
        const currentMonthFee = value === 'Monthly' ? student.monthlyFee : student.monthlyFee * 3;
        setFormData(prev => ({
          ...prev,
          currentMonthFee: currentMonthFee
        }));
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Update monthly status for the selected month
    const paymentData = {
      ...formData,
      paymentDate: new Date().toISOString().split('T')[0],
      monthlyStatus: {
        month: new Date(formData.selectedMonth).toLocaleDateString('en-US', { month: 'long' }),
        year: new Date(formData.selectedMonth).getFullYear(),
        amount: formData.feesPaid,
        status: 'paid' as const,
        paymentMethod: formData.paymentMode,
        transactionReference: formData.transactionReference
      }
    };
    
    console.log('Fee Collection Data:', paymentData);
    console.log(`Updated monthly status for ${paymentData.monthlyStatus.month} ${paymentData.monthlyStatus.year}`);
    
    setShowReceipt(true);
  };

  const printReceipt = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Fee Collection</h1>
          <p className="text-gray-600 mt-2">Collect student fees and generate receipts</p>
        </div>

        {!showReceipt ? (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Student Admission Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="studentAdmissionNumber"
                    value={formData.studentAdmissionNumber}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter admission number"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">Should Auto Populate</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Student Name
                  </label>
                  <input
                    type="text"
                    name="studentName"
                    value={formData.studentName}
                    readOnly
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Class
                  </label>
                  <input
                    type="text"
                    name="studentClass"
                    value={formData.studentClass}
                    readOnly
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Section
                  </label>
                  <input
                    type="text"
                    name="section"
                    value={formData.section}
                    readOnly
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Total Annual Fee
                  </label>
                  <input
                    type="number"
                    name="totalFees"
                    value={formData.totalFees}
                    readOnly
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Fees Paid Till Date
                  </label>
                  <input
                    type="number"
                    name="feesPaidTillDate"
                    value={formData.feesPaidTillDate}
                    readOnly
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Payment Period <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="paymentPeriod"
                    value={formData.paymentPeriod}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="Monthly">Monthly</option>
                    <option value="Quarterly">Quarterly (3 months)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Period Fee
                  </label>
                  <input
                    type="number"
                    name="currentMonthFee"
                    value={formData.currentMonthFee}
                    readOnly
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Month/Period <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="month"
                    name="selectedMonth"
                    value={formData.selectedMonth}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Fees Paid (Amount in Rs) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="feesPaid"
                    value={formData.feesPaid}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter amount"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Suggested: ₹{formData.currentMonthFee} for {formData.paymentPeriod.toLowerCase()} payment
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Payment Mode <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="paymentMode"
                    value={formData.paymentMode}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="Cash">Cash</option>
                    <option value="Online">Online</option>
                  </select>
                </div>

                {formData.paymentMode === 'Online' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Transaction Reference Number/IMPS/NEFT/RTGS
                    </label>
                    <input
                      type="text"
                      name="transactionReference"
                      value={formData.transactionReference}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter transaction reference"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Remaining Due
                  </label>
                  <input
                    type="number"
                    name="remainingDue"
                    value={formData.remainingDue}
                    readOnly
                    className={`w-full px-3 py-2 border rounded-md ${
                      formData.remainingDue > 0 ? 'border-red-300 bg-red-50' : 'border-green-300 bg-green-50'
                    }`}
                  />
                  <p className="text-xs text-gray-500 mt-1">Should Appear</p>
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
                  Collect Payment
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Receipt Voucher</h2>
              <p className="text-gray-600">Greenwood High School</p>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Receipt Number (Auto Number)</label>
                  <p className="text-lg font-semibold">{receiptNumber}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Date</label>
                  <p className="text-lg font-semibold">{new Date().toLocaleDateString()}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Student Name</label>
                  <p className="text-lg font-semibold">{formData.studentName}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Student Class : Section</label>
                  <p className="text-lg font-semibold">{formData.studentClass} : {formData.section}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Total Annual Fee</label>
                  <p className="text-lg font-semibold">₹{formData.totalFees.toLocaleString()}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Paid Till Date</label>
                  <p className="text-lg font-semibold">₹{formData.feesPaidTillDate.toLocaleString()}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Paid Now ({formData.selectedMonth})</label>
                  <p className="text-lg font-semibold">₹{formData.feesPaid.toLocaleString()}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Remaining Due</label>
                  <p className="text-lg font-semibold">₹{formData.remainingDue.toLocaleString()}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Payment Period</label>
                  <p className="text-lg font-semibold">{formData.paymentPeriod}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Period Fee</label>
                  <p className="text-lg font-semibold">₹{formData.currentMonthFee.toLocaleString()}</p>
                </div>
              </div>

              <div className="mt-8 space-y-6">
              </div>
            </div>

            <div className="flex justify-end space-x-4 mt-8 pt-6 border-t">
              <button
                onClick={() => setShowReceipt(false)}
                className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Back to Form
              </button>
              <button
                onClick={printReceipt}
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Print Receipt
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}