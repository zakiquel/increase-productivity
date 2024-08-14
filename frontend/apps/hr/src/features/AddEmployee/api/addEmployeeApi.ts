import { EmployeeFormOutputData } from '../lib/addEmployeeSchema';

import { Employee } from '@/entities/Employee';
import { rtkApi } from '@/shared/api/rtkApi';

const addEmployeeApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    addEmployee: build.mutation<Employee, EmployeeFormOutputData>({
      query: (employee) => ({
        url: '/employees',
        method: 'POST',
        body: employee,
      }),
      invalidatesTags: ['Employees'],
    }),
  }),
});

export const addEmployee = addEmployeeApi.useAddEmployeeMutation;
