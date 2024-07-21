import { classNames } from '@repo/shared/lib';
import { memo } from 'react';

import requests from '../model/data/tempData.json';

import { EventRequest } from '@/entities/EventRequest';
import { EventPageSidebar } from '@/features/EventPageSidebar';
import { Page } from '@/widgets/Page';

interface RequestsPageProps {
  className?: string;
}

const RequestsPage = (props: RequestsPageProps) => {
  const { className } = props;

  return (
    <Page className={classNames('', {}, [className])}>
      <EventPageSidebar />
      {requests?.map((data) => <EventRequest key={data.id} {...data} />)}
    </Page>
  );
};

export default memo(RequestsPage);
