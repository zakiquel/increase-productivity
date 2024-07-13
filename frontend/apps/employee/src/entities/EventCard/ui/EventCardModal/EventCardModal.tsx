'use client'

import { classNames } from '@repo/shared/lib'
import { Button, Text as TextTag } from '@repo/shared/ui'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useCallback, useState } from 'react'

import { IEventCard } from '../../model/types/eventCard'

import event from '@/shared/assets/images/event.png'
import { ModalSuccess } from '@/shared/ui/ModalSuccess'
import { Tag } from '@/shared/ui/Tag'
import { TVariant } from '@/shared/ui/Tag/Tag'

import cls from './EventCardModal.module.scss'

interface IProductItemModal {
  isOpen: boolean
  setOpen: (arg: boolean) => void
}

export const EventCardModal = (props: IProductItemModal & IEventCard) => {
  const {
    title,
    img = '',
    description,
    price,
    isOpen,
    setOpen,
    date,
    tag,
  } = props;

  const [currentTag, setCurrentTag] = useState<string>(tag)
  const [isSuccess, setIsSuccess] = useState(false)

  const getCancel = () => {
    setCurrentTag('Новые')
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getTakePart = () => {
    setOpen(false)
    setIsSuccess(true)
    setCurrentTag('Ожидание')
  }

  const getButton = useCallback(() => {
    switch (currentTag) {
      case 'Новые':
        return <Button onClick={getTakePart}>Принять участие</Button>

      case 'Ожидание':
        return (
          <Button variant="secondary" size="l" onClick={getCancel}>
            Отменить
          </Button>
        )
      default:
        return null;
    }
  }, [currentTag, getTakePart])

  return (
    <div>
      {isOpen ? (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            onClick={() => setOpen(false)}
            className={cls.background}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              onClick={(e) => e.stopPropagation()}
              className={cls.Modal}
            >
              <div className={cls.img_wrapper}>
                <Image
                  src={event}
                  alt="event"
                  width={480}
                  height={320}
                  className={cls.img}
                />
                <Tag TagVariant={currentTag as TVariant} className={cls.tag}>
                  {currentTag}
                </Tag>
              </div>

              <div className={cls.text_wrapper}>
                <div>
                  <TextTag size="m" title={title} className={cls.title} />
                  <TextTag size="xs" className={cls.text} text={description} />
                </div>
                <div className={cls.wrapper}>
                  <div className={cls.wrp}>
                    <span className={cls.price}>{`${price?.toString()  } Б`}</span>
                    <span className={cls.date}>{date}</span>
                  </div>
                  {getButton()}
                </div>
                <Button
                  className={cls.close}
                  variant="ghost"
                  onClick={() => setOpen(false)}
                >
                  <span
                    className={classNames('material-symbols-outlined', {}, [
                      cls.close_btn,
                    ])}
                  >
                    close
                  </span>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      ) : (
        <ModalSuccess
          isTimer
          title="Заявка успешно отправлена!"
          text="Ожидайте подтверждение от HR"
          isOpen={isSuccess}
          onClose={() => setIsSuccess(false)}
        />
      )}
    </div>
  )
}
