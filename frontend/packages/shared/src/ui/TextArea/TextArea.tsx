import { TextareaHTMLAttributes } from "react";
import TextareaAutosize from "react-textarea-autosize";

import cls from "./TextArea.module.scss";
import { classNames, Mods } from "../../lib/classNames/classNames";

type HTMLTextAreaProps = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  "value" | "onChange" | "disabled"
>;

type Styles = React.CSSProperties & {
  height?: number;
};

interface TextAreaProps extends HTMLTextAreaProps {
  className?: string;
  value?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
  errorMessage?: string;
  maxLength?: number;
  style?: Styles;
}

export const TextArea = (props: TextAreaProps) => {
  const {
    placeholder,
    value,
    onChange,
    disabled,
    errorMessage,
    maxLength,
    style = {},
    className,
    ...otherProps
  } = props;

  const mods: Mods = {
    [cls.isDirty]: Boolean(value),
  };

  return (
    <div
      className={classNames(
        cls.TextAreaWrapper,
        { [cls.error]: !!errorMessage },
        [className]
      )}
    >
      <TextareaAutosize
        maxLength={maxLength}
        className={classNames(cls.TextArea, mods, [className])}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onChange={onChange}
        style={style}
        {...otherProps}
      />
      {errorMessage && <div className={cls.errorMessage}>{errorMessage}</div>}
    </div>
  );
};
