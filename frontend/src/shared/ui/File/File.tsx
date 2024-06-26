import { InputHTMLAttributes, useState } from 'react';

import { Mods, classNames } from '@/shared/lib/classNames/classNames';

import cls from './File.module.scss';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
>;

interface FileProps extends HTMLInputProps {
  maxSize?: number;
  disabled?: boolean;
  className?: string;
  onChange?: (files: File[]) => void;
}

export const File = (props: FileProps) => {
  const { maxSize, disabled, multiple, className, onChange, ...otherProps } =
    props;
  const [drag, setDrag] = useState(false);

  const handleDrag = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    setDrag(true);
  };

  const handleLeave = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    setDrag(false);
  };

  const handleDrop = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    setDrag(false);
  };


  const mods: Mods = {
    [cls.drag]: drag,
    [cls.disabled]: disabled,
  };

  return (
    <label
      className={classNames(cls.FileUpload, mods, [className])}
      onDragOver={e => handleDrag(e)}
      onDragEnter={e => handleDrag(e)}
      onDragLeave={e => handleLeave(e)}
      onDrop={e => handleDrop(e)}
    >
      <input
        type='file'
        hidden
        disabled={disabled}
        multiple={multiple}
        {...otherProps}
      />
      <span>Перетащите файл или выберите на компьютере</span>
    </label>
  );
};
