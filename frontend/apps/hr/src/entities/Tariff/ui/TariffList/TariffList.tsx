import React, { memo } from 'react';

import { TariffCard } from '../TariffCard/TariffCard';

import cls from './TariffList.module.scss';

const tariffs = [
  {
    title: 'Демо',
    employees: 'До 10 сотрудников',
    reports: 'Два отчёта в месяц',
    price: 'Бесплатно',
    description: 'Доступен с момента регистрации',
  },
  {
    title: 'Мидл',
    employees: 'До 100 сотрудников',
    reports: '30 отчётов в месяц',
    price: '499 руб',
  },
  {
    title: 'Сеньор',
    employees: 'От 500 сотрудников',
    reports: '100 отчётов в месяц',
    price: '1499 руб',
  },
];

export const TariffList = memo(() => (
  <section className={cls.TariffList}>
    <h2>Выберите тариф, подходящий именно вам</h2>
    <ul>
      {tariffs.map((item, index) => (
        <li key={index}>
          <TariffCard
            title={item.title}
            employees={item.employees}
            reports={item.reports}
            price={item.price}
            description={item.description}
          />
        </li>
      ))}
    </ul>
  </section>
));
