import { classNames } from '@repo/shared/lib';
import { Card } from '@repo/shared/ui';

import { PersonalRiskChart } from '@/entities/Diagrams';

import cls from './EmployeeRisks.module.scss';

interface EmployeeRisksProps {
  className?: string;
}

export const EmployeeRisks = (props: EmployeeRisksProps) => {
  const { className } = props;

  return (
    <Card
      variant="light"
      padding="16"
      className={classNames(cls.diagram_card, {}, [className])}
    >
      <PersonalRiskChart />
    </Card>
  );
};
