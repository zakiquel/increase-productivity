// Диаграмма рисков компании, круговая руб и %
import 'chart.js/auto';
import type { ChartData, ChartOptions } from 'chart.js';
import { Bar } from 'react-chartjs-2';

const data: ChartData<'bar'> = {
  labels: [
    'Риск по метрике 1',
    'Риск по метрике 2',
    'Риск по метрике 3',
    'Риск по качеству 1',
    'Риск по качеству 2',
    'Риск по качеству 3',
  ],
  datasets: [
    {
      label: 'Риски по метрикам',
      data: [15, 10, 5, 0, 0, 0],
    },
    {
      label: 'Риски по качеству',
      data: [0, 0, 0, -15, -10, -5],
    },
  ],
};

const options: ChartOptions<'bar'> = {
  devicePixelRatio: 2,
  indexAxis: 'y',
  maintainAspectRatio: false,
  datasets: {
    bar: {
      borderWidth: 2,
      borderRadius: 6,
    },
  },
  scales: {
    x: {
      stacked: true,
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
      stacked: true,
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

export function CompanyRiskChart() {
  return <Bar data={data} options={options} height="100%" />;
}
