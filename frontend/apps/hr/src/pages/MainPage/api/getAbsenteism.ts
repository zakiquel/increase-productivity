import { rtkApi } from '@/shared/api/rtkApi';

interface AbsenteismScheme {
  metric_4: {
    metric_name: string;
    risk_name: string;
    risk: number;
    coefficient: string;
    description: string;
  };
  metric_5: {
    metric_name: string;
    risk_name: string;
    risk: number;
    coefficient: string;
    description: string;
  };
}

const absenteismApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getAbsenteism: build.query<AbsenteismScheme, null>({
      query: () => ({
        url: `/collective_metrics`,
        method: 'GET',
      }),
      providesTags: ['Absenteism'],
    }),
  }),
});

export const getAbsenteism = absenteismApi.useGetAbsenteismQuery;
