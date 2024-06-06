import { MaskitoOptions, maskitoTransform } from '@maskito/core';
import React, {
  InputHTMLAttributes,
  forwardRef,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';

import { Text } from '../Text/Text';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';

import cls from './Input.module.scss';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly' | 'size'
>;

type InputSize = 's' | 'm' | 'l';

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  label?: string;
  size?: InputSize;
  options?: MaskitoOptions;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  autofocus?: boolean;
  readonly?: boolean;
  addonLeft?: ReactNode;
  addonRight?: ReactNode;
  errorMessage?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    className,
    value,
    onChange,
    onBlur,
    onFocus,
    type = 'text',
    placeholder,
    label,
    autofocus,
    options,
    size = 'm',
    readonly,
    addonLeft,
    addonRight,
    errorMessage,
    ...otherProps
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      inputRef.current?.focus();
    }
  }, [autofocus]);

  const [localValue, setLocalValue] = useState<string | number>('');

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    onBlur?.(event);
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    onFocus?.(event);
  };

  const mods: Mods = {
    [cls.readonly]: readonly,
    [cls.focused]: isFocused,
    [cls.withAddonLeft]: Boolean(addonLeft),
    [cls.withAddonRight]: Boolean(addonRight),
  };

  const setValue = () => value || localValue;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (value === undefined) {
      setLocalValue(event.target.value);
    }
    if (options) {
      const transformedValue = maskitoTransform(
        event.currentTarget.value,
        options
      );
      event.currentTarget.value = transformedValue;
    }
    onChange?.(event);
  };

  const input = (
    <div className={classNames(cls.InputWrapper, mods, [className, cls[size]])}>
      <div className={cls.addonLeft}>{addonLeft}</div>
      <input
        ref={inputRef}
        type={type}
        value={setValue()}
        onChange={handleChange}
        className={cls.input}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
        readOnly={readonly}
        {...otherProps}
      />
      <div className={cls.addonRight}>{addonRight}</div>
      {errorMessage && !isFocused && (
        <div className={cls.errorField}>{errorMessage}</div>
      )}
    </div>
  );

  if (label) {
    return (
      <label className={cls.wrapper}>
        <Text text={label} />
        {input}
      </label>
    );
  }

  return input;
});
