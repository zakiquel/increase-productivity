import { Input, SegmentedControl } from '@repo/shared/ui';
import React, { memo, useState } from 'react';

import { Employee } from '@/entities/Employee';

import cls from './SortEmployees.module.scss';

const segments = [
  { value: 'byLastName', label: 'По фамилии' },
  { value: 'byPosition', label: 'По должности' },
  { value: 'byDate', label: 'По дате добавления' },
];

interface SortEmployeesProps {
  employees: Employee[];
  onFilter: (filteredEmployees: Employee[]) => void;
}

export const SortEmployees = memo((props: SortEmployeesProps) => {
  const { employees, onFilter } = props;
  const [sortedEmployees, setSortedEmployees] = useState<Employee[]>(employees);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const searchFunction = (employee: Employee) =>
    employee.last_name.toLowerCase().startsWith(searchTerm.toLowerCase());

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = sortedEmployees.filter(searchFunction);
    onFilter(result);
  };

  const handleSortChange = (method: string) => {
    let sorted: Employee[];
    switch (method) {
      case 'byDate':
        sorted = [...employees].sort(
          (a, b) =>
            new Date(b.date_of_hiring).getTime() -
            new Date(a.date_of_hiring).getTime(),
        );
        break;
      case 'byPosition':
        sorted = [...employees].sort((a, b) =>
          a.position.localeCompare(b.position),
        );
        break;
      case 'byLastName':
        sorted = [...employees].sort((a, b) =>
          a.last_name.localeCompare(b.last_name),
        );
        break;
      default:
        sorted = [...employees];
        break;
    }
    sorted.sort((a, b) => {
      if (a.status === 'working' && b.status === 'fired') return -1;
      if (a.status === 'fired' && b.status === 'working') return 1;
      return 0;
    });
    setSortedEmployees(sorted);
    const result = sorted.filter(searchFunction);
    onFilter(result);
  };

  return (
    <>
      <form onSubmit={handleSearch}>
        <Input
          className={cls.search}
          placeholder="Найти сотрудника"
          addonLeft={<span className="material-symbols-outlined">search</span>}
          size="m"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </form>
      <SegmentedControl
        name="sort"
        size="l"
        segments={segments}
        callback={handleSortChange}
        defaultIndex={0}
      />
    </>
  );
});
