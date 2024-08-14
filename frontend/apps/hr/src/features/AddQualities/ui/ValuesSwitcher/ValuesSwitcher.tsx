import { classNames } from '@repo/shared/lib';
import { Button, Text } from '@repo/shared/ui';

import cls from './ValuesSwitcher.module.scss';

interface ValueSwitcherProps {
  value: string;
  values: string[];
  setValue: (arg: string) => void;
}

export const ValueSwitcher = (props: ValueSwitcherProps) => {
  const { value, values, setValue } = props;

  const getIndexLeft = () => {
    const valIndex = values.indexOf(value);
    if (valIndex === values.length - 1) return values.length - 1;

    if (valIndex === 0) return 1;

    return valIndex;
  };
  const getIndexRight = () => {
    const valIndex = values.indexOf(value);
    if (valIndex === values.length - 1) return values.length - 2;

    if (valIndex === 0) return 0;

    return valIndex;
  };
  return (
    <>
      <div className={cls.switcher}>
        <Button
          variant="ghost"
          className={cls.btn}
          onClick={() => setValue(values[getIndexLeft() - 1])}
        >
          <span
            className={classNames('material-symbols-outlined', {}, [cls.icon])}
          >
            chevron_left
          </span>
        </Button>
        <Text text={value} size="s" />
        <Button
          className={cls.btn}
          variant="ghost"
          onClick={() => setValue(values[getIndexRight() + 1])}
        >
          <span
            className={classNames('material-symbols-outlined', {}, [cls.icon])}
          >
            chevron_right
          </span>
        </Button>
      </div>
      <Text
        text="Укажите значения качеств, используя значения от 1 до 10 баллов. "
        variant="grey"
        size="s"
      />
    </>
  );
};
