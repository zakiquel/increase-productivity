import { Button, Card, Text } from '@repo/shared/ui';
import { memo } from 'react';

import { Chart, Dataset } from '../../model/types/chart';
import { ChartCard } from '../ChartCard/ChartCard';

import cls from './ChartList.module.scss';

const charts: Chart[] = [
  {
    title: 'Динамика ценностей',
    labels: [
      'Оценка лояльности сотрудников (метод eNPS)',
      'Показатель врнутреннего карьерного роста',
      'Индекс счастья',
      'Уровень удовлетворенности работой',
      'Коэффициент абсентеизма',
      'Коэффициент развития сотрудников',
      'Индекс удовлетворенности',
    ],
    datasets: [
      {
        label: '24.05.2021',
        data: [0.8, 0.85, 0.95, 0.85, 0.95, 0.7, 1],
        fill: false,
        borderColor: '#ED7D31',
      },
      {
        label: '25.08.2021',
        data: [0.65, 0.85, 0.95, 0.85, 0.95, 1, 0.9],
        fill: false,
        borderColor: '#4472C4',
      },
      {
        label: '26.12.2021',
        data: [0.85, 0.85, 0.9, 0.95, 0.7, 0.6, 1],
        fill: false,
        borderColor: '#A5A5A5',
      },
    ],
  },
  {
    title: 'Динамика метрик',
    labels: [
      'Оценка лояльности сотрудников (метод eNPS)',
      'Показатель врнутреннего карьерного роста',
      'Индекс счастья',
      'Уровень удовлетворенности работой',
      'Коэффициент абсентеизма',
      'Коэффициент развития сотрудников',
      'Индекс удовлетворенности',
    ],
    datasets: [
      {
        label: '24.05.2021',
        data: [0.8, 0.85, 0.95, 0.85, 0.95, 0.7, 1],
        fill: false,
        borderColor: '#ED7D31',
      },
      {
        label: '25.08.2021',
        data: [0.65, 0.85, 0.95, 0.85, 0.95, 1, 0.9],
        fill: false,
        borderColor: '#4472C4',
      },
      {
        label: '26.12.2021',
        data: [0.85, 0.85, 0.9, 0.95, 0.7, 0.6, 1],
        fill: false,
        borderColor: '#A5A5A5',
      },
    ],
  },
  {
    title: 'Риски',
    labels: [
      'Оценка лояльности сотрудников (метод eNPS)',
      'Показатель врнутреннего карьерного роста',
      'Индекс счастья',
      'Уровень удовлетворенности работой',
      'Коэффициент абсентеизма',
      'Коэффициент развития сотрудников',
      'Индекс удовлетворенности',
    ],
    datasets: [
      {
        label: '24.05.2021',
        data: [0.8, 0.85, 0.95, 0.85, 0.95, 0.7, 1],
        fill: false,
        borderColor: '#ED7D31',
      },
      {
        label: '25.08.2021',
        data: [0.65, 0.85, 0.95, 0.85, 0.95, 1, 0.9],
        fill: false,
        borderColor: '#4472C4',
      },
      {
        label: '26.12.2021',
        data: [0.85, 0.85, 0.9, 0.95, 0.7, 0.6, 1],
        fill: false,
        borderColor: '#A5A5A5',
      },
    ],
  },
  {
    title: 'Сотрудники',
    labels: [
      'Оценка лояльности сотрудников (метод eNPS)',
      'Показатель врнутреннего карьерного роста',
      'Индекс счастья',
      'Уровень удовлетворенности работой',
      'Коэффициент абсентеизма',
      'Коэффициент развития сотрудников',
      'Индекс удовлетворенности',
    ],
    datasets: [
      {
        label: '24.05.2021',
        data: [0.8, 0.85, 0.95, 0.85, 0.95, 0.7, 1],
        fill: false,
        borderColor: '#ED7D31',
      },
      {
        label: '25.08.2021',
        data: [0.65, 0.85, 0.95, 0.85, 0.95, 1, 0.9],
        fill: false,
        borderColor: '#4472C4',
      },
      {
        label: '26.12.2021',
        data: [0.85, 0.85, 0.9, 0.95, 0.7, 0.6, 1],
        fill: false,
        borderColor: '#A5A5A5',
      },
    ],
  },
];

export const ChartList = memo(({ data }: { data?: Dataset[] }) => (
  <section className={cls.ChartList}>
    {!data && (
      <Card variant='light' padding='16' className={cls.hello_card}>
        <Text text='Привет!' size='m' className={cls.hello} />
        <Text
          text='На этой странице будет отображаться главная информация о компании. 
          Заполни раздел «Ценности и Метрики», чтобы мы могли показать тебе статистику.'
          size='m'
          className={cls.hello_text}
        />
        <Button size='s' className={cls.hello_button}>
          Кнопка
        </Button>
      </Card>
    )}
    <div className={cls.employees_metrics}>
      <ChartCard title='Рейтинг коллектива по ценностям' labels={[]} />
      <ChartCard title='Сотрудники с наибольшим влиянием' labels={[]} />
    </div>
    <ChartCard title='Ценности компании' labels={[]} withButtons />
    <ChartCard title='Метрики компании' labels={[]} withButtons />
  </section>
));
