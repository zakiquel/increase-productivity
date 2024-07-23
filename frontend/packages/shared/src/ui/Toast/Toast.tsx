'use client';
import { ReactNode, useEffect, useState } from 'react';

import cls from './Toast.module.scss';

import { classNames } from '../../lib/classNames/classNames';

type TSize = 'xs' | 's' | 'm' | 'l';

type TVariant = 'success' | 'warning' | 'error' | 'neutral';

interface IToast {
  className?: string;
  text?: string;
  addOnRight?: ReactNode;
  addOnLeft?: ReactNode;
  size?: TSize;
  variant?: TVariant;
  time?: number;
}

export const Toast = (props: IToast) => {
  const {
    time = 5000,
    text,
    className,
    size = 'm',
    variant = 'success',
    addOnLeft,
    addOnRight,
  } = props;
  const [isTimeOver, setTimeOver] = useState(false);
  useEffect(() => {
    if (time) {
      const timer = setTimeout(() => {
        setTimeOver(true);
      }, time);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      {!isTimeOver && (
        <div
          className={classNames(cls.toast, {}, [
            className,
            cls[size],
            cls[variant],
          ])}
        >
          {addOnLeft}
          <p>{text}</p>
          {addOnRight}
        </div>
      )}
    </>
  );
};
