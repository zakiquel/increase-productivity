import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar';
import { Card } from '@/shared/ui/Card';
import { ProgressBar } from '@/shared/ui/ProgressBar';

import cls from './EmployeeCard.module.scss';

export interface EmployeeCardProps {
  id: number;
  name: string;
  personRole: string;
  image: string;
  standard: number;
}

export const EmployeeCard = memo((props: EmployeeCardProps) => {
  const {
    id,
    name,
    personRole,
    image,
    standard
  } = props;

  return (
    <Card
      variant='light'
      padding='32'
      className={classNames(cls.EmployeeCard, {}, [])}
    >
      <div className={cls.employee_info}>
        <Avatar src={image} size={80} />
        <h2>{name}</h2>
        <p>{personRole}</p>
      </div>
      <div className={cls.standard_info}>
        <p>Эталон {standard}%</p>
        <ProgressBar size={standard} />
      </div>
    </Card>
  );
});