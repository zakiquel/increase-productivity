import { Employee } from '../model/types/employee';

import { rtkApi } from '@/shared/api/rtkApi';

const employeesApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    fetchEmployeesList: build.query<Employee[], string>({
      query: () => ({
        url: `/employees`,
        method: 'GET',
      }),
      transformResponse: (response: { data: Employee[] }) => response.data,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Employees', id }) as const),
              { type: 'Employees', id: 'LIST' },
            ]
          : [{ type: 'Employees', id: 'LIST' }],
    }),
    fetchEmployeeById: build.query<{ data: Employee }, string>({
      query: (id) => ({
        url: `/employees/${id}`,
        method: 'GET',
      }),
      providesTags: (result, error, id) => [{ type: 'Employees', id }],
    }),
    editEmployee: build.mutation<Employee, Employee>({
      query: (employee: Employee) => ({
        url: `/employees/${employee.id}`,
        method: 'PUT',
        body: employee,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Employees', id }],
    }),
  }),
});

export const fetchEmployees = employeesApi.useFetchEmployeesListQuery;
export const fetchEmployeeById = employeesApi.useFetchEmployeeByIdQuery;
export const editEmployee = employeesApi.useEditEmployeeMutation;
