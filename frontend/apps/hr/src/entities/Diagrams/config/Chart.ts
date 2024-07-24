import type { ChartOptions, ChartType } from 'chart.js';

export const defaultOptions: ChartOptions<ChartType> = {
  layout: {
    padding: 16,
  },
  plugins: {
    title: {
      align: 'start',
      text: 'Диаграмма рисков компании, круговая руб и %',
      display: true,
      padding: 16,
      color: '#000',
      font: {
        size: 18,
      },
    },
  },
} as ChartOptions;
