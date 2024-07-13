import { classNames } from '@repo/shared/lib';
import { Button, Card, Text } from '@repo/shared/ui';
import { Chart, ChartConfiguration, registerables } from 'chart.js';
import { memo, useEffect, useRef } from 'react';

import { Dataset } from '../../model/types/chart';

import cls from './ChartCard.module.scss';

interface ChartCardProps {
  title: string;
  labels: string[];
  datasets?: Dataset[];
  withButtons?: boolean;
}

Chart.register(...registerables);

export const ChartCard = memo((props: ChartCardProps) => {
  const { title, labels, datasets, withButtons } = props;

  const ctx = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (ctx.current && datasets) {
      const config: ChartConfiguration<'radar', number[], string> = {
        type: 'radar',
        data: {
          labels,
          datasets,
        },
        options: {
          scales: {
            r: {
              min: 0,
              max: 1,
              ticks: {
                stepSize: 0.1,
              },
              grid: {
                circular: true,
                color: 'rgba(0, 0, 0, 0.1)',
              },
              pointLabels: {
                padding: 0,
                font: {
                  size: 12,
                },
                color: '#646464',
              },
            },
          },
          elements: {
            line: {
              borderWidth: 3,
            },
          },
        },
      };

      chartInstanceRef.current = new Chart(ctx.current, config);

      return () => {
        if (chartInstanceRef.current) {
          chartInstanceRef.current.destroy();
        }
      };
    }

    return undefined;
  }, [datasets, labels]);

  return (
    <Card
      variant="light"
      padding="16"
      className={classNames(cls.ChartCard)}
    >
      <Text title={title} size="s" className={cls.chart_title} />
      <div className={cls.canvas}>
        {datasets ? (
          <canvas ref={ctx} className={cls.chart_canvas} />
        ) : (
          <div className={cls.chart_empty} />
        )}
      </div>
      {withButtons && (
        <div className={cls.button_group}>
          <Button variant="secondary" size="s">
            К ценностям
          </Button>
          <Button variant="ghost" size="s">
            Редактировать
          </Button>
        </div>
      )}
    </Card>
  );
});
