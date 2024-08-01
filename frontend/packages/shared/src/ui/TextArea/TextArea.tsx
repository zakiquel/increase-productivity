import TextareaAutosize, {
  TextareaAutosizeProps,
} from 'react-textarea-autosize';

import cls from './TextArea.module.scss';
import { classNames, Mods } from '../../lib/classNames/classNames';
import { forwardRef } from 'react';

interface TextAreaProps extends TextareaAutosizeProps {
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
      value,
      onChange,
      disabled,
      errorMessage,
      maxLength,
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
          { [cls.error]: !!errorMessage },
          [className],
        )}
      >
        <TextareaAutosize
          maxLength={maxLength}
          className={classNames(cls.TextArea, mods, [className])}
          disabled={disabled}
          value={value}
          onKeyUp={handleEnterPress}
          onKeyDown={handleKeyDown}
          onChange={onChange}
          {...otherProps}
        />
        {errorMessage && <div className={cls.errorMessage}>{errorMessage}</div>}
      </div>
    );
  },
);
