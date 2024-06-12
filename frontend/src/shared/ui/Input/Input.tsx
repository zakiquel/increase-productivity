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
  'value' | 'onChange' | 'readOnly' | 'size' | 'disabled'
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
  disabled?: boolean;
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
    disabled,
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

  const inputMods: Mods = {
    [cls.readonly]: readonly,
    [cls.disabled]: disabled,
    [cls.focused]: isFocused,
    [cls.isDirty]: Boolean(value),
    [cls.withAddonLeft]: Boolean(addonLeft),
    [cls.withAddonRight]: Boolean(addonRight),
    [cls.error]: Boolean(errorMessage),
  };

  const labelMods: Mods = {
    [cls.disabled]: disabled,
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
    <div className={cls.input_with_error}>
      <div
        className={classNames(cls.InputWrapper, inputMods, [
          className,
          cls[size],
        ])}
      >
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
          disabled={disabled}
          aria-describedby='error-message'
          {...otherProps}
        />
        <div className={cls.addonRight}>{addonRight}</div>
      </div>
      {errorMessage && (
        <div id='error-message' className={cls.errorField} aria-invalid='true'>
          {errorMessage}
        </div>
      )}
    </div>
  );

  if (label) {
    return (
      <label className={classNames(cls.wrapper, labelMods, [])}>
        <Text text={label} size={size} />
        {input}
      </label>
    );
  }

  return input;
});
