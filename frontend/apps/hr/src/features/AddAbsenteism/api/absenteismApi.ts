import { rtkApi } from '@/shared/api/rtkApi';

interface AbsenteismScheme {
  coefficient: number;
}

interface AbsenteismSchemeResponse {
  id: number;
  company_id: number;
  coefficient: number;
}

const absenteismApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    postAbsenteism: build.mutation<AbsenteismSchemeResponse, AbsenteismScheme>({
      query: ({ coefficient }) => ({
        url: `/collective_metrics`,
        method: 'POST',
        body: {
          coefficient,
        },
      }),
      invalidatesTags: ['Absenteism'],
    }),
  }),
});

export const postAbsenteism = absenteismApi.usePostAbsenteismMutation;
