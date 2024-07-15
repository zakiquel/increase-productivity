import { classNames, Mods } from '@repo/shared/lib';
import { Badge, Button, Card } from '@repo/shared/ui';
import React from 'react';

import { Value } from '../../model/types/value';

import cls from './PresetCard.module.scss';

interface PresetCardProps {
  value: Value;
  className?: string;
  disabled?: boolean;
  isAdded?: boolean;
  addPreset: (value: Value) => void;
}

export const PresetCard = (props: PresetCardProps) => {
  const { value, className, disabled, isAdded, addPreset } = props;

  const mods: Mods = {
    [cls.disabled]: disabled,
    [cls.isAdded]: isAdded,
  };

  return (
    <Card
      variant="default"
      padding="16"
      className={classNames(cls.PresetCard, mods, [className])}
    >
      <h3>{value.name}</h3>
      <ul className={cls.values_list}>
        {value.qualities.map((item, index) => (
          <li key={index}>
            <Badge variant="secondary" size="xs">
              {item.name}
            </Badge>
          </li>
        ))}
      </ul>
      {isAdded ? (
        <Button variant="ghost" size="xs" className={cls.preset_button}>
          Пресет добавлен
        </Button>
      ) : (
        <Button
          size="xs"
          className={cls.preset_button}
          onClick={() => addPreset(value)}
          disabled={disabled}
        >
          Добавить пресет
        </Button>
      )}
    </Card>
  );
};
