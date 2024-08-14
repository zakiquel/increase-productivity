import { classNames } from '@repo/shared/lib';
import { Button, Card } from '@repo/shared/ui';
import type { ChartData } from 'chart.js';
import { useState } from 'react';

import {
  PersonalQualitiesChart,
  getPersonalQualities,
} from '@/entities/Diagrams';
import { AddQualitiesDrawer } from '@/features/AddQualities';

import cls from './EmployeeValuesList.module.scss';

interface EmployeeValuesListProps {
  employeeId: string;
  className?: string;
}
const colors = ['#8A38F6', '#FF5C00', '#E56399', '#464D77', '#214E34'];

export const EmployeeValuesList = (props: EmployeeValuesListProps) => {
  const { employeeId, className } = props;
  const { data, isLoading } = getPersonalQualities(employeeId);
  const [isOpen, setOpen] = useState(false);

  if (!data || data.length === 0) return null;

  return (
    <Card
      className={classNames(cls.EmployeeValuesList, {}, [className])}
      variant="light"
      padding="16"
    >
      {/* eslint-disable-next-line */}
      {data.map((item, i) => {
        if (item.datasets) {
          const formattedData: ChartData<'bar'> = {
            labels: item.labels,
            datasets: item.datasets.map((dataset, i) => ({
              label: dataset.label,
              data: dataset.data.map((data) => Number(data)),
              backgroundColor: colors[i],
              borderColor: colors[i],
            })),
          };

          return (
            <div className={cls.diagram_card} key={i}>
              <PersonalQualitiesChart data={formattedData} title={item.title} />
            </div>
          );
        }
        return null;
      })}
      <Button size="s" className={cls.btn} onClick={() => setOpen(true)}>
        Внести данные по ценностям
      </Button>
      <AddQualitiesDrawer isOpen={isOpen} onClose={() => setOpen(false)} />
    </Card>
  );
};
