import { memo } from 'react';

import { Mods, classNames } from '../../lib/classNames/classNames';

import cls from './Overlay.module.scss';

interface OverlayProps {
  className?: string;
  onClick?: () => void;
}

export const Overlay = memo((props: OverlayProps) => {
  const { className, onClick } = props;

  return (
    <div
      onClick={onClick}
      className={classNames(cls.Overlay, {}, [className])}
    />
  );
});
