import { Event } from '@/entities/Event';
import { rtkApi } from '@/shared/api/rtkApi';

export type EventScheme = Omit<Event, 'id'>;

const addEventApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    postEvent: build.mutation<EventScheme, EventScheme>({
      // eslint-disable-next-line camelcase
      query: ({ name, description, imgSrc, reward, format, event_date }) => ({
        url: `/events`,
        method: 'POST',
        // eslint-disable-next-line camelcase
        body: { name, description, imgSrc, reward, format, event_date },
      }),
      invalidatesTags: ['Events'],
    }),
  }),
});

export const postEvent = addEventApi.usePostEventMutation;
