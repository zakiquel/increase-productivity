import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Footer.module.scss';

interface FooterProps {
  className?: string;
}

export const Footer = memo((props: FooterProps) => {
  const {
    className,
  } = props;

  return (
    <div className={classNames(cls.Footer, {}, [className])}>
      Footer
    </div>
  );
});

