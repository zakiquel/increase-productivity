'use client'

import { Card } from '@repo/shared/ui'
import Image from 'next/image'
import React, { useState } from 'react'

import ozon from '../assets/ozon.png'

import { ProductItemModal } from './ProductItemModal/ProductItemModal'

import cls from './ProductItem.module.scss'

interface IProductItem {
  title: string
  img?: string
  description: string
  price: number
}

export const ProductItem = (props: IProductItem) => {
  const {
    title,
    img = '',
    description,
    price,
  } = props

  const [isOpen, setOpen] = useState(false)
  return (
    <Card
      padding="0"
      variant="light"
      className={cls.ProductItem}
      style={{ borderRadius: '8px' }}
    >
      <div onClick={() => setOpen(true)}>
        <Image className={cls.img} src={ozon} alt={title} width={415}
height={220} />
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
