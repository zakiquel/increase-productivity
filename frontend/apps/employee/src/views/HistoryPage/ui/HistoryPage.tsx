import { memo } from 'react';

import items from '../models/data/tempData.json';

import { HistoryItem } from '@/entities/HistoryItem';

import cls from './HistoryPage.module.scss';


const HistoryPage = () => (
  
    <div className={cls.History}>
      {items.map((item, index) => (
        <HistoryItem key={index} {...item} />
      ))}
    </div>
);

export default memo(HistoryPage);
