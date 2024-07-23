'use client';

import { Status, TVariant } from '@repo/shared/ui';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';

import { HistoryItem as IHistoryItem } from '../../model/types/historyItem';

import ozon from '@/shared/assets/images/ozon.png';

import cls from './HistoryItem.module.scss';

interface HistoryItemProps {
  historyItem: IHistoryItem;
}

export const HistoryItem = (props: HistoryItemProps) => {
  const { historyItem } = props;
  const [isOpen, setOpen] = useState(false);

  return (
    <motion.div className={cls.HistoryItem}>
      <div className={cls.wrapper}>
        <div className={cls.body}>
          <div className={cls.head}>
            <Image
              className={cls.img}
              src={ozon}
              alt={historyItem.title}
              width={40}
              height={40}
            />

            <h3 className={cls.title}>{historyItem.title}</h3>
          </div>
          <p className={cls.price}>{historyItem.price} Б</p>
        </div>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: isOpen ? 'auto' : 0 }}
          exit={{ height: 0 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
        >
          <div className={cls.items}>
            <p className={cls.time}>
              {historyItem.statuses[historyItem.statuses.length - 1].time}
            </p>
            <Status
              variant={
                historyItem.statuses[historyItem.statuses.length - 1]
                  .status as TVariant
              }
              size="xs"
            />
          </div>

          <AnimatePresence>
            {isOpen &&
              historyItem.statuses
                .slice(0, -1)
                .reverse()
                .map((d, key) => (
                  <motion.div
                    className={cls.items}
                    key={key}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                  >
                    <p className={cls.time}>{d.time}</p>
                    <Status
                      className={cls.status}
                      variant={d.status as TVariant}
                    />
                  </motion.div>
                ))}
          </AnimatePresence>
        </motion.div>
      </div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
        className={cls.dropDownBtn}
        onClick={() => setOpen(!isOpen)}
      >
        <span className="material-symbols-outlined">keyboard_arrow_down</span>
      </motion.button>
    </motion.div>
  );
};
