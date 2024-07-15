import { classNames } from '@repo/shared/lib';
import { memo, useState } from 'react';

import { pathNames } from '@/shared/const/router';
import { Page } from '@/widgets/Page';
import { EventPageSidebar } from '@/features/EventPageSidebar';
import requests from '../model/data/tempData.json';
import { EventRequest } from '@/entities/EventRequest';
interface RequestsEventsPageProps {
  className?: string;
}

const PageItems = pathNames.filter(
  (data) => data.value === 'Мероприятия' || data.value === 'Заявки',
);

const RequestsEventsPage = (props: RequestsEventsPageProps) => {
  const { className } = props;

  return (
    <Page className={classNames('', {}, [className])}>
      <EventPageSidebar />
      {requests.length !== 0 &&
        requests.map((data, key) => <EventRequest key={data.id} {...data} />)}
    </Page>
  );
};

export default memo(RequestsEventsPage);
