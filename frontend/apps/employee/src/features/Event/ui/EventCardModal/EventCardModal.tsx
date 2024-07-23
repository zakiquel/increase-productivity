'use client';

import { classNames } from '@repo/shared/lib';
import { Button, Status, Text as TextTag, TVariant } from '@repo/shared/ui';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

import { Event } from '@/entities/Event';
import eventImg from '@/shared/assets/images/event.png';
import { ModalSuccess } from '@/shared/ui/ModalSuccess';

import cls from './EventCardModal.module.scss';

interface IProductItemModal {
  event?: Event;
  isOpen: boolean;
  setOpen: (arg: boolean) => void;
}

export const EventCardModal = (props: IProductItemModal) => {
  const { isOpen, setOpen, event } = props;

  const [currentTag, setCurrentTag] = useState<string>();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isComplete, setComplete] = useState(false);

  const getComplete = () => {
    setComplete(true);
  };

  const getTakePart = () => {
    setOpen(false);
    setIsSuccess(true);
  };
  if (!event) {
    return null;
  }

  const getButton = () => {
    switch (event.tag) {
      case 'Новые':
        return <Button onClick={getTakePart}>Принять участие</Button>;

      case 'Ожидание':
        return (
          <Button variant="secondary" size="l">
            Отменить
          </Button>
        );
      case 'Одобрено':
        return (
          <Button
            variant="primary"
            size="l"
            onClick={getComplete}
            disabled={isComplete}
          >
            Завершить
          </Button>
        );

      default:
        return null;
    }
  };

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
                  src={eventImg}
                  alt="event"
                  width={480}
                  height={320}
                  className={classNames(cls.img, {}, [
                    event.tag === 'Закрыто' ? cls.closed : undefined,
                  ])}
                />
                <Status
                  variant={event.tag as TVariant}
                  className={cls.tag}
                  size="s"
                />
                <Status
                  variant={event.tag as TVariant}
                  className={cls.tag}
                  size="s"
                />
              </div>

              <div className={cls.text_wrapper}>
                <div>
                  <TextTag size="m" title={event.title} className={cls.title} />
                  <TextTag
                    size="xs"
                    className={cls.text}
                    text={event.description}
                  />
                  {isComplete && (
                    <span className={cls.complete}>
                      Заявка на завершение мероприятия отправлена HR
                    </span>
                  )}
                  {isComplete && (
                    <span className={cls.complete}>
                      Заявка на завершение мероприятия отправлена HR
                    </span>
                  )}
                </div>
                <div className={cls.wrapper}>
                  <div className={cls.wrp}>
                    <span
                      className={cls.price}
                    >{`${event.price.toString()} Б`}</span>
                    <span className={cls.date}>{event.date}</span>
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
  );
};
