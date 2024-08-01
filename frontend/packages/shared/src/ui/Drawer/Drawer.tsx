'use client';
import { useRef, useEffect, ReactNode } from 'react';
import cls from './Drawer.module.scss';

import { Mods, classNames } from '../../lib/classNames/classNames';
import { Portal } from '../Portal/Portal';
import { useMountTransition } from '../../lib';
import { Overlay } from '../Overlay';

interface DrawerProps {
  className?: string;
  children?: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  position?: 'left' | 'right';
  removeWhenClosed?: boolean;
}

export const Drawer = (props: DrawerProps) => {
  const {
    className,
    children,
    isOpen,
    onClose,
    position = 'left',
    removeWhenClosed = true,
  } = props;

  const isTransitioning = useMountTransition({
    isMounted: isOpen,
    unmountDelay: 300,
  });
  const bodyRef = useRef<HTMLBodyElement | null>(
    document.querySelector('body'),
  );

  useEffect(() => {
    const updatePageScroll = () => {
      if (bodyRef.current) {
        bodyRef.current.style.overflow = isOpen ? 'hidden' : '';
      }
    };
    updatePageScroll();
  }, [isOpen]);

  useEffect(() => {
    const onKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keyup', onKeyPress);
    }
    return () => {
      window.removeEventListener('keyup', onKeyPress);
    };
  }, [isOpen, onClose]);

  if (!isTransitioning && removeWhenClosed && !isOpen) {
    return null;
  }

  const mods: Mods = {
    [cls.open]: isOpen,
    [cls.in]: isTransitioning,
  };
  return (
    <Portal element={document.getElementById('app') ?? document.body}>
      <div
        aria-hidden={isOpen ? 'false' : 'true'}
        className={classNames(cls.container, mods, [className])}
      >
        <div
          className={classNames(cls.drawer, {}, [cls[position]])}
          role="dialog"
        >
          {children}
        </div>
        <Overlay />
      </div>
    </Portal>
  );
};
