import { classNames } from '@repo/shared/lib';
import {
  AppImage,
  Button,
  ModalSuccess,
  Status,
  Text as TextTag,
  TVariant,
} from '@repo/shared/ui';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import { EditEventDrawer } from '../EditEventDrawer/EditEventDrawer';

import { Event } from '@/entities/Event';
import img from '@/shared/assets/images/event.png';

import cls from './EventModal.module.scss';

interface EventModalProps {
  className?: string;
  event?: Event;
  isOpen: boolean;
  setOpen: (arg: boolean) => void;
}

export const EventModal = (props: EventModalProps) => {
  const { event, isOpen, setOpen, className } = props;

  const [edit, setEdit] = useState<boolean>(false);
  const [isDelete, setDelete] = useState<boolean>(false);
  const [isDeleteSuccess, setDeleteSuccess] = useState<boolean>(false);

  if (!event) {
    return null;
  }

  return (
    <>
      {isOpen && (
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
                <AppImage
                  src={img}
                  alt="event"
                  width={480}
                  height={320}
                  className={classNames(
                    cls.img,
                    { [cls.closed]: event.tag === 'Закрыто' },
                    [],
                  )}
                />
                <Status
                  variant={event.tag as TVariant}
                  className={cls.tag}
                  size="s"
                />
              </div>
              <div className={cls.text_wrapper}>
                <div>
                  <TextTag title={event.title} className={cls.title} />
                  <TextTag
                    size="xs"
                    className={cls.text}
                    text={event.description}
                  />
                </div>
                <div className={cls.wrapper}>
                  <div className={cls.wrp}>
                    <span className={cls.price}>
                      {`${event.price?.toString()} Б`}
                    </span>
                    <span className={cls.date}>{event.date}</span>
                  </div>
                  {(event.tag === 'Одобрено' || event.tag === 'Ожидание') && (
                    <div className={cls.btn_wrapper}>
                      <Button
                        variant="secondary"
                        onClick={() => {
                          setDelete(true);
                          setOpen(false);
                        }}
                      >
                        Удалить
                      </Button>
                      <Button
                        onClick={() => {
                          setOpen(false);
                          setEdit(true);
                        }}
                      >
                        Изменить
                      </Button>
                    </div>
                  )}
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
      )}
      {isDelete && (
        <ModalSuccess
          isOpen={isDelete}
          onClose={() => setDelete(false)}
          title="Удалить мероприятие?"
          text="Восстановить его будет нельзя"
          button={
            <div className={cls.btn_wrapper}>
              <Button
                variant="secondary"
                size="l"
                onClick={() => {
                  setDelete(false);
                }}
              >
                Оставить
              </Button>
              <Button
                size="l"
                onClick={() => {
                  setDeleteSuccess(true);
                  setDelete(false);
                }}
              >
                Удалить
              </Button>
            </div>
          }
        />
      )}
      <EditEventDrawer
        isOpen={edit}
        onClose={() => {
          setEdit(false);
        }}
        eventId={event.id.toString()}
      />
      {isDeleteSuccess && (
        <ModalSuccess
          isOpen={isDeleteSuccess}
          onClose={() => setDeleteSuccess(false)}
          title="Мероприятие удалено"
        />
      )}
    </>
  );
};
