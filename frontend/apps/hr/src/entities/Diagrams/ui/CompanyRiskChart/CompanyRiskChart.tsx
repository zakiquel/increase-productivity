// Диаграмма рисков компании, круговая руб и %
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
      text: 'Диаграмма рисков компании, круговая руб и %',
      display: true,
      padding: 16,
    },
  },
  animation: false,
};

export function CompanyRiskChart() {
  return <Pie data={data} options={options} />;
}
