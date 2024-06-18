import React from 'react'

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';

import cls from './PresetCard.module.scss'


interface PresetCardProps {
    title: string;
    qualities: string[];
}

export const PresetCard = (props: PresetCardProps) => {
    const { title, qualities } = props;

    return (
        <Card variant='light' padding='32' border='normal' className={classNames(cls.PresetCard)}>
            <div className={cls.presets}>
                <h3>{title}</h3>
                <ul>
                    {qualities.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            <div>
                <Button variant='secondary' size='s'>Добавить готовый пресет</Button>
            </div>
        </Card>
    )
}
