"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdmissionPage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Category');
  
  // Sample admission data
  const admissions = [
    {
      id: 'ADM001',
      studentName: 'Rajesh Kumar',
      classAppliedFor: 'Class 10',
      board: 'CBSE',
      fatherName: 'Suresh Kumar',
      motherName: 'Priya Kumar',
      fatherContact: '9876543210',
      motherContact: '9876543211',
      applicationDate: '2024-09-29',
      status: 'pending',
      gender: 'Male',
      dateOfBirth: '2008-05-15',
      category: 'General',
      religion: 'Hindu',
      totalFees: 45000,
      admissionFee: 5000,
      schoolFee: 35000,
      transportFee: 5000,
      documentsSubmitted: 6,
      documentsRequired: 8
    },
    {
      id: 'ADM002',
      studentName: 'Priya Sharma',
      classAppliedFor: 'Class 8',
      board: 'ICSE',
      fatherName: 'Amit Sharma',
      motherName: 'Sunita Sharma',
      fatherContact: '9876543212',
      motherContact: '9876543213',
      applicationDate: '2024-09-28',
      status: 'approved',
      gender: 'Female',
      dateOfBirth: '2010-03-22',
      category: 'OBC',
      religion: 'Hindu',
      totalFees: 42000,
      admissionFee: 5000,
      schoolFee: 32000,
      transportFee: 5000,
      documentsSubmitted: 8,
      documentsRequired: 8
    },
    {
      id: 'ADM003',
      studentName: 'Arjun Singh',
      classAppliedFor: 'Class 6',
      board: 'State Board',
      fatherName: 'Vikram Singh',
      motherName: 'Kavita Singh',
      fatherContact: '9876543214',
      motherContact: '9876543215',
      applicationDate: '2024-09-27',
      status: 'pending',
      gender: 'Male',
      dateOfBirth: '2012-08-10',
      category: 'SC',
      religion: 'Sikh',
      totalFees: 38000,
      admissionFee: 5000,
      schoolFee: 28000,
      transportFee: 5000,
      documentsSubmitted: 4,
      documentsRequired: 8
    },
    {
      id: 'ADM004',
      studentName: 'Sneha Patel',
      classAppliedFor: 'Class 9',
      board: 'CBSE',
      fatherName: 'Ravi Patel',
      motherName: 'Meera Patel',
      fatherContact: '9876543216',
      motherContact: '9876543217',
      applicationDate: '2024-09-26',
      status: 'approved',
      gender: 'Female',
      dateOfBirth: '2009-11-05',
      category: 'General',
      religion: 'Hindu',
      totalFees: 46000,
      admissionFee: 5000,
      schoolFee: 36000,
      transportFee: 5000,
      documentsSubmitted: 3,
      documentsRequired: 8
    },
    {
      id: 'ADM005',
      studentName: 'Karan Mehta',
      classAppliedFor: 'Class 7',
      board: 'ICSE',
      fatherName: 'Sanjay Mehta',
      motherName: 'Ritu Mehta',
      fatherContact: '9876543218',
      motherContact: '9876543219',
      applicationDate: '2024-09-25',
      status: 'approved',
      gender: 'Male',
      dateOfBirth: '2011-01-18',
      category: 'General',
      religion: 'Jain',
      totalFees: 40000,
      admissionFee: 5000,
      schoolFee: 30000,
      transportFee: 5000,
      documentsSubmitted: 8,
      documentsRequired: 8
    },
    {
      id: 'ADM006',
      studentName: 'Ananya Reddy',
      classAppliedFor: 'Class 5',
      board: 'CBSE',
      fatherName: 'Krishna Reddy',
      motherName: 'Lakshmi Reddy',
      fatherContact: '9876543220',
      motherContact: '9876543221',
      applicationDate: '2024-09-24',
      status: 'pending',
      gender: 'Female',
      dateOfBirth: '2013-07-12',
      category: 'OBC',
      religion: 'Hindu',
      totalFees: 35000,
      admissionFee: 5000,
      schoolFee: 25000,
      transportFee: 5000,
      documentsSubmitted: 5,
      documentsRequired: 8
    }
  ];

  const getIconColor = (gender: string) => {
    return gender === 'Male' ? 'bg-blue-500' : 'bg-pink-500';
  };


  const filteredAdmissions = admissions.filter(admission => {
    const matchesSearch = admission.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         admission.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         admission.fatherName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All Category' || admission.classAppliedFor === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Title */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Admission Management</h1>
          <p className="text-gray-600 mt-2">Manage student admissions and applications</p>
        </div>
        
        {/* Action Buttons */}
        <div className="bg-white rounded-lg shadow-sm mb-4 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* Class Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"
              >
                <option value="All Category">All Classes</option>
                <option value="Nursery">Nursery</option>
                <option value="LKG">LKG</option>
                <option value="UKG">UKG</option>
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
                <option value="Class 11">Class 11</option>
                <option value="Class 12">Class 12</option>
              </select>
              
            </div>

            <div className="flex items-center space-x-4">
              {/* New Admission Button */}
              <button 
                onClick={() => router.push('/admission/new')}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center text-sm font-medium"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                New Admission
              </button>
              
              {/* Export Button */}
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center text-sm font-medium">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Export
              </button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white">
            <div>
              <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5" type="button">
                <span className="sr-only">Action button</span>
                Bulk Actions
                <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                </svg>
              </button>
            </div>
            <label htmlFor="table-search" className="sr-only">Search</label>
            <div className="relative">
              <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
              </div>
              <input 
                type="text" 
                id="table-search-users" 
                className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500" 
                placeholder="Search for students"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 focus:ring-2"/>
                    <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  Student Details
                </th>
                <th scope="col" className="px-6 py-3">
                  Class & Board
                </th>
                <th scope="col" className="px-6 py-3">
                  Parent Contact
                </th>
                <th scope="col" className="px-6 py-3">
                  Application Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Total Fees
                </th>
                <th scope="col" className="px-6 py-3">
                  Documents
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredAdmissions.map((admission, index) => (
                <tr key={admission.id} className="bg-white border-b border-gray-200 hover:bg-gray-50">
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input id={`checkbox-table-search-${index}`} type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 focus:ring-2"/>
                      <label htmlFor={`checkbox-table-search-${index}`} className="sr-only">checkbox</label>
                    </div>
                  </td>
                  <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap">
                    <div className={`w-10 h-10 ${getIconColor(admission.gender)} rounded-full flex items-center justify-center text-white text-sm font-bold`}>
                      {admission.gender === 'Male' ? 'M' : 'F'}
                    </div>
                    <div className="ps-3">
                      <div className="text-base font-semibold">{admission.studentName}</div>
                      <div className="font-normal text-gray-500">ID: {admission.id}</div>
                    </div>  
                  </th>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">{admission.classAppliedFor}</div>
                    <div className="text-sm text-gray-500">{admission.board}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">{admission.fatherName}</div>
                    <div className="text-sm text-gray-500">{admission.fatherContact}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">{admission.applicationDate}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-semibold text-green-600">
                      ₹{admission.totalFees.toLocaleString()}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <div className="text-sm text-gray-900">
                        {admission.documentsSubmitted}/{admission.documentsRequired}
                      </div>
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-500 h-2 rounded-full" 
                          style={{ width: `${(admission.documentsSubmitted / admission.documentsRequired) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <a href="#" className="font-medium text-blue-600 hover:underline">View</a>
                      <a href="#" className="font-medium text-green-600 hover:underline">Edit</a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
      </div>
    </div>
  );
}