import { classNames } from '@repo/shared/lib';
import { Avatar, Button, Icon, ProgressBar } from '@repo/shared/ui';
import React from 'react';

import { EmployeeCardInfo } from '../../../model/types/employee';

import Cancel from '@/shared/assets/icons/cancel-default.svg';

import cls from './ShowEmployeeForm.module.scss';

export interface ShowEmployeeFormProps {
  employee: EmployeeCardInfo;
  onClose: () => void;
}

const ShowEmployeeForm = (props: ShowEmployeeFormProps) => {
  const { employee, onClose } = props;

  const getChangeClass = (change: number) => {
    if (change > 0) {
      return cls.positive;
    }
    if (change < 0) {
      return cls.negative;
    }
    return cls.zero;
  };

  return (
    <div className={classNames(cls.ShowEmployeeForm, {}, [])}>
      <div className={cls.form_header}>
        <Avatar src={employee.image} size={120} />
        <div className={cls.form_header_name}>
          <h2>{employee.name}</h2>
          <p>{employee.personRole}</p>
        </div>
        <Icon
          className={cls.close_button}
          Svg={Cancel}
          buttonHeight={56}
          buttonWidth={56}
          width={33}
          height={33}
          clickable
          onClick={onClose}
        />
      </div>
      <div className={cls.form_main}>
        <h3>Анализ метрик по сотруднику из документа «Метрики»</h3>
        <div className={cls.metrics}>
          <ul>
            {employee.metrics?.map((item) => (
              <li key={item.id}>
                <p>{item.name}</p>
                <div className={cls.metrics_stats}>
                  <ProgressBar size={item.value} />
                  <span className={cls.metrics_value}>{item.value}%</span>
                  <span
                    className={`${cls.metrics_change} ${getChangeClass(item.change)}`}
                  >
                    {item.change > 0 && '+'}
                    {item.change}%
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <p>Дата анализа</p>
      </div>
      <div className={cls.buttons}>
        <Button variant="primary">К сотруднику</Button>
        <Button variant="outline">Удалить</Button>
      </div>
    </div>
  );
};

export default ShowEmployeeForm;
