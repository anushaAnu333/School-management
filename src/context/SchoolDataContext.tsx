"use client"

import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Types
export interface Student {
  id: string;
  name: string;
  email: string;
  rollNumber: string;
  class: string;
  section: string;
  admissionDate: string;
  status: 'active' | 'inactive' | 'transferred';
  parentName: string;
  parentPhone: string;
  address: string;
}

export interface Fee {
  id: string;
  studentId: string;
  studentName: string;
  class: string;
  feeType: string;
  amount: number;
  dueDate: string;
  paidDate?: string;
  status: 'pending' | 'paid' | 'overdue';
  paymentMethod?: string;
}

export interface Expense {
  id: string;
  category: string;
  description: string;
  amount: number;
  vendor: string;
  date: string;
  status: 'pending' | 'paid';
  receipt?: string;
}

export interface Class {
  id: string;
  name: string;
  sections: string[];
  classTeacher: string;
  room: string;
  studentCount: number;
}

export interface Transfer {
  id: string;
  studentId: string;
  studentName: string;
  fromClass: string;
  toClass: string;
  fromSection: string;
  toSection: string;
  type: 'class' | 'section' | 'school';
  requestDate: string;
  status: 'pending' | 'approved' | 'completed' | 'rejected';
  reason: string;
}

export interface Admission {
  id: string;
  applicationDate: string;
  status: 'pending' | 'approved' | 'rejected';
  
  // Section A: Student Details
  studentName: string;
  dateOfBirth: string;
  gender: string;
  placeOfBirth: string;
  nationality: string;
  aadharNumber: string;
  bloodGroup: string;
  motherTongue: string;
  
  // Section B: Parent/Guardian Details
  fatherName: string;
  motherName: string;
  guardianName: string;
  fatherContact: string;
  fatherEmail: string;
  fatherOccupation: string;
  fatherAadhar: string;
  motherContact: string;
  motherEmail: string;
  motherOccupation: string;
  motherAadhar: string;
  motherBankAccount: string;
  motherBankIFSC: string;
  motherBankBranch: string;
  motherBankName: string;
  residentialAddress: string;
  flatDoorNo: string;
  streetRoad: string;
  localityArea: string;
  mandalTaluka: string;
  district: string;
  state: string;
  pincode: string;
  studentLivingWith: string;
  
  // Section C: Academic Details
  classAppliedFor: string;
  board: string;
  previousSchoolName: string;
  previousSchoolLocation: string;
  previousSchoolBoard: string;
  
  // Section D: Religion, Caste & Category
  religion: string;
  caste: string;
  category: string;
  subCaste: string;
  
  // Section E: Hostel, Transport & Other Preferences
  hostelRequired: boolean;
  transportRequired: boolean;
  transportLocation: string;
  lunchSnacks: boolean;
  otherFacilities: boolean;
  otherFacilitiesSpecify: string;
  
  // Section F: Fees Particulars
  admissionFee: string;
  schoolFee: string;
  hostelFee: string;
  transportFee: string;
  lunchFee: string;
  otherFacilitiesFee: string;
  uniformFee: string;
  examFee: string;
  otherFee: string;
  otherFeeSpecify: string;
  feesBeforeDiscount: string;
  discount: string;
  feesAfterDiscount: string;
  
  // Documents and Files
  documents: string[];
  birthCertificate: File | null;
  previousMarksheet: File | null;
  transferCertificate: File | null;
  medicalCertificate: File | null;
  passportPhoto: File | null;
  aadharCopy: File | null;
  signedForm: File | null;
  
  // Staff Entry Fields
  staffName: string;
  staffId: string;
  
  // Company/School Identification
  companyId: string;
}

export interface SchoolData {
  students: Student[];
  fees: Fee[];
  expenses: Expense[];
  classes: Class[];
  transfers: Transfer[];
  admissions: Admission[];
  settings: {
    schoolName: string;
    schoolCode: string;
    principalName: string;
    phone: string;
    email: string;
    address: string;
    website: string;
  };
}

