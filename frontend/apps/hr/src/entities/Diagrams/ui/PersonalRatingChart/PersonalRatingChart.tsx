// Диаграмма рейтинга сотрудника

import 'chart.js/auto';
import type { ChartData, ChartOptions } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

const options: ChartOptions<'doughnut'> = {
  events: [],
  cutout: 60,
  devicePixelRatio: 2,
  maintainAspectRatio: false,
  datasets: {
    doughnut: {
      borderWidth: 2,
      borderRadius: 0,
    },
  },
  plugins: {
    title: {
      align: 'start',
      text: 'Рейтинг ценностей',
      display: true,
      color: '#000',
      font: {
        size: 16,
      },
    },
    legend: {
      position: 'bottom',
      labels: {
        padding: 16,
        color: '#000',
        font: {
          size: 16,
        },
      },
    },
  },
  animation: false,
};

interface PersonalRatingChartProps {
  rating: number;
}

export function PersonalRatingChart({ rating }: PersonalRatingChartProps) {
  const data: ChartData<'doughnut'> = {
    labels: [],
    datasets: [
      {
        data: [rating, 100 - rating],
        backgroundColor: ['#AABFF8', '#f4f7fb'],
      },
    ],
  };
  return <Doughnut data={data} options={options} />;
}
