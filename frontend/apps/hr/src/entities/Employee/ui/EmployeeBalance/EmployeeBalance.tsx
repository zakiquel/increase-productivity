import { Button, Card, Text } from '@repo/shared/ui';
import { memo } from 'react';

import cls from './EmployeeBalance.module.scss';

interface EmployeeBalanceProps {
  balance: number | undefined;
}

export const EmployeeBalance = memo((props: EmployeeBalanceProps) => {
  const { balance } = props;

  return (
    <Card padding="16" className={cls.EmployeeBalance} variant="light">
      <div className={cls.header}>
        <Text text="Баллы сотрудника" />
        <Button variant="secondary" size="xs">
          Редактировать
        </Button>
      </div>
      <Text text={`${balance || 0} баллов`} />
    </Card>
  );
});
