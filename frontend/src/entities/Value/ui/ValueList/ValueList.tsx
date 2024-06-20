import { Value } from '../../model/types/value';
import { ValueCard } from '../ValueCard/ValueCard';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './ValueList.module.scss';

interface ValueListProps {
  values: Value[];
  isPreset?: boolean;
  className?: string;
}

export const ValueList = ({ values, isPreset, className }: ValueListProps) => (
  <ul className={classNames(cls.value_cards, {}, [className])}>
    {values.map(value => (
      <li key={value.id}>
        <ValueCard
          title={value.name}
          qualities={value.qualities}
          isPreset={isPreset}
        />
      </li>
    ))}
  </ul>
);
