import { classNames } from '@repo/shared/lib';
import { Button, Card, Icon, Input, Text } from '@repo/shared/ui';
import { memo, useState } from 'react';

import { Employee, EmployeeList } from '@/entities/Employee';
import { AddEmployeeDrawer } from '@/features/AddEmployee';
import { SortEmployees } from '@/features/SortEmployees';
import Search from '@/shared/assets/icons/search.svg';

import cls from './EmployeesSection.module.scss';

interface EmployeesSectionProps {
  className?: string;
  employees: Employee[];
}

const employees: Employee[] = [
  {
    id: 1,
    personalInfo: {
      firstName: 'Петр',
      lastName: 'Петров',
      position: 'UX/UI дизайнер',
      hiring: new Date('2017-03-15'),
    },
    values: {
      standard: 70,
    },
  },
  {
    id: 2,
    personalInfo: {
      firstName: 'Петр',
      lastName: 'Иванов',
      position: 'UX/UI дизайнер',
      hiring: new Date('2015-03-15'),
    },
    values: {
      standard: 45,
    },
  },
  {
    id: 3,
    personalInfo: {
      firstName: 'Пётр',
      lastName: 'Сидоров',
      position: 'UX/UI дизайнер',
      hiring: new Date('2022-11-04'),
    },
    values: {
      standard: 20,
    },
  },
  {
    id: 4,
    personalInfo: {
      firstName: 'Петр',
      lastName: 'Пушкин',
      position: 'UX/UI дизайнер',
      hiring: new Date('2021-04-15'),
    },
    values: {
      standard: 90,
    },
  },
  {
    id: 5,
    personalInfo: {
      firstName: 'Петр',
      lastName: 'Потапов',
      position: 'UX/UI дизайнер',
      hiring: new Date('2017-03-14'),
    },
    values: {
      standard: 100,
    },
  },
  {
    id: 6,
    personalInfo: {
      firstName: 'Петр',
      lastName: 'Круглов',
      position: 'UX/UI дизайнер',
      hiring: new Date('2024-06-15'),
    },
  },
];

export const EmployeesSection = memo((props: EmployeesSectionProps) => {
  const { className, employees } = props;
  const [sortedEmployees, setSortedEmployees] = useState<Employee[]>(employees);
  const [isAddEmployee, setIsAddEmployee] = useState(false);
  const disabled = !employees.length;
  return (
    <section className={classNames(cls.EmployeesSection, {}, [className])}>
      <Card
        variant="light"
        padding="16"
        className={classNames(cls.employee_control, {}, [className])}
      >
        <Input
          disabled={disabled}
          placeholder="Найти сотрудника"
          addonLeft={<Icon Svg={Search} width={18} height={18} />}
          size="l"
          className={cls.control_search}
        />
        <SortEmployees
          employees={employees}
          onSorted={setSortedEmployees}
          disabled={disabled}
        />
        <Button
          variant="secondary"
          size="m"
          className={cls.control_button}
          onClick={() => setIsAddEmployee(true)}
        >
          Добавить сотрудника
        </Button>
      </Card>
      {disabled ? (
        <div className={cls.start_layout}>
          <Card variant="light" padding="16">
            <Text title="Сотрудники " size="s" className={cls.start_title} />
            <Text
              text="Добавь сотрудников и после заполнения раздела «Ценности и Метрики»,
             мы сможем выводить информацию по каждому сотруднику"
              size="m"
            />
            <Button
              size="s"
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
