// Динамика личных качеств, столбчатые диаграммы (балл/время)

import 'chart.js/auto';
import type { ChartData, ChartOptions } from 'chart.js';
import { Bar } from 'react-chartjs-2';

const data: ChartData<'bar'> = {
  labels: [
    'Качество 1',
    'Качество 2',
    'Качество 3',
    'Качество 4',
    'Качество 5',
  ],
  datasets: [
    {
      label: '# of Votes',
      data: [3, 5, 7, 9, 5],
      borderColor: '#464D77',
      backgroundColor: '#464D77',
    },
    {
      label: '# of Votes',
      data: [4, 6, 3, 6, 8],
      borderColor: '#FF5C00',
      backgroundColor: '#FF5C00',
    },
  ],
};

interface PersonalQualitiesChartProps {
  title: string;
}

export function PersonalQualitiesChart({ title }: PersonalQualitiesChartProps) {
  const options: ChartOptions<'bar'> = {
    maintainAspectRatio: false,
    datasets: {
      bar: {
        borderRadius: 4,
      },
    },
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#000',
          font: {
            size: 16,
          },
        },
      },
      title: {
        align: 'start',
        text: title,
        display: true,
        padding: 32,
        color: '#000',
        font: {
          size: 16,
        },
      },
    },
    scales: {
      y: {
        min: 0,
        max: 12,
        ticks: {
          color: '#000',
          font: {
            size: 14,
            weight: 'bolder',
          },
        },
      },
      x: {
        ticks: {
          color: '#000',
          font: {
            size: 14,
            weight: 'bolder',
          },
        },
      },
    },
    animation: false,
  };
  return <Bar data={data} options={options} />;
}
