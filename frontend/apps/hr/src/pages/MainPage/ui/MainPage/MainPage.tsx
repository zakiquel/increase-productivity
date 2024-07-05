import { classNames } from '@repo/shared/lib';
import React, { memo } from 'react';

import { ChartList } from '@/entities/Chart';
import { Employee } from '@/entities/Employee';
import { EmployeesSection } from '@/widgets/EmployeesSection';
import { Page } from '@/widgets/Page';

import cls from './MainPage.module.scss';

const staff: Employee[] = [
  {
    id: 1,
    personalInfo: {
      firstName: 'Петр',
      lastName: 'Петров',
      position: 'UX/UI дизайнер',
      dateOfEmployment: '2017-03-15',
    },
    values: {
      standard: 70,
    },
  },
  {
    id: 2,
    personalInfo: {
      firstName: 'Петр',
      lastName: 'Иванов',
      position: 'UX/UI дизайнер',
      dateOfEmployment: '2015-03-15',
    },
    values: {
      standard: 45,
    },
  },
  {
    id: 3,
    personalInfo: {
      firstName: 'Пётр',
      lastName: 'Сидоров',
      position: 'UX/UI дизайнер',
      dateOfEmployment: '2022-11-04',
    },
    values: {
      standard: 20,
    },
  },
  {
    id: 4,
    personalInfo: {
      firstName: 'Петр',
      lastName: 'Пушкин',
      position: 'UX/UI дизайнер',
      dateOfEmployment: '2021-04-15',
    },
    values: {
      standard: 90,
    },
  },
  {
    id: 5,
    personalInfo: {
      firstName: 'Петр',
      lastName: 'Потапов',
      position: 'UX/UI дизайнер',
      dateOfEmployment: '2017-03-14',
    },
    values: {
      standard: 100,
    },
  },
  {
    id: 6,
    personalInfo: {
      firstName: 'Петр',
      lastName: 'Круглов',
      position: 'UX/UI дизайнер',
      dateOfEmployment: '2024-06-15',
    },
  },
];

const MainPage = () => (
  <Page className={classNames(cls.MainPage, {}, [])}>
    <ChartList />
    <EmployeesSection employees={staff} />
  </Page>
);

export default memo(MainPage);
