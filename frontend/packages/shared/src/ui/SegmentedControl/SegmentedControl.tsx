'use client';
import { useEffect, useState } from 'react';
import cls from './SegmentedControl.module.scss';
import { classNames } from '../../lib';

interface Segment {
  value: string;
  label: string;
}

type SegmentedControlSize = 'xs' | 's' | 'm' | 'l';

interface SegmentedControlProps {
  name: string;
  segments: Segment[];
  callback: (value: string) => void;
  defaultIndex?: number;
  size?: SegmentedControlSize;
  className?: string;
  disabled?: boolean;
}

export const SegmentedControl = (props: SegmentedControlProps) => {
  const {
    name,
    segments,
    defaultIndex,
    callback,
    size = 'm',
    className,
    disabled,
  } = props;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (defaultIndex !== undefined)
      onInputChange(segments[defaultIndex].value, defaultIndex);
  }, []);

  const onInputChange = (value: string, index: number) => {
    setActiveIndex(index);
    callback(value);
  };

  return (
    <div className={classNames(cls.controls_wrapper, {}, [className])}>
      {segments.map((segment, index) => (
        <label
          key={index}
          className={classNames(
            cls.segment,
            { [cls.active]: index === activeIndex, [cls.disabled]: disabled },
            [cls[size]],
          )}
        >
          <input
            type="radio"
            value={segment.value}
            name={name}
            checked={index === activeIndex}
            onChange={() => onInputChange(segment.value, index)}
            disabled={disabled}
          />
          {segment.label}
        </label>
      ))}
    </div>
  );
};
