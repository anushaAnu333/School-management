"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function StudentTransferPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    studentName: '',
    dateOfTransfer: new Date().toISOString().split('T')[0],
    reasonForLeaving: '',
    handoverDocuments: [] as string[]
  });

  const [students] = useState([
    { id: '1', name: 'Rajesh Kumar', class: 'Class 10', section: 'A', admissionNumber: 'STU001' },
    { id: '2', name: 'Priya Sharma', class: 'Class 8', section: 'B', admissionNumber: 'STU002' },
    { id: '3', name: 'Arjun Singh', class: 'Class 6', section: 'A', admissionNumber: 'STU003' },
    { id: '4', name: 'Sneha Patel', class: 'Class 9', section: 'C', admissionNumber: 'STU004' },
    { id: '5', name: 'Karan Mehta', class: 'Class 7', section: 'B', admissionNumber: 'STU005' }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [showTransferForm, setShowTransferForm] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<{id: string; name: string; class: string; section: string; admissionNumber: string} | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      handoverDocuments: checked 
        ? [...prev.handoverDocuments, value]
        : prev.handoverDocuments.filter(doc => doc !== value)
    }));
  };

  const handleStudentSelect = (student: {id: string; name: string; class: string; section: string; admissionNumber: string}) => {
    setSelectedStudent(student);
    setFormData(prev => ({
      ...prev,
      studentName: student.name
    }));
    setShowTransferForm(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Transfer Data:', { ...formData, student: selectedStudent });
    alert('Student transfer processed successfully!');
    setShowTransferForm(false);
    setFormData({
      studentName: '',
      dateOfTransfer: new Date().toISOString().split('T')[0],
      reasonForLeaving: '',
      handoverDocuments: []
    });
    setSelectedStudent(null);
  };

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.admissionNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Student Transfer</h1>
          <p className="text-gray-600 mt-2">Process student transfers and document handover</p>
        </div>

        {!showTransferForm ? (
          <div className="space-y-6">
            {/* Search Students */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Search Students</h2>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Search by student name or admission number..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Students List */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">Select Student for Transfer</h2>
              </div>
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
                        Admission Number
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredStudents.map((student) => (
                      <tr key={student.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                                <span className="text-sm font-medium text-blue-700">
                                  {student.name.split(' ').map(n => n[0]).join('')}
                                </span>
                              </div>
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{student.name}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{student.class}</div>
                          <div className="text-sm text-gray-500">Section {student.section}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {student.admissionNumber}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <button
                            onClick={() => handleStudentSelect(student)}
                            className="text-blue-600 hover:text-blue-900 text-sm font-medium"
                          >
                            Transfer Student
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Student Transfer Form</h2>
              <p className="text-gray-600">Process transfer for {selectedStudent?.name}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    Date of Transfer <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="dateOfTransfer"
                    value={formData.dateOfTransfer}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Reason for Leaving <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="reasonForLeaving"
                  value={formData.reasonForLeaving}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter reason for student transfer..."
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Handover Documents
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Transfer Certificate',
                    'Character Certificate',
                    'Academic Records',
                    'Fee Receipts',
                    'Identity Card',
                    'Library Books',
                    'Sports Equipment',
                    'Other Documents'
                  ].map((document) => (
                    <label key={document} className="flex items-center">
                      <input
                        type="checkbox"
                        value={document}
                        checked={formData.handoverDocuments.includes(document)}
                        onChange={handleCheckboxChange}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <span className="ml-2 text-sm text-gray-700">{document}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="text-sm font-medium text-yellow-800 mb-2">Important Notes:</h3>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• Ensure all outstanding fees are cleared before transfer</li>
                  <li>• All school property must be returned</li>
                  <li>• Transfer certificate will be issued after document verification</li>
                  <li>• Student records will be archived after transfer completion</li>
                </ul>
              </div>

              <div className="flex justify-end space-x-4 pt-6 border-t">
                <button
                  type="button"
                  onClick={() => setShowTransferForm(false)}
                  className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                >
                  Process Transfer
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
