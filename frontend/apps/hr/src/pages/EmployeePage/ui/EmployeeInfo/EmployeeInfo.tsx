import { Card } from '@repo/shared/ui';
import { memo } from 'react';

import {
  EmployeeBalance,
  EmployeeProfile,
  EmployeeRating,
  EmployeeOperations,
  EmployeeEvents,
  EmployeeTest,
} from '@/entities/Employee';
import { DownloadEmployeeReportButton } from '@/features/DownloadEmployeeReportButton';

import cls from './EmployeeInfo.module.scss';

const testEmployee: EmployeeTest = {
  id: 1,
  personalInfo: {
    firstName: 'Антон',
    patronymic: 'Андреевич',
    lastName: 'Пастухов',
    dateOfBirth: new Date('2002-01-16'),
    hiring: new Date('2002-01-17'),
    position: 'Дизайнер',
    workExperience: 3,
    salary: 50000,
    email: 'ivanov@mail.com',
    phoneNumber: '+7 800 555 35-35',
    balance: 1500,
  },
  notes: [
    {
      id: 1,
      text: 'это заметка, которую можно отредактировать',
      date: '24.06.2024',
    },
    {
      id: 2,
      text: 'это еще одна заметка, которую можно отредактировать',
      date: '25.06.2024',
    },
    {
      id: 3,
      text: 'это еще одна заметка',
      date: '25.06.2024',
    },
    {
      id: 4,
      text: 'это заметка',
      date: '27.06.2024',
    },
  ],
  documents: [],
  values: {
    standard: 50,
    metrics: [
      {
        id: 1,
        name: 'Ценность 1',
        value: 80,
        change: 100,
      },
    ],
  },
  events: [
    {
      companyId: 1,
      name: 'Тимбилдинг',
      category: 'Категория',
      date: '08.07.2024',
    },
  ],
  transactions: [
    {
      productId: 1,
      date: '08.07.2024',
      status: '-1500 б.',
    },
  ],
};

export const EmployeeInfo = memo(() => (
  <section className={cls.EmployeeInfo}>
    <EmployeeProfile data={testEmployee.personalInfo} />
    <div className={cls.info}>
      <div className={cls.rating_balance}>
        <EmployeeRating rating={testEmployee.values?.standard} />
        <EmployeeBalance balance={testEmployee.personalInfo.balance} />
        <Card variant="light" className={cls.report} padding="16">
          <DownloadEmployeeReportButton employeeId={1} />
        </Card>
      </div>
      <div className={cls.events_operations}>
        <EmployeeOperations transactions={testEmployee.transactions} />
        <EmployeeEvents events={testEmployee.events} />
      </div>
    </div>
  </section>
));
