import { memo } from 'react';

import items from '../models/data/tempData.json';

import { HistoryItem } from '@/entities/HistoryItem';
import { pathNames } from '@/shared/const/route';
import { Page } from '@/widgets/Page';
import { PageSidebar } from '@/widgets/PagesSidebar';

import cls from './HistoryPage.module.scss';

const PageItems = pathNames.filter(
  (data) => data.value === 'История' || data.value === 'Товары',
);

const HistoryPage = () => (
  <Page className={cls.page}>
    <PageSidebar items={PageItems} />
    <div className={cls.History}>
      {items.map((item, index) => (
        <HistoryItem key={index} {...item} />
      ))}
    </div>
  </Page>
);

export default memo(HistoryPage);
