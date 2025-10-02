"use client"

import React, { useState } from 'react';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('general');
  const [settings, setSettings] = useState({
    schoolName: 'ABC Public School',
    schoolCode: 'ABC001',
    address: '123 Education Street, Learning City, LC 12345',
    phone: '+91 9876543210',
    email: 'info@abcschool.edu',
    establishedYear: '1995',
    board: 'CBSE',
    academicYear: '2024-25',
    totalClasses: 12,
    timezone: 'Asia/Kolkata',
    currency: 'INR',
    language: 'English'
  });

  const [feeConfig, setFeeConfig] = useState({
    academicYear: '2024-25',
    class5Fee: 3600,
    class6Fee: 4000,
    class7Fee: 4200,
    class8Fee: 4500,
    class9Fee: 4800,
    class10Fee: 5000,
    lateFeeAmount: 100,
    lateFeePercentage: 2,
    discountPercentage: 5,
    discountCriteria: 'Early Payment'
  });

  const handleInputChange = (field: string, value: string) => {
    setSettings(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFeeConfigChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFeeConfig(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    console.log('Settings saved:', settings);
    console.log('Fee Configuration:', feeConfig);
    alert('Settings saved successfully!');
  };

  const tabs = [
    { id: 'general', name: 'General', icon: '🏫' },
    { id: 'academic', name: 'Academic', icon: '📚' },
    { id: 'fee-config', name: 'Fee Configuration', icon: '💰' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Title */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600 mt-2">Configure your school management system</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm">
          {/* Tab Navigation */}
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'general' && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">General Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      School Name
                    </label>
                    <input
                      type="text"
                      value={settings.schoolName}
                      onChange={(e) => handleInputChange('schoolName', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      School Code
                    </label>
                    <input
                      type="text"
                      value={settings.schoolCode}
                      onChange={(e) => handleInputChange('schoolCode', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Address
                    </label>
                    <textarea
                      value={settings.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={settings.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={settings.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Established Year
                    </label>
                    <input
                      type="number"
                      value={settings.establishedYear}
                      onChange={(e) => handleInputChange('establishedYear', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Board
                    </label>
                    <select
                      value={settings.board}
                      onChange={(e) => handleInputChange('board', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="CBSE">CBSE</option>
                      <option value="ICSE">ICSE</option>
                      <option value="State Board">State Board</option>
                      <option value="IB">IB</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'academic' && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Academic Settings</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Academic Year
                    </label>
                    <input
                      type="text"
                      value={settings.academicYear}
                      onChange={(e) => handleInputChange('academicYear', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Total Classes
                    </label>
                    <input
                      type="number"
                      value={settings.totalClasses}
                      onChange={(e) => handleInputChange('totalClasses', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'fee-config' && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Fee Configuration</h2>
                
                {/* Academic Year */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Academic Year
                  </label>
                  <input
                    type="text"
                    name="academicYear"
                    value={feeConfig.academicYear}
                    onChange={handleFeeConfigChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., 2024-25"
                  />
                </div>

                {/* Class-wise Fee Structure */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Class-wise Monthly Fee Structure</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { class: 'Class 5', field: 'class5Fee', amount: feeConfig.class5Fee },
                      { class: 'Class 6', field: 'class6Fee', amount: feeConfig.class6Fee },
                      { class: 'Class 7', field: 'class7Fee', amount: feeConfig.class7Fee },
                      { class: 'Class 8', field: 'class8Fee', amount: feeConfig.class8Fee },
                      { class: 'Class 9', field: 'class9Fee', amount: feeConfig.class9Fee },
                      { class: 'Class 10', field: 'class10Fee', amount: feeConfig.class10Fee }
                    ].map(({ class: className, field, amount }) => (
                      <div key={field}>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {className} Monthly Fee (₹)
                        </label>
                        <input
                          type="number"
                          name={field}
                          value={amount}
                          onChange={handleFeeConfigChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Enter monthly fee"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Late Fee Configuration */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Late Fee Configuration</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Late Fee Amount (₹)
                      </label>
                      <input
                        type="number"
                        name="lateFeeAmount"
                        value={feeConfig.lateFeeAmount}
                        onChange={handleFeeConfigChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter late fee amount"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Late Fee Percentage (%)
                      </label>
                      <input
                        type="number"
                        name="lateFeePercentage"
                        value={feeConfig.lateFeePercentage}
                        onChange={handleFeeConfigChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter late fee percentage"
                      />
                    </div>
                  </div>
                </div>

                {/* Discount Configuration */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Discount Configuration</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Discount Percentage (%)
                      </label>
                      <input
                        type="number"
                        name="discountPercentage"
                        value={feeConfig.discountPercentage}
                        onChange={handleFeeConfigChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter discount percentage"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Discount Criteria
                      </label>
                      <select
                        name="discountCriteria"
                        value={feeConfig.discountCriteria}
                        onChange={handleFeeConfigChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="Early Payment">Early Payment</option>
                        <option value="Sibling Discount">Sibling Discount</option>
                        <option value="Merit Scholarship">Merit Scholarship</option>
                        <option value="Financial Aid">Financial Aid</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Fee Structure Summary */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Fee Structure Summary</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      { class: 'Class 5', monthly: feeConfig.class5Fee, annual: feeConfig.class5Fee * 10 },
                      { class: 'Class 6', monthly: feeConfig.class6Fee, annual: feeConfig.class6Fee * 10 },
                      { class: 'Class 7', monthly: feeConfig.class7Fee, annual: feeConfig.class7Fee * 10 },
                      { class: 'Class 8', monthly: feeConfig.class8Fee, annual: feeConfig.class8Fee * 10 },
                      { class: 'Class 9', monthly: feeConfig.class9Fee, annual: feeConfig.class9Fee * 10 },
                      { class: 'Class 10', monthly: feeConfig.class10Fee, annual: feeConfig.class10Fee * 10 }
                    ].map(({ class: className, monthly, annual }) => (
                      <div key={className} className="bg-white rounded-lg p-4 border border-gray-200">
                        <h4 className="font-semibold text-gray-900 mb-2">{className}</h4>
                        <div className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Monthly:</span>
                            <span className="font-medium">₹{monthly.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Annual:</span>
                            <span className="font-medium">₹{annual.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Save Button */}
          <div className="border-t border-gray-200 px-6 py-4 bg-gray-50 rounded-b-lg">
            <div className="flex justify-end">
              <button
                onClick={handleSave}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Save Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
