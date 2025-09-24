// Centralized student data structure for the school management system
export interface Student {
  id: string;
  admissionNumber: string;
  name: string;
  class: string;
  section: string;
  fatherName: string;
  fatherContact: string;
  motherName?: string;
  motherContact?: string;
  address: string;
  dateOfBirth: string;
  admissionDate: string;
  academicYear: string;
  monthlyFee: number;
  totalFees: number;
  feesPaidTillDate: number;
  pendingAmount: number;
  lastPaymentDate?: string;
  paymentStatus: 'paid' | 'partial' | 'pending';
  paymentMethod?: string;
  dueDate: string;
  lateFee: number;
  discount: number;
  monthsPaid: number;
  monthsPending: number;
  monthlyPayments: MonthlyPayment[];
}

export interface MonthlyPayment {
  month: string;
  year: number;
  amount: number;
  status: 'paid' | 'pending' | 'overdue';
  paymentDate?: string;
  paymentMethod?: string;
  transactionReference?: string;
  lateFee?: number;
  discount?: number;
}

export interface ClassInfo {
  className: string;
  section: string;
  totalStudents: number;
  paidStudents: number;
  partialStudents: number;
  pendingStudents: number;
  totalFees: number;
  collectedFees: number;
  pendingFees: number;
}

// Sample student data organized by classes
export const studentsData: Student[] = [
  // Class 10 Students
  {
    id: 'STU001',
    admissionNumber: 'STU001',
    name: 'Rajesh Kumar',
    class: 'Class 10',
    section: 'A',
    fatherName: 'Suresh Kumar',
    fatherContact: '9876543210',
    motherName: 'Sunita Kumar',
    motherContact: '9876543211',
    address: '123, Sector 5, Delhi',
    dateOfBirth: '2008-03-15',
    admissionDate: '2024-04-01',
    academicYear: '2024-25',
    monthlyFee: 5000,
    totalFees: 50000,
    feesPaidTillDate: 25000,
    pendingAmount: 25000,
    lastPaymentDate: '2024-05-15',
    paymentStatus: 'partial',
    paymentMethod: 'Online Transfer',
    dueDate: '2024-06-30',
    lateFee: 0,
    discount: 0,
    monthsPaid: 5,
    monthsPending: 5,
    monthlyPayments: [
      { month: 'April', year: 2024, amount: 5000, status: 'paid', paymentDate: '2024-04-15', paymentMethod: 'Online Transfer' },
      { month: 'May', year: 2024, amount: 5000, status: 'paid', paymentDate: '2024-05-15', paymentMethod: 'Online Transfer' },
      { month: 'June', year: 2024, amount: 5000, status: 'pending' },
      { month: 'July', year: 2024, amount: 5000, status: 'pending' },
      { month: 'August', year: 2024, amount: 5000, status: 'pending' },
      { month: 'September', year: 2024, amount: 5000, status: 'pending' },
      { month: 'October', year: 2024, amount: 5000, status: 'pending' },
      { month: 'November', year: 2024, amount: 5000, status: 'pending' },
      { month: 'December', year: 2024, amount: 5000, status: 'pending' },
      { month: 'January', year: 2025, amount: 5000, status: 'pending' },
      { month: 'February', year: 2025, amount: 5000, status: 'pending' },
      { month: 'March', year: 2025, amount: 5000, status: 'pending' }
    ]
  },
  {
    id: 'STU002',
    admissionNumber: 'STU002',
    name: 'Priya Sharma',
    class: 'Class 10',
    section: 'A',
    fatherName: 'Amit Sharma',
    fatherContact: '9876543212',
    motherName: 'Rekha Sharma',
    motherContact: '9876543213',
    address: '456, Sector 8, Delhi',
    dateOfBirth: '2008-07-22',
    admissionDate: '2024-04-01',
    academicYear: '2024-25',
    monthlyFee: 5000,
    totalFees: 50000,
    feesPaidTillDate: 50000,
    pendingAmount: 0,
    lastPaymentDate: '2024-05-20',
    paymentStatus: 'paid',
    paymentMethod: 'Cheque',
    dueDate: '2024-06-30',
    lateFee: 0,
    discount: 2000,
    monthsPaid: 10,
    monthsPending: 0,
    monthlyPayments: [
      { month: 'April', year: 2024, amount: 5000, status: 'paid', paymentDate: '2024-04-20', paymentMethod: 'Cheque' },
      { month: 'May', year: 2024, amount: 5000, status: 'paid', paymentDate: '2024-05-20', paymentMethod: 'Cheque' },
      { month: 'June', year: 2024, amount: 5000, status: 'paid', paymentDate: '2024-06-20', paymentMethod: 'Cheque' },
      { month: 'July', year: 2024, amount: 5000, status: 'paid', paymentDate: '2024-07-20', paymentMethod: 'Cheque' },
      { month: 'August', year: 2024, amount: 5000, status: 'paid', paymentDate: '2024-08-20', paymentMethod: 'Cheque' },
      { month: 'September', year: 2024, amount: 5000, status: 'paid', paymentDate: '2024-09-20', paymentMethod: 'Cheque' },
      { month: 'October', year: 2024, amount: 5000, status: 'paid', paymentDate: '2024-10-20', paymentMethod: 'Cheque' },
      { month: 'November', year: 2024, amount: 5000, status: 'paid', paymentDate: '2024-11-20', paymentMethod: 'Cheque' },
      { month: 'December', year: 2024, amount: 5000, status: 'paid', paymentDate: '2024-12-20', paymentMethod: 'Cheque' },
      { month: 'January', year: 2025, amount: 5000, status: 'paid', paymentDate: '2025-01-20', paymentMethod: 'Cheque' }
    ]
  },

  // Class 9 Students
  {
    id: 'STU003',
    admissionNumber: 'STU003',
    name: 'Arjun Singh',
    class: 'Class 9',
    section: 'A',
    fatherName: 'Vikram Singh',
    fatherContact: '9876543214',
    motherName: 'Kavita Singh',
    motherContact: '9876543215',
    address: '789, Sector 12, Delhi',
    dateOfBirth: '2009-01-10',
    admissionDate: '2024-04-01',
    academicYear: '2024-25',
    monthlyFee: 4800,
    totalFees: 48000,
    feesPaidTillDate: 0,
    pendingAmount: 48000,
    lastPaymentDate: undefined,
    paymentStatus: 'pending',
    paymentMethod: undefined,
    dueDate: '2024-06-30',
    lateFee: 1000,
    discount: 0,
    monthsPaid: 0,
    monthsPending: 10,
    monthlyPayments: [
      { month: 'April', year: 2024, amount: 4800, status: 'overdue' },
      { month: 'May', year: 2024, amount: 4800, status: 'overdue' },
      { month: 'June', year: 2024, amount: 4800, status: 'overdue' },
      { month: 'July', year: 2024, amount: 4800, status: 'pending' },
      { month: 'August', year: 2024, amount: 4800, status: 'pending' },
      { month: 'September', year: 2024, amount: 4800, status: 'pending' },
      { month: 'October', year: 2024, amount: 4800, status: 'pending' },
      { month: 'November', year: 2024, amount: 4800, status: 'pending' },
      { month: 'December', year: 2024, amount: 4800, status: 'pending' },
      { month: 'January', year: 2025, amount: 4800, status: 'pending' },
      { month: 'February', year: 2025, amount: 4800, status: 'pending' },
      { month: 'March', year: 2025, amount: 4800, status: 'pending' }
    ]
  },
  {
    id: 'STU004',
    admissionNumber: 'STU004',
    name: 'Sneha Patel',
    class: 'Class 9',
    section: 'B',
    fatherName: 'Ravi Patel',
    fatherContact: '9876543216',
    motherName: 'Meera Patel',
    motherContact: '9876543217',
    address: '321, Sector 15, Delhi',
    dateOfBirth: '2009-05-18',
    admissionDate: '2024-04-01',
    academicYear: '2024-25',
    monthlyFee: 4800,
    totalFees: 48000,
    feesPaidTillDate: 19200,
    pendingAmount: 28800,
    lastPaymentDate: '2024-04-18',
    paymentStatus: 'partial',
    paymentMethod: 'Cash',
    dueDate: '2024-05-31',
    lateFee: 0,
    discount: 0,
    monthsPaid: 4,
    monthsPending: 6,
    monthlyPayments: [
      { month: 'April', year: 2024, amount: 4800, status: 'paid', paymentDate: '2024-04-18', paymentMethod: 'Cash' },
      { month: 'May', year: 2024, amount: 4800, status: 'paid', paymentDate: '2024-05-18', paymentMethod: 'Cash' },
      { month: 'June', year: 2024, amount: 4800, status: 'paid', paymentDate: '2024-06-18', paymentMethod: 'Cash' },
      { month: 'July', year: 2024, amount: 4800, status: 'paid', paymentDate: '2024-07-18', paymentMethod: 'Cash' },
      { month: 'August', year: 2024, amount: 4800, status: 'pending' },
      { month: 'September', year: 2024, amount: 4800, status: 'pending' },
      { month: 'October', year: 2024, amount: 4800, status: 'pending' },
      { month: 'November', year: 2024, amount: 4800, status: 'pending' },
      { month: 'December', year: 2024, amount: 4800, status: 'pending' },
      { month: 'January', year: 2025, amount: 4800, status: 'pending' },
      { month: 'February', year: 2025, amount: 4800, status: 'pending' },
      { month: 'March', year: 2025, amount: 4800, status: 'pending' }
    ]
  },

  // Class 8 Students
  {
    id: 'STU005',
    admissionNumber: 'STU005',
    name: 'Karan Mehta',
    class: 'Class 8',
    section: 'A',
    fatherName: 'Sanjay Mehta',
    fatherContact: '9876543218',
    motherName: 'Pooja Mehta',
    motherContact: '9876543219',
    address: '654, Sector 20, Delhi',
    dateOfBirth: '2010-09-05',
    admissionDate: '2024-04-01',
    academicYear: '2024-25',
    monthlyFee: 4500,
    totalFees: 45000,
    feesPaidTillDate: 18000,
    pendingAmount: 27000,
    lastPaymentDate: '2024-04-12',
    paymentStatus: 'partial',
    paymentMethod: 'Online Transfer',
    dueDate: '2024-05-31',
    lateFee: 0,
    discount: 0,
    monthsPaid: 4,
    monthsPending: 6,
    monthlyPayments: [
      { month: 'April', year: 2024, amount: 4500, status: 'paid', paymentDate: '2024-04-12', paymentMethod: 'Online Transfer' },
      { month: 'May', year: 2024, amount: 4500, status: 'paid', paymentDate: '2024-05-12', paymentMethod: 'Online Transfer' },
      { month: 'June', year: 2024, amount: 4500, status: 'paid', paymentDate: '2024-06-12', paymentMethod: 'Online Transfer' },
      { month: 'July', year: 2024, amount: 4500, status: 'paid', paymentDate: '2024-07-12', paymentMethod: 'Online Transfer' },
      { month: 'August', year: 2024, amount: 4500, status: 'pending' },
      { month: 'September', year: 2024, amount: 4500, status: 'pending' },
      { month: 'October', year: 2024, amount: 4500, status: 'pending' },
      { month: 'November', year: 2024, amount: 4500, status: 'pending' },
      { month: 'December', year: 2024, amount: 4500, status: 'pending' },
      { month: 'January', year: 2025, amount: 4500, status: 'pending' },
      { month: 'February', year: 2025, amount: 4500, status: 'pending' },
      { month: 'March', year: 2025, amount: 4500, status: 'pending' }
    ]
  },

  // Class 7 Students
  {
    id: 'STU006',
    admissionNumber: 'STU006',
    name: 'Ananya Reddy',
    class: 'Class 7',
    section: 'A',
    fatherName: 'Krishna Reddy',
    fatherContact: '9876543220',
    motherName: 'Lakshmi Reddy',
    motherContact: '9876543221',
    address: '987, Sector 25, Delhi',
    dateOfBirth: '2011-11-12',
    admissionDate: '2024-04-01',
    academicYear: '2024-25',
    monthlyFee: 4200,
    totalFees: 42000,
    feesPaidTillDate: 16800,
    pendingAmount: 25200,
    lastPaymentDate: '2024-04-15',
    paymentStatus: 'partial',
    paymentMethod: 'Cash',
    dueDate: '2024-05-31',
    lateFee: 0,
    discount: 0,
    monthsPaid: 4,
    monthsPending: 6,
    monthlyPayments: [
      { month: 'April', year: 2024, amount: 4200, status: 'paid', paymentDate: '2024-04-15', paymentMethod: 'Cash' },
      { month: 'May', year: 2024, amount: 4200, status: 'paid', paymentDate: '2024-05-15', paymentMethod: 'Cash' },
      { month: 'June', year: 2024, amount: 4200, status: 'paid', paymentDate: '2024-06-15', paymentMethod: 'Cash' },
      { month: 'July', year: 2024, amount: 4200, status: 'paid', paymentDate: '2024-07-15', paymentMethod: 'Cash' },
      { month: 'August', year: 2024, amount: 4200, status: 'pending' },
      { month: 'September', year: 2024, amount: 4200, status: 'pending' },
      { month: 'October', year: 2024, amount: 4200, status: 'pending' },
      { month: 'November', year: 2024, amount: 4200, status: 'pending' },
      { month: 'December', year: 2024, amount: 4200, status: 'pending' },
      { month: 'January', year: 2025, amount: 4200, status: 'pending' },
      { month: 'February', year: 2025, amount: 4200, status: 'pending' },
      { month: 'March', year: 2025, amount: 4200, status: 'pending' }
    ]
  },

  // Class 6 Students
  {
    id: 'STU007',
    admissionNumber: 'STU007',
    name: 'Rohit Verma',
    class: 'Class 6',
    section: 'B',
    fatherName: 'Ajay Verma',
    fatherContact: '9876543222',
    motherName: 'Sushma Verma',
    motherContact: '9876543223',
    address: '147, Sector 30, Delhi',
    dateOfBirth: '2012-03-25',
    admissionDate: '2024-04-01',
    academicYear: '2024-25',
    monthlyFee: 4000,
    totalFees: 40000,
    feesPaidTillDate: 16000,
    pendingAmount: 24000,
    lastPaymentDate: '2024-04-10',
    paymentStatus: 'partial',
    paymentMethod: 'Online Transfer',
    dueDate: '2024-05-31',
    lateFee: 0,
    discount: 0,
    monthsPaid: 4,
    monthsPending: 6,
    monthlyPayments: [
      { month: 'April', year: 2024, amount: 4000, status: 'paid', paymentDate: '2024-04-10', paymentMethod: 'Online Transfer' },
      { month: 'May', year: 2024, amount: 4000, status: 'paid', paymentDate: '2024-05-10', paymentMethod: 'Online Transfer' },
      { month: 'June', year: 2024, amount: 4000, status: 'paid', paymentDate: '2024-06-10', paymentMethod: 'Online Transfer' },
      { month: 'July', year: 2024, amount: 4000, status: 'paid', paymentDate: '2024-07-10', paymentMethod: 'Online Transfer' },
      { month: 'August', year: 2024, amount: 4000, status: 'pending' },
      { month: 'September', year: 2024, amount: 4000, status: 'pending' },
      { month: 'October', year: 2024, amount: 4000, status: 'pending' },
      { month: 'November', year: 2024, amount: 4000, status: 'pending' },
      { month: 'December', year: 2024, amount: 4000, status: 'pending' },
      { month: 'January', year: 2025, amount: 4000, status: 'pending' },
      { month: 'February', year: 2025, amount: 4000, status: 'pending' },
      { month: 'March', year: 2025, amount: 4000, status: 'pending' }
    ]
  },

  // Class 5 Students
  {
    id: 'STU008',
    admissionNumber: 'STU008',
    name: 'Isha Gupta',
    class: 'Class 5',
    section: 'A',
    fatherName: 'Rakesh Gupta',
    fatherContact: '9876543224',
    motherName: 'Neha Gupta',
    motherContact: '9876543225',
    address: '258, Sector 35, Delhi',
    dateOfBirth: '2013-08-14',
    admissionDate: '2024-04-01',
    academicYear: '2024-25',
    monthlyFee: 3600,
    totalFees: 36000,
    feesPaidTillDate: 14400,
    pendingAmount: 21600,
    lastPaymentDate: '2024-04-08',
    paymentStatus: 'partial',
    paymentMethod: 'Cash',
    dueDate: '2024-05-31',
    lateFee: 0,
    discount: 0,
    monthsPaid: 4,
    monthsPending: 6,
    monthlyPayments: [
      { month: 'April', year: 2024, amount: 3600, status: 'paid', paymentDate: '2024-04-08', paymentMethod: 'Cash' },
      { month: 'May', year: 2024, amount: 3600, status: 'paid', paymentDate: '2024-05-08', paymentMethod: 'Cash' },
      { month: 'June', year: 2024, amount: 3600, status: 'paid', paymentDate: '2024-06-08', paymentMethod: 'Cash' },
      { month: 'July', year: 2024, amount: 3600, status: 'paid', paymentDate: '2024-07-08', paymentMethod: 'Cash' },
      { month: 'August', year: 2024, amount: 3600, status: 'pending' },
      { month: 'September', year: 2024, amount: 3600, status: 'pending' },
      { month: 'October', year: 2024, amount: 3600, status: 'pending' },
      { month: 'November', year: 2024, amount: 3600, status: 'pending' },
      { month: 'December', year: 2024, amount: 3600, status: 'pending' },
      { month: 'January', year: 2025, amount: 3600, status: 'pending' },
      { month: 'February', year: 2025, amount: 3600, status: 'pending' },
      { month: 'March', year: 2025, amount: 3600, status: 'pending' }
    ]
  }
];

