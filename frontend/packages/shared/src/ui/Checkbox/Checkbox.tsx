'use client';
import { InputHTMLAttributes, forwardRef, useState } from 'react';

import { Text } from '../Text';

import cls from './Checkbox.module.scss';
import { classNames, Mods } from '../../lib/classNames/classNames';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
>;

type Variant = 'checkbox' | 'toggle';

interface CheckboxProps extends HTMLInputProps {
  className?: string;
  variant?: Variant;
  label?: JSX.Element | string;
  disabled?: boolean;
  required?: boolean;
  value?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => {
    const {
      className,
      variant = 'checkbox',
      label,
      disabled,
      required,
      value,
      onChange,
      ...otherProps
    } = props;

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

    const mods: Mods = {
      [cls.disabled]: disabled,
    };

    return (
      <div
        className={classNames(cls.checkbox_wrapper, mods, [
          className,
          cls[variant],
        ])}
      >
        <label>
          <input
            ref={ref}
            type='checkbox'
            checked={setValue()}
            required={required}
            disabled={disabled}
            onChange={onChangeHandler}
            {...otherProps}
          />
          <Text text={label} size='s' className={cls.label} />
        </label>
      </div>
    );
  }
);
