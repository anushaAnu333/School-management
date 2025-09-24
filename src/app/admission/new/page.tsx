"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NewAdmissionPage() {
  const router = useRouter();
  const [currentSection, setCurrentSection] = useState('A');
  const [formData, setFormData] = useState({
    // Section A: Student Details
    studentName: '',
    dateOfBirth: '',
    gender: '',
    placeOfBirth: '',
    nationality: '',
    aadharNumber: '',
    bloodGroup: '',
    motherTongue: '',
    
    // Section B: Parent/Guardian Details
    fatherName: '',
    motherName: '',
    guardianName: '',
    fatherContact: '',
    fatherEmail: '',
    fatherOccupation: '',
    fatherAadhar: '',
    motherContact: '',
    motherEmail: '',
    motherOccupation: '',
    motherAadhar: '',
    motherBankAccount: '',
    motherBankIFSC: '',
    motherBankBranch: '',
    motherBankName: '',
    residentialAddress: '',
    flatDoorNo: '',
    streetRoad: '',
    localityArea: '',
    mandalTaluka: '',
    district: '',
    state: '',
    pincode: '',
    studentLivingWith: '',
    
    // Section C: Academic Details
    classAppliedFor: '',
    board: '',
    previousSchoolName: '',
    previousSchoolLocation: '',
    previousSchoolBoard: '',
    
    // Section D: Religion, Caste & Category
    religion: '',
    caste: '',
    category: '',
    subCaste: '',
    
    // Section E: Hostel, Transport & Other Preferences
    hostelRequired: false,
    transportRequired: false,
    transportLocation: '',
    lunchSnacks: false,
    otherFacilities: false,
    otherFacilitiesSpecify: '',
    
    // Section F: Fees Particulars
    admissionFee: '',
    schoolFee: '',
    hostelFee: '',
    transportFee: '',
    lunchFee: '',
    otherFacilitiesFee: '',
    uniformFee: '',
    examFee: '',
    otherFee: '',
    otherFeeSpecify: '',
    feesBeforeDiscount: '',
    discount: '',
    feesAfterDiscount: '',
    
    // Documents
    documents: [] as string[],
    birthCertificate: null as File | null,
    previousMarksheet: null as File | null,
    transferCertificate: null as File | null,
    medicalCertificate: null as File | null,
    passportPhoto: null as File | null,
    aadharCopy: null as File | null,
    signedForm: null as File | null,
    
    // Staff Entry Fields
    staffName: 'Admin User',
    staffId: 'EMP001',
    companyId: 'SCH001'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };



  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Admission Form Data:', formData);
    alert('Admission form submitted successfully!');
    router.push('/admission');
  };

  const sections = [
    { id: 'A', title: 'Student Details', color: 'bg-blue-500' },
    { id: 'B', title: 'Parent/Guardian Details', color: 'bg-green-500' },
    { id: 'C', title: 'Academic Details', color: 'bg-purple-500' },
    { id: 'D', title: 'Religion, Caste & Category', color: 'bg-yellow-500' },
    { id: 'E', title: 'Hostel, Transport & Other Preferences', color: 'bg-red-500' },
    { id: 'F', title: 'Fees Particulars', color: 'bg-indigo-500' },
    { id: 'G', title: 'Documents & Declaration', color: 'bg-pink-500' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Student Admission Form</h1>
          <p className="text-gray-600 mt-2">Complete student admission and onboarding process</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {sections.map((section, index) => (
              <div key={section.id} className="flex items-center">
                <button
                  onClick={() => setCurrentSection(section.id)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold ${
                    currentSection === section.id ? section.color : 'bg-gray-400'
                  }`}
                >
                  {section.id}
                </button>
                {index < sections.length - 1 && (
                  <div className={`w-16 h-1 mx-2 ${
                    currentSection === section.id ? 'bg-gray-300' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <h3 className="text-lg font-semibold text-gray-900">
              Section {currentSection}: {sections.find(s => s.id === currentSection)?.title}
            </h3>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          {/* Section A: Student Details */}
          {currentSection === 'A' && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Section A: Student Details</h2>
              <p className="text-sm text-blue-600 mb-4">Mention all details as per Birth Certificate (Appear as Special color)</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Student Full Name (IN CAPITAL LETTERS) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    style={{ textTransform: 'uppercase' }}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date of Birth <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

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
                    Place of Birth <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="placeOfBirth"
                    value={formData.placeOfBirth}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nationality <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="nationality"
                    value={formData.nationality}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Student Aadhar Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="aadharNumber"
                    value={formData.aadharNumber}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="XXXX XXXX XXXX"
                    maxLength={14}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Blood Group
                  </label>
                  <select
                    name="bloodGroup"
                    value={formData.bloodGroup}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Blood Group</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mother Tongue <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="motherTongue"
                    value={formData.motherTongue}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select Mother Tongue</option>
                    <option value="Telugu">Telugu</option>
                    <option value="Tamil">Tamil</option>
                    <option value="Malayalam">Malayalam</option>
                    <option value="Kannada">Kannada</option>
                    <option value="Urdu">Urdu</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Others">Others (Specify)</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t">
            <button
              type="button"
              onClick={() => {
                const currentIndex = sections.findIndex(s => s.id === currentSection);
                if (currentIndex > 0) {
                  setCurrentSection(sections[currentIndex - 1].id);
                }
              }}
              className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
              disabled={currentSection === 'A'}
            >
              Previous
            </button>
            
            <div className="flex space-x-3">
              <button
                type="button"
                onClick={() => router.back()}
                className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              
              {currentSection !== 'G' ? (
                <button
                  type="button"
                  onClick={() => {
                    const currentIndex = sections.findIndex(s => s.id === currentSection);
                    if (currentIndex < sections.length - 1) {
                      setCurrentSection(sections[currentIndex + 1].id);
                    }
                  }}
                  className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                >
                  Submit Application
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}