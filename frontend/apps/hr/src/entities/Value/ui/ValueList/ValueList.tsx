import { classNames } from '@repo/shared/lib';

import { Value } from '../../model/types/value';
import { PresetCard } from '../PresetCard/PresetCard';
import { ValueCard } from '../ValueCard/ValueCard';

import cls from './ValueList.module.scss';

interface BaseListProps {
  className?: string;
  values: Value[];
}

interface PresetListProps extends BaseListProps {
  isPreset: true;
  addPreset: (value: Value) => void;
  addedPresets: string[];
  disabledPresets: string[];
  disabled?: boolean;
}

interface ValueListProps extends BaseListProps {
  isPreset?: false;
  editable?: boolean;
  deleteValue?: (value: Value) => void;
}

type ListProps = PresetListProps | ValueListProps;

export const ValueList = (props: ListProps) => {
  const { values, isPreset, className } = props;

  if (isPreset) {
    const { addPreset, disabled, addedPresets, disabledPresets } = props;
    return (
      <ul className={classNames(cls.value_list, {}, [className])}>
        {values.map((value) => (
          <li key={value.name}>
            <PresetCard
              value={value}
              addPreset={addPreset}
              disabled={disabled || disabledPresets.includes(value.name)}
              isAdded={addedPresets.includes(value.name)}
            />
          </li>
        ))}
      </ul>
    );
  }

  {
    const { editable, deleteValue } = props;
    return (
      <ul className={classNames(cls.value_list, {}, [className])}>
        {values.map((value, index) => (
          <li key={index}>
            <p className={cls.value_order}>{`Ценность ${index + 1}`}</p>
            <ValueCard
              value={value}
              editable={editable}
              deleteValue={deleteValue}
            />
          </li>
        ))}
      </ul>
    );
  }
};
