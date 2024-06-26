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
