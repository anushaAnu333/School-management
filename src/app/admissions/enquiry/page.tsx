"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdmissionEnquiryPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    date: '10/2/25',
    studentName: '',
    gender: '',
    classAppliedFor: '',
    board: '',
    mobileNumber: '',
    examConducted: false,
    admissionStatus: 'Pending'
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
      <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 text-center">Enquiry Form</h1>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              
              {/* Date Field */}
              <div>
                <label className="form-label">
                  Date
                </label>
                <input
                  type="text"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="10/2/25"
                />
              </div>

              {/* Student Name */}
              <div>
                <label className="form-label">
                  Student Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Enter student name"
                  required
                />
              </div>

              {/* Gender */}
              <div>
                <label className="form-label">
                  Gender <span className="text-red-500">*</span>
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="form-select"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              {/* Class Applied For */}
              <div>
                <label className="form-label">
                  Class Applied For <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="classAppliedFor"
                  value={formData.classAppliedFor}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Enter class"
                  required
                />
              </div>

              {/* Board */}
              <div>
                <label className="form-label">
                  Board <span className="text-red-500">*</span>
                </label>
                <select
                  name="board"
                  value={formData.board}
                  onChange={handleInputChange}
                  className="form-select"
                  required
                >
                  <option value="">Select Board</option>
                  <option value="CBSE">CBSE</option>
                  <option value="ICSE">ICSE</option>
                  <option value="State Board">State Board</option>
                  <option value="IB">IB</option>
                </select>
              </div>

              {/* Mobile Number */}
              <div>
                <label className="form-label">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="+91 9876543210"
                  required
                />
              </div>

              {/* Exam Conducted Checkbox */}
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="examConducted"
                  checked={formData.examConducted}
                  onChange={handleInputChange}
                  className="form-checkbox"
                />
                <label className="text-sm font-medium text-gray-700">
                  Exam Conducted
                </label>
              </div>

              {/* Admission Status */}
              <div>
                <label className="form-label">
                  Admission Status
                </label>
                <select
                  name="admissionStatus"
                  value={formData.admissionStatus}
                  onChange={handleInputChange}
                  className="form-select"
                >
                  <option value="Pending">Pending</option>
                  <option value="Confirmed">Confirmed</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </div>

              {/* Send Confirmation Section */}
              <div className="border-t pt-6">
                <label className="form-label mb-4">Send Confirmation</label>
                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={() => setShowSMS(true)}
                    className="btn-success flex items-center space-x-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>SMS</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowWhatsApp(true)}
                    className="btn-success flex items-center space-x-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.656l-.04-.024-4.1-2.35a.5.5 0 01-.2-.4V8.5a.5.5 0 01.2-.4l4.1-2.35.04-.024A9.87 9.87 0 0112.047 4h.004a9.87 9.87 0 015.031 1.656l.04.024 4.1 2.35a.5.5 0 01.2.4v7.5a.5.5 0 01-.2.4l-4.1 2.35-.04.024a9.87 9.87 0 01-5.031 1.656z"/>
                    </svg>
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end space-x-4 pt-6 border-t">
                <button
                  type="button"
                  onClick={() => router.back()}
                  className="btn-secondary"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn-primary"
                >
                  Submit Enquiry
                </button>
              </div>
            </form>
          </div>

          {/* SMS Modal */}
          {showSMS && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Send SMS</h3>
                <p className="text-sm text-gray-600 mb-6">
                  Your Ward {formData.studentName}, admission confirmed in our School Greenwood High School. Please contact admission department for further information
                </p>
                <div className="flex justify-end space-x-3">
                  <button
                    onClick={() => setShowSMS(false)}
                    className="btn-secondary"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={sendSMS}
                    className="btn-primary"
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
              <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Send WhatsApp</h3>
                <p className="text-sm text-gray-600 mb-6">
                  Your Ward {formData.studentName}, admission confirmed in our School Greenwood High School. Please contact admission department for further information
                </p>
                <div className="flex justify-end space-x-3">
                  <button
                    onClick={() => setShowWhatsApp(false)}
                    className="btn-secondary"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={sendWhatsApp}
                    className="btn-primary"
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