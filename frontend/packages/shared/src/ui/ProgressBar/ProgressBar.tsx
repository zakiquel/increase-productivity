import { memo } from 'react';

import { classNames } from '../../lib';

import cls from './ProgressBar.module.scss';

interface ProgressBarProps {
  className?: string;
  size: number;
  disabled?: boolean;
}

export const ProgressBar = memo((props: ProgressBarProps) => {
  const { className, size, disabled = false } = props;

  return (
    <div
      className={classNames(cls.ProgressBar, { [cls.disabled]: disabled }, [
        className,
      ])}
    >
      <div className={cls.progress_fill} style={{ width: `${size}%` }} />
    </div>
  );
});
