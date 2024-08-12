// Диаграмма личных рисков, руб
// Диаграмма рисков компании, круговая руб и %
import 'chart.js/auto';
import type { ChartData, ChartOptions } from 'chart.js';
import { Bar } from 'react-chartjs-2';

const data: ChartData<'bar'> = {
  labels: ['Риски по метрикам', 'Риски по качествам'],
  datasets: [
    {
      label: 'Риск по метрике 1',
      data: [15, null],
    },
    {
      label: 'Риск по метрике 2',
      data: [10, null],
    },
    {
      label: 'Риск по метрике 3',
      data: [5, null],
    },
    {
      label: 'Риск по качеству 1',
      data: [null, -15],
    },
    {
      label: 'Риск по качеству 2',
      data: [null, -10],
    },
    {
      label: 'Риск по качеству 3',
      data: [null, -5],
    },
  ],
};

const options: ChartOptions<'bar'> = {
  skipNull: true,
  indexAxis: 'y',
  maintainAspectRatio: false,
  devicePixelRatio: 2,
  datasets: {
    bar: {
      borderWidth: 2,
      borderRadius: 6,
    },
  },
  scales: {
    x: {
      ticks: {
        callback(tickValue) {
          if (typeof tickValue === 'number') {
            return Math.abs(tickValue);
          }
          return tickValue;
        },
      },
    },
    y: {
      display: false,
    },
  },
  plugins: {
    tooltip: {
      callbacks: {
        label(tooltipItem) {
          const value =
            typeof tooltipItem.raw === 'number'
              ? Math.abs(tooltipItem.raw)
              : tooltipItem.raw;
          return `${tooltipItem.dataset.label}: ${value}`;
        },
      },
    },
    title: {
      align: 'start',
      text: 'Риски',
      display: true,
      color: '#000',
      font: {
        size: 18,
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

export function PersonalRiskChart() {
  return <Bar data={data} options={options} height="100%" />;
}
