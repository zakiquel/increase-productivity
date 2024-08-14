import { QualityPostRequest, QualityScheme } from '../model/types/quality';

import { rtkApi } from '@/shared/api/rtkApi';

const qualityApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getQualities: build.query<QualityScheme[], null>({
      query: () => ({
        url: `/quality_values`,
        method: 'GET',
      }),
    }),
    postQuality: build.mutation<string, QualityPostRequest>({
      query: (QualityPostRequest) => ({
        url: `/value_qualities`,
        method: 'POST',
        body: QualityPostRequest,
      }),
      invalidatesTags: ['Values'],
    }),
  }),
});

export const getQualitiesValue = qualityApi.useGetQualitiesQuery;
export const postQualityValue = qualityApi.usePostQualityMutation;