// Initial data
const initialData: SchoolData = {
  students: [
    {
      id: '1',
      name: 'John Doe',
      email: 'john.doe@email.com',
      rollNumber: '2024001',
      class: '10',
      section: 'A',
      admissionDate: '2024-01-15',
      status: 'active',
      parentName: 'Robert Doe',
      parentPhone: '+1-555-0101',
      address: '123 Main St, City, State'
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane.smith@email.com',
      rollNumber: '2024002',
      class: '9',
      section: 'B',
      admissionDate: '2024-01-14',
      status: 'active',
      parentName: 'Mary Smith',
      parentPhone: '+1-555-0102',
      address: '456 Oak Ave, City, State'
    },
    {
      id: '3',
      name: 'Mike Johnson',
      email: 'mike.johnson@email.com',
      rollNumber: '2024003',
      class: '11',
      section: 'A',
      admissionDate: '2024-01-13',
      status: 'active',
      parentName: 'David Johnson',
      parentPhone: '+1-555-0103',
      address: '789 Pine Rd, City, State'
    }
  ],
  fees: [
    {
      id: '1',
      studentId: '1',
      studentName: 'John Doe',
      class: '10A',
      feeType: 'Monthly Fee',
      amount: 5000,
      dueDate: '2024-01-15',
      paidDate: '2024-01-15',
      status: 'paid',
      paymentMethod: 'Cash'
    },
    {
      id: '2',
      studentId: '2',
      studentName: 'Jane Smith',
      class: '9B',
      feeType: 'Annual Fee',
      amount: 25000,
      dueDate: '2024-01-14',
      status: 'pending'
    },
    {
      id: '3',
      studentId: '3',
      studentName: 'Mike Johnson',
      class: '11A',
      feeType: 'Transport Fee',
      amount: 2500,
      dueDate: '2024-01-13',
      status: 'overdue'
    }
  ],
  expenses: [
    {
      id: '1',
      category: 'Utilities',
      description: 'Electricity Bill',
      amount: 15000,
      vendor: 'Power Corp',
      date: '2024-01-15',
      status: 'paid'
    },
    {
      id: '2',
      category: 'Maintenance',
      description: 'Building Repair',
      amount: 25000,
      vendor: 'BuildFix Ltd',
      date: '2024-01-14',
      status: 'pending'
    },
    {
      id: '3',
      category: 'Supplies',
      description: 'Stationery Items',
      amount: 8500,
      vendor: 'Office Depot',
      date: '2024-01-13',
      status: 'paid'
    }
  ],
  classes: [
    {
      id: '1',
      name: 'Class 10',
      sections: ['A', 'B', 'C'],
      classTeacher: 'Mrs. Sarah Wilson',
      room: 'Room 101',
      studentCount: 115
    },
    {
      id: '2',
      name: 'Class 9',
      sections: ['A', 'B', 'C'],
      classTeacher: 'Mr. John Smith',
      room: 'Room 102',
      studentCount: 127
    },
    {
      id: '3',
      name: 'Class 8',
      sections: ['A', 'B', 'C'],
      classTeacher: 'Mrs. Emily Brown',
      room: 'Room 201',
      studentCount: 138
    }
  ],
  transfers: [
    {
      id: '1',
      studentId: '1',
      studentName: 'John Doe',
      fromClass: 'Class 9A',
      toClass: 'Class 10A',
      fromSection: 'A',
      toSection: 'A',
      type: 'class',
      requestDate: '2024-01-15',
      status: 'completed',
      reason: 'Academic progression'
    },
    {
      id: '2',
      studentId: '2',
      studentName: 'Jane Smith',
      fromClass: 'Class 10A',
      toClass: 'Class 10B',
      fromSection: 'A',
      toSection: 'B',
      type: 'section',
      requestDate: '2024-01-14',
      status: 'pending',
      reason: 'Parent request'
    }
  ],
  admissions: [
    {
      id: '1',
      applicationDate: '2024-01-15',
      status: 'approved',
      studentName: 'JOHN DOE',
      dateOfBirth: '2008-05-15',
      gender: 'Male',
      placeOfBirth: 'New York',
      nationality: 'American',
      aadharNumber: '123456789012',
      bloodGroup: 'O+',
      motherTongue: 'English',
      fatherName: 'Robert Doe',
      motherName: 'Sarah Doe',
      guardianName: '',
      fatherContact: '5550101',
      fatherEmail: 'robert.doe@email.com',
      fatherOccupation: 'Business',
      fatherAadhar: '123456789013',
      motherContact: '5550102',
      motherEmail: 'sarah.doe@email.com',
      motherOccupation: 'Job Holder',
      motherAadhar: '123456789014',
      motherBankAccount: '1234567890',
      motherBankIFSC: 'SBIN0001234',
      motherBankBranch: 'Main Branch',
      motherBankName: 'State Bank of India',
      residentialAddress: '123 Main St',
      flatDoorNo: '123',
      streetRoad: 'Main Street',
      localityArea: 'Downtown',
      mandalTaluka: 'Central',
      district: 'New York',
      state: 'New York',
      pincode: '10001',
      studentLivingWith: 'Both',
      classAppliedFor: 'Class 10',
      board: 'CBSE',
      previousSchoolName: 'ABC School',
      previousSchoolLocation: 'New York',
      previousSchoolBoard: 'CBSE',
      religion: 'Christian',
      caste: '',
      category: 'General',
      subCaste: '',
      hostelRequired: false,
      transportRequired: true,
      transportLocation: 'Downtown',
      lunchSnacks: true,
      otherFacilities: false,
      otherFacilitiesSpecify: '',
      admissionFee: '5000',
      schoolFee: '25000',
      hostelFee: '0',
      transportFee: '3000',
      lunchFee: '2000',
      otherFacilitiesFee: '0',
      uniformFee: '1500',
      examFee: '1000',
      otherFee: '500',
      otherFeeSpecify: 'Library Fee',
      feesBeforeDiscount: '38500',
      discount: '0',
      feesAfterDiscount: '38500',
      documents: ['Birth Certificate', 'Previous Marksheet'],
      birthCertificate: null,
      previousMarksheet: null,
      transferCertificate: null,
      medicalCertificate: null,
      passportPhoto: null,
      aadharCopy: null,
      signedForm: null,
      staffName: 'Admin User',
      staffId: 'EMP001',
      companyId: 'SCH001'
    },
    {
      id: '2',
      applicationDate: '2024-01-14',
      status: 'pending',
      studentName: 'JANE SMITH',
      dateOfBirth: '2009-03-22',
      gender: 'Female',
      placeOfBirth: 'Los Angeles',
      nationality: 'American',
      aadharNumber: '123456789015',
      bloodGroup: 'A+',
      motherTongue: 'English',
      fatherName: 'Michael Smith',
      motherName: 'Mary Smith',
      guardianName: '',
      fatherContact: '5550103',
      fatherEmail: 'michael.smith@email.com',
      fatherOccupation: 'Profession',
      fatherAadhar: '123456789016',
      motherContact: '5550104',
      motherEmail: 'mary.smith@email.com',
      motherOccupation: 'Home Maker',
      motherAadhar: '123456789017',
      motherBankAccount: '2345678901',
      motherBankIFSC: 'HDFC0001234',
      motherBankBranch: 'Central Branch',
      motherBankName: 'HDFC Bank',
      residentialAddress: '456 Oak Ave',
      flatDoorNo: '456',
      streetRoad: 'Oak Avenue',
      localityArea: 'Uptown',
      mandalTaluka: 'North',
      district: 'Los Angeles',
      state: 'California',
      pincode: '90210',
      studentLivingWith: 'Both',
      classAppliedFor: 'Class 9',
      board: 'CBSE',
      previousSchoolName: 'XYZ School',
      previousSchoolLocation: 'Los Angeles',
      previousSchoolBoard: 'CBSE',
      religion: 'Christian',
      caste: '',
      category: 'General',
      subCaste: '',
      hostelRequired: false,
      transportRequired: false,
      transportLocation: '',
      lunchSnacks: false,
      otherFacilities: false,
      otherFacilitiesSpecify: '',
      admissionFee: '5000',
      schoolFee: '25000',
      hostelFee: '0',
      transportFee: '0',
      lunchFee: '0',
      otherFacilitiesFee: '0',
      uniformFee: '1500',
      examFee: '1000',
      otherFee: '500',
      otherFeeSpecify: 'Library Fee',
      feesBeforeDiscount: '33000',
      discount: '1000',
      feesAfterDiscount: '32000',
      documents: ['Birth Certificate'],
      birthCertificate: null,
      previousMarksheet: null,
      transferCertificate: null,
      medicalCertificate: null,
      passportPhoto: null,
      aadharCopy: null,
      signedForm: null,
      staffName: 'Admin User',
      staffId: 'EMP001',
      companyId: 'SCH001'
    }
  ],
  settings: {
    schoolName: 'Greenwood High School',
    schoolCode: 'GHS001',
    principalName: 'Dr. Sarah Wilson',
    phone: '+1 (555) 123-4567',
    email: 'info@greenwoodhigh.edu',
    address: '123 Education Street, Learning City, LC 12345',
    website: 'https://www.greenwoodhigh.edu'
  }
};