// Helper functions for data manipulation
export const getStudentsByClass = (className: string): Student[] => {
  return studentsData.filter(student => student.class === className);
};

export const getStudentsByClassAndSection = (className: string, section: string): Student[] => {
  return studentsData.filter(student => student.class === className && student.section === section);
};

export const getClassInfo = (className: string): ClassInfo => {
  const classStudents = getStudentsByClass(className);
  const totalStudents = classStudents.length;
  const paidStudents = classStudents.filter(s => s.paymentStatus === 'paid').length;
  const partialStudents = classStudents.filter(s => s.paymentStatus === 'partial').length;
  const pendingStudents = classStudents.filter(s => s.paymentStatus === 'pending').length;
  
  const totalFees = classStudents.reduce((sum, student) => sum + student.totalFees, 0);
  const collectedFees = classStudents.reduce((sum, student) => sum + student.feesPaidTillDate, 0);
  const pendingFees = totalFees - collectedFees;

  return {
    className,
    section: 'All Sections',
    totalStudents,
    paidStudents,
    partialStudents,
    pendingStudents,
    totalFees,
    collectedFees,
    pendingFees
  };
};

export const getAllClasses = (): ClassInfo[] => {
  const uniqueClasses = [...new Set(studentsData.map(student => student.class))];
  return uniqueClasses.map(className => getClassInfo(className));
};

export const getStudentById = (id: string): Student | undefined => {
  return studentsData.find(student => student.id === id);
};

export const getStudentByAdmissionNumber = (admissionNumber: string): Student | undefined => {
  return studentsData.find(student => student.admissionNumber === admissionNumber);
};
