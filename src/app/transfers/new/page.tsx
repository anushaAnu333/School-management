"use client"

import React, { useState } from 'react';
import { useSchoolData } from '@/context/SchoolDataContext';
import { useRouter } from 'next/navigation';

export default function NewTransferPage() {
  const { data, dispatch } = useSchoolData();
  const router = useRouter();
  const [formData, setFormData] = useState({
    studentId: '',
    studentName: '',
    fromClass: '',
    toClass: '',
    fromSection: '',
    toSection: '',
    type: 'class',
    reason: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newTransfer = {
      id: Date.now().toString(),
      studentId: formData.studentId,
      studentName: formData.studentName,
      fromClass: formData.fromClass,
      toClass: formData.toClass,
      fromSection: formData.fromSection,
      toSection: formData.toSection,
      type: formData.type as 'class' | 'section' | 'school',
      requestDate: new Date().toISOString().split('T')[0],
      status: 'pending' as const,
      reason: formData.reason
    };

    dispatch({ type: 'ADD_TRANSFER', payload: newTransfer });
    router.push('/transfers');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleStudentSelect = (studentId: string) => {
    const student = data.students.find(s => s.id === studentId);
    if (student) {
      setFormData(prev => ({
        ...prev,
        studentId: student.id,
        studentName: student.name,
        fromClass: `Class ${student.class}`,
        fromSection: student.section
      }));
    }
  };

  const getAvailableClasses = () => {
    return data.classes.map(cls => cls.name);
  };

  const getAvailableSections = (className: string) => {
    const classData = data.classes.find(cls => cls.name === className);
    return classData ? classData.sections : [];
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">New Transfer Request</h1>
        <p className="text-gray-600 mt-2">Create a new student transfer request</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Transfer Details</h2>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Student *
              </label>
              <select
                value={formData.studentId}
                onChange={(e) => handleStudentSelect(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select Student</option>
                {data.students.map(student => (
                  <option key={student.id} value={student.id}>
                    {student.name} - {student.class}{student.section} (Roll: {student.rollNumber})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Transfer Type *
              </label>
              <select
                name="type"
                value={formData.type}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="class">Class Transfer</option>
                <option value="section">Section Transfer</option>
                <option value="school">School Transfer</option>
              </select>
            </div>

            {formData.type !== 'school' && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    From Class
                  </label>
                  <input
                    type="text"
                    value={formData.fromClass}
                    readOnly
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    To Class *
                  </label>
                  <select
                    name="toClass"
                    value={formData.toClass}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Target Class</option>
                    {getAvailableClasses().map(className => (
                      <option key={className} value={className}>
                        {className}
                      </option>
                    ))}
                  </select>
                </div>

                {formData.type === 'section' && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        From Section
                      </label>
                      <input
                        type="text"
                        value={formData.fromSection}
                        readOnly
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        To Section *
                      </label>
                      <select
                        name="toSection"
                        value={formData.toSection}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select Target Section</option>
                        {getAvailableSections(formData.toClass).map(section => (
                          <option key={section} value={section}>
                            Section {section}
                          </option>
                        ))}
                      </select>
                    </div>
                  </>
                )}
              </>
            )}

            {formData.type === 'school' && (
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Destination School *
                </label>
                <input
                  type="text"
                  name="toClass"
                  value={formData.toClass}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter destination school name"
                />
              </div>
            )}

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Reason for Transfer *
              </label>
              <textarea
                name="reason"
                value={formData.reason}
                onChange={handleInputChange}
                required
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter reason for transfer"
              />
            </div>
          </div>

          <div className="mt-8 flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => router.back()}
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Submit Transfer Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
