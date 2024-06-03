import React, { ButtonHTMLAttributes, memo, ReactNode } from 'react';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';

import cls from './Button.module.scss';

export type ButtonVariant = 'clear' | 'accent' | 'white';
export type ButtonColor = 'normal' | 'success' | 'error';

export type ButtonSize = 's' | 'm' | 'l';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariant;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
  children?: ReactNode;
  color?: ButtonColor;
  addonRight?: ReactNode;
  addonLeft?: ReactNode;
  fullWidth?: boolean;
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    children,
    variant = 'accent',
    size = 'm',
    disabled,
    fullWidth,
    color = 'normal',
    addonRight,
    addonLeft,
    ...otherProps
  } = props;

  const mods: Mods = {
    [cls.disabled]: disabled,
    [cls.fullWidth]: fullWidth,
    [cls.withAddon]: Boolean(addonLeft) || Boolean(addonRight),
  };

  return (
    <button
      type="button"
      disabled={disabled}
      className={classNames(cls.Button, mods, [
        className,
        cls[variant],
        cls[size],
        cls[color],
      ])}
      {...otherProps}
    >
      <div className={cls.addonLeft}>{addonLeft}</div>
      {children}
      <div className={cls.addonRight}>{addonRight}</div>
    </button>
  );
});
