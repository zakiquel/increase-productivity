/* eslint-disable camelcase */
import { rtkApi } from '@/shared/api/rtkApi';

interface MetricPostScheme {
  employee_id: number;
  metric_1_mark: number;
  metric_2_mark: number;
  metric_3_mark: number;
  survey_date: string;
}

const metricApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    postMetric: build.mutation<MetricPostScheme, MetricPostScheme>({
      query: ({
        employee_id,
        metric_1_mark,
        metric_2_mark,
        metric_3_mark,
        survey_date,
      }) => ({
        url: `/survey_histories`,
        method: 'POST',
        body: {
          employee_id,
          metric_1_mark,
          metric_2_mark,
          metric_3_mark,
          survey_date,
        },
      }),
      invalidatesTags: ['Metrics'],
    }),
  }),
});

export const postMetric = metricApi.usePostMetricMutation;
