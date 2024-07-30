import { memo } from 'react';

import { fetchEvents } from '../api/eventApi';

import { EventsList } from '@/entities/Event';
import { type Event } from '@/entities/Event';

interface EventsInfiniteListProps {
  className?: string;
  openDrawer: (value: boolean) => void;
  setActiveEvent: (value: Event) => void;
  setIsModalOpen: (value: boolean) => void;
}

export const EventsInfiniteList = memo((props: EventsInfiniteListProps) => {
  const { className, openDrawer, setActiveEvent, setIsModalOpen } = props;
  const { isLoading, error, data: response } = fetchEvents('');

  return (
    <EventsList
      events={response?.data}
      setIsOpen={openDrawer}
      setActiveEvent={setActiveEvent}
      setIsModalOpen={setIsModalOpen}
    />
  );
});
