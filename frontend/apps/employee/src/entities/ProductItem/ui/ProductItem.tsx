'use client'
import Image from 'next/image'
import cls from './ProductItem.module.scss'
import { Button } from '@repo/shared/ui'
import React from 'react'
import ProductItemModal from './ProductItemModal/ProductItemModal'

interface IProductItem {
    title: string
    img?: string
    description: string
    price: number
}


export const ProductItem: React.FC<IProductItem> = ({
    title,
    img='',
    description,
    price
}) => {
    const [isOpen, setOpen] = React.useState(false)
    return ( <div className={cls.ProductItem}>
        <Image className={cls.img} src={img} alt={title} width={415} height={220} />
        <h3 className={cls.title}>{title}</h3>
        <div className={cls.body} >
            <p className={cls.price}>{price} Б</p>
            <Button
                onClick={() => setOpen(true)}
                variant='primary' size='s'>Приобрести</Button>
        </div>
            <ProductItemModal title={title} img={img} description={description} price={price} isOpen={isOpen} setOpen={setOpen} />
    </div> );
}
 