import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card';

import cls from './OpportunityCard.module.scss';

interface OpportunityCardProps {
    id: string;
    title: string;
}

export const OpportunityCard = memo((props: OpportunityCardProps) => {
    const {
        id,
        title,
    } = props;

    return (
        <Card variant='light' padding='24' className={classNames(cls.OpportunityCard, {}, [])}>
            <span>({id})</span>
            <p>{title}</p>
        </Card>
    );
});