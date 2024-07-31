import { Button, ModalSuccess, Toast } from '@repo/shared/ui';
import { AnimatePresence, motion } from 'framer-motion';
import { memo, useCallback, useEffect, useState } from 'react';
import { useToaster } from 'rsuite';

import { deleteEvent } from '../../api/eventApi';
import { EditEventDrawer } from '../EditEventDrawer/EditEventDrawer';

import { Event, EventCardModal } from '@/entities/Event';

import cls from './EventModal.module.scss';

interface EventModalProps {
  className?: string;
  event?: Event;
  isOpen: boolean;
  setOpen: (arg: boolean) => void;
}
const EventModal = memo((props: EventModalProps) => {
  const { event, isOpen, setOpen, className } = props;
  const [edit, setEdit] = useState<boolean>(false);
  const [isDelete, setDelete] = useState<boolean>(false);
  const toaster = useToaster();
  const [delEvent, { isSuccess }] = deleteEvent();
  const onDeleteClick = useCallback(async () => {
    await delEvent(event?.id);
  }, [delEvent, event]);
  useEffect(() => {
    if (isSuccess) {
      setDelete(false);
      toaster.push(
        <Toast
          text="Мероприятие удалено"
          size="l"
          variant="success"
          addOnLeft={
            <span className="material-symbols-outlined">check_circle</span>
          }
        />,
        { placement: 'bottomCenter' },
      );
    }
  }, [isSuccess, toaster]);
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
              <EventCardModal
                event={event}
                onOpen={setOpen}
                buttons={
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
                }
              />
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
              <Button size="l" onClick={onDeleteClick}>
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
        eventId={event.id}
      />
    </>
  );
});

export default EventModal;
