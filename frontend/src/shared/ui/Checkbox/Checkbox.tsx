import { InputHTMLAttributes, forwardRef, useState } from 'react';

import { Text } from '../Text';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Checkbox.module.scss';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
>;

interface CheckboxProps extends HTMLInputProps {
  className?: string;
  label?: JSX.Element | string;
  required?: boolean;
  value?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => {
    const { className, label, required, value, onChange, ...otherProps } =
      props;

    const [localValue, setLocalValue] = useState(false);

    const setValue = () => {
      if (value) {
        return value;
      }
      return localValue;
    };

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (value === undefined) {
        setLocalValue(event.target.checked);
      }
      onChange?.(event);
    };

    return (
      <div className={classNames(cls.checkbox_wrapper, {}, [className])}>
        <label>
          <input
            ref={ref}
            type='checkbox'
            checked={setValue()}
            required={required}
            onChange={onChangeHandler}
            {...otherProps}
          />
          <Text text={label} size='s' />
        </label>
      </div>
    );
  }
);
