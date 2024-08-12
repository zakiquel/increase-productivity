import { forwardRef, TextareaHTMLAttributes } from 'react';

import cls from './TextArea.module.scss';
import { classNames, Mods } from '../../lib/classNames/classNames';

type HTMLTextAreaProps = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  'value' | 'onChange' | 'disabled'
>;

interface TextAreaProps extends HTMLTextAreaProps {
  className?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
  errorMessage?: string;
  maxLength?: number;
  enterFunction?: () => void;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props) => {
    const {
      placeholder,
      value,
      onChange,
      disabled,
      errorMessage,
      maxLength,
      style = {},
      className,
      enterFunction,
      ...otherProps
    } = props;

    const handleEnterPress = (
      event: React.KeyboardEvent<HTMLTextAreaElement>,
    ) => {
      if (enterFunction && event.key === 'Enter' && !event.shiftKey) {
        enterFunction();
      }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (enterFunction && event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
      }
    };

    const mods: Mods = {
      [cls.isDirty]: Boolean(value),
    };

    return (
      <div
        className={classNames(
          cls.TextAreaWrapper,
          { [cls.error]: errorMessage },
          [className],
        )}
      >
        <textarea
          maxLength={maxLength}
          className={classNames(cls.TextArea, mods, [className])}
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          onKeyUp={handleEnterPress}
          onKeyDown={handleKeyDown}
          onChange={onChange}
          style={style}
          {...otherProps}
        />
        {errorMessage && <div className={cls.errorMessage}>{errorMessage}</div>}
      </div>
    );
  },
);
