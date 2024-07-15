import { classNames, Mods } from '../../lib/classNames/classNames';
import { ReactNode } from 'react';

import cls from './Tag.module.scss';

type TagVariant = 'primary' | 'secondary';
type TagSize = 'xs' | 's' | 'm' | 'l';

interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  variant?: TagVariant;
  size?: TagSize;
  disabled?: boolean;
  children?: ReactNode;
  addonLeft?: ReactNode;
  addonRight?: ReactNode;
}

export const Tag = (props: TagProps) => {
  const {
    className,
    variant = 'primary',
    size = 'm',
    disabled,
    children,
    addonLeft,
    addonRight,
    ...otherProps
  } = props;

  const mods: Mods = {
    [cls.disabled]: disabled,
  };

  return (
    <div
      className={classNames(cls.Tag, mods, [
        className,
        cls[variant],
        cls[size],
      ])}
      {...otherProps}
    >
      {addonLeft && <div className={cls.addonLeft}>{addonLeft}</div>}
      {children}
      {addonRight && <div className={cls.addonRight}>{addonRight}</div>}
    </div>
  );
};
