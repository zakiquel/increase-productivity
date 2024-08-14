import { Button, Card } from '@repo/shared/ui';
import { useState } from 'react';

import { PersonalMetricsChart } from '@/entities/Diagrams';
import { AddMetricDrawer } from '@/features/AddMetric';

import cls from './EmployeeMetrics.module.scss';

interface EmployeeMetricsProps {
  className?: string;
}

export const EmployeeMetrics = (props: EmployeeMetricsProps) => {
  const { className } = props;
  const [isOpen, setOpen] = useState(false);

  return (
    <Card variant="light" padding="16" className={cls.EmployeeMetrics}>
      <div className={cls.wrapper}>
        <PersonalMetricsChart />
      </div>
      <Button size="s" className={cls.btn} onClick={() => setOpen(true)}>
        Внести данные по метрикам
      </Button>

      <AddMetricDrawer isOpen={isOpen} onClose={() => setOpen(false)} />
    </Card>
  );
};
