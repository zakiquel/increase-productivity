'use client';

import { Card } from '@repo/shared/ui';
import Image from 'next/image';
import React, { useState } from 'react';

import { ProductItemModal } from '../ProductItemModal/ProductItemModal';

import ozon from '@/shared/assets/images/ozon.png';

import cls from './ProductItem.module.scss';

interface IProductItem {
  title: string;
  img?: string;
  description: string;
  price: number;
}

export const ProductItem = (props: IProductItem) => {
  const { title, img = '', description, price } = props;

  const [isOpen, setOpen] = useState(false);
  return (
    <Card
      padding="0"
      variant="light"
      className={cls.ProductItem}
      style={{ borderRadius: '8px' }}
    >
      <div onClick={() => setOpen(true)}>
        <Image src={ozon} alt={title} width={404} height={221} />
        <h3 className={cls.title}>{title}</h3>
        <div className={cls.body}>
          <p className={cls.price}>{price} Б</p>
        </div>
      </div>
      <ProductItemModal
        title={title}
        img={img}
        description={description}
        price={price}
        isOpen={isOpen}
        setOpen={() => setOpen(false)}
      />
    </Card>
  );
};
