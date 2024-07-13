import { Mods, classNames } from '@repo/shared/lib';
import { Button, Card } from '@repo/shared/ui';
import React from 'react';

import { Value } from '../../model/types/value';

import cls from './ValueCard.module.scss';

interface ValueCardProps {
  value: Value;
  isPreset?: boolean;
  onButtonClick?: (value: Value) => void;
}

export const ValueCard = (props: ValueCardProps) => {
  const { value, isPreset, onButtonClick } = props;

  const cardMods: Mods = {
    [cls.isEmpty]: Boolean(value.qualities.length === 0),
  };

  const cardButton = () => {
    if (onButtonClick) {
      if (isPreset)
        return (
          <Button
            variant="secondary"
            size="s"
            className={cls.value_button}
            onClick={() => onButtonClick(value)}
          >
            Добавить готовый пресет
          </Button>
        );

      if (value.qualities.length !== 0)
        return (
          <Button
            variant="secondary"
            size="s"
            className={cls.value_button}
            onClick={() => onButtonClick(value)}
          >
            Редактировать
          </Button>
        );

      return (
        <Button
          variant="outline"
          size="m"
          className={cls.value_button}
          onClick={() => onButtonClick(value)}
        >
          Добавить качества
        </Button>
      );
    }
    return null;
  };

  return (
    <Card
      variant="light"
      padding="32"
      border="normal"
      className={classNames(cls.ValueCard, cardMods, [])}
    >
      <h3>{value.name}</h3>
      <ul className={cls.values_list}>
        {value.qualities.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
      {cardButton()}
    </Card>
  );
};
