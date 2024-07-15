import { memo } from 'react';

import products from '../model/data/tempData.json';

import { ProductItem } from '@/entities/ProductItem';
import { pathNames } from '@/shared/const/route';
import { Page } from '@/widgets/Page';
import { PageSidebar } from '@/widgets/PagesSidebar';

import cls from './CatalogPage.module.scss';



const CatalogPage = () => (
  <>
   
        <div className={cls.Products}>
          {products.map((product, index) => (
            <ProductItem key={index} {...product} />
          ))}
        </div>
    </>
);

export default memo(CatalogPage);
