import cls from './Status.module.scss';
import { classNames } from '@repo/shared/lib';
import { Badge, BadgeVariant } from './BaseBadge/BaseBadge';

export type TVariant =
  | 'Новые'
  | 'Ожидание'
  | 'Отказано'
  | 'Закрыто'
  | 'Одобрено'
  | 'Получен';

export type TSize = 'xs' | 's' | 'm' | 'l';

const BadgeType = {
  Новые: 'primary',
  Ожидание: 'orange',
  Отказано: 'red',
  Одобрено: 'green',
  Закрыто: 'grey',
  Получен: 'primary',
};

interface IBadge {
  className?: string;
  variant: TVariant;
  size?: TSize;
}

export const Status = ({ className, variant, size = 'xs' }: IBadge) => {
  return (
    <Badge
      size={size}
      variant={BadgeType[variant] as BadgeVariant}
      className={classNames(cls.tag, {}, [className])}
    >
      {variant}
    </Badge>
  );
};
