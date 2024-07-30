import { Card } from '@repo/shared/ui';

import { PersonalRiskChart } from '@/entities/Diagrams';

interface EmployeeRisksProps {
  className?: string;
}

export const EmployeeRisks = (props: EmployeeRisksProps) => {
  const { className } = props;

  return (
    <Card variant="light" padding="16">
      <PersonalRiskChart />
    </Card>
  );
};
