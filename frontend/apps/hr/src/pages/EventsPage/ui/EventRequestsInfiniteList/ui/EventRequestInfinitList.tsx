import { memo } from 'react';

import requests from '../model/data/tempDataRequests.json';

import { RequestsList } from '@/entities/Event';

interface EventsInfiniteListProps {
  className?: string;
}

export const RequestsInfiniteList = memo((props: EventsInfiniteListProps) => {
  const { className } = props;

  return <RequestsList requests={requests} />;
});
