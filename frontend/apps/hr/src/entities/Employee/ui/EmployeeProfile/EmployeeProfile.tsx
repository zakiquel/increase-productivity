import { classNames } from '@repo/shared/lib';
import { Card, Input, SegmentedControl, Text } from '@repo/shared/ui';
import React, { useCallback, useState } from 'react';

import { Employee } from '../../model/types/employee';

import cls from './EployeeProfile.module.scss';

interface EmployeeProfileProps {
  data?: Employee;
  className?: string;
}

const segments = [
  { value: 'working', label: 'Трудоустроен' },
  { value: 'fired', label: 'Уволен' },
];

export const EmployeeProfile = (props: EmployeeProfileProps) => {
  const { data, className } = props;

  const [editing, setEditing] = useState<boolean>(true);
  const [firstname, setFirstname] = useState<string>('');
  const [patronymic, setPatronymic] = useState<string>('');
  const [lastname, setLastname] = useState<string>('');
  const [position, setPosition] = useState<string>('');
  const [salary, setSalary] = useState<string>('');
  const [birth, setBirth] = useState<string>('');
  const [hiring, setHiring] = useState<string>('');

  const onEdit = () => {
    setEditing(true);
  };

  const cancelEdit = () => {
    setEditing(false);
  };

  const onChangeFirstname = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFirstname(event.target.value || '');
    },
    [],
  );

  const onChangePatronymic = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setPatronymic(event.target.value || '');
    },
    [],
  );

  const onChangeLastname = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setLastname(event.target.value || '');
    },
    [],
  );

  const onChangePosition = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setPosition(event.target.value || '');
    },
    [],
  );

  const onChangeSalary = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setBirth(event.target.value || '');
    },
    [],
  );

  const onChangeDateOfBirth = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setHiring(event.target.value || '');
    },
    [],
  );

  const onChangeHiring = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setHiring(event.target.value || '');
    },
    [],
  );

  if (!data) {
    return null;
  }

  return (
    <Card
      variant="light"
      padding="16"
      className={classNames(cls.EmployeeProfile, {}, [className])}
    >
      <Text title="Личные данные сотрудника" size="xs" bold />
      <form className={cls.inputs}>
        <div className={cls.name_patronymic}>
          <Input value={data.first_name} onChange={onChangeFirstname} />
          <Input value={data.middle_name} onChange={onChangePatronymic} />
        </div>
        <Input value={data.last_name} onChange={onChangeLastname} />
        <Input value={data.birth_date} onChange={onChangeDateOfBirth} />
        <Input value={data.email} disabled />
        <Input value={data.position} onChange={onChangePosition} />
        <Input value={data.salary} onChange={onChangeSalary} />
        <Input
          value={data.date_of_hiring}
          onChange={onChangeHiring}
          label="Дата трудоустройства"
        />
      </form>
      <SegmentedControl
        name="status"
        className={cls.control}
        segments={segments}
        callback={() => {}}
        defaultIndex={1}
      />
    </Card>
  );
};
