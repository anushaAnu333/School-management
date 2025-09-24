"use client"

import React from 'react';
import { useRouter } from 'next/navigation';
import { getAllClasses } from '@/data/students';

export default function ClassesPage() {
  const router = useRouter();
  const classes = getAllClasses();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'paid':
        return 'text-emerald-600 bg-emerald-50';
      case 'partial':
        return 'text-amber-600 bg-amber-50';
      case 'pending':
        return 'text-rose-600 bg-rose-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const getPaymentStatus = (paid: number, partial: number, pending: number) => {
    if (pending === 0 && partial === 0) return 'paid';
    if (pending === 0) return 'partial';
    return 'pending';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Class Management</h1>
              <p className="mt-1 text-sm text-gray-600">View and manage students by class</p>
            </div>
            <div className="flex items-center space-x-3">
              <button 
                onClick={() => router.push('/students/class/All Classes')}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-slate-700 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
                All Students
              </button>
              <button 
                onClick={() => router.push('/fees')}
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
                Fee Management
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Classes</p>
                <p className="text-2xl font-semibold text-gray-900">{classes.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Students</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {classes.reduce((sum, cls) => sum + cls.totalStudents, 0)}
                </p>
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
                <p className="text-sm font-medium text-gray-600">Fully Paid</p>
                <p className="text-2xl font-semibold text-emerald-600">
                  {classes.reduce((sum, cls) => sum + cls.paidStudents, 0)}
                </p>
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
                <p className="text-sm font-medium text-gray-600">Pending Fees</p>
                <p className="text-2xl font-semibold text-rose-600">
                  ₹{classes.reduce((sum, cls) => sum + cls.pendingFees, 0).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Classes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {classes.map((classInfo) => {
            const paymentStatus = getPaymentStatus(classInfo.paidStudents, classInfo.partialStudents, classInfo.pendingStudents);
            const statusColor = getStatusColor(paymentStatus);
            
            return (
              <div 
                key={classInfo.className}
                className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => router.push(`/students/class/${encodeURIComponent(classInfo.className)}`)}
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{classInfo.className}</h3>
                    <p className="text-sm text-gray-500">All Sections</p>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${statusColor}`}>
                    {paymentStatus === 'paid' ? 'All Paid' : 
                     paymentStatus === 'partial' ? 'Partial' : 'Pending'}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Total Students</span>
                    <span className="text-sm font-medium text-gray-900">{classInfo.totalStudents}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Fully Paid</span>
                    <span className="text-sm font-medium text-emerald-600">{classInfo.paidStudents}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Partial</span>
                    <span className="text-sm font-medium text-amber-600">{classInfo.partialStudents}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Pending</span>
                    <span className="text-sm font-medium text-rose-600">{classInfo.pendingStudents}</span>
                  </div>

                  <div className="border-t pt-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Total Fees</span>
                      <span className="text-sm font-medium text-gray-900">₹{classInfo.totalFees.toLocaleString()}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Collected</span>
                      <span className="text-sm font-medium text-emerald-600">₹{classInfo.collectedFees.toLocaleString()}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Pending</span>
                      <span className="text-sm font-medium text-rose-600">₹{classInfo.pendingFees.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">Click to view students</span>
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}