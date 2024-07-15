import { classNames } from '../../../lib';
import { ReactNode } from 'react';
import cls from './BaseBadge.module.scss';

export type BadgeVariant =
  | 'primary'
  | 'outline'
  | 'secondary'
  | 'black'
  | 'grey'
  | 'green'
  | 'red'
  | 'orange';

type BadgeSize = 'l' | 'm' | 's' | 'xs';

interface BadgeProps {
  className?: string;
  variant?: BadgeVariant;
  size?: BadgeSize;
  children?: ReactNode;
  addonLeft?: ReactNode;
  addonRight?: ReactNode;
}

export const Badge = (props: BadgeProps) => {
  const {
    className,
    variant = 'primary',
    size = 'm',
    children,
    addonLeft,
    addonRight,
  } = props;

  return (
    <div
      className={classNames(cls.Badge, {}, [
        className,
        cls[variant],
        cls[size],
      ])}
    >
      {addonLeft && <div className={cls.addonLeft}>{addonLeft}</div>}
      <p>{children}</p>
      {addonRight && <div className={cls.addonRight}>{addonRight}</div>}
    </div>
  );
};
