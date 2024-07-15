import cls from './Badge.module.scss';
import { classNames } from '@repo/shared/lib';

export type TVariant =
  | 'Новые'
  | 'Ожидание'
  | 'Отказано'
  | 'Закрыто'
  | 'Одобрено'
  | 'Получен';

export type TSize = 'xs' | 's' | 'm' | 'l';

const BadgeType = {
  Новые: 'new',
  Ожидание: 'wait',
  Отказано: 'refused',
  Одобрено: 'approved',
  Закрыто: 'closed',
  Получен: 'received',
};

interface IBadge {
  className?: string;
  variant?: TVariant;
  size?: TSize;
}

export const Status = ({
  className,
  variant = 'Новые',
  size = 'xs',
}: IBadge) => {
  return (
    <p
      className={classNames(cls.tag, {}, [
        className,
        cls[BadgeType[variant]],
        cls[size],
      ])}
    >
      {variant}
    </p>
  );
};
