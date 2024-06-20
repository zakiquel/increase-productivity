import { Value } from '../../model/types/value';
import { ValueCard } from '../ValueCard/ValueCard';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './ValueList.module.scss';

interface ValueListProps {
  values: Value[];
  isPreset?: boolean;
  className?: string;
  cardAction: (value: Value) => void;
}

export const ValueList = ({
  values,
  isPreset,
  className,
  cardAction,
}: ValueListProps) => (
  <ul className={classNames(cls.value_cards, {}, [className])}>
    {values.map(value => (
      <li key={value.id}>
        <ValueCard
          value={value}
          isPreset={isPreset}
          onButtonClick={cardAction}
        />
      </li>
    ))}
  </ul>
);
