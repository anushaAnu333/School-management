"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function StudentTransferPage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClass, setSelectedClass] = useState('All Classes');
  const [selectedStatus, setSelectedStatus] = useState('All Status');
  
  // Sample student transfer data
  const transfers = [
    {
      id: 'TRF001',
      studentName: 'Rajesh Kumar',
      studentId: 'STU001',
      class: 'Class 10',
      section: 'A',
      dateOfTransfer: '2024-09-29',
      reasonForLeaving: 'Family Relocation',
      handoverDocuments: 'Completed',
      transferTo: 'ABC School, Mumbai',
      parentName: 'Suresh Kumar',
      parentContact: '9876543210',
      academicYear: '2024-25',
      lastAttendedDate: '2024-09-28',
      documentsHandedOver: ['Transfer Certificate', 'Marksheet', 'Character Certificate'],
      status: 'Completed'
    },
    {
      id: 'TRF002',
      studentName: 'Priya Sharma',
      studentId: 'STU002',
      class: 'Class 8',
      section: 'B',
      dateOfTransfer: '2024-09-28',
      reasonForLeaving: 'Academic Performance',
      handoverDocuments: 'Pending',
      transferTo: 'XYZ School, Delhi',
      parentName: 'Amit Sharma',
      parentContact: '9876543212',
      academicYear: '2024-25',
      lastAttendedDate: '2024-09-27',
      documentsHandedOver: ['Transfer Certificate'],
      status: 'In Progress'
    },
    {
      id: 'TRF003',
      studentName: 'Arjun Singh',
      studentId: 'STU003',
      class: 'Class 6',
      section: 'A',
      dateOfTransfer: '2024-09-27',
      reasonForLeaving: 'Parent Request',
      handoverDocuments: 'Completed',
      transferTo: 'DEF School, Bangalore',
      parentName: 'Vikram Singh',
      parentContact: '9876543214',
      academicYear: '2024-25',
      lastAttendedDate: '2024-09-26',
      documentsHandedOver: ['Transfer Certificate', 'Marksheet', 'Character Certificate', 'Medical Certificate'],
      status: 'Completed'
    },
    {
      id: 'TRF004',
      studentName: 'Sneha Patel',
      studentId: 'STU004',
      class: 'Class 9',
      section: 'C',
      dateOfTransfer: '2024-09-26',
      reasonForLeaving: 'School Change',
      handoverDocuments: 'Pending',
      transferTo: 'GHI School, Chennai',
      parentName: 'Ravi Patel',
      parentContact: '9876543216',
      academicYear: '2024-25',
      lastAttendedDate: '2024-09-25',
      documentsHandedOver: ['Transfer Certificate'],
      status: 'In Progress'
    },
    {
      id: 'TRF005',
      studentName: 'Karan Mehta',
      studentId: 'STU005',
      class: 'Class 7',
      section: 'B',
      dateOfTransfer: '2024-09-25',
      reasonForLeaving: 'Family Emergency',
      handoverDocuments: 'Completed',
      transferTo: 'JKL School, Pune',
      parentName: 'Sanjay Mehta',
      parentContact: '9876543218',
      academicYear: '2024-25',
      lastAttendedDate: '2024-09-24',
      documentsHandedOver: ['Transfer Certificate', 'Marksheet', 'Character Certificate'],
      status: 'Completed'
    }
  ];

  const getStatusConfig = (status: string) => {
    switch (status) {
      case 'Completed':
        return {
          bg: 'bg-emerald-50',
          text: 'text-emerald-700',
          border: 'border-emerald-200',
          label: 'Completed'
        };
      case 'In Progress':
        return {
          bg: 'bg-amber-50',
          text: 'text-amber-700',
          border: 'border-amber-200',
          label: 'In Progress'
        };
      case 'Pending':
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

  const getDocumentConfig = (status: string) => {
    switch (status) {
      case 'Completed':
        return {
          bg: 'bg-emerald-50',
          text: 'text-emerald-700',
          border: 'border-emerald-200',
          label: 'Completed'
        };
      case 'Pending':
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

  const filteredTransfers = transfers.filter(transfer => {
    const matchesSearch = transfer.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         transfer.studentId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         transfer.parentName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesClass = selectedClass === 'All Classes' || transfer.class === selectedClass;
    const matchesStatus = selectedStatus === 'All Status' || transfer.status === selectedStatus;
    
    return matchesSearch && matchesClass && matchesStatus;
  });

  // Calculate summary stats
  const totalTransfers = filteredTransfers.length;
  const completedTransfers = filteredTransfers.filter(t => t.status === 'Completed').length;
  const inProgressTransfers = filteredTransfers.filter(t => t.status === 'In Progress').length;
  const completedDocuments = filteredTransfers.filter(t => t.handoverDocuments === 'Completed').length;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Student Transfers</h1>
              <p className="mt-1 text-sm text-gray-600">Manage student transfers and document handover</p>
            </div>
            <div className="flex items-center space-x-3">
              <button 
                onClick={() => router.push('/students/transfer/new')}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-slate-700 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                New Transfer
              </button>
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition-colors">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Export Report
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Transfers</p>
                <p className="text-2xl font-semibold text-gray-900">{totalTransfers}</p>
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
                <p className="text-sm font-medium text-gray-600">Completed</p>
                <p className="text-2xl font-semibold text-emerald-600">{completedTransfers}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">In Progress</p>
                <p className="text-2xl font-semibold text-amber-600">{inProgressTransfers}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Documents Handed</p>
                <p className="text-2xl font-semibold text-blue-600">{completedDocuments}</p>
              </div>
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
                  onChange={(e) => setSelectedClass(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-500 focus:border-slate-500 text-sm bg-white min-w-[120px]"
                >
                  <option value="All Classes">All Classes</option>
                  <option value="Class 5">Class 5</option>
                  <option value="Class 6">Class 6</option>
                  <option value="Class 7">Class 7</option>
                  <option value="Class 8">Class 8</option>
                  <option value="Class 9">Class 9</option>
                  <option value="Class 10">Class 10</option>
                </select>
                
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-500 focus:border-slate-500 text-sm bg-white min-w-[120px]"
                >
                  <option value="All Status">All Status</option>
                  <option value="Completed">Completed</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Pending">Pending</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Student Details
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Class
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Transfer Details
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Documents
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredTransfers.map((transfer) => {
                  const statusConfig = getStatusConfig(transfer.status);
                  const documentConfig = getDocumentConfig(transfer.handoverDocuments);
                  return (
                    <tr key={transfer.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0">
                            <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center">
                              <span className="text-sm font-medium text-slate-700">
                                {transfer.studentName.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{transfer.studentName}</div>
                            <div className="text-sm text-gray-500">{transfer.studentId}</div>
                            <div className="text-sm text-gray-500">{transfer.parentName}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900 font-medium">{transfer.class}</div>
                        <div className="text-sm text-gray-500">Section {transfer.section}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900 font-medium">{transfer.dateOfTransfer}</div>
                        <div className="text-sm text-gray-500">{transfer.reasonForLeaving}</div>
                        <div className="text-sm text-blue-600">{transfer.transferTo}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-3 py-1 text-xs font-medium rounded-full border ${documentConfig.bg} ${documentConfig.text} ${documentConfig.border}`}>
                          {documentConfig.label}
                        </span>
                        <div className="text-xs text-gray-500 mt-1">
                          {transfer.documentsHandedOver.length} documents
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-3 py-1 text-xs font-medium rounded-full border ${statusConfig.bg} ${statusConfig.text} ${statusConfig.border}`}>
                          {statusConfig.label}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <button className="text-slate-600 hover:text-slate-900 text-sm font-medium px-3 py-1 rounded transition-colors">
                            View
                          </button>
                          <button className="text-slate-600 hover:text-slate-900 text-sm font-medium px-3 py-1 rounded transition-colors">
                            Edit
                          </button>
                          {transfer.handoverDocuments === 'Pending' && (
                            <button className="text-blue-600 hover:text-blue-900 text-sm font-medium px-3 py-1 rounded transition-colors">
                              Handover
                            </button>
                          )}
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
                Showing <span className="font-medium">{filteredTransfers.length}</span> of <span className="font-medium">{transfers.length}</span> transfers
              </div>
              <div className="text-sm text-gray-500">
                Last updated: September 23, 2024
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
