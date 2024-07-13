import { classNames } from '@repo/shared/lib';
import { memo } from 'react';

import { Page } from '@/widgets/Page';

interface CatalogPageProps {
  className?: string;
}

const CatalogPage = (props: CatalogPageProps) => {
  const { className } = props;

  return <Page className={classNames('', {}, [className])}>CatalogPage</Page>;
};

export default memo(CatalogPage);
