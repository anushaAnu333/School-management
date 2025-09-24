// Organization Types
export interface Organization {
  id: string;
  type: 'School' | 'Junior College' | 'Degree College';
  name: string;
  address: string;
  contactDetails: {
    mobile1: string;
    mobile2?: string;
    email1: string;
    email2?: string;
  };
  panNumber: string;
  tanNumber: string;
  societyRegistrationNumber: string;
  dateOfEstablishment: string;
  lastRenewedDate: string;
  nextRenewalDate: string;
  boards: ('CBSE' | 'ICSE' | 'State Board' | 'Others')[];
  status: 'Autonomous' | 'Affiliated' | 'Others';
  maxStrength: number;
  classes: ClassConfig[];
}

export interface ClassConfig {
  id: string;
  name: string;
  maxStrength: number;
  board: 'CBSE' | 'ICSE' | 'State Board' | 'Others';
  subBranches?: SubBranch[];
}

export interface SubBranch {
  id: string;
  name: string;
  maxStrength: number;
}

// Fee Master Types
export interface FeeMaster {
  id: string;
  academicYear: string;
  classId: string;
  fees: {
    tuitionFee: number;
    transportFee: number;
    hostelFee: number;
    labFee: number;
    libraryFee: number;
    examFee: number;
    uniformFee: number;
    others: { name: string; amount: number }[];
  };
}

// Student Types
export interface Student {
  id: string;
  admissionNumber: string;
  personalDetails: {
    fullName: string;
    dateOfBirth: string;
    gender: 'Male' | 'Female';
    placeOfBirth: string;
    nationality: string;
    aadharNumber: string;
    bloodGroup: string;
    motherTongue: string;
  };
  parentDetails: {
    father: ParentDetails;
    mother: ParentDetails;
    guardian?: ParentDetails;
  };
  academicDetails: {
    classAppliedFor: string;
    board: 'CBSE' | 'ICSE' | 'State Board' | 'Others';
    previousSchool: {
      name: string;
      location: string;
      board: 'CBSE' | 'ICSE' | 'State Board' | 'Others';
    };
  };
  religionCaste: {
    religion: 'Hindu' | 'Muslim' | 'Christian' | 'Sikh' | 'Buddhist' | 'Jain' | 'Others';
    caste: string;
    category: 'General' | 'SC' | 'ST' | 'OBC' | 'EWS' | 'Others';
    subCaste?: string;
  };
  preferences: {
    hostelRequired: boolean;
    transportRequired: boolean;
    transportLocation?: string;
    lunchSnacks: boolean;
    otherFacilities?: string;
  };
  fees: {
    admissionFee: number;
    schoolFee: number;
    hostelFee: number;
    transportFee: number;
    lunchSnacksFee: number;
    otherFacilitiesFee: number;
    uniformFee: number;
    examFee: number;
    otherFee: number;
    totalBeforeDiscount: number;
    discount: number;
    totalAfterDiscount: number;
  };
  residentialAddress: Address;
  studentLivingWith: 'Both' | 'Mother' | 'Father' | 'Guardian';
  admissionStatus: 'Confirmed' | 'Not Confirmed';
  createdAt: string;
}

export interface ParentDetails {
  name: string;
  contactNumber: string;
  email: string;
  occupation: 'Business' | 'Profession' | 'Job Holder' | 'Home Maker' | 'Others';
  aadharNumber: string;
  bankAccount?: {
    accountNumber: string;
    ifsc: string;
    branch: string;
    bankName: string;
  };
}

export interface Address {
  flatDoorNumber: string;
  streetRoadLine: string;
  localityAreaVillage: string;
  mandalTalukaVillage: string;
  district: string;
  state: string;
  pincode: string;
}

// Admission Enquiry Types
export interface AdmissionEnquiry {
  id: string;
  date: string;
  studentName: string;
  gender: 'Male' | 'Female';
  classAppliedFor: string;
  mobileNumber: string;
  examConducted: boolean;
  marksObtained?: string;
  qualified?: boolean;
  admissionStatus: 'Confirmed' | 'Not Confirmed';
  confirmationSent: {
    sms: boolean;
    whatsapp: boolean;
  };
}

// Student Transfer Types
export interface StudentTransfer {
  id: string;
  studentId: string;
  studentName: string;
  dateOfTransfer: string;
  reasonForLeaving: string;
  handoverDocuments: string[];
}

