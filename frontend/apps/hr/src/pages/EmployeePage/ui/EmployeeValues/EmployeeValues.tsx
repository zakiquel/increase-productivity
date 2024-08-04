import { classNames } from '@repo/shared/lib';
import { Card } from '@repo/shared/ui';
import { memo } from 'react';

import { PersonalValuesChart } from '@/entities/Diagrams';

import cls from './EmployeeValues.module.scss';

interface EmployeeValuesProps {
  className?: string;
}

export const EmployeeValues = memo(({ className }: EmployeeValuesProps) => (
  <Card
    variant="light"
    padding="16"
    className={classNames(cls.diagram_card, {}, [className])}
  >
    <PersonalValuesChart />
  </Card>
));
