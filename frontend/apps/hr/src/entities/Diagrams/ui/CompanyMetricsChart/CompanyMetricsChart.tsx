// Диаграмма метрик компании (усредненная по всем сотрудникам), линейный график (оценка - дата)

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
      text: 'Диаграмма метрик компании (усредненная по всем сотрудникам), линейный график (оценка - дата)',
      display: true,
      padding: 16,
    },
  },
  animation: false,
};

export function CompanyMetricsChart() {
  return <Line data={data} options={options} />;
}
