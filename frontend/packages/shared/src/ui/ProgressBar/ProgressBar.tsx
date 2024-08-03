import { memo } from 'react';

import { classNames } from '../../lib';

import cls from './ProgressBar.module.scss';

interface ProgressBarProps {
  className?: string;
  size: number;
  disabled?: boolean;
  color?: string;
}

export const ProgressBar = memo((props: ProgressBarProps) => {
  const { className, size, disabled = false, color } = props;

  return (
    <div
      className={classNames(cls.ProgressBar, { [cls.disabled]: disabled }, [
        className,
      ])}
    >
      <div
        className={cls.progress_fill}
        style={{ width: `${size}%`, backgroundColor: color }}
      />
    </div>
  );
});
