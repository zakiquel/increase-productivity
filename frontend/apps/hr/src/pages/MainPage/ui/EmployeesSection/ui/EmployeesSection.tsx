import { classNames } from '@repo/shared/lib';
import { Button, Card, Text } from '@repo/shared/ui';
import { memo, useState } from 'react';

import { Employee, EmployeeList, fetchEmployees } from '@/entities/Employee';
import { AddEmployeeDrawer } from '@/features/AddEmployee';
import { Pagination } from '@/features/Pagination';
import { SortEmployees } from '@/features/SortEmployees';

import cls from './EmployeesSection.module.scss';

interface EmployeesSectionProps {
  className?: string;
}

export const EmployeesSection = memo((props: EmployeesSectionProps) => {
  const { className } = props;
  const { isLoading, data: response, error } = fetchEmployees('');
  const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>([]);
  const [employeesToDraw, setEmployeesToDraw] = useState<Employee[]>([]);
  const [isAddEmployee, setIsAddEmployee] = useState(false);

  if (!response || !response.data) {
    return (
      <div className={cls.start_layout}>
        <Card variant="light" padding="16">
          <Text title="Сотрудники" size="s" className={cls.start_title} />
          <Text
            text="Добавь сотрудников и после заполнения раздела «Ценности и Метрики»,
             мы сможем выводить информацию по каждому сотруднику"
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
    );
  }

  return (
    <section className={classNames(cls.EmployeesSection, {}, [className])}>
      <Card
        variant="light"
        padding="16"
        className={classNames(cls.employee_control, {}, [className])}
      >
        <SortEmployees
          employees={response.data}
          onFilter={setFilteredEmployees}
        />
        <Button
          variant="primary"
          className={cls.control_button}
          onClick={() => setIsAddEmployee(true)}
        >
          Добавить сотрудника
        </Button>
      </Card>
      <Card variant="light" padding="0" className={cls.employees_list}>
        <div className={cls.employees_header}>
          <span>ФИО</span>
          <span>Должность</span>
          <span>Рейтинг ценностей</span>
        </div>
        <EmployeeList employees={employeesToDraw} />

        <Pagination
          list={filteredEmployees}
          interval={15}
          callback={setEmployeesToDraw}
          className={cls.employees_pagination}
        />
      </Card>

      <AddEmployeeDrawer
        isOpen={isAddEmployee}
        onClose={() => setIsAddEmployee(false)}
      />
    </section>
  );
});
