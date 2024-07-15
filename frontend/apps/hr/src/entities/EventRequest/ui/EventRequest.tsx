import { Avatar, Button, Status, TVariant } from '@repo/shared/ui';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

import cls from './EventRequest.module.scss';

const getButton = (status: string) => {
  switch (status) {
    case 'Одобрено':
      return (
        <div className={cls.btn_wrapper}>
          <Button variant="ghost" size="s">
            Отклонить
          </Button>
          <Button variant="secondary" size="s">
            Подтвердить выполнение
          </Button>
        </div>
      );
    case 'Ожидание':
      return (
        <div className={cls.btn_wrapper}>
          <Button variant="ghost" size="s">
            Отклонить
          </Button>
          <Button variant="secondary" size="s">
            Принять
          </Button>
        </div>
      );
    default:
      break;
  }
};

export const EventRequest = (props: IEventRequestItem) => {
  const { name, description, date, img = '', price, status, id, theme } = props;

  const [isOpen, setOpen] = React.useState(false);
  return (
    <motion.div>
      <div className={cls.body}>
        <div className={cls.head}>
          <Avatar alt={name} size={40} />
          <h3>{name}</h3>
        </div>
        <p>{date}</p>
        <p>{theme}</p>
        <Status variant={status as TVariant} />
        <p> {price} Б</p>

        {getButton(status)}
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
        {isOpen && (
          <AnimatePresence>
            <motion.div
              className={cls.description}
              key={id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
            >
              <p>{description}</p>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </motion.div>
  );
};
