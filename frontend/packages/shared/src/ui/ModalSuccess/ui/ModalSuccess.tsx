'use client';
import { AnimatePresence, motion } from 'framer-motion';
import cls from './ModalSuccess.module.scss';
import { ReactNode, useEffect, useState } from 'react';
import { classNames } from '../../../lib/classNames/classNames';
import { Button, Text as TextTag } from '@repo/shared/ui';

interface IModalSuccess {
  isOpen: boolean;
  isTimer?: boolean;
  onClose: () => void;
  title?: string;
  text?: string;
  button?: ReactNode;
  variant?: 'default' | 'constructor';
}

export const ModalSuccess = (props: IModalSuccess) => {
  const {
    isOpen,
    isTimer = false,
    onClose,
    title = '',
    text = '',
    button = (
      <Button size="l" onClick={onClose}>
        Спасибо!
      </Button>
    ),
    variant = 'default',
  } = props;

  const [isTimeOver, setTimeOver] = useState(false);
  useEffect(() => {
    if (isTimer) {
      const timer = setTimeout(() => {
        setTimeOver(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);
  return (
    <>
      {isOpen && !isTimeOver && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            onClick={onClose}
            className={cls.background}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              onClick={(e) => e.stopPropagation()}
              className={classNames(cls.ModalSuccess, {}, [cls[variant]])}
            >
              <TextTag title={title} />
              <TextTag text={text} size="s" />
              {button}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
};
