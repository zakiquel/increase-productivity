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
  dateOfBirth: string;
  position: number;
  workExperience: number;
  salary: number;
  email: string;
  phoneNumber: string;
}

export interface Employee {
  id: number;
  personalInfo: PersonalInfo;
  notes: Note[];
  documents: Document[];
}

export interface Metric {
  id: number;
  name: string;
  value: number;
  change: number;
}

export interface EmployeeCardInfo {
  id: number;
  name: string;
  personRole: string;
  image: string;
  standard: number;
  metrics?: Metric[];
}
