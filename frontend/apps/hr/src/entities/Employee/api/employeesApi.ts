import { Employee } from '../model/types/employee';

import { rtkApi } from '@/shared/api/rtkApi';

const employeesApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    fetchEmployeesList: build.query<{ data: Employee[] }, string>({
      query: () => ({
        url: `/employees`,
        method: 'GET',
      }),
    }),
    fetchEmployeeById: build.query<{ data: Employee }, string>({
      query: (id) => ({
        url: `/employees/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const fetchEmployees = employeesApi.useFetchEmployeesListQuery;
export const fetchEmployeeById = employeesApi.useFetchEmployeeByIdQuery;
