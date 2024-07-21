import { memo } from 'react';

import events from '../model/data/tempData.json';

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

  return (
    <EventsList
      events={events}
      setIsOpen={openDrawer}
      setActiveEvent={setActiveEvent}
      setIsModalOpen={setIsModalOpen}
    />
  );
});
