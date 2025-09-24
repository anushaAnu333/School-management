"use client"

import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { studentsData, getStudentsByClass, Student } from '@/data/students';

export default function StudentsByClassPage() {
  const router = useRouter();
  const params = useParams();
  const [selectedClass, setSelectedClass] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredStudents, setFilteredStudents] = useState<Student[]>([]);

  // Get class from URL params
  useEffect(() => {
    const className = params.className as string;
    if (className) {
      setSelectedClass(decodeURIComponent(className));
    }
  }, [params.className]);

  // Filter students based on class and search term
  useEffect(() => {
    let students = selectedClass ? getStudentsByClass(selectedClass) : studentsData;
    
    if (searchTerm) {
      students = students.filter(student => 
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.admissionNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.fatherName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredStudents(students);
  }, [selectedClass, searchTerm]);

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

  const getUniqueClasses = () => {
    return [...new Set(studentsData.map(student => student.class))].sort();
  };

  const handleStudentClick = (student: Student) => {
    router.push(`/fees?student=${student.admissionNumber}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Student Management</h1>
              <p className="mt-1 text-sm text-gray-600">
                {selectedClass ? `Students in ${selectedClass}` : 'All students across all classes'}
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <button 
                onClick={() => router.push('/classes')}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-slate-700 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                View Classes
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
                    placeholder="Search students, ID, or parent name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="block w-80 pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-slate-500 focus:border-slate-500"
                  />
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <select
                  value={selectedClass}
                  onChange={(e) => {
                    setSelectedClass(e.target.value);
                    if (e.target.value) {
                      router.push(`/students/class/${encodeURIComponent(e.target.value)}`);
                    } else {
                      router.push('/classes');
                    }
                  }}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-500 focus:border-slate-500 text-sm bg-white min-w-[120px]"
                >
                  <option value="">All Classes</option>
                  {getUniqueClasses().map(className => (
                    <option key={className} value={className}>{className}</option>
                  ))}
                </select>
                
                <button
                  onClick={() => {
                    setSelectedClass('');
                    setSearchTerm('');
                    router.push('/classes');
                  }}
                  className="px-3 py-2 text-sm text-gray-600 hover:text-gray-900 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Students Table */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Student Details
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Class & Section
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Fee Information
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Payment Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact Info
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredStudents.map((student) => {
                  const statusConfig = getStatusConfig(student.paymentStatus);
                  return (
                    <tr 
                      key={student.id} 
                      className="hover:bg-gray-50 transition-colors cursor-pointer"
                      onClick={() => router.push(`/students/${student.id}`)}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0">
                            <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center">
                              <span className="text-sm font-medium text-slate-700">
                                {student.name.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{student.name}</div>
                            <div className="text-sm text-gray-500">{student.admissionNumber}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900 font-medium">{student.class}</div>
                        <div className="text-sm text-gray-500">Section {student.section}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-semibold text-gray-900">₹{student.totalFees.toLocaleString()}</div>
                        <div className="text-xs text-gray-500">Monthly: ₹{student.monthlyFee.toLocaleString()}</div>
                        {student.pendingAmount > 0 && (
                          <div className="text-sm text-rose-600 font-medium">Due: ₹{student.pendingAmount.toLocaleString()}</div>
                        )}
                        <div className="text-xs text-gray-500">
                          Paid: {student.monthsPaid} months | Pending: {student.monthsPending} months
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-3 py-1 text-xs font-medium rounded-full border ${statusConfig.bg} ${statusConfig.text} ${statusConfig.border}`}>
                          {statusConfig.label}
                        </span>
                        {student.lastPaymentDate && (
                          <div className="text-xs text-gray-500 mt-1">
                            Last paid: {new Date(student.lastPaymentDate).toLocaleDateString()}
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{student.fatherName}</div>
                        <div className="text-sm text-gray-500">{student.fatherContact}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <div className="flex items-center justify-center space-x-2" onClick={(e) => e.stopPropagation()}>
                          <button 
                            onClick={() => router.push(`/students/${student.id}`)}
                            className="text-slate-600 hover:text-slate-900 text-sm font-medium px-3 py-1 rounded transition-colors"
                          >
                            View Details
                          </button>
                          <button 
                            onClick={() => handleStudentClick(student)}
                            className="text-slate-600 hover:text-slate-900 text-sm font-medium px-3 py-1 rounded transition-colors"
                          >
                            View Fees
                          </button>
                          <button 
                            onClick={() => router.push(`/fees/collect?student=${student.admissionNumber}`)}
                            className="text-slate-600 hover:text-slate-900 text-sm font-medium px-3 py-1 rounded transition-colors"
                          >
                            Collect
                          </button>
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
                Showing <span className="font-medium">{filteredStudents.length}</span> of <span className="font-medium">{studentsData.length}</span> students
                {selectedClass && ` in ${selectedClass}`}
              </div>
              <div className="text-sm text-gray-500">
                Last updated: {new Date().toLocaleDateString()}
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

