import { Avatar, Button, Status, TVariant } from '@repo/shared/ui';
import { motion } from 'framer-motion';
import React from 'react';

import { ProductRequest } from '../../model/types/product';

import cls from './RequestCard.module.scss';

const getButton = (status: string) => {
  switch (status) {
    case 'Одобрено':
      return (
        <div className={cls.btn_wrapper}>
          <Button variant="ghost" size="s">
            Отклонить
          </Button>
          <Button variant="secondary" size="s">
            Забрал
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
  return false;
};

interface IRequest {
  request: ProductRequest;
}

export const RequestCard = (props: IRequest) => {
  const { request } = props;

  return (
    <motion.div className={cls.body}>
      <div className={cls.head}>
        <Avatar alt={request.name} size={40} />
        <h3 className={cls.title}>{request.name}</h3>
      </div>
      <p>{request.theme}</p>
      <p> {request.price} Б</p>
      <p>{request.date}</p>

      <Status variant={request.tag as TVariant} />

      {getButton(request.tag)}
    </motion.div>
  );
};
