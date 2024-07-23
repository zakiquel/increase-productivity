import { ProductItem } from '../..';
import { Product } from '../../model/types/historyItem';

import cls from './ProductItemList.module.scss';

interface IProductItemList {
  products: Product[];
  onProduct: (arg: Product) => void;
  onOpen: (arg: boolean) => void;
}

export const ProductItemList = (props: IProductItemList) => {
  const { products, onProduct, onOpen } = props;
  return (
    <div className={cls.page}>
      {products.map((product, index) => (
        <ProductItem
          key={index}
          product={product}
          onOpen={onOpen}
          onProduct={onProduct}
        />
      ))}
    </div>
  );
};
