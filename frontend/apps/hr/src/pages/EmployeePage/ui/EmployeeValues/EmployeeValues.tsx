import { Card, Text } from '@repo/shared/ui';
import { memo } from 'react';

import cls from './EmployeeValues.module.scss';

interface EmployeeValuesProps {}

export const EmployeeValues = memo((props: EmployeeValuesProps) => (
  <section className={cls.EmployeeValues}>
    <Card variant="light" padding="16">
      <Text text="Показатели ценностей сотрудника" />
    </Card>
    <div className={cls.values_risks}>
      <Card variant="light" padding="16">
        <Text text="Общий показатель" size="s" variant="grey" />
        <canvas id="chart" className={cls.canvas} />
      </Card>
      <Card variant="light" padding="16">
        <Text text="Риски" size="s" variant="grey" />
      </Card>
    </div>
  </section>
));
