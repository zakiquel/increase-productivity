import { classNames } from '@repo/shared/lib';
import { memo, useState } from 'react';

import { pathNames } from '@/shared/const/router';
import { Page } from '@/widgets/Page';
import { PageSidebar } from '@/widgets/PagesSidebar';

import cls from './EventsPage.module.scss';
import EventsDesk from '@/widgets/EventDesk/ui/EventDesk';
import { AddEventDrawer } from '@/features/AddEvent';
import { EventPageSidebar } from '@/features/EventPageSidebar';

interface EventsPageProps {
  className?: string;
}

const EventsPage = (props: EventsPageProps) => {
  const { className } = props;

  return (
    <Page className={classNames('', {}, [className])}>
      <EventPageSidebar />
      <EventsDesk />
    </Page>
  );
};

export default memo(EventsPage);
