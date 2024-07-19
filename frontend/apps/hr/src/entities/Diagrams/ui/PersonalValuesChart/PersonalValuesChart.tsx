// Динамика личных ценностей, паутинчатая диаграмма балл

import 'chart.js/auto';
import { Radar } from 'react-chartjs-2';
import type { ChartData, ChartOptions } from 'chart.js';

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
      data: [12, 13, 11, 13, 10],
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

export function PersonalValuesChart() {
  return <Radar data={data} options={options} />;
}
