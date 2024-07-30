import { Card } from '@repo/shared/ui';
import { memo } from 'react';

import { PersonalValuesChart } from '@/entities/Diagrams';

import cls from './EmployeeValues.module.scss';

interface EmployeeValuesProps {}

export const EmployeeValues = memo((props: EmployeeValuesProps) => (
  <section className={cls.EmployeeValues}>
    <Card variant="light" padding="16" className={cls.canvas_container}>
      <PersonalValuesChart />
    </Card>
  </section>
));
