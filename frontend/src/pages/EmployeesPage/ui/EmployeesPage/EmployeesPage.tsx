import { memo } from 'react';

import { classNames } from "@/shared/lib/classNames/classNames";
import { Page } from '@/widgets/Page';

interface EmployeesPageProps {
  className?: string;
}

const EmployeesPage = (props: EmployeesPageProps) => {
  const {
    className,
  } = props;
  return (
    <Page className={classNames('', {}, [className])}>
      EmployeesPage
    </Page>
  );
};

export default memo(EmployeesPage);
