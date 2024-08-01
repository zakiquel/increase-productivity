import { classNames } from '@repo/shared/lib';
import { memo } from 'react';

import { EmployeeBalance } from '../EmployeeBalance/EmployeeBalance';

import { Employee, EmployeeProfile, EmployeeRating } from '@/entities/Employee';
import { DownloadEmployeeReportButton } from '@/features/DownloadEmployeeReportButton';

import cls from './EmployeeInfo.module.scss';

interface EmployeeInfoProps {
  className?: string;
  employee: Employee;
}

export const EmployeeInfo = memo((props: EmployeeInfoProps) => {
  const { className, employee } = props;

  return (
    <section className={classNames(cls.EmployeeInfo, {}, [className])}>
      <EmployeeProfile data={employee} className={cls.profile} />
      <DownloadEmployeeReportButton
        employee={employee.id}
        className={cls.report}
      />
      <EmployeeRating />
      <EmployeeBalance balance={employee.balance} />
    </section>
  );
});
