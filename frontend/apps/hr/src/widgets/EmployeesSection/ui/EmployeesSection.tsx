import { classNames } from '@repo/shared/lib';
import { Button, Card, Icon, Input, Text } from '@repo/shared/ui';
import { memo, useState } from 'react';

import { Employee, EmployeeList } from '@/entities/Employee';
import { AddEmployeeDrawer } from '@/features/AddEmployee';
import { SortEmployees } from '@/features/SortEmployees';
import Search from '@/shared/assets/icons/search.svg';

import cls from './EmployeesSection.module.scss';

interface EmployesSectionProps {
  employees: Employee[];
  className?: string;
}

export const EmployeesSection = memo((props: EmployesSectionProps) => {
  const { employees, className } = props;
  const [sortedEmployees, setSortedEmployees] = useState<Employee[]>(employees);
  const [isAddEmployee, setIsAddEmployee] = useState(false);
  const disabled = employees.length === 0;
  return (
    <section className={classNames(cls.EmployeesSection, {}, [className])}>
      <Card
        variant='light'
        padding='16'
        className={classNames(cls.employee_control, {}, [className])}
      >
        <Input
          disabled={disabled}
          placeholder='Найти сотрудника'
          addonLeft={<Icon Svg={Search} width={18} height={18} />}
          size='l'
          className={cls.control_search}
        />
        <SortEmployees
          employees={employees}
          onSorted={setSortedEmployees}
          disabled={disabled}
        />
        <Button
          variant='secondary'
          size='m'
          className={cls.control_button}
          onClick={() => setIsAddEmployee(true)}
        >
          Добавить сотрудника
        </Button>
      </Card>
      {disabled ? (
        <div className={cls.start_layout}>
          <Card variant='light' padding='16'>
            <Text title='Сотрудники ' size='s' className={cls.start_title} />
            <Text
              text='Добавь сотрудников и после заполнения раздела «Ценности и Метрики»,
             мы сможем выводить информацию по каждому сотруднику'
              size='m'
            />
            <Button
              size='s'
              onClick={() => setIsAddEmployee(true)}
              className={cls.start_button}
            >
              Добавить сотрудника
            </Button>
          </Card>
        </div>
      ) : (
        <EmployeeList employees={sortedEmployees} />
      )}
      <AddEmployeeDrawer
        isOpen={isAddEmployee}
        onClose={() => setIsAddEmployee(false)}
      />
    </section>
  );
});
