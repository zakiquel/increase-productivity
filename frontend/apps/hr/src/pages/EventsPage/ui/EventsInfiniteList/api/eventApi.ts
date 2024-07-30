import { type Event } from '@/entities/Event';
import { rtkApi } from '@/shared/api/rtkApi';

const eventApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    fetchEventsList: build.query<{ data: Event[] }, string>({
      query: () => ({
        url: `/events`,
        method: 'GET',
      }),
    }),
  }),
});

export const fetchEvents = eventApi.useFetchEventsListQuery;
