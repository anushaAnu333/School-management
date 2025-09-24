import { z } from 'zod';

export const admissionSchema = z.object({
  // Section A: Student Details
  studentName: z.string().min(1, 'Student name is required').max(100),
  dateOfBirth: z.string().min(1, 'Date of birth is required'),
  gender: z.enum(['Male', 'Female'], { message: 'Gender is required' }),
  placeOfBirth: z.string().min(1, 'Place of birth is required'),
  nationality: z.string().min(1, 'Nationality is required'),
  aadharNumber: z.string().regex(/^[0-9]{12}$/, 'Aadhar number must be 12 digits'),
  bloodGroup: z.string().optional().or(z.literal('')),
  motherTongue: z.string().min(1, 'Mother tongue is required'),
  
  // Section B: Parent/Guardian Details
  fatherName: z.string().min(1, 'Father name is required'),
  motherName: z.string().min(1, 'Mother name is required'),
  guardianName: z.string().optional(),
  fatherContact: z.string().regex(/^[0-9]{10}$/, 'Contact number must be 10 digits'),
  fatherEmail: z.string().email('Invalid email').optional().or(z.literal('')),
  fatherOccupation: z.string().min(1, 'Father occupation is required'),
  fatherAadhar: z.string().regex(/^[0-9]{12}$/, 'Aadhar number must be 12 digits').optional().or(z.literal('')),
  motherContact: z.string().regex(/^[0-9]{10}$/, 'Contact number must be 10 digits'),
  motherEmail: z.string().email('Invalid email').optional().or(z.literal('')),
  motherOccupation: z.string().min(1, 'Mother occupation is required'),
  motherAadhar: z.string().regex(/^[0-9]{12}$/, 'Aadhar number must be 12 digits').optional().or(z.literal('')),
  motherBankAccount: z.string().optional(),
  motherBankIFSC: z.string().optional(),
  motherBankBranch: z.string().optional(),
  motherBankName: z.string().optional(),
  residentialAddress: z.string().optional(),
  flatDoorNo: z.string().min(1, 'House number is required'),
  streetRoad: z.string().min(1, 'Street/Road is required'),
  localityArea: z.string().min(1, 'Locality/Area is required'),
  mandalTaluka: z.string().min(1, 'Mandal/Taluka is required'),
  district: z.string().min(1, 'District is required'),
  state: z.string().min(1, 'State is required'),
  pincode: z.string().regex(/^[0-9]{6}$/, 'Pincode must be 6 digits'),
  studentLivingWith: z.string().min(1, 'Student living with is required'),
  
  // Section C: Academic Details
  classAppliedFor: z.string().min(1, 'Class applied for is required'),
  board: z.string().min(1, 'Board is required'),
  previousSchoolName: z.string().optional(),
  previousSchoolLocation: z.string().optional(),
  previousSchoolBoard: z.string().optional(),
  
  // Section D: Religion, Caste & Category
  religion: z.string().min(1, 'Religion is required'),
  caste: z.string().optional(),
  category: z.string().min(1, 'Category is required'),
  subCaste: z.string().optional(),
  
  // Section E: Hostel, Transport & Other Preferences
  hostelRequired: z.boolean().default(false),
  transportRequired: z.boolean().default(false),
  transportLocation: z.string().optional(),
  lunchSnacks: z.boolean().default(false),
  otherFacilities: z.boolean().default(false),
  otherFacilitiesSpecify: z.string().optional(),
  
  // Section F: Fees Particulars
  admissionFee: z.string().optional(),
  schoolFee: z.string().optional(),
  hostelFee: z.string().optional(),
  transportFee: z.string().optional(),
  lunchFee: z.string().optional(),
  otherFacilitiesFee: z.string().optional(),
  uniformFee: z.string().optional(),
  examFee: z.string().optional(),
  otherFee: z.string().optional(),
  otherFeeSpecify: z.string().optional(),
  feesBeforeDiscount: z.string().optional(),
  discount: z.string().optional(),
  feesAfterDiscount: z.string().optional(),
  
  // Documents and Files
  documents: z.array(z.string()).default([]),
  birthCertificate: z.instanceof(File).optional(),
  previousMarksheet: z.instanceof(File).optional(),
  transferCertificate: z.instanceof(File).optional(),
  medicalCertificate: z.instanceof(File).optional(),
  passportPhoto: z.instanceof(File).optional(),
  aadharCopy: z.instanceof(File).optional(),
  signedForm: z.instanceof(File).optional(),
  
  // Staff Entry Fields (will be populated from session)
  staffName: z.string().optional(),
  staffId: z.string().optional(),
  
  // Company/School Identification (will be populated from session)
  companyId: z.string().optional()
});

export type AdmissionFormData = z.infer<typeof admissionSchema>;
