import { memo } from 'react';

import requests from '../model/data/tempDataRequest.json';

import { RequestProductList } from '@/entities/Product';

interface EventsInfiniteListProps {
  className?: string;
}

export const RequestsInfiniteList = memo((props: EventsInfiniteListProps) => {
  const { className } = props;

  return <RequestProductList requests={requests} />;
});
