import { classNames } from '@repo/shared/lib';
import { Button, Card } from '@repo/shared/ui';
import { memo, useState } from 'react';

import { Employee, EmployeeList } from '@/entities/Employee';
import { AddEmployeeDrawer } from '@/features/AddEmployee';
import { Pagination } from '@/features/Pagination';
import { SortEmployees } from '@/features/SortEmployees';

import cls from './EmployeesSection.module.scss';

interface EmployeesSectionProps {
  className?: string;
}

const employees: Employee[] = [
  {
    id: 1,
    first_name: 'Петр',
    last_name: 'Петров',
    position: 'UX/UI дизайнер',
    status: 'working',
    date_of_hiring: '2017-03-15',
    email: '',
    company_id: 1,
    imgSrc: '',
    salary: 1,
    birth_date: '',
    work_experience: 1,
    balance: '',
  },
  {
    id: 2,
    first_name: 'Петр',
    last_name: 'Иванов',
    position: 'UX/UI дизайнер',
    status: 'working',
    date_of_hiring: '2015-03-15',
    email: '',
    company_id: 1,
    imgSrc: '',
    salary: 1,
    birth_date: '',
    work_experience: 1,
    balance: '',
  },
  {
    id: 3,
    first_name: 'Пётр',
    last_name: 'Сидоров',
    position: 'UX/UI дизайнер',
    status: 'working',
    date_of_hiring: '2022-11-04',
    email: '',
    company_id: 1,
    imgSrc: '',
    salary: 1,
    birth_date: '',
    work_experience: 1,
    balance: '',
  },
  {
    id: 4,
    first_name: 'Пётр',
    last_name: 'Пушкин',
    position: 'Дизайнер',
    status: 'fired',
    date_of_hiring: '2021-04-15',
    email: '',
    company_id: 1,
    imgSrc: '',
    salary: 1,
    birth_date: '',
    work_experience: 1,
    balance: '',
  },
  {
    id: 5,
    first_name: 'Петр',
    last_name: 'Потапов',
    position: 'Тестировщик',
    status: 'working',
    date_of_hiring: '2017-03-14',
    email: '',
    company_id: 1,
    imgSrc: '',
    salary: 1,
    birth_date: '',
    work_experience: 1,
    balance: '',
  },
  {
    id: 6,
    first_name: 'Петр',
    last_name: 'Круглов',
    position: 'Менеджер',
    status: 'fired',
    date_of_hiring: '2024-06-15',
    email: '',
    company_id: 1,
    imgSrc: '',
    salary: 1,
    birth_date: '',
    work_experience: 1,
    balance: '',
  },
  {
    id: 7,
    first_name: 'Ильнура',
    last_name: 'Кашафутдинова ',
    position: 'PM',
    status: 'working',
    date_of_hiring: '2024-04-15',
    email: '',
    company_id: 1,
    imgSrc: '',
    salary: 1,
    birth_date: '',
    work_experience: 1,
    balance: '',
  },
  {
    id: 8,
    first_name: 'Мария',
    last_name: 'Матвеева',
    middle_name: 'Александровна',
    position: 'Системный аналитик',
    status: 'working',
    date_of_hiring: '2024-04-15',
    email: '',
    company_id: 1,
    imgSrc: '',
    salary: 1,
    birth_date: '',
    work_experience: 1,
    balance: '',
  },
  {
    id: 9,
    first_name: 'Вячеслав',
    last_name: 'Трубицын',
    middle_name: 'Владимирович',
    position: 'Системный аналитик',
    status: 'working',
    date_of_hiring: '2024-04-15',
    email: '',
    company_id: 1,
    imgSrc: '',
    salary: 1,
    birth_date: '',
    work_experience: 1,
    balance: '',
  },
  {
    id: 10,
    first_name: 'Антон',
    last_name: 'Пастухов',
    middle_name: 'Андреевич',
    position: 'Дизайнер UX/UI',
    status: 'working',
    date_of_hiring: '2024-04-15',
    email: '',
    company_id: 1,
    imgSrc: '',
    salary: 1,
    birth_date: '',
    work_experience: 1,
    balance: '',
  },
  {
    id: 11,
    first_name: 'Ангелина',
    last_name: 'Шагивалиева',
    middle_name: 'Олеговна',
    position: 'Дизайнер UX/UI',
    status: 'working',
    date_of_hiring: '2024-04-15',
    email: '',
    company_id: 1,
    imgSrc: '',
    salary: 1,
    birth_date: '',
    work_experience: 1,
    balance: '',
  },
  {
    id: 12,
    first_name: 'Алексей',
    last_name: 'Абросимов',
    middle_name: 'Олегович',
    position: 'Backend разработчик',
    status: 'working',
    date_of_hiring: '2024-04-15',
    email: '',
    company_id: 1,
    imgSrc: '',
    salary: 1,
    birth_date: '',
    work_experience: 1,
    balance: '',
  },
  {
    id: 13,
    first_name: 'Кирилл',
    last_name: 'Завалишин',
    middle_name: 'Дмитриевич',
    position: 'Frontend разработчик',
    status: 'working',
    date_of_hiring: '2024-04-15',
    email: '',
    company_id: 1,
    imgSrc: '',
    salary: 1,
    birth_date: '',
    work_experience: 1,
    balance: '',
  },
  {
    id: 14,
    first_name: 'Мария',
    last_name: 'Пенькова',
    middle_name: 'Даниловна',
    position: 'Frontend разработчик',
    status: 'working',
    date_of_hiring: '2024-04-15',
    email: '',
    company_id: 1,
    imgSrc: '',
    salary: 1,
    birth_date: '',
    work_experience: 1,
    balance: '',
  },
  {
    id: 15,
    first_name: 'Юлия',
    last_name: 'Ярлыкова',
    middle_name: 'Алексеевна',
    position: 'Frontend разработчик',
    status: 'working',
    date_of_hiring: '2024-04-15',
    email: '',
    company_id: 1,
    imgSrc: '',
    salary: 1,
    birth_date: '',
    work_experience: 1,
    balance: '',
  },
  {
    id: 16,
    first_name: 'Айнур',
    last_name: 'Ярулин',
    middle_name: 'Дамирович',
    position: 'Frontend разработчик',
    status: 'working',
    date_of_hiring: '2024-04-15',
    email: '',
    company_id: 1,
    imgSrc: '',
    salary: 1,
    birth_date: '',
    work_experience: 1,
    balance: '',
  },
  {
    id: 17,
    first_name: 'Кирилл',
    last_name: 'Кузнецов',
    middle_name: 'Дмитриевич',
    position: 'Тестировщик',
    status: 'working',
    date_of_hiring: '2024-04-15',
    email: '',
    company_id: 1,
    imgSrc: '',
    salary: 1,
    birth_date: '',
    work_experience: 1,
    balance: '',
  },
  {
    id: 18,
    first_name: 'Ольга',
    last_name: 'Киселева',
    position: 'Тестировщик',
    status: 'working',
    date_of_hiring: '2024-04-15',
    email: '',
    company_id: 1,
    imgSrc: '',
    salary: 1,
    birth_date: '',
    work_experience: 1,
    balance: '',
  },
];

export const EmployeesSection = memo((props: EmployeesSectionProps) => {
  const { className } = props;
  const [filteredEmployees, setFilteredEmployees] =
    useState<Employee[]>(employees);
  const [employeesToDraw, setEmployeesToDraw] = useState<Employee[]>(employees);
  const [isAddEmployee, setIsAddEmployee] = useState(false);

  return (
    <section className={classNames(cls.EmployeesSection, {}, [className])}>
      <Card
        variant="light"
        padding="16"
        className={classNames(cls.employee_control, {}, [className])}
      >
        <SortEmployees employees={employees} onFilter={setFilteredEmployees} />
        <Button
          variant="primary"
          size="m"
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