// Action types
type SchoolDataAction =
  | { type: 'ADD_STUDENT'; payload: Student }
  | { type: 'UPDATE_STUDENT'; payload: Student }
  | { type: 'DELETE_STUDENT'; payload: string }
  | { type: 'ADD_FEE'; payload: Fee }
  | { type: 'UPDATE_FEE'; payload: Fee }
  | { type: 'DELETE_FEE'; payload: string }
  | { type: 'ADD_EXPENSE'; payload: Expense }
  | { type: 'UPDATE_EXPENSE'; payload: Expense }
  | { type: 'DELETE_EXPENSE'; payload: string }
  | { type: 'ADD_CLASS'; payload: Class }
  | { type: 'UPDATE_CLASS'; payload: Class }
  | { type: 'DELETE_CLASS'; payload: string }
  | { type: 'ADD_TRANSFER'; payload: Transfer }
  | { type: 'UPDATE_TRANSFER'; payload: Transfer }
  | { type: 'DELETE_TRANSFER'; payload: string }
  | { type: 'ADD_ADMISSION'; payload: Admission }
  | { type: 'UPDATE_ADMISSION'; payload: Admission }
  | { type: 'DELETE_ADMISSION'; payload: string }
  | { type: 'UPDATE_SETTINGS'; payload: Partial<SchoolData['settings']> }
  | { type: 'LOAD_DATA'; payload: SchoolData };

