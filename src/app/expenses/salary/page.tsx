"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Employee {
  id: string;
  name: string;
  basic: number;
  da: number;
  allowances: number;
  others: number;
  grossSalary: number;
  pf: number;
  pt: number;
  incomeTax: number;
  otherDeductions: number;
  totalDeductions: number;
  netSalary: number;
  paymentMethod: 'Cash' | 'Bank';
}

export default function SalaryPaymentPage() {
  const router = useRouter();
  const [employees, setEmployees] = useState<Employee[]>([
    {
      id: '1',
      name: 'John Smith',
      basic: 25000,
      da: 5000,
      allowances: 3000,
      others: 1000,
      grossSalary: 34000,
      pf: 3400,
      pt: 200,
      incomeTax: 1500,
      otherDeductions: 0,
      totalDeductions: 5100,
      netSalary: 28900,
      paymentMethod: 'Bank'
    },
    {
      id: '2',
      name: 'Sarah Johnson',
      basic: 30000,
      da: 6000,
      allowances: 4000,
      others: 1500,
      grossSalary: 41500,
      pf: 4150,
      pt: 200,
      incomeTax: 2000,
      otherDeductions: 0,
      totalDeductions: 6350,
      netSalary: 35150,
      paymentMethod: 'Bank'
    },
    {
      id: '3',
      name: 'Mike Wilson',
      basic: 22000,
      da: 4400,
      allowances: 2500,
      others: 800,
      grossSalary: 29700,
      pf: 2970,
      pt: 200,
      incomeTax: 1200,
      otherDeductions: 0,
      totalDeductions: 4370,
      netSalary: 25330,
      paymentMethod: 'Cash'
    }
  ]);

  const [salaryMonth, setSalaryMonth] = useState(new Date().toISOString().slice(0, 7));

  const handleEmployeeChange = (id: string, field: keyof Employee, value: string | number) => {
    setEmployees(prev => prev.map(emp => {
      if (emp.id === id) {
        const updated = { ...emp, [field]: value };
        
        // Recalculate gross salary
        if (['basic', 'da', 'allowances', 'others'].includes(field)) {
          updated.grossSalary = updated.basic + updated.da + updated.allowances + updated.others;
        }
        
        // Recalculate total deductions
        if (['pf', 'pt', 'incomeTax', 'otherDeductions'].includes(field)) {
          updated.totalDeductions = updated.pf + updated.pt + updated.incomeTax + updated.otherDeductions;
        }
        
        // Recalculate net salary
        updated.netSalary = updated.grossSalary - updated.totalDeductions;
        
        return updated;
      }
      return emp;
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Salary Payment Data:', { month: salaryMonth, employees });
    alert('Salary payments processed successfully!');
    router.push('/expenses');
  };

  const totalGrossSalary = employees.reduce((sum, emp) => sum + emp.grossSalary, 0);
  const totalDeductions = employees.reduce((sum, emp) => sum + emp.totalDeductions, 0);
  const totalNetSalary = employees.reduce((sum, emp) => sum + emp.netSalary, 0);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Payment of Salaries</h1>
          <p className="text-gray-600 mt-2">Process monthly salary payments for employees</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Salary for the Month <span className="text-red-500">*</span>
              </label>
              <input
                type="month"
                value={salaryMonth}
                onChange={(e) => setSalaryMonth(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name of Employee
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Basic
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      DA
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Allowances
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Others
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Gross Salary
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      PF
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      PT
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Income Tax
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Others
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Deductions
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Net Salary
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Cash/Bank
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {employees.map((employee) => (
                    <tr key={employee.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{employee.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input
                          type="number"
                          value={employee.basic}
                          onChange={(e) => handleEmployeeChange(employee.id, 'basic', parseFloat(e.target.value) || 0)}
                          className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input
                          type="number"
                          value={employee.da}
                          onChange={(e) => handleEmployeeChange(employee.id, 'da', parseFloat(e.target.value) || 0)}
                          className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input
                          type="number"
                          value={employee.allowances}
                          onChange={(e) => handleEmployeeChange(employee.id, 'allowances', parseFloat(e.target.value) || 0)}
                          className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input
                          type="number"
                          value={employee.others}
                          onChange={(e) => handleEmployeeChange(employee.id, 'others', parseFloat(e.target.value) || 0)}
                          className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-semibold text-gray-900">
                          ₹{employee.grossSalary.toLocaleString()}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input
                          type="number"
                          value={employee.pf}
                          onChange={(e) => handleEmployeeChange(employee.id, 'pf', parseFloat(e.target.value) || 0)}
                          className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input
                          type="number"
                          value={employee.pt}
                          onChange={(e) => handleEmployeeChange(employee.id, 'pt', parseFloat(e.target.value) || 0)}
                          className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input
                          type="number"
                          value={employee.incomeTax}
                          onChange={(e) => handleEmployeeChange(employee.id, 'incomeTax', parseFloat(e.target.value) || 0)}
                          className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input
                          type="number"
                          value={employee.otherDeductions}
                          onChange={(e) => handleEmployeeChange(employee.id, 'otherDeductions', parseFloat(e.target.value) || 0)}
                          className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-semibold text-gray-900">
                          ₹{employee.totalDeductions.toLocaleString()}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-semibold text-green-600">
                          ₹{employee.netSalary.toLocaleString()}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <select
                          value={employee.paymentMethod}
                          onChange={(e) => handleEmployeeChange(employee.id, 'paymentMethod', e.target.value as 'Cash' | 'Bank')}
                          className="px-2 py-1 border border-gray-300 rounded text-sm"
                        >
                          <option value="Cash">Cash</option>
                          <option value="Bank">Bank</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-gray-50">
                  <tr className="font-semibold">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Total</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ₹{employees.reduce((sum, emp) => sum + emp.basic, 0).toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ₹{employees.reduce((sum, emp) => sum + emp.da, 0).toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ₹{employees.reduce((sum, emp) => sum + emp.allowances, 0).toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ₹{employees.reduce((sum, emp) => sum + emp.others, 0).toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ₹{totalGrossSalary.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ₹{employees.reduce((sum, emp) => sum + emp.pf, 0).toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ₹{employees.reduce((sum, emp) => sum + emp.pt, 0).toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ₹{employees.reduce((sum, emp) => sum + emp.incomeTax, 0).toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ₹{employees.reduce((sum, emp) => sum + emp.otherDeductions, 0).toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ₹{totalDeductions.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">
                      ₹{totalNetSalary.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap"></td>
                  </tr>
                </tfoot>
              </table>
            </div>

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
                Process Salary Payments
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}