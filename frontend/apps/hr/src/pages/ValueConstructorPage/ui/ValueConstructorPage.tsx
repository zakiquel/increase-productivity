import { memo, useState } from 'react';

import testValues from '../model/data/tempCompanyValues2.json';
import testPresets from '../model/data/tempPresets.json';

import { Page } from '@/widgets/Page';

import cls from './ValueConstructorPage.module.scss';
import { Button, Card } from '@repo/shared/ui';
import { Value, ValueList } from '@/entities/Value';
import { EditValue } from '@/features/EditValue';
import { useNavigate } from 'react-router-dom';
import { getRouteCompany } from '@/shared/const/router';

const ValueConstructorPage = () => {
  const currentValues = testValues;
  const presets = testPresets;
  const [newValues, setNewValues] = useState<Value[]>(currentValues);
  const [addedPresets, setAddedPresets] = useState<string[]>([]);

  const addPreset = (value: Value) => {
    setNewValues([...newValues, value]);
    setAddedPresets([...addedPresets, value.name]);
  };

  const deleteValue = (value: Value) => {
    setNewValues(newValues.filter((item) => item.name !== value.name));
    if (addedPresets.includes(value.name))
      setAddedPresets(addedPresets.filter((item) => item !== value.name));
  };

  const findDisabled = () => {
    const names = newValues.map((item) => item.name);
    const disabledPresets = names.filter(
      (item) => !addedPresets.includes(item),
    );
    return { disabledPresets, names };
  };

  const addValue = (value: Value) => {
    setNewValues([...newValues, value]);
  };

  const navigate = useNavigate();
  const onCancel = () => {
    navigate(getRouteCompany());
  };

  const onSave = () => {
    navigate(getRouteCompany());
  };

  return (
    <Page className={cls.ValuesConstructorPage}>
      <Card variant="light" className={cls.ValuesConstructor}>
        <div className={cls.values_constructor}>
          <h1>Конструктор ценностей</h1>
          <p className={cls.description}>
            Сформируйте список из ценностей (до 8), наполнив их качествами (от 1
            до 5)
          </p>
          <Card variant="default" className={cls.values}>
            <ValueList values={newValues} deleteValue={deleteValue} />
            {newValues.length < 8 && (
              <EditValue
                index={newValues.length + 1}
                onSave={addValue}
                disabledNames={findDisabled().names}
              />
            )}
          </Card>
          <div className={cls.constructor_buttons}>
            <Button variant="secondary" onClick={onCancel}>
              Отменить
            </Button>
            <Button disabled={newValues.length === 0} onClick={onSave}>
              Сохранить
            </Button>
          </div>
        </div>
        <div className={cls.presets}>
          <h2>Готовые пресеты</h2>
          <ValueList
            values={presets}
            isPreset
            addPreset={addPreset}
            disabled={newValues.length > 7}
            addedPresets={addedPresets}
            disabledPresets={findDisabled().disabledPresets}
            className={cls.presets_list}
          />
        </div>
      </Card>
    </Page>
  );
};
export default memo(ValueConstructorPage);
