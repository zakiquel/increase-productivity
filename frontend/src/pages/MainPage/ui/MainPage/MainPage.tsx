import React, { memo } from 'react';

import { ChartList } from "@/entities/Chart";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Page } from "@/widgets/Page";

const MainPage = () => (
  <Page className={classNames('', {}, [])}>
    <ChartList />
  </Page>
);

export default memo(MainPage);
