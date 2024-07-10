'use client'
import Image from 'next/image'
import cls from './ProductItem.module.scss'
import ozon from '../assets/ozon.png'

import React, { useState } from 'react'
import { ProductItemModal } from './ProductItemModal/ProductItemModal'
import { Card } from '@repo/shared/ui'

interface IProductItem {
  title: string
  img?: string
  description: string
  price: number
}

export const ProductItem: React.FC<IProductItem> = ({
  title,
  img = '',
  description,
  price,
}) => {
  const [isOpen, setOpen] = useState(false)
  return (
    <Card
      padding="0"
      variant="light"
      className={cls.ProductItem}
      style={{ borderRadius: '8px' }}
    >
      <div onClick={() => setOpen(true)}>
        <Image className={cls.img} src={img} alt={title} width={415} height={220} />
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
  )
}
