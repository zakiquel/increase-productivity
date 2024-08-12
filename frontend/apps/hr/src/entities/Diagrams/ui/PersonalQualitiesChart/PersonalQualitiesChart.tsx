// Динамика личных качеств, столбчатые диаграммы (балл/время)

import 'chart.js/auto';
import type { ChartOptions, ChartData } from 'chart.js';
import { Bar } from 'react-chartjs-2';

interface PersonalQualitiesChartProps {
  data: ChartData<'bar'>;
  title: string;
}

export function PersonalQualitiesChart({
  data,
  title,
}: PersonalQualitiesChartProps) {
  const options: ChartOptions<'bar'> = {
    skipNull: true,
    devicePixelRatio: 2,
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
        max: 10,
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
