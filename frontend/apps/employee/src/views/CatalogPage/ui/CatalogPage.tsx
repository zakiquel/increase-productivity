import { memo } from 'react';

import products from '../model/data/tempData.json';

import { ProductItem } from '@/entities/ProductItem';
import { pathNames } from '@/shared/const/route';
import { Page } from '@/widgets/Page';
import { PageSidebar } from '@/widgets/PagesSidebar';

import cls from './CatalogPage.module.scss';

const PageItems = pathNames.filter(
  (data) => data.value === 'История' || data.value === 'Товары',
);

const CatalogPage = () => (
  <Page className={cls.page}>
    {products.length !== 0 ? (
      <div className="">
        <PageSidebar items={PageItems} />
        <div className={cls.Products}>
          {products.map((product, index) => (
            <ProductItem key={index} {...product} />
          ))}
        </div>
      </div>
    ) : (
      <div className={cls.not}>Нет доступных товаров на данный момент.</div>
    )}
  </Page>
);

export default memo(CatalogPage);
