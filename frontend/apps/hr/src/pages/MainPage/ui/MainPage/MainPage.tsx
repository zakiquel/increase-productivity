import { classNames } from '@repo/shared/lib';
import React, { memo } from 'react';

import { ChartList } from '../ChartList/ChartList';
import { EmployeesSection } from '../EmployeesSection';

import { Page } from '@/widgets/Page';

import cls from './MainPage.module.scss';

const MainPage = () => (
  <Page className={classNames(cls.MainPage, {}, [])}>
    <ChartList />
    <EmployeesSection className={cls.EmployeesSection} />
  </Page>
);

export default memo(MainPage);
