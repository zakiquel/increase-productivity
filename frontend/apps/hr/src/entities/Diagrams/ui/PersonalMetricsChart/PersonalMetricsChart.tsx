// Динамика личных метрик, линейная (балл/дата)

import 'chart.js/auto';
import type { ChartData, ChartOptions } from 'chart.js';
import { Line } from 'react-chartjs-2';

const data: ChartData<'line'> = {
  labels: ['2024-10-02', '2024-10-03', '2024-10-04', '2024-10-05'],
  datasets: [
    {
      label: 'Оценка вовлеченности персонала',
      data: [2, 3, 4, 5],
    },
    {
      label: 'Оценка лояльности сотрудников',
      data: [1, 6, 10, 3],
    },
    {
      label: 'Индекс удовлетворённости сотрудников',
      data: [3, 2, 7, 1],
    },
  ],
};

const options: ChartOptions<'line'> = {
  devicePixelRatio: 2,
  maintainAspectRatio: false,
  datasets: {
    line: {
      borderWidth: 4,
    },
  },
  plugins: {
    title: {
      align: 'start',
      text: 'Динамика метрик',
      display: true,
      padding: 32,
      color: '#000',
      font: {
        size: 16,
      },
    },
    legend: {
      position: 'bottom',
      labels: {
        color: '#000',
        font: {
          size: 16,
        },
      },
    },
  },
  scales: {
    x: {
      ticks: {
        color: '#000',
        font: {
          weight: 'bolder',
          size: 14,
        },
      },
    },
    y: {
      min: 0,
      max: 12,
      ticks: {
        stepSize: 1,
        color: '#000',
        font: {
          weight: 'bolder',
          size: 14,
        },
      },
    },
  },
  animation: false,
};

export function PersonalMetricsChart() {
  return <Line data={data} options={options} height="100%" />;
}
