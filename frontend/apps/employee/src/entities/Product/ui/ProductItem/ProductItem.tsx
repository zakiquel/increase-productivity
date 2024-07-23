'use client';

import { Card } from '@repo/shared/ui';
import Image from 'next/image';
import React from 'react';

import { Product } from '../../model/types/historyItem';

import ozon from '@/shared/assets/images/ozon.png';

import cls from './ProductItem.module.scss';

interface IProductItem {
  product: Product;
  onOpen: (arg: boolean) => void;
  onProduct: (arg: Product) => void;
}

export const ProductItem = (props: IProductItem) => {
  const { product, onOpen, onProduct } = props;
  return (
    <Card
      padding="0"
      variant="light"
      className={cls.ProductItem}
      style={{ borderRadius: '8px' }}
      onClick={() => {
        onOpen(true);
        onProduct(product);
      }}
    >
      <Image src={ozon} alt={product.title} width={404} height={221} />
      <h3 className={cls.title}>{product.title}</h3>
      <div className={cls.body}>
        <p className={cls.price}>{product.price} Б</p>
      </div>
    </Card>
  );
};
