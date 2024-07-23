import historyItems from '../../model/data/tempDataHistory.json';

import { HistoryItemList } from '@/entities/Product';

export const HistoryItemInfiniteList = () => (
  <HistoryItemList historyItem={historyItems} />
);
