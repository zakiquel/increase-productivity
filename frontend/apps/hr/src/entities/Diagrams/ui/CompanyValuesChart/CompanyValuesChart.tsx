// Диаграмма по ценностям компании (усредненная по всем сотрудникам), паутинчатая, балл ценности округленный до целого

import 'chart.js/auto';
import type { ChartData, ChartOptions } from 'chart.js';
import { Radar } from 'react-chartjs-2';

import { getCompanyMetrics } from '../../model/api/graphicsApi';

const options: ChartOptions<'radar'> = {
  devicePixelRatio: 2,
  maintainAspectRatio: false,
  datasets: {
    radar: {
      fill: false,
      borderWidth: 4,
    },
  },
  plugins: {
    title: {
      align: 'start',
      text: 'Ценности компании',
      display: true,
      color: '#000',
      font: {
        size: 18,
      },
    },
    legend: {
      position: 'bottom',
      labels: {
        color: '#000',
        font: {
          size: 16,
        },
      },
    },
  },
  scales: {
    r: {
      pointLabels: {
        color: '#000',
        font: {
          weight: 'bolder',
          size: 14,
        },
      },
      min: 0,
      max: 10,
      ticks: {
        font: {
          weight: 'bolder',
        },
      },
    },
  },
  animation: false,
};

const colors = ['#8A38F6', '#FF5C00', '#E56399', '#464D77', '#214E34'];

export function CompanyValuesChart() {
  const { data } = getCompanyMetrics();

  if (!data) return null;

  const formattedData: ChartData<'radar'> = {
    labels: data.labels,
    datasets: data.datasets.map((dataset, i) => ({
      label: dataset.label,
      data: dataset.data.map((data) => Number(data)),
      borderColor: colors[i],
      backgroundColor: colors[i],
    })),
  };

  return <Radar data={formattedData} options={options} height="100%" />;
}
