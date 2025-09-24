"use client"

import { useState } from 'react'
import { FeeMaster } from '@/types'

export default function FeeMasterConfig() {
  const [academicYear, setAcademicYear] = useState('2024-25')
  const [selectedClass, setSelectedClass] = useState('')
  const [feeData, setFeeData] = useState<Partial<FeeMaster['fees']>>({
    tuitionFee: 0,
    transportFee: 0,
    hostelFee: 0,
    labFee: 0,
    libraryFee: 0,
    examFee: 0,
    uniformFee: 0,
    others: []
  })

  const [otherFeeName, setOtherFeeName] = useState('')
  const [otherFeeAmount, setOtherFeeAmount] = useState(0)

  const classes = [
    'Nursery', 'LKG', 'UKG', 'Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5',
    'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10', 'Class 11', 'Class 12'
  ]

  const handleFeeChange = (field: keyof FeeMaster['fees'], value: number) => {
    setFeeData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const addOtherFee = () => {
    if (otherFeeName && otherFeeAmount > 0) {
      setFeeData(prev => ({
        ...prev,
        others: [...(prev.others || []), { name: otherFeeName, amount: otherFeeAmount }]
      }))
      setOtherFeeName('')
      setOtherFeeAmount(0)
    }
  }

  const removeOtherFee = (index: number) => {
    setFeeData(prev => ({
      ...prev,
      others: (prev.others || []).filter((_, i) => i !== index)
    }))
  }

  const calculateTotal = () => {
    const baseTotal = (feeData.tuitionFee || 0) + 
                     (feeData.transportFee || 0) + 
                     (feeData.hostelFee || 0) + 
                     (feeData.labFee || 0) + 
                     (feeData.libraryFee || 0) + 
                     (feeData.examFee || 0) + 
                     (feeData.uniformFee || 0)
    
    const othersTotal = (feeData.others || []).reduce((sum, fee) => sum + fee.amount, 0)
    
    return baseTotal + othersTotal
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Fee master configuration:', {
      academicYear,
      class: selectedClass,
      fees: feeData,
      total: calculateTotal()
    })
    alert('Fee master configuration saved successfully!')
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Fee Master Configuration</h1>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Academic Year and Class Selection */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Academic Year & Class Selection</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Academic Year *
                  </label>
                  <input
                    type="text"
                    value={academicYear}
                    onChange={(e) => setAcademicYear(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="2024-25"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Class *
                  </label>
                  <select
                    value={selectedClass}
                    onChange={(e) => setSelectedClass(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select Class</option>
                    {classes.map(cls => (
                      <option key={cls} value={cls}>{cls}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Fee Configuration */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Fee Configuration for {selectedClass || 'Selected Class'}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tuition Fee (₹)
                  </label>
                  <input
                    type="number"
                    value={feeData.tuitionFee || ''}
                    onChange={(e) => handleFeeChange('tuitionFee', parseFloat(e.target.value) || 0)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    min="0"
                    step="0.01"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Transport Fee (₹)
                  </label>
                  <input
                    type="number"
                    value={feeData.transportFee || ''}
                    onChange={(e) => handleFeeChange('transportFee', parseFloat(e.target.value) || 0)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    min="0"
                    step="0.01"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Hostel Fee (₹)
                  </label>
                  <input
                    type="number"
                    value={feeData.hostelFee || ''}
                    onChange={(e) => handleFeeChange('hostelFee', parseFloat(e.target.value) || 0)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    min="0"
                    step="0.01"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Lab Fee (₹)
                  </label>
                  <input
                    type="number"
                    value={feeData.labFee || ''}
                    onChange={(e) => handleFeeChange('labFee', parseFloat(e.target.value) || 0)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    min="0"
                    step="0.01"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Library Fee (₹)
                  </label>
                  <input
                    type="number"
                    value={feeData.libraryFee || ''}
                    onChange={(e) => handleFeeChange('libraryFee', parseFloat(e.target.value) || 0)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    min="0"
                    step="0.01"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Exam Fee (₹)
                  </label>
                  <input
                    type="number"
                    value={feeData.examFee || ''}
                    onChange={(e) => handleFeeChange('examFee', parseFloat(e.target.value) || 0)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    min="0"
                    step="0.01"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Uniform Fee (₹)
                  </label>
                  <input
                    type="number"
                    value={feeData.uniformFee || ''}
                    onChange={(e) => handleFeeChange('uniformFee', parseFloat(e.target.value) || 0)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    min="0"
                    step="0.01"
                  />
                </div>
              </div>
            </div>

            {/* Other Fees */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Other Fees</h2>
              
              {/* Add Other Fee */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 p-4 bg-white rounded border">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Fee Name
                  </label>
                  <input
                    type="text"
                    value={otherFeeName}
                    onChange={(e) => setOtherFeeName(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., Sports Fee, Computer Fee"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Amount (₹)
                  </label>
                  <input
                    type="number"
                    value={otherFeeAmount || ''}
                    onChange={(e) => setOtherFeeAmount(parseFloat(e.target.value) || 0)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    min="0"
                    step="0.01"
                  />
                </div>
                <div className="flex items-end">
                  <button
                    type="button"
                    onClick={addOtherFee}
                    className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Add Fee
                  </button>
                </div>
              </div>

              {/* Other Fees List */}
              <div className="space-y-2">
                {feeData.others?.map((fee, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-white rounded border">
                    <div className="flex-1">
                      <span className="font-medium">{fee.name}</span>
                      <span className="text-gray-500 ml-4">₹{fee.amount}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeOtherFee(index)}
                      className="text-red-600 hover:text-red-800 ml-4"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Total Calculation */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Fee Summary</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Tuition Fee:</span>
                    <span>₹{feeData.tuitionFee || 0}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Transport Fee:</span>
                    <span>₹{feeData.transportFee || 0}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Hostel Fee:</span>
                    <span>₹{feeData.hostelFee || 0}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Lab Fee:</span>
                    <span>₹{feeData.labFee || 0}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Library Fee:</span>
                    <span>₹{feeData.libraryFee || 0}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Exam Fee:</span>
                    <span>₹{feeData.examFee || 0}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Uniform Fee:</span>
                    <span>₹{feeData.uniformFee || 0}</span>
                  </div>
                  {feeData.others?.map((fee, index) => (
                    <div key={index} className="flex justify-between">
                      <span>{fee.name}:</span>
                      <span>₹{fee.amount}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total Fee:</span>
                    <span>₹{calculateTotal()}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 font-medium"
              >
                Save Fee Configuration
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}



