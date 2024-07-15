import { classNames } from '@repo/shared/lib';
import { Badge, Button, Card } from '@repo/shared/ui';
import React from 'react';

import { Value } from '../../model/types/value';

import cls from './ValueCard.module.scss';

interface ValueCardProps {
  value: Value;
  className?: string;
  editable?: boolean;
  deleteValue?: (value: Value) => void;
}

export const ValueCard = (props: ValueCardProps) => {
  const { value, className, editable, deleteValue } = props;

  return (
    <Card
      variant="light"
      padding="8"
      className={classNames(cls.ValueCard, {}, [className])}
    >
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
      {deleteValue && (
        <Button
          variant="close"
          size="l"
          onClick={() => deleteValue(value)}
          className={cls.close_button}
        >
          <span className="material-symbols-outlined">close</span>
        </Button>
      )}
    </Card>
  );
};
