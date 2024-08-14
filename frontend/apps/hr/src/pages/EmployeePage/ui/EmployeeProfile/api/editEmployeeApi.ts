import { EmployeeFormOutputData } from '../ui/EmployeeProfile';

import { Employee } from '@/entities/Employee';
import { rtkApi } from '@/shared/api/rtkApi';

const editEmployeeApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    editEmployee: build.mutation<
      Employee,
      EmployeeFormOutputData & { id: number }
    >({
      query: (employee) => ({
        url: `/employees/${employee.id}`,
        method: 'PUT',
        body: employee,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Employees', id }],
    }),
  }),
});

export const editEmployee = editEmployeeApi.useEditEmployeeMutation;
