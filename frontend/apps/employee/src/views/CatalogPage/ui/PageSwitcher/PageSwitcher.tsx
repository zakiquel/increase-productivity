import { SegmentedControl } from '@repo/shared/ui';
import { useState } from 'react';

import { HistoryItemInfiniteList } from '../HistoryItemInfiniteList/HistoryItemInfiniteList';
import { ProductInfiniteList } from '../ProductInfiniteList/ProductInfiniteList';

import { Product } from '@/entities/Product';

import cls from './PageSwitcher.module.scss';

const Segments = [
  {
    value: 'products',
    label: 'Товары',
  },
  {
    value: 'history',
    label: 'История',
  },
];

interface IPageSwitcer {
  onProduct: (ard: Product) => void;
  onOpen: (ard: boolean) => void;
}

export const PageSwitcher = (props: IPageSwitcer) => {
  const { onProduct, onOpen } = props;
  const [isActive, setActive] = useState('products');

  const getSection = () => {
    switch (isActive) {
      case 'products':
        return <ProductInfiniteList onOpen={onOpen} onProduct={onProduct} />;
      case 'history':
        return <HistoryItemInfiniteList />;

      default:
        break;
    }
    return false;
  };
  return (
    <>
      <nav className={cls.nav}>
        <SegmentedControl
          name="catalog"
          segments={Segments}
          callback={(value) => setActive(value)}
          size="xs"
          defaultIndex={0}
        />
      </nav>

      {getSection()}
    </>
  );
};
