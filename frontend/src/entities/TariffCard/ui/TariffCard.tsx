import React, { memo } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';

import cls from './TariffCard.module.scss';

interface TariffProps {
    title: string;
    employees: string;
    reports: string;
    price: string;
    description?: string;
}

export const TariffCard = memo((props: TariffProps) => {
    const {
        title,
        employees,
        reports,
        price,
        description
    } = props;

    return (
        <Card padding='0' border='none' className={classNames(cls.TariffCard, {}, [])}>
            <div>
                <h3>{title}</h3>
                <p>{employees}</p>
                <p>{reports}</p>
            </div>
            <div>
                <h4>{price}</h4>
                {description ?
                    <p>{description}</p>
                    :
                    <>
                        <span className={cls.tariff_price}>/месяц</span>
                        <Button>Подключить тариф</Button>
                    </>}
            </div>
        </Card>
    )
});

