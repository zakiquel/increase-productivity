// Диаграмма по качествам компании (усредненная по всем сотрудникам), столбчатая с тенденцией

import 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import type { ChartData, ChartOptions } from 'chart.js';

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
      text: 'Диаграмма по качествам компании (усредненная по всем сотрудникам), столбчатая с тенденцией',
      display: true,
      padding: 16,
    },
  },
  animation: false,
};

export function CompanyQualityChart() {
  return <Bar data={data} options={options} />;
}
