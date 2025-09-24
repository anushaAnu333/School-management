"use client"

import React, { useState } from 'react';
import { useSchoolData } from '@/context/SchoolDataContext';
import { useRouter } from 'next/navigation';

export default function AddClassPage() {
  const { data, dispatch } = useSchoolData();
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    sections: [] as string[],
    classTeacher: '',
    room: '',
    studentCount: 0
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newClass = {
      id: Date.now().toString(),
      name: formData.name,
      sections: formData.sections,
      classTeacher: formData.classTeacher,
      room: formData.room,
      studentCount: formData.studentCount
    };

    dispatch({ type: 'ADD_CLASS', payload: newClass });
    router.push('/classes');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSectionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData(prev => ({ ...prev, sections: [...prev.sections, value] }));
    } else {
      setFormData(prev => ({ ...prev, sections: prev.sections.filter(section => section !== value) }));
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Add New Class</h1>
        <p className="text-gray-600 mt-2">Create a new class with sections</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Class Information</h2>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Class Name *
              </label>
              <select
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select Class</option>
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

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Class Teacher *
              </label>
              <input
                type="text"
                name="classTeacher"
                value={formData.classTeacher}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter class teacher name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Room Number *
              </label>
              <input
                type="text"
                name="room"
                value={formData.room}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter room number"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Expected Student Count
              </label>
              <input
                type="number"
                name="studentCount"
                value={formData.studentCount}
                onChange={handleInputChange}
                min="0"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter expected student count"
              />
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Sections</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['A', 'B', 'C', 'D', 'E', 'F'].map((section) => (
                <label key={section} className="flex items-center">
                  <input
                    type="checkbox"
                    value={section}
                    checked={formData.sections.includes(section)}
                    onChange={handleSectionChange}
                    className="mr-2"
                  />
                  <span className="text-sm text-gray-700">Section {section}</span>
                </label>
              ))}
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
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Create Class
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
