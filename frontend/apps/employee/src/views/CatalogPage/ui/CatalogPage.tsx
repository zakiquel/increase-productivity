'use client';

import { SegmentedControl } from '@repo/shared/ui';
import { memo, useState } from 'react';

import products from '../model/data/tempData.json';
import items from '../model/data/tempDataHistory.json';

import { HistoryItem, ProductItem } from '@/entities/Product';
import { Page } from '@/widgets/Page';

import cls from './CatalogPage.module.scss';

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

const CatalogPage = () => {
  const [isActive, setActive] = useState('products');

  const getSection = () => {
    switch (isActive) {
      case 'products':
        return (
          <div className={cls.page}>
            {products.map((product, index) => (
              <ProductItem key={index} {...product} />
            ))}
          </div>
        );
      case 'history':
        return (
          <div className={cls.History}>
            {items.map((item, index) => (
              <HistoryItem key={index} {...item} />
            ))}
          </div>
        );

      default:
        break;
    }
    return false;
  };
  return (
    <Page>
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
    </Page>
  );
};

export default memo(CatalogPage);
