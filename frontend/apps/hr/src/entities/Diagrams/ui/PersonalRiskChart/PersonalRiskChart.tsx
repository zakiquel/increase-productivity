// Диаграмма личных рисков, руб

import 'chart.js/auto';
import type { ChartData, ChartOptions } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

const data: ChartData<'doughnut'> = {
  labels: ['Риск 1', 'Риск 2', 'Риск 3', 'Риск 4', 'Риск 5'],
  datasets: [
    {
      data: [12, 19, 20, 5, 10],
      backgroundColor: ['#8A38F6', '#214E34', '#464D77', '#E56399', '#FF5C00'],
    },
  ],
};

const options: ChartOptions<'doughnut'> = {
  layout: {
    padding: 16,
  },
  datasets: {
    doughnut: {
      borderWidth: 2,
      borderColor: '#00000000',
    },
  },
  plugins: {
    title: {
      align: 'start',
      text: 'Диаграмма личных рисков, руб',
      display: true,
      padding: 16,
      color: '#000',
      font: {
        size: 18,
      },
    },
    legend: {
      position: 'right',
      labels: {
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
