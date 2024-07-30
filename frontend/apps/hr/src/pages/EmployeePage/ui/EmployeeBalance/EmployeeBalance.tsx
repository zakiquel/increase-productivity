import { Card, Input, Text } from '@repo/shared/ui';
import { memo } from 'react';

import cls from './EmployeeBalance.module.scss';

interface EmployeeBalanceProps {
  balance: string;
}

export const EmployeeBalance = memo((props: EmployeeBalanceProps) => {
  const { balance } = props;

  return (
    <Card padding="16" className={cls.EmployeeBalance} variant="light">
      <Text title="Баланс" size="xs" bold />
      <Input value={`${balance || 0} HR-коинов`} />
    </Card>
  );
});
