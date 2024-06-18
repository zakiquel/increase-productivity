import {
    Chart,
    ChartConfiguration,
    registerables
} from 'chart.js';
import { memo, useEffect, useRef } from 'react';

import { Datasets } from '../model/types/chartCard';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';

import cls from './ChartCard.module.scss';

interface ChartCardProps {
    title: string;
    labels: string[];
    datasets: Datasets[];
}

Chart.register(...registerables);

export const ChartCard = memo((props: ChartCardProps) => {
    const { title, labels, datasets } = props;

    const ctx = useRef<HTMLCanvasElement>(null);
    const chartInstanceRef = useRef<Chart | null>(null);

    useEffect(() => {
        if (ctx.current) {
            const config: ChartConfiguration<'radar', number[], string> = {
                type: 'radar',
                data: {
                    labels,
                    datasets
                },
                options: {
                    scales: {
                        r: {
                            min: 0,
                            max: 1,
                            ticks: {
                                stepSize: 0.1
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
                            }
                        }
                    },
                    elements: {
                        line: {
                            borderWidth: 3
                        }
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
        <Card variant='light' padding='32' className={classNames(cls.ChartCard)}>
            <h2>{title}</h2>
            <div className={cls.canvas}>
                <canvas ref={ctx} className={cls.chart_canvas} />
            </div>
            <div className={cls.button_group}>
                <Button variant='outline'>Редактировать</Button>
                <Button variant='outline'>К ценностям</Button>
            </div>
        </Card>
    );
});
