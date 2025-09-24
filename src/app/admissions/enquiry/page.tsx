"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdmissionEnquiryPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    studentName: '',
    gender: '',
    classAppliedFor: '',
    mobileNumber: '',
    examConducted: false,
    marksObtained: '',
    totalMarks: '',
    qualified: false,
    admissionStatus: 'Not Confirmed',
    confirmationMethod: ''
  });

  const [showSMS, setShowSMS] = useState(false);
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Admission Enquiry Data:', formData);
    // Here you would save the data
    alert('Admission enquiry submitted successfully!');
  };

  const sendSMS = () => {
    const message = `Your Ward ${formData.studentName}, admission confirmed in our School Greenwood High School. Please contact admission department for further information`;
    console.log('SMS to send:', message);
    alert('SMS sent successfully!');
    setShowSMS(false);
  };

  const sendWhatsApp = () => {
    const message = `Your Ward ${formData.studentName}, admission confirmed in our School Greenwood High School. Please contact admission department for further information`;
    console.log('WhatsApp to send:', message);
    alert('WhatsApp message sent successfully!');
    setShowWhatsApp(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Admission Enquiry Form</h1>
          <p className="text-gray-600 mt-2">Manage student admission enquiries and confirmations</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Date */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">System Date (Auto Date)</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Student Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            {/* Gender and Class */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Gender <span className="text-red-500">*</span>
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Class Applied For <span className="text-red-500">*</span>
                </label>
                <select
                  name="classAppliedFor"
                  value={formData.classAppliedFor}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select Class</option>
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
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="+91 9876543210"
                required
              />
            </div>

            {/* Exam Conducted */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Exam Details</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="examConducted"
                    checked={formData.examConducted}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label className="ml-2 text-sm font-medium text-gray-700">
                    Exam Conducted
                  </label>
                </div>

                {formData.examConducted && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ml-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Marks Obtained
                      </label>
                      <input
                        type="number"
                        name="marksObtained"
                        value={formData.marksObtained}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="XXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Total Marks
                      </label>
                      <input
                        type="number"
                        name="totalMarks"
                        value={formData.totalMarks}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="XXX"
                      />
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        name="qualified"
                        checked={formData.qualified}
                        onChange={handleInputChange}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label className="ml-2 text-sm font-medium text-gray-700">
                        Qualified
                      </label>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Admission Status */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Admission Status
              </label>
              <select
                name="admissionStatus"
                value={formData.admissionStatus}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Not Confirmed">Not Confirmed</option>
                <option value="Confirmed">Confirmed</option>
              </select>
              <p className="text-xs text-gray-500 mt-1">
                Confirmed (if Exam Conducted No/ Qualified - Yes)
              </p>
            </div>

            {/* Confirmation Methods */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Admission Confirmation</h3>
              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() => setShowSMS(true)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Send SMS
                </button>
                <button
                  type="button"
                  onClick={() => setShowWhatsApp(true)}
                  className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
                >
                  Send WhatsApp
                </button>
              </div>
            </div>

            {/* Submit Button */}
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
                Submit Enquiry
              </button>
            </div>
          </form>
        </div>

        {/* SMS Modal */}
        {showSMS && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
              <h3 className="text-lg font-semibold mb-4">Send SMS</h3>
              <p className="text-sm text-gray-600 mb-4">
                Your Ward {formData.studentName}, admission confirmed in our School Greenwood High School. Please contact admission department for further information
              </p>
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => setShowSMS(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={sendSMS}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Send SMS
                </button>
              </div>
            </div>
          </div>
        )}

        {/* WhatsApp Modal */}
        {showWhatsApp && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
              <h3 className="text-lg font-semibold mb-4">Send WhatsApp</h3>
              <p className="text-sm text-gray-600 mb-4">
                Your Ward {formData.studentName}, admission confirmed in our School Greenwood High School. Please contact admission department for further information
              </p>
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => setShowWhatsApp(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={sendWhatsApp}
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                >
                  Send WhatsApp
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}