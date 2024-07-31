import { Skeleton, Text } from '@repo/shared/ui';
import { memo } from 'react';

import { fetchEvents } from '../api/eventApi';

import { EventsList } from '@/entities/Event';
import { type Event } from '@/entities/Event';

import cls from './EventsInfiniteList.module.scss';

interface EventsInfiniteListProps {
  className?: string;
  openDrawer: (value: boolean) => void;
  setActiveEvent: (value: Event) => void;
  setIsModalOpen: (value: boolean) => void;
}

export const EventsInfiniteList = memo((props: EventsInfiniteListProps) => {
  const { className, openDrawer, setActiveEvent, setIsModalOpen } = props;
  const { isLoading, isError, data: response } = fetchEvents('');
  if (isLoading) {
    return (
      <div className={cls.card_wrap}>
        <Skeleton width={404} height={319} border="4px" />
        <Skeleton width={404} height={319} border="4px" />
        <Skeleton width={404} height={319} border="4px" />
        <Skeleton width={404} height={319} border="4px" />
        <Skeleton width={404} height={319} border="4px" />
        <Skeleton width={404} height={319} border="4px" />

        <Skeleton width={404} height={319} border="4px" />
        <Skeleton width={404} height={319} border="4px" />
      </div>
    );
  }

  if (!response || isError) {
    return <Text title="Произошла ошибка при загрузке данных" align="center" />;
  }

  return (
    <EventsList
      events={response?.data}
      setIsOpen={openDrawer}
      setActiveEvent={setActiveEvent}
      setIsModalOpen={setIsModalOpen}
    />
  );
});
