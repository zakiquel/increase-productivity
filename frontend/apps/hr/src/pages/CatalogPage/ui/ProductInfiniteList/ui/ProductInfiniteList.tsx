import products from '../model/data/tempData.json';

import { Product, ProductList } from '@/entities/Product';

interface ProductsListProps {
  setIsOpenForm: (value: boolean) => void;
  setActiveProduct: (value: Product) => void;
  setIsModalOpen: (value: boolean) => void;
}

export const ProductInfiniteList = (props: ProductsListProps) => {
  const { setActiveProduct, setIsModalOpen, setIsOpenForm } = props;

  return (
    <ProductList
      products={products}
      setIsOpenForm={setIsOpenForm}
      setActiveProduct={setActiveProduct}
      setIsModalOpen={setIsModalOpen}
    />
  );
};
