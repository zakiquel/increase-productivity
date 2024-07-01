import { classNames } from '@repo/shared/lib';
import { Card } from '@repo/shared/ui';
import { memo } from 'react';

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