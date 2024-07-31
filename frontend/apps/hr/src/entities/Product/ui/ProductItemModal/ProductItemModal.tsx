import { classNames } from '@repo/shared/lib';
import { AppImage, Button } from '@repo/shared/ui';
import { ReactNode } from 'react';

import { Product } from '../..';

import ozon from '@/shared/assets/images/ozon.png';

import cls from './ProductItemModal.module.scss';

interface IEventCardModal {
  product: Product;
  onOpen: (arg: boolean) => void;
  buttons: ReactNode;
}

export const ProductItemModal = (props: IEventCardModal) => {
  const { product, onOpen, buttons } = props;
  const userBalance = 200;

  return (
    <>
      <AppImage
        className={cls.img}
        src={ozon}
        alt={product.title}
        width={480}
      />
      <div className={cls.body}>
        <div className="">
          <h3 className={cls.title}>{product.title}</h3>
          <p className={cls.description}>{product.description}</p>
          {userBalance < product.price && (
            <p className={cls.error}>
              Недостаточное количество баллов для совершения покупки
            </p>
          )}
        </div>
        <div className={cls.footer}>
          <p className={cls.price}>{product.price} Б</p>
          {buttons}
        </div>
        <Button
          className={cls.close}
          variant="ghost"
          onClick={() => onOpen(false)}
        >
          <span
            className={classNames('material-symbols-outlined', {}, [
              cls.close_btn,
            ])}
          >
            close
          </span>
        </Button>
      </div>
    </>
  );
};
