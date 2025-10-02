"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NewAdmissionPage() {
  const router = useRouter();
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
    aadharCopy: null as File | null
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


  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Student Admission Form</h1>
          <p className="text-gray-600 mt-2">Complete student admission and onboarding process</p>
        </div>


        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          {/* Section A: Student Details */}
          <div className="space-y-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Student Details</h2>
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

          {/* Section B: Parent/Guardian Details */}
          <div className="space-y-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Parent/Guardian Details</h2>
              
              <div className="space-y-8">
                {/* Father Details */}
                <div className="p-4 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Father Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Father&apos;s Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="fatherName"
                        value={formData.fatherName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Father&apos;s Contact Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="fatherContact"
                        value={formData.fatherContact}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Father&apos;s Email
                      </label>
                      <input
                        type="email"
                        name="fatherEmail"
                        value={formData.fatherEmail}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Father&apos;s Occupation <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="fatherOccupation"
                        value={formData.fatherOccupation}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Father&apos;s Aadhar Number
                      </label>
                      <input
                        type="text"
                        name="fatherAadhar"
                        value={formData.fatherAadhar}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="XXXX XXXX XXXX"
                        maxLength={14}
                      />
                    </div>
                  </div>
                </div>

                {/* Mother Details */}
                <div className="p-4 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Mother Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Mother&apos;s Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="motherName"
                        value={formData.motherName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Mother&apos;s Contact Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="motherContact"
                        value={formData.motherContact}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Mother&apos;s Email
                      </label>
                      <input
                        type="email"
                        name="motherEmail"
                        value={formData.motherEmail}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Mother&apos;s Occupation <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="motherOccupation"
                        value={formData.motherOccupation}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Mother&apos;s Aadhar Number
                      </label>
                      <input
                        type="text"
                        name="motherAadhar"
                        value={formData.motherAadhar}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="XXXX XXXX XXXX"
                        maxLength={14}
                      />
                    </div>
                  </div>
                </div>

                {/* Bank Details */}
                <div className="p-4 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Bank Details (Mother&apos;s Account)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Bank Account Number
                      </label>
                      <input
                        type="text"
                        name="motherBankAccount"
                        value={formData.motherBankAccount}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Bank Name
                      </label>
                      <input
                        type="text"
                        name="motherBankName"
                        value={formData.motherBankName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        IFSC Code
                      </label>
                      <input
                        type="text"
                        name="motherBankIFSC"
                        value={formData.motherBankIFSC}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="SBIN0001234"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Branch Name
                      </label>
                      <input
                        type="text"
                        name="motherBankBranch"
                        value={formData.motherBankBranch}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Address Details */}
                <div className="p-4 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Residential Address</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Complete Address <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="residentialAddress"
                        value={formData.residentialAddress}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Flat/Door No.
                      </label>
                      <input
                        type="text"
                        name="flatDoorNo"
                        value={formData.flatDoorNo}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Street/Road
                      </label>
                      <input
                        type="text"
                        name="streetRoad"
                        value={formData.streetRoad}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Locality/Area
                      </label>
                      <input
                        type="text"
                        name="localityArea"
                        value={formData.localityArea}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Mandal/Taluka
                      </label>
                      <input
                        type="text"
                        name="mandalTaluka"
                        value={formData.mandalTaluka}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        District <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="district"
                        value={formData.district}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        State <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Pincode <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        maxLength={6}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Student Living With <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="studentLivingWith"
                        value={formData.studentLivingWith}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      >
                        <option value="">Select</option>
                        <option value="Parents">Parents</option>
                        <option value="Guardian">Guardian</option>
                        <option value="Grandparents">Grandparents</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          {/* Section C: Academic Details */}
          <div className="space-y-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Academic Details</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    <option value="1st">1st Standard</option>
                    <option value="2nd">2nd Standard</option>
                    <option value="3rd">3rd Standard</option>
                    <option value="4th">4th Standard</option>
                    <option value="5th">5th Standard</option>
                    <option value="6th">6th Standard</option>
                    <option value="7th">7th Standard</option>
                    <option value="8th">8th Standard</option>
                    <option value="9th">9th Standard</option>
                    <option value="10th">10th Standard</option>
                    <option value="11th">11th Standard</option>
                    <option value="12th">12th Standard</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Board <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="board"
                    value={formData.board}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select Board</option>
                    <option value="CBSE">CBSE</option>
                    <option value="ICSE">ICSE</option>
                    <option value="State Board">State Board</option>
                    <option value="IB">IB</option>
                    <option value="IGCSE">IGCSE</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Previous School Name
                  </label>
                  <input
                    type="text"
                    name="previousSchoolName"
                    value={formData.previousSchoolName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Previous School Location
                  </label>
                  <input
                    type="text"
                    name="previousSchoolLocation"
                    value={formData.previousSchoolLocation}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Previous School Board
                  </label>
                  <select
                    name="previousSchoolBoard"
                    value={formData.previousSchoolBoard}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Board</option>
                    <option value="CBSE">CBSE</option>
                    <option value="ICSE">ICSE</option>
                    <option value="State Board">State Board</option>
                    <option value="IB">IB</option>
                    <option value="IGCSE">IGCSE</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            </div>

          {/* Section D: Religion, Caste & Category */}
          <div className="space-y-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Religion, Caste & Category</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Religion <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="religion"
                    value={formData.religion}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select Religion</option>
                    <option value="Hindu">Hindu</option>
                    <option value="Muslim">Muslim</option>
                    <option value="Christian">Christian</option>
                    <option value="Sikh">Sikh</option>
                    <option value="Buddhist">Buddhist</option>
                    <option value="Jain">Jain</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Caste
                  </label>
                  <input
                    type="text"
                    name="caste"
                    value={formData.caste}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select Category</option>
                    <option value="General">General</option>
                    <option value="OBC">OBC</option>
                    <option value="SC">SC</option>
                    <option value="ST">ST</option>
                    <option value="EWS">EWS</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sub Caste
                  </label>
                  <input
                    type="text"
                    name="subCaste"
                    value={formData.subCaste}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

          {/* Section E: Hostel, Transport & Other Preferences */}
          <div className="space-y-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Hostel, Transport & Other Preferences</h2>
              
              <div className="space-y-6">
                <div className="p-4 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Accommodation & Transport</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        name="hostelRequired"
                        checked={formData.hostelRequired}
                        onChange={handleInputChange}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label className="ml-2 block text-sm text-gray-900">
                        Hostel accommodation required
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        name="transportRequired"
                        checked={formData.transportRequired}
                        onChange={handleInputChange}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label className="ml-2 block text-sm text-gray-900">
                        Transport facility required
                      </label>
                    </div>

                    {formData.transportRequired && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Transport Location/Route
                        </label>
                        <input
                          type="text"
                          name="transportLocation"
                          value={formData.transportLocation}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Enter pickup/drop location"
                        />
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-4 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Additional Facilities</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        name="lunchSnacks"
                        checked={formData.lunchSnacks}
                        onChange={handleInputChange}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label className="ml-2 block text-sm text-gray-900">
                        Lunch/Snacks facility required
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        name="otherFacilities"
                        checked={formData.otherFacilities}
                        onChange={handleInputChange}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label className="ml-2 block text-sm text-gray-900">
                        Other facilities required
                      </label>
                    </div>

                    {formData.otherFacilities && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Specify Other Facilities
                        </label>
                        <textarea
                          name="otherFacilitiesSpecify"
                          value={formData.otherFacilitiesSpecify}
                          onChange={handleInputChange}
                          rows={3}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Please specify the other facilities required"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

          {/* Section F: Fees Particulars */}
          <div className="space-y-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Fees Particulars</h2>
              
              <div className="space-y-6">
                <div className="p-4 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Fee Structure</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Admission Fee (₹)
                      </label>
                      <input
                        type="number"
                        name="admissionFee"
                        value={formData.admissionFee}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="0"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        School Fee (₹)
                      </label>
                      <input
                        type="number"
                        name="schoolFee"
                        value={formData.schoolFee}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="0"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Hostel Fee (₹)
                      </label>
                      <input
                        type="number"
                        name="hostelFee"
                        value={formData.hostelFee}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="0"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Transport Fee (₹)
                      </label>
                      <input
                        type="number"
                        name="transportFee"
                        value={formData.transportFee}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="0"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Lunch Fee (₹)
                      </label>
                      <input
                        type="number"
                        name="lunchFee"
                        value={formData.lunchFee}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="0"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Other Facilities Fee (₹)
                      </label>
                      <input
                        type="number"
                        name="otherFacilitiesFee"
                        value={formData.otherFacilitiesFee}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="0"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Uniform Fee (₹)
                      </label>
                      <input
                        type="number"
                        name="uniformFee"
                        value={formData.uniformFee}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="0"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Exam Fee (₹)
                      </label>
                      <input
                        type="number"
                        name="examFee"
                        value={formData.examFee}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="0"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Additional Fees & Discounts</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Other Fee (₹)
                      </label>
                      <input
                        type="number"
                        name="otherFee"
                        value={formData.otherFee}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="0"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Other Fee Description
                      </label>
                      <input
                        type="text"
                        name="otherFeeSpecify"
                        value={formData.otherFeeSpecify}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Describe the other fee"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Total Fees Before Discount (₹)
                      </label>
                      <input
                        type="number"
                        name="feesBeforeDiscount"
                        value={formData.feesBeforeDiscount}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="0"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Discount Amount (₹)
                      </label>
                      <input
                        type="number"
                        name="discount"
                        value={formData.discount}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="0"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Final Amount After Discount (₹)
                      </label>
                      <input
                        type="number"
                        name="feesAfterDiscount"
                        value={formData.feesAfterDiscount}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                        placeholder="0"
                        readOnly
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          {/* Section G: Documents & Declaration */}
          <div className="space-y-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Documents</h2>
              
              <div className="space-y-6">
                <div className="p-4 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Required Documents</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Birth Certificate <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="file"
                        name="birthCertificate"
                        onChange={(e) => setFormData(prev => ({ ...prev, birthCertificate: e.target.files?.[0] || null }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        accept=".pdf,.jpg,.jpeg,.png"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Previous School Marksheet
                      </label>
                      <input
                        type="file"
                        name="previousMarksheet"
                        onChange={(e) => setFormData(prev => ({ ...prev, previousMarksheet: e.target.files?.[0] || null }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        accept=".pdf,.jpg,.jpeg,.png"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Transfer Certificate
                      </label>
                      <input
                        type="file"
                        name="transferCertificate"
                        onChange={(e) => setFormData(prev => ({ ...prev, transferCertificate: e.target.files?.[0] || null }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        accept=".pdf,.jpg,.jpeg,.png"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Medical Certificate
                      </label>
                      <input
                        type="file"
                        name="medicalCertificate"
                        onChange={(e) => setFormData(prev => ({ ...prev, medicalCertificate: e.target.files?.[0] || null }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        accept=".pdf,.jpg,.jpeg,.png"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Passport Size Photo <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="file"
                        name="passportPhoto"
                        onChange={(e) => setFormData(prev => ({ ...prev, passportPhoto: e.target.files?.[0] || null }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        accept=".jpg,.jpeg,.png"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Aadhar Card Copy
                      </label>
                      <input
                        type="file"
                        name="aadharCopy"
                        onChange={(e) => setFormData(prev => ({ ...prev, aadharCopy: e.target.files?.[0] || null }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        accept=".pdf,.jpg,.jpeg,.png"
                      />
                    </div>
                  </div>
                </div>

              </div>
            </div>

          {/* Submit Button */}
          <div className="flex justify-between mt-8 pt-6 border-t">
            <button
              type="button"
              onClick={() => router.back()}
              className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            
            <button
              type="submit"
              className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}