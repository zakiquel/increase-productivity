'use client';

import React from 'react';

import { HistoryItem } from '../..';
import { HistoryItem as IHistoryItem } from '../../model/types/historyItem';

import cls from './HistoryItemList.module.scss';

interface IHistoryItemList {
  historyItem: IHistoryItem[];
}

export const HistoryItemList = (props: IHistoryItemList) => {
  const { historyItem } = props;
  return (
    <div className={cls.History}>
      {historyItem.map((item) => (
        <HistoryItem key={item.id} historyItem={item} />
      ))}
    </div>
  );
};
