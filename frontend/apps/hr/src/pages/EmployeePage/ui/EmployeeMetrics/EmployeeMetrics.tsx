import { classNames } from '@repo/shared/lib';
import { Card } from '@repo/shared/ui';

import { PersonalMetricsChart } from '@/entities/Diagrams';

import cls from './EmployeeMetrics.module.scss';

interface EmployeeMetricsProps {
  className?: string;
}

export const EmployeeMetrics = (props: EmployeeMetricsProps) => {
  const { className } = props;

  return (
    <Card
      variant="light"
      padding="16"
      className={classNames(cls.EmployeeMetrics, {}, [className])}
    >
      <PersonalMetricsChart />
    </Card>
  );
};
