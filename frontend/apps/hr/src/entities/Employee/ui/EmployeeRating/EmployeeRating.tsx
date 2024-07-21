import { Card, ProgressBar, Text } from '@repo/shared/ui';
import { memo } from 'react';

import cls from './EmployeeRating.module.scss';

interface EmployeeRatingProps {
  rating: number | undefined;
}

export const EmployeeRating = memo((props: EmployeeRatingProps) => {
  const { rating } = props;

  return (
    <Card padding="16" className={cls.EmployeeRating} variant="light">
      <Text text="Рейтинг ценности" className={cls.title} />
      <Text text={`${rating}%`} className={cls.text} size="s" />
      <ProgressBar size={rating || 0} thin />
    </Card>
  );
});
