import { classNames } from '@repo/shared/lib';
import { memo } from 'react';

import { Page } from '@/widgets/Page';

interface EventsPageProps {
  className?: string;
}

const EventsPage = (props: EventsPageProps) => {
  const { className } = props;
  return <Page className={classNames('', {}, [className])}>EventsPage</Page>;
};

export default memo(EventsPage);
