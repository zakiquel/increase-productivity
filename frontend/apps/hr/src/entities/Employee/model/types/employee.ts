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
  lastName: string;
  patronimyc?: string;
  dateOfBirth?: string;
  position: string;
  workExperience?: number;
  salary?: number;
  email?: string;
  phoneNumber?: string;
  dateOfEmployment?: string;
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

export interface Employee {
  id: number;
  personalInfo: PersonalInfo;
  notes?: Note[];
  documents?: Document[];
  values?: EmployeeValues;
}
