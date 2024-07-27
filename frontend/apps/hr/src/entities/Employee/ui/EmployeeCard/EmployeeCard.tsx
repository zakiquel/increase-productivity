import { classNames, Mods } from '@repo/shared/lib';
import { Button, ProgressBar } from '@repo/shared/ui';
import { memo } from 'react';

import { Employee } from '../../model/types/employee';

import cls from './EmployeeCard.module.scss';

export interface EmployeeCardProps {
  employee: Employee;
  standard?: number;
}

export const EmployeeCard = memo((props: EmployeeCardProps) => {
  const { employee, standard } = props;
  const disabled = employee.status === 'fired';

  let name = `${employee.last_name} ${employee.first_name}`;
  if (employee.middle_name) name += ` ${employee.middle_name}`;

  const mods: Mods = {
    [cls.disabled]: disabled,
  };

  return (
    <div className={classNames(cls.EmployeeCard, mods, [])}>
      <h4 className={cls.employee_name}>{name}</h4>
      <p className={cls.employee_position}>{employee.position}</p>
      {standard ? (
        <div className={cls.employee_stat}>
          <span className={cls.stat_text}>{`${standard}%`}</span>
          <ProgressBar size={standard} disabled={disabled} />
        </div>
      ) : (
        <span className={cls.stat_text}>Данные отсутствуют</span>
      )}
      {!disabled ? (
        <Button
          size="xs"
          variant="ghost"
          className={classNames(cls.card_button, {}, [cls.fire_button])}
        >
          Уволить
        </Button>
      ) : (
        <Button
          size="xs"
          variant="ghost"
          addonLeft={
            <span className="material-symbols-outlined">person_off</span>
          }
          disabled
        >
          Сотрудник уволен
        </Button>
      )}
    </div>
  );
});
