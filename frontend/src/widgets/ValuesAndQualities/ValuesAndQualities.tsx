import React, { memo } from 'react'

import { Button } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';

import cls from './ValuesAndQualities.module.scss'

export const ValuesAndQualities = memo(() => (
    <div className={cls.ValuesAndQualities}>
        <Card variant='light' padding='32' border='normal'>
            <h2>Ценности и качества</h2>
            <p>Добавьте до 8 ценностей, к каждой ценности до 5 качеств.</p>
        </Card>
        <Button size='l' fullWidth>Нажмите, чтобы добавить ценность</Button>
    </div>
));
