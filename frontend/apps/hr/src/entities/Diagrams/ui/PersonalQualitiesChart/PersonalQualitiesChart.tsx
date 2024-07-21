// Динамика личных качеств, столбчатые диаграммы (балл/время)

import 'chart.js/auto';
import type { ChartData, ChartOptions } from 'chart.js';
import { Bar } from 'react-chartjs-2';

const data: ChartData<'bar'> = {
  labels: ['Ценность 1', 'Ценность 2'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19],
      borderWidth: 2,
    },
  ],
};

const options: ChartOptions<'bar'> = {
  plugins: {
    legend: {},
    title: {
      align: 'start',
      text: 'Динамика личных качеств, столбчатые диаграммы (балл/время)',
      display: true,
      padding: 16,
    },
  },
  animation: false,
};

export function PersonalQualitiesChart() {
  return <Bar data={data} options={options} />;
}