// Fee Collection Types
export interface FeeCollection {
  id: string;
  studentId: string;
  studentName: string;
  class: string;
  section: string;
  outstandingFee: number;
  feesPaid: number;
  paymentMode: 'Cash' | 'Online';
  transactionReference?: string;
  remainingDue: number;
  receiptNumber: string;
  date: string;
}

// Payment Voucher Types
export interface PaymentVoucher {
  id: string;
  voucherNumber: string;
  date: string;
  vendorName: string;
  taxableAmount: number;
  gstRate: number;
  gstAmount: number;
  totalInvoiceValue: number;
  natureOfExpense: 'Electricity & Water' | 'Repairs & Maintenance' | 'Printing & Stationery' | 'Transport Fuel & Maintenance' | 'Software Subscriptions' | 'Audit & Legal Fees' | 'Miscellaneous / Contingency' | 'PT/PF/GST';
}

// Salary Payment Types
export interface SalaryPayment {
  id: string;
  employeeId: string;
  employeeName: string;
  salaryForMonth: string;
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
  paymentMode: 'Cash' | 'Bank';
}

// Daily Collection Types
export interface DailyCollection {
  id: string;
  date: string;
  openingBalance: number;
  feeCollected: number;
  feeRefunded: number;
  paymentsMade: number;
  salariesPaid: number;
  amountDeposited: number;
  closingBalance: number;
  cash: number;
  online: number;
  others: number;
}

// Report Types
export interface FeeReceivableSummary {
  class: string;
  feeReceivable: number;
  feeReceived: number;
  outstanding: number;
}

export interface AdmissionsSummary {
  totalAdmissions: number;
  newAdmissions: number;
  schoolTransfers: number;
  classWise: { [className: string]: number };
}

export interface ExpenseSummary {
  category: string;
  amount: number;
  period: string;
}

// User Role Types
export type UserRole = 'Principal' | 'Admin' | 'Accountant' | 'Fees Follow-up';

export interface User {
  id: string;
  username: string;
  email: string;
  role: UserRole;
  permissions: string[];
}

// Form Types for UI
export interface AdmissionEnquiryForm {
  studentName: string;
  gender: 'Male' | 'Female';
  classAppliedFor: string;
  mobileNumber: string;
  examConducted: boolean;
  marksObtained?: string;
  qualified?: boolean;
}

export interface StudentOnboardingForm {
  // Section A: Student Details
  studentDetails: {
    fullName: string;
    dateOfBirth: string;
    gender: 'Male' | 'Female';
    placeOfBirth: string;
    nationality: string;
    aadharNumber: string;
    bloodGroup: string;
    motherTongue: string;
  };
  // Section B: Parent/Guardian Details
  parentDetails: {
    father: ParentDetails;
    mother: ParentDetails;
    guardian?: ParentDetails;
  };
  // Section C: Academic Details
  academicDetails: {
    classAppliedFor: string;
    board: 'CBSE' | 'ICSE' | 'State Board' | 'Others';
    previousSchool: {
      name: string;
      location: string;
      board: 'CBSE' | 'ICSE' | 'State Board' | 'Others';
    };
  };
  // Section D: Religion, Caste & Category
  religionCaste: {
    religion: 'Hindu' | 'Muslim' | 'Christian' | 'Sikh' | 'Buddhist' | 'Jain' | 'Others';
    caste: string;
    category: 'General' | 'SC' | 'ST' | 'OBC' | 'EWS' | 'Others';
    subCaste?: string;
  };
  // Section E: Hostel, Transport & Other Preferences
  preferences: {
    hostelRequired: boolean;
    transportRequired: boolean;
    transportLocation?: string;
    lunchSnacks: boolean;
    otherFacilities?: string;
  };
  // Section F: Fees Particulars
  fees: {
    admissionFee: number;
    schoolFee: number;
    hostelFee: number;
    transportFee: number;
    lunchSnacksFee: number;
    otherFacilitiesFee: number;
    uniformFee: number;
    examFee: number;
    otherFee: number;
    discount: number;
  };
  // Residential Address
  residentialAddress: Address;
  studentLivingWith: 'Both' | 'Mother' | 'Father' | 'Guardian';
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}


