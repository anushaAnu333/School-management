"use client"

import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { studentsData, getStudentById, Student } from '@/data/students';

export default function StudentDetailPage() {
  const router = useRouter();
  const params = useParams();
  const [student, setStudent] = useState<Student | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'payments' | 'documents'>('overview');

  useEffect(() => {
    const studentId = params.id as string;
    const foundStudent = getStudentById(studentId);
    if (foundStudent) {
      setStudent(foundStudent);
    } else {
      router.push('/students');
    }
  }, [params.id, router]);

  if (!student) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading student details...</p>
        </div>
      </div>
    );
  }

  const getStatusConfig = (status: string) => {
    switch (status) {
      case 'paid':
        return {
          bg: 'bg-emerald-50',
          text: 'text-emerald-700',
          border: 'border-emerald-200',
          label: 'Paid'
        };
      case 'partial':
        return {
          bg: 'bg-amber-50',
          text: 'text-amber-700',
          border: 'border-amber-200',
          label: 'Partial'
        };
      case 'pending':
        return {
          bg: 'bg-rose-50',
          text: 'text-rose-700',
          border: 'border-rose-200',
          label: 'Pending'
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

  const statusConfig = getStatusConfig(student.paymentStatus);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => router.back()}
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div>
                <h1 className="text-2xl font-semibold text-gray-900">{student.name}</h1>
                <p className="text-sm text-gray-600">{student.admissionNumber} • {student.class} - Section {student.section}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button 
                onClick={() => router.push(`/fees/collect?student=${student.admissionNumber}`)}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-slate-700 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Collect Payment
              </button>
              <button 
                onClick={() => router.push('/students')}
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
                All Students
              </button>
            </div>
          </div>
        </div>

        {/* Student Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Basic Info */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center">
                <span className="text-lg font-medium text-slate-700">
                  {student.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">{student.name}</h3>
                <p className="text-sm text-gray-500">{student.admissionNumber}</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Class</span>
                <span className="text-sm font-medium">{student.class}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Section</span>
                <span className="text-sm font-medium">{student.section}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Academic Year</span>
                <span className="text-sm font-medium">{student.academicYear}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Admission Date</span>
                <span className="text-sm font-medium">{new Date(student.admissionDate).toLocaleDateString()}</span>
              </div>
            </div>
          </div>

          {/* Fee Information */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Fee Information</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Total Annual Fee</span>
                <span className="text-sm font-semibold">₹{student.totalFees.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Monthly Fee</span>
                <span className="text-sm font-semibold">₹{student.monthlyFee.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Paid Amount</span>
                <span className="text-sm font-semibold text-emerald-600">₹{student.feesPaidTillDate.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Pending Amount</span>
                <span className="text-sm font-semibold text-rose-600">₹{student.pendingAmount.toLocaleString()}</span>
              </div>
              <div className="pt-2 border-t">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Payment Status</span>
                  <span className={`inline-flex px-3 py-1 text-xs font-medium rounded-full border ${statusConfig.bg} ${statusConfig.text} ${statusConfig.border}`}>
                    {statusConfig.label}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Progress */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Progress</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Overall Progress</span>
                  <span className="font-medium">{Math.round((student.feesPaidTillDate / student.totalFees) * 100)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-emerald-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(student.feesPaidTillDate / student.totalFees) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600">{student.monthsPaid}</div>
                  <div className="text-xs text-gray-500">Months Paid</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-rose-600">{student.monthsPending}</div>
                  <div className="text-xs text-gray-500">Months Pending</div>
                </div>
              </div>

              {student.lastPaymentDate && (
                <div className="pt-2 border-t">
                  <div className="text-sm text-gray-600">Last Payment</div>
                  <div className="text-sm font-medium">{new Date(student.lastPaymentDate).toLocaleDateString()}</div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg border border-gray-200 mb-6">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8 px-6">
              {[
                { id: 'overview', name: 'Overview', icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
                { id: 'payments', name: 'Payment History', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1' },
                { id: 'documents', name: 'Documents', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-slate-500 text-slate-600'
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
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-gray-500">Full Name</label>
                        <p className="text-sm text-gray-900">{student.name}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-500">Date of Birth</label>
                        <p className="text-sm text-gray-900">{new Date(student.dateOfBirth).toLocaleDateString()}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-500">Address</label>
                        <p className="text-sm text-gray-900">{student.address}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-gray-500">Father's Name</label>
                        <p className="text-sm text-gray-900">{student.fatherName}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-500">Father's Contact</label>
                        <p className="text-sm text-gray-900">{student.fatherContact}</p>
                      </div>
                      {student.motherName && (
                        <div>
                          <label className="text-sm font-medium text-gray-500">Mother's Name</label>
                          <p className="text-sm text-gray-900">{student.motherName}</p>
                        </div>
                      )}
                      {student.motherContact && (
                        <div>
                          <label className="text-sm font-medium text-gray-500">Mother's Contact</label>
                          <p className="text-sm text-gray-900">{student.motherContact}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Academic Information */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Academic Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-gray-500">Class</label>
                        <p className="text-sm text-gray-900">{student.class}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-500">Section</label>
                        <p className="text-sm text-gray-900">{student.section}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-gray-500">Academic Year</label>
                        <p className="text-sm text-gray-900">{student.academicYear}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-500">Admission Date</label>
                        <p className="text-sm text-gray-900">{new Date(student.admissionDate).toLocaleDateString()}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'payments' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Payment History</h3>
                  <button 
                    onClick={() => router.push(`/fees/collect?student=${student.admissionNumber}`)}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-slate-700 hover:bg-slate-800"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Collect Payment
                  </button>
                </div>

                {/* Monthly Payment Breakdown */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="text-md font-semibold text-gray-900 mb-4">Monthly Payment Status</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {student.monthlyPayments.map((payment, index) => (
                      <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-900">{payment.month} {payment.year}</span>
                          <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                            payment.status === 'paid' ? 'bg-emerald-100 text-emerald-800' :
                            payment.status === 'pending' ? 'bg-amber-100 text-amber-800' :
                            'bg-rose-100 text-rose-800'
                          }`}>
                            {payment.status}
                          </span>
                        </div>
                        <div className="text-sm text-gray-600">Amount: ₹{payment.amount.toLocaleString()}</div>
                        {payment.paymentDate && (
                          <div className="text-xs text-gray-500">Paid: {new Date(payment.paymentDate).toLocaleDateString()}</div>
                        )}
                        {payment.paymentMethod && (
                          <div className="text-xs text-gray-500">Method: {payment.paymentMethod}</div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Payment Summary */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                        <p className="text-sm font-medium text-gray-600">Total Paid</p>
                        <p className="text-2xl font-semibold text-emerald-600">₹{student.feesPaidTillDate.toLocaleString()}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg border border-gray-200 p-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-rose-100 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600">Pending Amount</p>
                        <p className="text-2xl font-semibold text-rose-600">₹{student.pendingAmount.toLocaleString()}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg border border-gray-200 p-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600">Monthly Fee</p>
                        <p className="text-2xl font-semibold text-slate-600">₹{student.monthlyFee.toLocaleString()}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'documents' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900">Documents & Reports</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">Fee Receipt</p>
                        <p className="text-xs text-gray-500">Generate payment receipt</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">Fee Statement</p>
                        <p className="text-xs text-gray-500">Detailed payment history</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">Student ID Card</p>
                        <p className="text-xs text-gray-500">Generate student ID</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

