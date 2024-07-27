// Диаграмма личных рисков, руб

import 'chart.js/auto';
import type { ChartData, ChartOptions } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

const data: ChartData<'doughnut'> = {
  labels: [
    'Короткий Риск 1',
    'Средний риск Риск 2',
    'Немного длинный риск Риск 3',
    'Очень очень длинный риск Риск 4',
    'Риск 5',
  ],
  datasets: [
    {
      data: [12, 19, 20, 5, 10],
      backgroundColor: ['#8A38F6', '#214E34', '#464D77', '#E56399', '#FF5C00'],
    },
  ],
};

const options: ChartOptions<'doughnut'> = {
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
        size: 18,
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
