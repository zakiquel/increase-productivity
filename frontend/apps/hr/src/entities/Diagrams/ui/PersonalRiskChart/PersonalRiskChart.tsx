// Диаграмма личных рисков, руб

import 'chart.js/auto';
import { Pie } from 'react-chartjs-2';
import type { ChartData, ChartOptions } from 'chart.js';

const data: ChartData<'pie'> = {
  labels: ['Ценность 1', 'Ценность 2'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19],
      borderWidth: 2,
    },
  ],
};

const options: ChartOptions<'pie'> = {
  plugins: {
    legend: {},
    title: {
      align: 'start',
      text: 'Диаграмма личных рисков, руб',
      display: true,
      padding: 16,
    },
  },
  animation: false,
};

export function PersonalRiskChart() {
  return <Pie data={data} options={options} />;
}
