// Диаграмма по ценностям компании (усредненная по всем сотрудникам), паутинчатая, балл ценности округленный до целого

import 'chart.js/auto';
import type { ChartData, ChartOptions } from 'chart.js';
import { Radar } from 'react-chartjs-2';

const data: ChartData<'radar'> = {
  labels: [
    'Ценность 1',
    'Ценность 2',
    'Ценность 3',
    'Ценность 4',
    'Ценность 5',
  ],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 13, 15, 13, 14],
      borderWidth: 2,
    },
  ],
};

const options: ChartOptions<'radar'> = {
  plugins: {
    legend: {},
    title: {
      align: 'start',
      text: 'Диаграмма по ценностям компании (усредненная по всем сотрудникам), паутинчатая, балл ценности округленный до целого',
      display: true,
      padding: 16,
    },
  },
  animation: false,
};

export function CompanyValuesChart() {
  return <Radar data={data} options={options} />;
}