// Reducer
function schoolDataReducer(state: SchoolData, action: SchoolDataAction): SchoolData {
  switch (action.type) {
    case 'ADD_STUDENT':
      return { ...state, students: [...state.students, action.payload] };
    case 'UPDATE_STUDENT':
      return {
        ...state,
        students: state.students.map(student =>
          student.id === action.payload.id ? action.payload : student
        )
      };
    case 'DELETE_STUDENT':
      return {
        ...state,
        students: state.students.filter(student => student.id !== action.payload)
      };
    case 'ADD_FEE':
      return { ...state, fees: [...state.fees, action.payload] };
    case 'UPDATE_FEE':
      return {
        ...state,
        fees: state.fees.map(fee => fee.id === action.payload.id ? action.payload : fee)
      };
    case 'DELETE_FEE':
      return {
        ...state,
        fees: state.fees.filter(fee => fee.id !== action.payload)
      };
    case 'ADD_EXPENSE':
      return { ...state, expenses: [...state.expenses, action.payload] };
    case 'UPDATE_EXPENSE':
      return {
        ...state,
        expenses: state.expenses.map(expense => expense.id === action.payload.id ? action.payload : expense)
      };
    case 'DELETE_EXPENSE':
      return {
        ...state,
        expenses: state.expenses.filter(expense => expense.id !== action.payload)
      };
    case 'ADD_CLASS':
      return { ...state, classes: [...state.classes, action.payload] };
    case 'UPDATE_CLASS':
      return {
        ...state,
        classes: state.classes.map(cls => cls.id === action.payload.id ? action.payload : cls)
      };
    case 'DELETE_CLASS':
      return {
        ...state,
        classes: state.classes.filter(cls => cls.id !== action.payload)
      };
    case 'ADD_TRANSFER':
      return { ...state, transfers: [...state.transfers, action.payload] };
    case 'UPDATE_TRANSFER':
      return {
        ...state,
        transfers: state.transfers.map(transfer => transfer.id === action.payload.id ? action.payload : transfer)
      };
    case 'DELETE_TRANSFER':
      return {
        ...state,
        transfers: state.transfers.filter(transfer => transfer.id !== action.payload)
      };
    case 'ADD_ADMISSION':
      return { ...state, admissions: [...state.admissions, action.payload] };
    case 'UPDATE_ADMISSION':
      return {
        ...state,
        admissions: state.admissions.map(admission => admission.id === action.payload.id ? action.payload : admission)
      };
    case 'DELETE_ADMISSION':
      return {
        ...state,
        admissions: state.admissions.filter(admission => admission.id !== action.payload)
      };
    case 'UPDATE_SETTINGS':
      return { ...state, settings: { ...state.settings, ...action.payload } };
    case 'LOAD_DATA':
      return action.payload;
    default:
      return state;
  }
}

// Context
const SchoolDataContext = createContext<{
  data: SchoolData;
  dispatch: React.Dispatch<SchoolDataAction>;
} | null>(null);

// Provider
export function SchoolDataProvider({ children }: { children: React.ReactNode }) {
  const [data, dispatch] = useReducer(schoolDataReducer, initialData);

  // Load data from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem('schoolData');
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        dispatch({ type: 'LOAD_DATA', payload: parsedData });
      } catch (error) {
        console.error('Error loading data from localStorage:', error);
      }
    }
  }, []);

  // Save data to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem('schoolData', JSON.stringify(data));
  }, [data]);

  return (
    <SchoolDataContext.Provider value={{ data, dispatch }}>
      {children}
    </SchoolDataContext.Provider>
  );
}

// Hook
export function useSchoolData() {
  const context = useContext(SchoolDataContext);
  if (!context) {
    throw new Error('useSchoolData must be used within a SchoolDataProvider');
  }
  return context;
}
