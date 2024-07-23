import product from '../../model/data/tempData.json';

import { ProductItemList, Product } from '@/entities/Product';

interface IProductInfiniteList {
  onProduct: (ard: Product) => void;
  onOpen: (ard: boolean) => void;
}

export const ProductInfiniteList = (props: IProductInfiniteList) => {
  const { onOpen, onProduct } = props;
  return (
    <ProductItemList products={product} onProduct={onProduct} onOpen={onOpen} />
  );
};
