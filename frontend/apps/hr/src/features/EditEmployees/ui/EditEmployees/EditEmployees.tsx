import { classNames } from '@repo/shared/lib';
import { Button, Card } from '@repo/shared/ui';
import React, { memo, useState } from 'react';

import { AddEmployeeModal } from '../AddEmployee/AddEmployeeModal/AddEmployeeModal';
import { SortEmployee } from '../SortEmployee/SortEmployee';


import cls from './EditEmployees.module.scss';


export const EditEmployees = memo(() => {
  const [isAddEmployee, setIsAddEmployee] = useState(false);

  return (
    <Card variant='light' border='normal' padding='32' className={classNames(cls.EditEmployees, {}, [])}>
      <div className={cls.employees_sort}>
        <span>Тут поиск</span>
        <SortEmployee />
      </div>
      <div className={cls.employee_button}>
        <Button
          onClick={() => setIsAddEmployee(true)}
        >
          Добавить сотрудника
        </Button>
      </div>
      {isAddEmployee && <AddEmployeeModal isOpen={isAddEmployee} onClose={() => setIsAddEmployee(false)} />}
    </Card>
  )
});