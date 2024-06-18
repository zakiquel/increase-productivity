import React, { memo } from 'react';

import { classNames } from "@/shared/lib/classNames/classNames";
import { ChartList } from '@/widgets/ChartList';
import { Page } from "@/widgets/Page";

const MainPage = () => (
  <Page className={classNames('', {}, [])}>
    <ChartList />
  </Page>
);

export default memo(MainPage);
