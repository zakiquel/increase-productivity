import { Button, Text } from '@repo/shared/ui';

import { QualityScheme } from '../../model/types/quality';

import cls from './ValueList.module.scss';

export interface ActiveValue {
  name: string;
  id: number;
  objId: number;
}

interface ValueListProps {
  setActiveValue: (value: ActiveValue) => void;
  onClose: (arg: boolean) => void;
  values: QualityScheme[];
}

export const ValueList = (props: ValueListProps) => {
  const { setActiveValue, onClose, values } = props;
  return (
    <div className={cls.wrapper}>
      <div>
        <h2 className={cls.title}>Ценности сотрудника</h2>
        <Text
          text="Выберите ценность и укажите для неё значения качеств, используя значения от 1 до 10 баллов."
          size="s"
          variant="grey"
        />
        <ul className={cls.valueList}>
          {values &&
            values.map((value, key) => (
              <li className={cls.value} key={value.value_id}>
                <Button
                  variant="ghost"
                  onClick={() =>
                    setActiveValue({
                      name: value.value_name,
                      id: value.value_id,
                      objId: key,
                    })
                  }
                  className={cls.btn}
                >
                  <Text text={value.value_name} size="s" />
                </Button>
              </li>
            ))}
        </ul>
      </div>
      <Button
        variant="secondary"
        size="l"
        fullWidth
        onClick={() => onClose(false)}
      >
        закрыть
      </Button>
    </div>
  );
};
