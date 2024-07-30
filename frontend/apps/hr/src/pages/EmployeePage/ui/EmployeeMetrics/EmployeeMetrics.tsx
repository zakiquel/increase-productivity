import { Card } from '@repo/shared/ui';

import { PersonalMetricsChart } from '@/entities/Diagrams';

interface EmployeeMetricsProps {
  className?: string;
}

export const EmployeeMetrics = (props: EmployeeMetricsProps) => {
  const { className } = props;

  return (
    <Card variant="light" padding="16">
      <PersonalMetricsChart />
    </Card>
  );
};
