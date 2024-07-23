import { Badge, Button, Card } from '@repo/shared/ui';
import React from 'react';

import { Value } from '../../model/types/value';

import cls from './ValueCard.module.scss';

interface BaseValueCardProps {
  value: Value;
  index: number;
}

interface ValueCardProps extends BaseValueCardProps {
  isConstructor?: false;
}

interface ConstructorValueCardProps extends BaseValueCardProps {
  isConstructor: true;
  deleteValue: (value: Value) => void;
  isPreset?: boolean;
  editValue: () => void;
  divRef: (el: HTMLDivElement) => void;
}

export const ValueCard = (
  props: ValueCardProps | ConstructorValueCardProps,
) => {
  const { value, index, isConstructor } = props;

  if (isConstructor) {
    const { deleteValue, editValue, isPreset, divRef } = props;
    return (
      <div ref={divRef}>
        <p className={cls.value_order}>{`Ценность №${index + 1}`}</p>
        <Card variant="light" padding="8" className={cls.ValueCard}>
          <div className={cls.card_content}>
            <h3>{value.name}</h3>
            <ul className={cls.values_list}>
              {value.qualities.map((item, index) => (
                <li key={index}>
                  <Badge variant="secondary" size="s">
                    {item.name}
                  </Badge>
                </li>
              ))}
            </ul>
          </div>

          <div className={cls.card_buttons}>
            <Button
              variant="primary"
              size="xs"
              onClick={editValue}
              disabled={isPreset}
              className={cls.close_button}
            >
              Редактировать
            </Button>
            <Button
              variant="ghost"
              size="xs"
              onClick={() => deleteValue(value)}
              className={cls.close_button}
            >
              Удалить
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <>
      <p className={cls.value_order}>{`Ценность №${index + 1}`}</p>
      <Card variant="light" padding="8" className={cls.ValueCard}>
        <div className={cls.card_content}>
          <h3>{value.name}</h3>
          <ul className={cls.values_list}>
            {value.qualities.map((item, index) => (
              <li key={index}>
                <Badge variant="secondary" size="s">
                  {item.name}
                </Badge>
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </>
  );
};
