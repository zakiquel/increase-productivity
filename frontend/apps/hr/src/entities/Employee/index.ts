export { EmployeeNotes } from '@/pages/EmployeePage/ui/EmployeeNotes/EmployeeNotes';
export { EmployeeDocuments } from '@/pages/EmployeePage/ui/EmployeeDocuments/EmployeeDocuments';
export { EmployeeProfile } from './ui/EmployeeProfile/EmployeeProfile';
export { EmployeeRating } from './ui/EmployeeRating/EmployeeRating';
export { EmployeeBalance } from '@/pages/EmployeePage/ui/EmployeeBalance/EmployeeBalance';
export { EmployeeOperations } from '@/pages/EmployeePage/ui/EmployeeOperations/EmployeeOperations';
export { EmployeeList } from './ui/EmployeeList/EmployeeList';
export { EmployeeEvents } from '@/pages/EmployeePage/ui/EmployeeEvents/EmployeeEvents';
export type {
  Employee,
  EmployeeTest,
  Note,
  Document,
  EmployeeEvent,
  EmployeeOperation,
} from './model/types/employee';
export { fetchEmployees, fetchEmployeeById } from './api/employeesApi';

export { OperationEmployeeBar } from './ui/OperationEmployeeBar/OperationEmployeeBar';

export { EventEmployeeBar } from './ui/EventEmployeeBar/EventEmployeeBar';
