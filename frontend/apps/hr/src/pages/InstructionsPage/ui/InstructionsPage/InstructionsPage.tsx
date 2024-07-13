import { classNames } from '@repo/shared/lib';
import { memo } from 'react';

import { Page } from '@/widgets/Page';

interface InstructionsPageProps {
  className?: string;
}

const InstructionsPage = (props: InstructionsPageProps) => {
  const { className } = props;
  return (
    <Page className={classNames('', {}, [className])}>InstructionsPage</Page>
  );
};

export default memo(InstructionsPage);
