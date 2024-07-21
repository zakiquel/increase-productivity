import { Button, Icon } from '@repo/shared/ui';

import { Product, ProductItem } from '../..';

import plus from '@/shared/assets/icons/plus.svg';

import cls from './ProductList.module.scss';

interface ProductsListProps {
  products: Product[];
  setIsOpenForm: (value: boolean) => void;
  setActiveProduct: (value: Product) => void;
  setIsModalOpen: (value: boolean) => void;
}

export const ProductList = (props: ProductsListProps) => {
  const { products, setActiveProduct, setIsModalOpen, setIsOpenForm } = props;

  if (!products.length) {
    return (
      <div className={cls.empty}>
        Нет доступных товаров на данный момент.
        <Button
          onClick={() => setIsOpenForm(true)}
          addonLeft={<Icon Svg={plus} className={cls.icon} />}
          className={cls.btn}
        >
          Добавить товар
        </Button>
      </div>
    );
  }

  return (
    <div className={cls.wrapper}>
      {products?.map((data) => (
        <ProductItem
          product={data}
          setActiveProduct={setActiveProduct}
          setIsModalOpen={setIsModalOpen}
        />
      ))}
    </div>
  );
};
