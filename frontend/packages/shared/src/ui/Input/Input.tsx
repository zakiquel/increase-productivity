'use client';
import { MaskitoOptions, maskitoTransform } from '@maskito/core';
import React, {
  forwardRef,
  InputHTMLAttributes,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';

import { Text } from '../Text/Text';

import cls from './Input.module.scss';
import { Mods, classNames } from '../../lib/classNames/classNames';

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
  helperText?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(props => {
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
    helperText,
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
    [cls.focused]: isFocused,
    [cls.isDirty]: Boolean(value),
    [cls.withAddonLeft]: Boolean(addonLeft),
    [cls.withAddonRight]: Boolean(addonRight),
  };

  const wrapperMods: Mods = {
    [cls.disabled]: disabled,
    [cls.error]: Boolean(errorMessage),
  };

  const setValue = () => value || localValue;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (value === undefined) {
      setLocalValue(event.target.value);
    }
    if (options) {
      event.currentTarget.value = maskitoTransform(
        event.currentTarget.value,
        options
      );
    }
    onChange?.(event);
  };

  const input = (
    <div
      className={classNames(
        cls.wrapper,
        wrapperMods,
        label ? [cls[size]] : [cls[size], className]
      )}
    >
      <div className={classNames(cls.InputWrapper, inputMods, [])}>
        <div className={cls.addonLeft}>{addonLeft}</div>
        <input
          ref={inputRef}
          type={type}
          value={setValue()}
          onChange={handleChange}
          className={classNames(cls.input, {}, [])}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          readOnly={readonly}
          disabled={disabled}
          aria-describedby='helper-text'
          {...otherProps}
        />
        <div className={cls.addonRight}>{addonRight}</div>
      </div>
      {(errorMessage || helperText) && (
        <div id='helper-text' className={cls.helperText}>
          {errorMessage ?? helperText}
        </div>
      )}
    </div>
  );

  if (label) {
    return (
      <label className={classNames(cls.labelWrapper, {}, [className])}>
        <Text text={label} size={size} />
        {input}
      </label>
    );
  }

  return input;
});
