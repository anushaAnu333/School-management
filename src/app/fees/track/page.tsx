"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface MonthlyFeeStatus {
  month: string;
  year: number;
  amount: number;
  status: 'paid' | 'pending' | 'overdue';
  paymentDate?: string;
  paymentMethod?: string;
  lateFee?: number;
}

interface StudentFeeRecord {
  id: string;
  studentName: string;
  studentId: string;
  class: string;
  section: string;
  monthlyFee: number;
  academicYear: string;
  monthlyStatus: MonthlyFeeStatus[];
}

export default function FeeTrackingPage() {
  const [selectedStudent, setSelectedStudent] = useState<string>('');
  const [selectedClass, setSelectedClass] = useState('All Classes');
  const [selectedMonth, setSelectedMonth] = useState(new Date().toISOString().slice(0, 7));

  // Sample student fee records with month-by-month tracking
  const studentFeeRecords: StudentFeeRecord[] = [
    {
      id: '1',
      studentName: 'Rajesh Kumar',
      studentId: 'STU001',
      class: 'Class 10',
      section: 'A',
      monthlyFee: 5000,
      academicYear: '2024-25',
      monthlyStatus: [
        { month: 'April', year: 2024, amount: 5000, status: 'paid', paymentDate: '2024-04-15', paymentMethod: 'Online' },
        { month: 'May', year: 2024, amount: 5000, status: 'paid', paymentDate: '2024-05-10', paymentMethod: 'Cash' },
        { month: 'June', year: 2024, amount: 5000, status: 'paid', paymentDate: '2024-06-12', paymentMethod: 'Online' },
        { month: 'July', year: 2024, amount: 5000, status: 'paid', paymentDate: '2024-07-08', paymentMethod: 'Cash' },
        { month: 'August', year: 2024, amount: 5000, status: 'paid', paymentDate: '2024-08-14', paymentMethod: 'Online' },
        { month: 'September', year: 2024, amount: 5000, status: 'pending', lateFee: 0 },
        { month: 'October', year: 2024, amount: 5000, status: 'pending', lateFee: 0 },
        { month: 'November', year: 2024, amount: 5000, status: 'pending', lateFee: 0 },
        { month: 'December', year: 2024, amount: 5000, status: 'pending', lateFee: 0 },
        { month: 'January', year: 2025, amount: 5000, status: 'pending', lateFee: 0 },
        { month: 'February', year: 2025, amount: 5000, status: 'pending', lateFee: 0 },
        { month: 'March', year: 2025, amount: 5000, status: 'pending', lateFee: 0 }
      ]
    },
    {
      id: '2',
      studentName: 'Priya Sharma',
      studentId: 'STU002',
      class: 'Class 8',
      section: 'B',
      monthlyFee: 4500,
      academicYear: '2024-25',
      monthlyStatus: [
        { month: 'April', year: 2024, amount: 4500, status: 'paid', paymentDate: '2024-04-20', paymentMethod: 'Cash' },
        { month: 'May', year: 2024, amount: 4500, status: 'paid', paymentDate: '2024-05-15', paymentMethod: 'Online' },
        { month: 'June', year: 2024, amount: 4500, status: 'paid', paymentDate: '2024-06-18', paymentMethod: 'Cash' },
        { month: 'July', year: 2024, amount: 4500, status: 'paid', paymentDate: '2024-07-22', paymentMethod: 'Online' },
        { month: 'August', year: 2024, amount: 4500, status: 'overdue', lateFee: 500, paymentDate: '2024-09-05', paymentMethod: 'Cash' },
        { month: 'September', year: 2024, amount: 4500, status: 'pending', lateFee: 0 },
        { month: 'October', year: 2024, amount: 4500, status: 'pending', lateFee: 0 },
        { month: 'November', year: 2024, amount: 4500, status: 'pending', lateFee: 0 },
        { month: 'December', year: 2024, amount: 4500, status: 'pending', lateFee: 0 },
        { month: 'January', year: 2025, amount: 4500, status: 'pending', lateFee: 0 },
        { month: 'February', year: 2025, amount: 4500, status: 'pending', lateFee: 0 },
        { month: 'March', year: 2025, amount: 4500, status: 'pending', lateFee: 0 }
      ]
    },
    {
      id: '3',
      studentName: 'Arjun Singh',
      studentId: 'STU003',
      class: 'Class 6',
      section: 'A',
      monthlyFee: 4000,
      academicYear: '2024-25',
      monthlyStatus: [
        { month: 'April', year: 2024, amount: 4000, status: 'pending', lateFee: 0 },
        { month: 'May', year: 2024, amount: 4000, status: 'pending', lateFee: 0 },
        { month: 'June', year: 2024, amount: 4000, status: 'pending', lateFee: 0 },
        { month: 'July', year: 2024, amount: 4000, status: 'pending', lateFee: 0 },
        { month: 'August', year: 2024, amount: 4000, status: 'pending', lateFee: 0 },
        { month: 'September', year: 2024, amount: 4000, status: 'pending', lateFee: 0 },
        { month: 'October', year: 2024, amount: 4000, status: 'pending', lateFee: 0 },
        { month: 'November', year: 2024, amount: 4000, status: 'pending', lateFee: 0 },
        { month: 'December', year: 2024, amount: 4000, status: 'pending', lateFee: 0 },
        { month: 'January', year: 2025, amount: 4000, status: 'pending', lateFee: 0 },
        { month: 'February', year: 2025, amount: 4000, status: 'pending', lateFee: 0 },
        { month: 'March', year: 2025, amount: 4000, status: 'pending', lateFee: 0 }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'paid':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'overdue':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'paid':
        return '✓';
      case 'pending':
        return '⏳';
      case 'overdue':
        return '⚠️';
      default:
        return '❓';
    }
  };

  const filteredStudents = studentFeeRecords.filter(student => {
    const matchesClass = selectedClass === 'All Classes' || student.class === selectedClass;
    return matchesClass;
  });

  const selectedStudentRecord = studentFeeRecords.find(s => s.id === selectedStudent);

  const getMonthlySummary = () => {
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
                       'July', 'August', 'September', 'October', 'November', 'December'];
    
    const summary = {
      totalStudents: filteredStudents.length,
      paidThisMonth: 0,
      pendingThisMonth: 0,
      overdueThisMonth: 0,
      totalCollected: 0,
      totalPending: 0
    };

    filteredStudents.forEach(student => {
      const currentMonthStatus = student.monthlyStatus.find(
        status => status.month === monthNames[currentMonth] && status.year === currentYear
      );
      
      if (currentMonthStatus) {
        if (currentMonthStatus.status === 'paid') {
          summary.paidThisMonth++;
          summary.totalCollected += currentMonthStatus.amount;
        } else if (currentMonthStatus.status === 'pending') {
          summary.pendingThisMonth++;
          summary.totalPending += currentMonthStatus.amount;
        } else if (currentMonthStatus.status === 'overdue') {
          summary.overdueThisMonth++;
          summary.totalPending += currentMonthStatus.amount;
        }
      }
    });

    return summary;
  };

  const summary = getMonthlySummary();

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Fee Tracking</h1>
          <p className="text-gray-600 mt-2">Track monthly fee payments for each student</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">Total Students</h3>
                <p className="text-2xl font-bold text-blue-600">{summary.totalStudents}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">Paid This Month</h3>
                <p className="text-2xl font-bold text-green-600">{summary.paidThisMonth}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">Pending</h3>
                <p className="text-2xl font-bold text-yellow-600">{summary.pendingThisMonth}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">Overdue</h3>
                <p className="text-2xl font-bold text-red-600">{summary.overdueThisMonth}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Class</label>
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="All Classes">All Classes</option>
                <option value="Class 6">Class 6</option>
                <option value="Class 8">Class 8</option>
                <option value="Class 10">Class 10</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Student</label>
              <select
                value={selectedStudent}
                onChange={(e) => setSelectedStudent(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Student</option>
                {filteredStudents.map(student => (
                  <option key={student.id} value={student.id}>
                    {student.studentName} ({student.studentId})
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Month</label>
              <input
                type="month"
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Student List */}
        {!selectedStudent ? (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">All Students Fee Status</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Student
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Class
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Monthly Fee
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Paid Months
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Pending Months
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Total Paid
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredStudents.map((student) => {
                    const paidMonths = student.monthlyStatus.filter(s => s.status === 'paid').length;
                    const pendingMonths = student.monthlyStatus.filter(s => s.status === 'pending' || s.status === 'overdue').length;
                    const totalPaid = student.monthlyStatus
                      .filter(s => s.status === 'paid')
                      .reduce((sum, s) => sum + s.amount, 0);
                    
                    return (
                      <tr key={student.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                                <span className="text-sm font-medium text-blue-700">
                                  {student.studentName.split(' ').map(n => n[0]).join('')}
                                </span>
                              </div>
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{student.studentName}</div>
                              <div className="text-sm text-gray-500">{student.studentId}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{student.class}</div>
                          <div className="text-sm text-gray-500">Section {student.section}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          ₹{student.monthlyFee.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-medium">
                          {paidMonths} months
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600 font-medium">
                          {pendingMonths} months
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          ₹{totalPaid.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <button
                            onClick={() => setSelectedStudent(student.id)}
                            className="text-blue-600 hover:text-blue-900 text-sm font-medium"
                          >
                            View Details
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    {selectedStudentRecord?.studentName} - Monthly Fee Status
                  </h2>
                  <p className="text-gray-600">
                    {selectedStudentRecord?.class} - Section {selectedStudentRecord?.section} | 
                    Monthly Fee: ₹{selectedStudentRecord?.monthlyFee.toLocaleString()}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedStudent('')}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Back to List
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {selectedStudentRecord?.monthlyStatus.map((monthStatus, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border-2 ${getStatusColor(monthStatus.status)}`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">{monthStatus.month} {monthStatus.year}</h3>
                      <span className="text-lg">{getStatusIcon(monthStatus.status)}</span>
                    </div>
                    <div className="text-sm">
                      <p className="font-medium">Amount: ₹{monthStatus.amount.toLocaleString()}</p>
                      {monthStatus.paymentDate && (
                        <p className="text-gray-600">Paid: {monthStatus.paymentDate}</p>
                      )}
                      {monthStatus.paymentMethod && (
                        <p className="text-gray-600">Method: {monthStatus.paymentMethod}</p>
                      )}
                      {monthStatus.lateFee && monthStatus.lateFee > 0 && (
                        <p className="text-red-600 font-medium">Late Fee: ₹{monthStatus.lateFee}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
