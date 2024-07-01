import { classNames } from "@repo/shared/lib";
import { memo } from 'react';

import { Page } from '@/widgets/Page';

interface AnalyticsPageProps {
  className?: string;
}

const AnalyticsPage = (props: AnalyticsPageProps) => {
  const {
    className,
  } = props;
  return (
    <Page className={classNames('', {}, [className])}>
      AnalyticsPage
    </Page>
  );
};

export default memo(AnalyticsPage);