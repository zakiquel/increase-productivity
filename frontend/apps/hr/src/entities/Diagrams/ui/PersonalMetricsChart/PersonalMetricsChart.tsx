// Динамика личных метрик, линейная (балл/дата)

import 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import type { ChartData, ChartOptions } from 'chart.js';

const data: ChartData<'line'> = {
  labels: ['Ценность 1', 'Ценность 2'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19],
      borderWidth: 2,
    },
  ],
};

const options: ChartOptions<'line'> = {
  plugins: {
    legend: {},
    title: {
      align: 'start',
      text: 'Динамика личных метрик, линейная (балл/дата)',
      display: true,
      padding: 16,
    },
  },
  animation: false,
};

export function PersonalMetricsChart() {
  return <Line data={data} options={options} />;
}
