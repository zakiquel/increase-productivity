import React from 'react';

import { Quality } from '../../model/types/value';

import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';

import cls from './ValueCard.module.scss';

interface ValueCardProps {
  title: string;
  qualities: Quality[];
  isPreset?: boolean;
}

export const ValueCard = (props: ValueCardProps) => {
  const { title, qualities, isPreset } = props;

  const cardMods: Mods = {
    [cls.isEmpty]: Boolean(qualities.length === 0),
  };

  const cardButton = () => {
    if (isPreset)
      return (
        <Button variant='secondary' size='s' className={cls.value_button}>
          Добавить готовый пресет
        </Button>
      );
    if (qualities.length !== 0)
      return (
        <Button variant='secondary' size='s' className={cls.value_button}>
          Редактировать
        </Button>
      );
    return (
      <Button variant='outline' size='m' className={cls.value_button}>
        Добавить качества
      </Button>
    );
  };

  return (
    <Card
      variant='light'
      padding='32'
      border='normal'
      className={classNames(cls.ValueCard, cardMods, [])}
    >
      <div className={cls.value}>
        <h3>{title}</h3>
        <ul className={cls.values_list}>
          {qualities.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      </div>
      {cardButton()}
    </Card>
  );
};
