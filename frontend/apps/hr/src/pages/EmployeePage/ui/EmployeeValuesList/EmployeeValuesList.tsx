import { classNames } from '@repo/shared/lib';
import { Card } from '@repo/shared/ui';
import type { ChartData } from 'chart.js';

import {
  PersonalQualitiesChart,
  getPersonalQualities,
} from '@/entities/Diagrams';

import cls from './EmployeeValuesList.module.scss';

interface EmployeeValuesListProps {
  employeeId: string;
  className?: string;
}
const colors = ['#8A38F6', '#FF5C00', '#E56399', '#464D77', '#214E34'];

export const EmployeeValuesList = (props: EmployeeValuesListProps) => {
  const { employeeId, className } = props;
  const { data } = getPersonalQualities(employeeId);

  if (!data || !data.length) return null;

  return (
    <section className={classNames(cls.EmployeeValuesList, {}, [className])}>
      {/* eslint-disable-next-line */}
      {data.map((item, i) => {
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
          <Card
            variant="light"
            padding="16"
            key={i}
            className={cls.diagram_card}
          >
            <PersonalQualitiesChart data={formattedData} title={item.title} />
          </Card>
        );
      })}
    </section>
  );
};
