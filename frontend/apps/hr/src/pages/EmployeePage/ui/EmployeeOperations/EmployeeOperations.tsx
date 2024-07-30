import { Card, Text } from '@repo/shared/ui';
import { memo } from 'react';

import { Transaction } from '../../../../entities/Employee/model/types/employee';

import cls from './EmployeeOperations.module.scss';

interface EmployeeOperationsProps {
  transactions?: Transaction[];
}

export const EmployeeOperations = memo((props: EmployeeOperationsProps) => {
  const { transactions } = props;
  return (
    <Card className={cls.EmployeeOperations} variant="light" padding="16">
      <Text text="История операций" bold />
      <div className={cls.title}>
        <Text text="Описание" variant="grey" size="s" />
        <Text text="Дата" variant="grey" size="s" />
        <Text text="Статус" variant="grey" size="s" />
      </div>
      {transactions && (
        <ul>
          {transactions.map((transaction) => (
            <li className={cls.transaction} key={transaction.date}>
              <Text text="Покупка сертификата OZON" size="s" bold />
              <Text text={transaction.date} size="s" bold />
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
});
