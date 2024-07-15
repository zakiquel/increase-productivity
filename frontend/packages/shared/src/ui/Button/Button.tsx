import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import { classNames, Mods } from '../../lib/classNames/classNames';
import cls from './Button.module.scss';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'ghost'
  | 'close'
  | 'exit';
export type ButtonSize = 'xs' | 's' | 'm' | 'l';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  children?: ReactNode;
  addonRight?: ReactNode;
  addonLeft?: ReactNode;
  fullWidth?: boolean;
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    children,
    variant = 'primary',
    size = 'm',
    disabled,
    fullWidth,
    addonRight,
    addonLeft,
    ...otherProps
  } = props;

  const mods: Mods = {
    [cls.fullWidth]: fullWidth,
  };

  return (
    <button
      type="button"
      disabled={disabled}
      className={classNames(cls.Button, mods, [
        className,
        cls[variant],
        cls[size],
      ])}
      {...otherProps}
    >
      {addonLeft && <div className={cls.addonLeft}>{addonLeft}</div>}
      {children}
      {addonRight && <div className={cls.addonRight}>{addonRight}</div>}
    </button>
  );
});
