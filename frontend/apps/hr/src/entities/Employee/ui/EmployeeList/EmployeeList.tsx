import { classNames } from '@repo/shared/lib';
import { AppLink } from '@repo/shared/ui';
import React, { memo } from 'react';

import { Employee } from '../../model/types/employee';
import { EmployeeCard } from '../EmployeeCard/EmployeeCard';

import { getRouteEmployee } from '@/shared/const/router';

import cls from './EmployeeList.module.scss';

interface EmployeeListProps {
  employees: Employee[];
  className?: string;
}

export const EmployeeList = memo((props: EmployeeListProps) => {
  const { employees, className } = props;
  return (
    <ul className={classNames(cls.EmployeeList, {}, [className])}>
      {employees.map((employee) => (
        <li key={employee.id}>
          <AppLink to={getRouteEmployee(String(employee.id))}>
            <EmployeeCard
              id={employee.id}
              name={`${employee.personalInfo.firstName} ${employee.personalInfo.lastName}`}
              personRole={employee.personalInfo.position}
              standard={employee.values?.standard}
            />
          </AppLink>
        </li>
      ))}
    </ul>
  );
});
