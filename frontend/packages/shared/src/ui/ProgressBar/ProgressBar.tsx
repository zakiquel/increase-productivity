import { memo } from 'react';

import { ProgressBarThreshold } from '../../types/ui';

import { classNames } from '../../lib';

import cls from './ProgressBar.module.scss';

export type ProgressBarColor = 'default' | 'success' | 'secondary' | 'error';

interface ProgressBarProps {
  className?: string;
  size: number;
  color?: ProgressBarColor;
  thin?: boolean;
}

export const ProgressBar = memo((props: ProgressBarProps) => {
  const { className, size, color = 'default', thin, ...otherProps } = props;

  let dynamicColor: ProgressBarColor = color;
  if (color === 'default') {
    if (size < ProgressBarThreshold.ERROR) {
      dynamicColor = 'error';
    } else if (size < ProgressBarThreshold.SECONDARY) {
      dynamicColor = 'secondary';
    } else {
      dynamicColor = 'success';
    }
  }

  return (
    <div
      className={classNames(cls.ProgressBar, { [cls.thin]: thin }, [className])}
      {...otherProps}
    >
      <div
        className={classNames(cls.progress_fill, {}, [cls[dynamicColor]])}
        style={{ width: `${size}%` }}
      />
    </div>
  );
});
