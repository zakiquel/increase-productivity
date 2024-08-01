import { classNames } from '@repo/shared/lib';
import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';

import { Employee } from '../../model/types/employee';
import { EmployeeCard } from '../EmployeeCard/EmployeeCard';

import { getRouteEmployee } from '@/shared/const/router';

import cls from './EmployeeList.module.scss';

interface EmployeeListProps {
  employees: Employee[];
  className?: string;
  FireEmployeeComponent: React.ComponentType<{
    id: number;
    className?: string;
  }>;
}

export const EmployeeList = memo((props: EmployeeListProps) => {
  const { employees, className, FireEmployeeComponent } = props;
  const navigate = useNavigate();

  const handleClick = (id: number) => {
    navigate(getRouteEmployee(String(id)));
  };

  return (
    <ul className={classNames(cls.EmployeeList, {}, [className])}>
      {employees.map((employee) => (
        <li key={employee.id}>
          <EmployeeCard
            employee={employee}
            standard={34}
            onCardClick={handleClick}
            FireEmployeeComponent={FireEmployeeComponent}
          />
        </li>
      ))}
    </ul>
  );
});
