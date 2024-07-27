// Динамика личных метрик, линейная (балл/дата)

import 'chart.js/auto';
import type { ChartData, ChartOptions } from 'chart.js';
import { Line } from 'react-chartjs-2';

const data: ChartData<'line'> = {
  labels: ['20.06.2024', '20.12.2024', '19.05.2025'],
  datasets: [
    {
      label: 'Метрика 1',
      data: [4, 4, 7],
      borderColor: '#8A38F6',
      backgroundColor: '#8A38F6',
    },
    {
      label: 'Метрика 2',
      data: [3, 6, 4],
      borderColor: '#FF5C00',
      backgroundColor: '#FF5C00',
    },
    {
      label: 'Метрика 3',
      data: [3, 5, 11],
      borderColor: '#E56399',
      backgroundColor: '#E56399',
    },
  ],
};

const options: ChartOptions<'line'> = {
  maintainAspectRatio: false,
  datasets: {
    line: {
      borderWidth: 4,
    },
  },
  plugins: {
    title: {
      align: 'start',
      text: 'Динамика личных метрик, линейная (балл/дата)',
      display: true,
      padding: 32,
      color: '#000',
      font: {
        size: 18,
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
