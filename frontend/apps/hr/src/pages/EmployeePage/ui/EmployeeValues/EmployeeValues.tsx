import { Card, Text } from '@repo/shared/ui';
import { memo } from 'react';

import {
  PersonalMetricsChart,
  PersonalQualitiesChart,
  PersonalRiskChart,
  PersonalValuesChart,
} from '@/entities/Diagrams';

import cls from './EmployeeValues.module.scss';

interface EmployeeValuesProps {}

export const EmployeeValues = memo((props: EmployeeValuesProps) => (
  <section className={cls.EmployeeValues}>
    <Card variant="light" padding="16">
      <Text text="Показатели ценностей сотрудника" />
    </Card>
    <div className={cls.values_risks}>
      <Card variant="light" padding="16" className={cls.canvas_container}>
        <PersonalValuesChart />
      </Card>
      <Card variant="light" padding="16" className={cls.canvas_container}>
        <PersonalRiskChart />
      </Card>
      <Card variant="light" padding="16" className={cls.canvas_container}>
        <PersonalMetricsChart />
      </Card>

      {Array.from({ length: 11 }).map((_, index) => (
        <Card
          variant="light"
          padding="16"
          key={index}
          className={cls.canvas_container}
        >
          <PersonalQualitiesChart title={`Ценность ${index + 1}`} />
        </Card>
      ))}
    </div>
  </section>
));
