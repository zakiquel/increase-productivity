import { classNames, Mods } from '@repo/shared/lib';
import { Button, ProgressBar } from '@repo/shared/ui';
import { memo } from 'react';

import { Employee } from '../../model/types/employee';

import cls from './EmployeeCard.module.scss';

export interface EmployeeCardProps {
  employee: Employee;
  standard?: number;
  onCardClick?: (id: number) => void;
  FireEmployeeComponent?: React.ComponentType<{
    id: number;
    className?: string;
  }>;
  simple?: boolean;
}

export const EmployeeCard = memo((props: EmployeeCardProps) => {
  const {
    employee,
    standard,
    onCardClick = () => {},
    FireEmployeeComponent,
    simple = false,
  } = props;
  const disabled = employee.status === 'fired';

  let name = `${employee.last_name} ${employee.first_name}`;
  if (employee.middle_name) name += ` ${employee.middle_name}`;

  const mods: Mods = {
    [cls.disabled]: disabled,
  };

  if (simple)
    return (
      <div
        className={classNames(cls.SimpleEmployeeCard, mods, [])}
        onClick={() => onCardClick(employee.id)}
      >
        <h4 className={cls.name}>{name}</h4>
        <p className={cls.employee_position}>{employee.position}</p>
      </div>
    );

  return (
    <div
      className={classNames(cls.EmployeeCard, mods, [])}
      onClick={() => onCardClick(employee.id)}
    >
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
      {!disabled && FireEmployeeComponent ? (
        <FireEmployeeComponent
          id={employee.id}
          className={classNames(cls.card_button, {}, [cls.fire_button])}
        />
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
