import { classNames, Mods } from '@repo/shared/lib';
import { Card, ProgressBar, Text } from '@repo/shared/ui';
import { memo } from 'react';

import cls from './EmployeeCard.module.scss';

export interface EmployeeCardProps {
  id: number;
  name: string;
  personRole: string;
  standard?: number;
  disabled?: boolean;
}

export const EmployeeCard = memo((props: EmployeeCardProps) => {
  const { id, name, personRole, standard, disabled } = props;

  const mods: Mods = {
    [cls.disabled]: disabled,
  };

  return (
    <Card
      variant="light"
      padding="24"
      className={classNames(cls.EmployeeCard, mods, [])}
    >
      <div className={cls.employee_info}>
        <h3>{name}</h3>
        <Text text={personRole} size="l" />
      </div>
      <div className={cls.standard_info}>
        {standard ? (
          <>
            <Text text={`Эталон ${standard}%`} size="l" align="center" />
            <ProgressBar size={standard} />
          </>
        ) : (
          <>
            <Text
              text={
                <>
                  Эталон 0%<span>(Нет информации)</span>
                </>
              }
              size="l"
              align="center"
            />
            <ProgressBar size={0} />
          </>
        )}
      </div>
    </Card>
  );
});
