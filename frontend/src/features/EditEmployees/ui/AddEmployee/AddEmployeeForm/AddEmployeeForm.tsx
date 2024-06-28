import React, { useState } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';
import { FormHeader } from '@/shared/ui/Form/FormHeader';
import { Input } from '@/shared/ui/Input';

import cls from './AddEmployeeForm.module.scss'

export interface AddEmployeeModalProps {
  onClose: () => void;
}

const AddEmployeeModal = (props: AddEmployeeModalProps) => {
  const { onClose } = props;

  const [name, setName] = useState<string>('');
  const [role, setRole] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className={classNames(cls.AddEmployeeModal, {}, [])}>
      <FormHeader
        title='Добавление сотрудника'
        onClose={onClose}
        className={cls.form_header}
      />
      <form onSubmit={handleSubmit}>
        <div className={cls.form_inputs}>
          <Input
            value={name}
            placeholder='Имя'
            onChange={event => setName(event.target.value)}
            size='s'
            autofocus
          />
          <Input
            value={role}
            placeholder='Роль'
            onChange={event => setRole(event.target.value)}
            size='s'
            autofocus
          />
        </div>
        <Button
          type='submit'
          disabled={name === '' || role === ''}
          className={cls.form_button}
          fullWidth
        >
          Добавить сотрудника
        </Button>
      </form>
    </div>
  )
}

export default AddEmployeeModal