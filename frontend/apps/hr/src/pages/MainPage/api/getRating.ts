import { rtkApi } from '@/shared/api/rtkApi';

const ratingApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getRating: build.query<number, null>({
      query: () => ({
        url: `/company_rating`,
        method: 'GET',
      }),
    }),
  }),
});

export const getRating = ratingApi.useGetRatingQuery;
