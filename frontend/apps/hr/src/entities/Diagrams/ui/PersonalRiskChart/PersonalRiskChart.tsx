// Диаграмма личных рисков, руб

import 'chart.js/auto';
import type { ChartData, ChartOptions } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

const data: ChartData<'doughnut'> = {
  labels: [
    'Риск невыполнения поручений и трудовых функций',
    'Риск конфликта при коммуникации',
    'Риск переработок и выгорания',
    'Риск обмана предприятия, недобросовестное отношение к работе',
    'Риск недопонимания',
  ],
  datasets: [
    {
      data: [12, 19, 20, 5, 10],
      backgroundColor: ['#8A38F6', '#214E34', '#464D77', '#E56399', '#FF5C00'],
    },
  ],
};

const options: ChartOptions<'doughnut'> = {
  cutout: 140,
  maintainAspectRatio: false,
  datasets: {
    doughnut: {
      borderWidth: 2,
      borderRadius: 6,
    },
  },
  plugins: {
    title: {
      align: 'start',
      text: 'Риски',
      display: true,
      color: '#000',
      font: {
        size: 16,
      },
    },
    legend: {
      position: 'bottom',
      labels: {
        padding: 16,
        color: '#000',
        font: {
          size: 16,
        },
      },
    },
  },
  animation: false,
};

export function PersonalRiskChart() {
  return <Doughnut data={data} options={options} />;
}
