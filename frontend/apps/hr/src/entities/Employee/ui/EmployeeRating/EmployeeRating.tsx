import { Card, Text } from '@repo/shared/ui';
import { memo } from 'react';

import { PersonalRatingChart } from '@/entities/Diagrams';

import cls from './EmployeeRating.module.scss';

interface EmployeeRatingProps {
  rating?: number;
}

export const EmployeeRating = memo((props: EmployeeRatingProps) => {
  const { rating } = props;

  return (
    <Card padding="16" className={cls.EmployeeRating} variant="light">
      <div className={cls.rating}>
        <Text text={`${50}%`} size="s" />
      </div>
      <PersonalRatingChart rating={rating || 50} />
    </Card>
  );
});
