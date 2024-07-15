import { classNames } from '@repo/shared/lib';
import {
  AppImage,
  Button,
  Modal,
  ModalSuccess,
  Status,
  Text as TextTag,
  TVariant,
} from '@repo/shared/ui';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import { IEventCard } from '../../model/types/eventCard';

import event from '@/shared/assets/images/event.png';

import cls from './EventCardModal.module.scss';
import { EditEventDrawer } from '@/features/EditEvent';

interface IProductItemModal {
  isOpen: boolean;
  setOpen: (arg: boolean) => void;
}

export const EventCardModal = (props: IProductItemModal & IEventCard) => {
  const { id, title, description, tag, img, price, isOpen, setOpen, date } =
    props;

  const [edit, setEdit] = useState(false);
  const [isDelete, setDelete] = useState(false);
  const [isDeleteSuccess, setDeleteSuccess] = useState(false);

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
                  src={event}
                  alt="event"
                  width={480}
                  height={320}
                  className={classNames(cls.img, {}, [
                    tag === 'Закрыто' ? cls.closed : undefined,
                  ])}
                />
                <Status
                  variant={tag as TVariant}
                  className={cls.tag}
                  size="s"
                />
              </div>

              <div className={cls.text_wrapper}>
                <div>
                  <TextTag size="m" title={title} className={cls.title} />
                  <TextTag size="xs" className={cls.text} text={description} />
                </div>
                <div className={cls.wrapper}>
                  <div className={cls.wrp}>
                    <span className={cls.price}>
                      {price?.toString() + ' Б'}
                    </span>
                    <span className={cls.date}>{date}</span>
                  </div>
                  {(tag === 'Одобрено' || tag === 'Ожидание') && (
                    <div className={cls.btn_wrapper}>
                      <Button
                        variant="secondary"
                        size="m"
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
                        size="m"
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

      {
        <EditEventDrawer
          isOpen={edit}
          onClose={() => {
            setEdit(false);
          }}
          eventId={id.toString()}
        />
      }
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
