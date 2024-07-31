import { classNames } from '@repo/shared/lib';
import { AppImage, Card } from '@repo/shared/ui';

import { Product } from '../..';

import ozon from '@/shared/assets/images/ozon.png';

import cls from './ProductItem.module.scss';

interface ProductsListProps {
  className?: string;
  product: Product;
  setActiveProduct: (value: Product) => void;
  setIsModalOpen: (value: boolean) => void;
}

export const ProductItem = (props: ProductsListProps) => {
  const { className, product, setActiveProduct, setIsModalOpen } = props;

  return (
    <Card
      padding="0"
      variant="light"
      className={classNames(cls.ProductItem, {}, [className])}
      style={{ borderRadius: '8px' }}
      onClick={() => {
        setActiveProduct(product);
        setIsModalOpen(true);
      }}
    >
      <div className={cls.img_wrap}>
        <AppImage className={cls.img} src={ozon} alt={product.title} />
      </div>
      <h3 className={cls.title}>{product.title}</h3>
      <div className={cls.body}>
        <p className={cls.price}>{product.price} Б</p>
      </div>
    </Card>
  );
};
