import { classNames } from '@repo/shared/lib';
import React, { memo } from 'react';

import { EmployeesSection } from '../EmployeesSection';

import { ChartList } from '@/entities/Chart';
import { Page } from '@/widgets/Page';

import cls from './MainPage.module.scss';

const MainPage = () => (
  <Page className={classNames(cls.MainPage, {}, [])}>
    <ChartList />
    <EmployeesSection />
  </Page>
);

export default memo(MainPage);
