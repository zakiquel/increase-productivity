'use client';

import { memo } from 'react';

import dataCommon from '../model/data/tempData.json';
import dataUser from '../model/data/tempDataUser.json';

import { EventCard } from '@/entities/EventCard';
import { Page } from '@/widgets/Page';

import cls from './EventPage.module.scss';

const EventPage = () => (
  <Page className={cls.page}>
    {dataCommon || dataUser ? (
      <>
        <div className={cls.wrapper}>
          {dataCommon.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
        <div className={cls.wrapper}>
          {dataUser.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </>
    ) : (
      <div className={cls.not}>Нет доступных мероприятий на данный момент.</div>
    )}
  </Page>
);

export default memo(EventPage);
