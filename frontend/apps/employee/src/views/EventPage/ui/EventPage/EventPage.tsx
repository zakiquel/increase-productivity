'use client';

import { memo, useState } from 'react';

import { EventInfiniteList } from '../EventInfiniteList/EventInfiniteList';

import { Event } from '@/entities/Event';
import { EventCardModal } from '@/features/Event';
import { Page } from '@/widgets/Page';

import cls from './EventPage.module.scss';

const EventPage = () => {
  const [event, setEvent] = useState<Event>();
  const [isOpen, setOpen] = useState(false);
  return (
    <Page className={cls.page}>
      <EventInfiniteList onOpen={setOpen} onEvent={setEvent} />
      <EventCardModal isOpen={isOpen} setOpen={setOpen} event={event} />
    </Page>
  );
};

export default memo(EventPage);
