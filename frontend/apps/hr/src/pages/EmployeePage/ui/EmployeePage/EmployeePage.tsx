import { classNames } from '@repo/shared/lib';
import { Skeleton, Text } from '@repo/shared/ui';
import { memo } from 'react';
import { useParams } from 'react-router-dom';

import { EmployeeDocuments } from '../EmployeeDocuments/EmployeeDocuments';
import { EmployeeEvents } from '../EmployeeEvents/EmployeeEvents';
import { EmployeeInfo } from '../EmployeeInfo/EmployeeInfo';
import { EmployeeMetrics } from '../EmployeeMetrics/EmployeeMetrics';
import { EmployeeNotes } from '../EmployeeNotes/EmployeeNotes';
import { EmployeeOperations } from '../EmployeeOperations/EmployeeOperations';
import { EmployeeRisks } from '../EmployeeRisks/EmployeeRisks';
import { EmployeeValues } from '../EmployeeValues/EmployeeValues';
import { EmployeeValuesList } from '../EmployeeValuesList/EmployeeValuesList';

import { fetchEmployeeById } from '@/entities/Employee';
import { Page } from '@/widgets/Page';

import cls from './EmployeePage.module.scss';

interface EmployeePageProps {
  className?: string;
}

const EmployeePage = (props: EmployeePageProps) => {
  const { className } = props;
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <Text title="Пользователь не найден" align="center" />;
  }

  const { data: response, isLoading, isError } = fetchEmployeeById(id);

  if (isLoading) {
    return (
      <Page className={classNames(cls.EmployeePage, {}, [className])}>
        <div className={cls.info}>
          <Skeleton
            width="100%"
            height="100%"
            border="4px"
            className={cls.profile}
          />
          <Skeleton width="100%" height="100%" border="4px" />
          <Skeleton width="100%" height="100%" border="4px" />
          <Skeleton width="100%" height="100%" border="4px" />
        </div>
        <Skeleton width="100%" height="100%" border="4px" />
        <Skeleton width="100%" height="100%" border="4px" />
        <Skeleton width="100%" height="100%" border="4px" />
      </Page>
    );
  }

  if (!response || isError) {
    return <Text title="Произошла ошибка при загрузке данных" align="center" />;
  }

  const employee = response.data;

  return (
    <Page className={classNames(cls.EmployeePage, {}, [className])}>
      <EmployeeInfo employee={employee} />
      <EmployeeRisks />
      <EmployeeValues employeeId={employee.id.toString()} />
      <EmployeeMetrics />
      <EmployeeValuesList employeeId={employee.id.toString()} />
      <EmployeeNotes employee={employee} />
      <EmployeeDocuments employee={employee} />
      <EmployeeOperations />
      <EmployeeEvents />
    </Page>
  );
};

export default memo(EmployeePage);
