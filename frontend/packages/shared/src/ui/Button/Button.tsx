import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import { classNames, Mods } from '../../lib/classNames/classNames';
import cls from './Button.module.scss';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'light'
  | 'ghost'
  | 'exit';
export type ButtonColor = 'normal' | 'success' | 'error';
export type ButtonSize = 'xs' | 's' | 'm' | 'l';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariant;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
  children?: ReactNode;
  color?: ButtonColor;
  textDark?: boolean;
  addonRight?: ReactNode;
  addonLeft?: ReactNode;
  fullWidth?: boolean;
  selected?: boolean;
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    children,
    variant = 'primary',
    size = 'm',
    disabled,
    fullWidth,
    selected,
    color = 'normal',
    textDark,
    addonRight,
    addonLeft,
    ...otherProps
  } = props;

  const mods: Mods = {
    [cls.fullWidth]: fullWidth,
    [cls.selected]: selected,
    [cls.textDark]: textDark,
  };

  return (
    <button
      type='button'
      disabled={disabled}
      className={classNames(cls.Button, mods, [
        className,
        cls[variant],
        cls[size],
        cls[color],
      ])}
      {...otherProps}
    >
      {addonLeft && <div className={cls.addonLeft}>{addonLeft}</div>}
      {children}
      {addonRight && <div className={cls.addonRight}>{addonRight}</div>}
    </button>
  );
});