import { memo } from 'react';

import { classNames } from "@/shared/lib/classNames/classNames";
import { Page } from '@/widgets/Page';

interface CompanyPageProps {
  className?: string;
}

const CompanyPage = (props: CompanyPageProps) => {
  const {
    className,
  } = props;
  return (
    <Page className={classNames('', {}, [className])}>
      CompanyPage
    </Page>
  );
};

export default memo(CompanyPage);
