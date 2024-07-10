'use client'
import Image from 'next/image'
import cls from './HistoryItem.module.scss'
import ozon from '../assets/ozon.png'

import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface IStatus {
  time: string
  status: string
}

interface IHistoryItem {
  id: number
  title: string
  price: number
  img?: string
  statuses: IStatus[]
}

const getStatusColor = (status: string) => {
  switch (status) {
    case 'ожидание':
      return '#FF9F1C'
    case 'одобрено':
      return '#05B365'
    case 'отказ':
      return '#D92D20'
    case 'получено':
      return '#0844DD'
    default:
      return 'var(--grey-secondary-color)'
  }
}

export const HistoryItem: React.FC<IHistoryItem> = ({
  title,
  img = '',
  price,
  statuses,
  id,
}) => {
  const [isOpen, setOpen] = React.useState(false)
  return (
    <motion.div className={cls.HistoryItem}>
      <div className={cls.wrapper}>
        <div className={cls.body}>
          <div className={cls.head}>
            <Image className={cls.img} src={ozon} alt={title} width={40} height={40} />
            <h3 className={cls.title}>{title}</h3>
          </div>
          <p className={cls.price}>{price} Б</p>
        </div>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: isOpen ? 'auto' : 0 }}
          exit={{ height: 0 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
        >
          <div className={cls.items}>
            <p className={cls.time}>{statuses[statuses.length - 1].time}</p>
            <p
              style={{
                background: getStatusColor(statuses[statuses.length - 1].status),
              }}
              className={cls.status}
            >
              {statuses[statuses.length - 1].status}
            </p>
          </div>

          <AnimatePresence>
            {isOpen &&
              statuses
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
                    <p className={cls.status}>{d.status}</p>
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
  )
}
