export interface Note {
  id: number;
  text: string;
  date: string;
}

export interface Document {
  id: number;
  file: File;
  date: string;
}

export interface PersonalInfo {
  firstName: string;
  patronymic?: string;
  lastName: string;
  imgSrc?: string;
  salary?: number;
  dateOfBirth?: Date;
  age?: number;
  position: string;
  status?: string;
  hiring?: Date;
  workExperience?: number;
  email?: string;
  balance?: number;
  phoneNumber?: string;
}

export interface Metric {
  id: number;
  name: string;
  value: number;
  change: number;
}

export interface EmployeeValues {
  standard?: number;
  metrics?: Metric[];
}

export interface Event {
  companyId: number;
  name: string;
  format?: string;
  category: string;
  description?: string;
  imgSrc?: string;
  reward?: number;
  date: string;
}

export interface Transaction {
  productId: number;
  amount?: number;
  description?: string;
  type?: string;
  date: string;
  status: string;
}

export interface Employee {
  id: number;
  personalInfo: PersonalInfo;
  notes?: Note[];
  documents?: Document[];
  values?: EmployeeValues;
  events?: Event[];
  transactions?: Transaction[];
}
