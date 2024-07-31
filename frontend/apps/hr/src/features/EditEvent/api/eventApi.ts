import { Event } from '@/entities/Event';
import { rtkApi } from '@/shared/api/rtkApi';

type EventScheme = Omit<Event, 'id'>;

const eventApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    deleteEvent: build.mutation<string, number | undefined>({
      query: (id) => ({
        url: `/events/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Events'],
    }),
    editEvent: build.mutation<EventScheme, Event>({
      query: ({
        id,
        name,
        description,
        // eslint-disable-next-line camelcase
        event_date,
        reward,
        format,
        imgSrc,
      }) => ({
        url: `/events/${id}`,
        method: 'PUT',
        // eslint-disable-next-line camelcase
        body: { name, description, event_date, reward, format, imgSrc },
      }),
      invalidatesTags: ['Events'],
    }),
    getEvent: build.query<{ data: Event }, number>({
      query: (id) => ({
        url: `/events/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const deleteEvent = eventApi.useDeleteEventMutation;

export const putEvent = eventApi.useEditEventMutation;

export const getEvent = eventApi.useGetEventQuery;
