import { classNames } from '@repo/shared/lib';
import { Card } from '@repo/shared/ui';

import { PersonalMetricsChart } from '@/entities/Diagrams';

import cls from './EmployeeMetrics.module.scss';

interface EmployeeMetricsProps {
  employeeId: string;
  className?: string;
}

export const EmployeeMetrics = (props: EmployeeMetricsProps) => {
  const { className, employeeId } = props;

  return (
    <Card
      variant="light"
      padding="16"
      className={classNames(cls.EmployeeMetrics, {}, [className])}
    >
      <PersonalMetricsChart employeeId={employeeId} />
    </Card>
  );
};
