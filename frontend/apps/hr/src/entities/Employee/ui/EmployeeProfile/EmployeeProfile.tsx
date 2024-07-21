import { Button, Card, Input, SegmentedControl, Text } from '@repo/shared/ui';
import React, { useCallback, useState } from 'react';

import { PersonalInfo } from '../../model/types/employee';

import cls from './EployeeProfile.module.scss';

interface EmployeeProfileProps {
  data: PersonalInfo;
}

const segments = [
  { value: 'working', label: 'Работает' },
  { value: 'fired', label: 'Уволен' },
];

export const EmployeeProfile = (props: EmployeeProfileProps) => {
  const { data } = props;

  const [editing, setEditing] = useState<boolean>(false);
  const [firstname, setFirstname] = useState<string>('Антон');
  const [patronymic, setPatronymic] = useState<string>('Андреевич');
  const [lastname, setLastname] = useState<string>('Пастухов');
  const [position, setPosition] = useState<string>('Дизайнер');
  const [salary, setSalary] = useState<string>('50 000 руб.');
  const [birth, setBirth] = useState<string>('16.01.2002');
  const [hiring, setHiring] = useState<string>('17.01.2002');

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

  return (
    <Card variant="light" padding="16" className={cls.EmployeeProfile}>
      <Text text="Личные данные сотрудника" />
      <form className={cls.inputs}>
        <Input
          readonly={!editing}
          value={firstname}
          onChange={onChangeFirstname}
        />
        <Input
          readonly={!editing}
          value={patronymic}
          onChange={onChangePatronymic}
        />
        <Input
          readonly={!editing}
          value={lastname}
          onChange={onChangeLastname}
        />
        <Input
          readonly={!editing}
          value={birth}
          onChange={onChangeDateOfBirth}
        />
        <Input
          readonly={!editing}
          value={position}
          onChange={onChangePosition}
        />
        <Input readonly={!editing} value={salary} onChange={onChangeSalary} />
        <Input readonly={!editing} value={hiring} onChange={onChangeHiring} />
      </form>
      <SegmentedControl
        name="status"
        segments={segments}
        callback={() => {}}
        defaultIndex={1}
        disabled={!editing}
      />
      <Text
        text="Статус «Работает/Уволен» влияет на текучесть кадров.
            При удалении сотрудник не включается в статистику"
        variant="grey"
        size="s"
        className={cls.status_text}
      />
      <div className={cls.btns}>
        <Button variant="secondary" onClick={onEdit} className={cls.edit_btn}>
          Редактировать
        </Button>
        {editing && (
          <Button variant="exit" onClick={cancelEdit} className={cls.edit_btn}>
            Отменить
          </Button>
        )}
      </div>
    </Card>
  );
};
