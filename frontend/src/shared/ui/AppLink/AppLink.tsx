import { memo, ReactNode } from 'react';
import { LinkProps, NavLink } from 'react-router-dom';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './AppLink.module.scss';

export type AppLinkVariant = 'primary' | 'red';
export type AppLinkSize = 'm';

interface AppLinkProps extends LinkProps {
  className?: string;
  variant?: AppLinkVariant;
  size?: AppLinkSize;
  children?: ReactNode;
  activeClassName?: string;
}

export const AppLink = memo((props: AppLinkProps) => {
  const {
    to,
    className,
    activeClassName = '',
    children,
    variant = 'primary',
    size = 'm',
    ...otherProps
  } = props;

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        classNames(cls.AppLink, { [activeClassName]: isActive }, [
          className,
          cls[variant],
          cls[size],
        ])
      }
      {...otherProps}
    >
      {children}
    </NavLink>
  );
});
