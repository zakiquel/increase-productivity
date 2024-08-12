import { classNames } from '@repo/shared/lib';
import { Card, Input, ProgressBar, Text } from '@repo/shared/ui';
import { memo } from 'react';

import {
  CompanyMetricsChart,
  CompanyRiskChart,
  CompanyValuesChart,
} from '@/entities/Diagrams';
import { Employee, EmployeeCard } from '@/entities/Employee';
import { DownloadCompanyReportButton } from '@/features/DownloadCompanyReportButton';

import cls from './ChartList.module.scss';

const Employees: Employee[] = [
  {
    id: 1,
    first_name: 'Петров',
    middle_name: 'Пётр',
    last_name: 'Иванович',
    email: 'sdsd',
    company_id: 2,
    imgSrc: '',
    salary: 10000,
    birth_date: '',
    position: 'UX/UI дизайнер',
    status: '',
    date_of_hiring: '',
    work_experience: 20,
    balance: '',
  },
  {
    id: 3,
    first_name: 'Петров',
    middle_name: 'Пётр',
    last_name: 'Иванович',
    email: 'sdsd',
    company_id: 2,
    imgSrc: '',
    salary: 10000,
    birth_date: '',
    position: 'UX/UI дизайнер',
    status: '',
    date_of_hiring: '',
    work_experience: 20,
    balance: '',
  },
  {
    id: 2,
    first_name: 'Петров',
    middle_name: 'Пётр',
    last_name: 'Иванович',
    email: 'sdsd',
    company_id: 2,
    imgSrc: '',
    salary: 10000,
    birth_date: '',
    position: 'UX/UI дизайнер',
    status: '',
    date_of_hiring: '',
    work_experience: 20,
    balance: '',
  },
];

export const ChartList = memo(() => (
  <section className={cls.ChartList}>
    <div className={cls.list_wrap}>
      <div className={cls.block_wrap}>
        <Card
          variant="light"
          className={classNames(cls.wrapper_common, {}, [])}
        >
          <Text text="Текучесть кадров, год" bold size="s" />
          <div className={cls.bar_wrap}>
            <span className={cls.stat_text}>{`${5}%`}</span>
            <ProgressBar size={5} disabled={false} color="#8A38F6" />
            <p className={cls.description}>
              Метрика в норме, продолжайте её отслеживать, чтобы контролировать
              состояние компании
            </p>
          </div>
        </Card>
        <Card
          variant="light"
          className={classNames(cls.wrapper_common, {}, [])}
        >
          <Text text="Отчёт по компании" bold size="s" className={cls.title} />
          <Text
            text="Вся страница будет в формате PDF будет выгружена на ваш компьютер"
            size="xs"
            variant="grey"
            className={cls.text}
          />

          <DownloadCompanyReportButton />
        </Card>
      </div>
      <div className={cls.block_wrap}>
        <Card
          variant="light"
          className={classNames(cls.wrapper_common, {}, [])}
        >
          <Text text="Рейтинг ценностей" bold size="s" />
          <div className={cls.wrap}>
            <span className={cls.stat_text}>{`${50}%`}</span>
            <ProgressBar size={50} disabled={false} color="#8A38F6" />
          </div>
        </Card>
        <Card
          variant="light"
          className={classNames(cls.wrapper_common, {}, [])}
        >
          <Text text="Абсентеизм" bold size="s" />
          <p className={cls.description}>
            Рекомендуем обратить внимание на причины пропуска работы вашими
            сотрудниками, выявить недобросовестных работников, провести
            мероприятие направленное на ликвидацию рисков пропуска рабочих дней
          </p>
          <Input value="16%" className={classNames(cls.input, {}, [])} />
        </Card>
      </div>
    </div>
    <Card
      variant="light"
      className={classNames(cls.diagram_card, {}, [cls.block2])}
    >
      <CompanyRiskChart />
    </Card>
    <Card
      variant="light"
      className={classNames(cls.diagram_card, {}, [cls.block3])}
    >
      <CompanyValuesChart />
    </Card>
    <Card
      className={classNames(cls.wrapper_common, {}, [cls.block4])}
      variant="light"
    >
      <Text text="Сотрудники, которые требуют внимания" bold size="s" />
      <hr className={cls.hr} />
      <ul>
        {Employees.map((employee, key) => (
          <li key={key}>
            <EmployeeCard simple employee={employee} />
          </li>
        ))}
      </ul>
    </Card>
    <Card
      variant="light"
      className={classNames(cls.diagram_card, {}, [cls.block5])}
    >
      <CompanyMetricsChart />
    </Card>
  </section>
));
