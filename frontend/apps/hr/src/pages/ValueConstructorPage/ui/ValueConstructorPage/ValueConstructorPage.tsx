import { Button, Card } from '@repo/shared/ui';
import { memo, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import testPresets from '../../model/data/tempPresets.json';
import { useModalActions } from '../../model/useModalActions';
import { useValue } from '../../model/useValue';
import { WarningModal } from '../WarningModal/ui/WarningModal';

import { PresetCard, ValueCard, Value } from '@/entities/Value';
import { EditValue } from '@/features/EditValue';
import { getRouteValues } from '@/shared/const/router';
import { Page } from '@/widgets/Page';

import cls from './ValueConstructorPage.module.scss';

const ValueConstructorPage = () => {
  const [presets, setPresets] = useState<Value[]>(testPresets);
  const [addedPresets, setAddedPresets] = useState<string[]>([]);
  const [disabledPresets, setDisabledPresets] = useState<string[]>([]);

  const navigate = useNavigate();

  const {
    deleteValue,
    changeValue,
    editValue,
    addValue,
    values,
    isDirty,
    checkEmptyQualities,
    valuesRef,
    listRef,
    scrollToValue,
    focusInput,
  } = useValue(
    addedPresets,
    setAddedPresets,
    disabledPresets,
    setDisabledPresets,
  );

  const handleSubmit = () => {
    const notEmptyValues = values.filter(
      (value) => value.name !== '' && value.qualities.length > 0,
    );
    const valueToSubmit = notEmptyValues.map((value) => ({
      name: value.name,
      qualities: value.qualities,
    }));
    navigate(getRouteValues());
  };

  const { onCancel, onConfirm, warningCase, openWarningModal } =
    useModalActions(
      checkEmptyQualities,
      handleSubmit,
      changeValue,
      setDisabledPresets,
      presets,
      values,
      scrollToValue,
      focusInput,
    );

  const checkName = (index: number) => {
    if (
      values[index].name !== '' &&
      values.filter((value) => value.name === values[index].name).length > 1
    ) {
      openWarningModal('disabledName', index);
    }
  };

  const addPreset = (value: Value, index: number) => {
    const lastValue = values[values.length - 1];
    if (values.some((item) => item.name === value.name)) {
      openWarningModal('disabledPreset', index);
      return;
    }
    if (lastValue.name === '' && lastValue.qualities.length === 0) {
      deleteValue(values.length - 1);
    }
    addValue(value);
    setAddedPresets([...addedPresets, value.name]);
  };

  const onSave = () => {
    const emptyNameIndex = values.findIndex(
      (value) => value.name === '' && value.qualities.length > 0,
    );
    const emptyQualitiesIndex = values.findIndex(
      (value) => value.qualities.length === 0 && value.name !== '',
    );
    if (emptyNameIndex >= 0) {
      openWarningModal('emptyName', emptyNameIndex);
    } else if (emptyQualitiesIndex >= 0)
      openWarningModal('emptyQualities', emptyQualitiesIndex);
    else handleSubmit();
  };

  const onClose = useCallback(() => {
    if (isDirty) openWarningModal('onCancel');
    else navigate(getRouteValues());
  }, [isDirty, navigate, openWarningModal]);

  return (
    <Page className={cls.ValuesConstructorPage}>
      <Card variant="light" className={cls.ValuesConstructor}>
        <div className={cls.values_constructor}>
          <h1>Конструктор ценностей</h1>
          <p className={cls.description}>
            Сформируйте список из ценностей (максимально до 8), наполнив их
            качествами (до 5).
          </p>
          <Card variant="default" className={cls.values} cardRef={listRef}>
            <ul className={cls.values_list}>
              {values.map((value, index) => (
                <li key={index}>
                  {value.edit ? (
                    <EditValue
                      divRef={(el: HTMLDivElement) => {
                        valuesRef.current[index] = el;
                      }}
                      index={index}
                      value={value}
                      onValueChange={changeValue}
                      onDelete={() => deleteValue(index)}
                      checkName={() => checkName(index)}
                      isOnlyValue={values.length === 1}
                      onQualitiesMax={() => openWarningModal('qualitiesMax')}
                    />
                  ) : (
                    <ValueCard
                      divRef={(el: HTMLDivElement) => {
                        valuesRef.current[index] = el;
                      }}
                      isConstructor
                      value={value}
                      index={index}
                      isPreset={addedPresets.includes(value.name)}
                      deleteValue={() => deleteValue(index)}
                      editValue={() => editValue(index)}
                    />
                  )}
                </li>
              ))}
            </ul>
          </Card>
          {values.length < 8 ? (
            <Button
              variant="ghost"
              size="m"
              addonLeft={<span className="material-symbols-outlined">add</span>}
              className={cls.add_value_button}
              onClick={() => addValue({ name: '', qualities: [], edit: true })}
            >
              Добавить новую ценность
            </Button>
          ) : (
            <Button
              disabled
              variant="ghost"
              size="m"
              className={cls.add_value_button}
            >
              Собран максимум ценностей
            </Button>
          )}
          <div className={cls.constructor_buttons}>
            <Button variant="secondary" onClick={onClose}>
              Отменить
            </Button>
            <Button
              disabled={
                (values.length === 1 &&
                  (values[0].name === '' ||
                    values[0].qualities.length === 0)) ||
                !isDirty
              }
              onClick={onSave}
            >
              Сохранить
            </Button>
          </div>
        </div>
        <div className={cls.presets}>
          <h2>Готовые пресеты</h2>
          <ul className={cls.presets_list}>
            {presets.map((preset, index) => (
              <li key={preset.name}>
                <PresetCard
                  value={preset}
                  addPreset={() => addPreset(preset, index)}
                  disabled={
                    disabledPresets.includes(preset.name) || values.length >= 8
                  }
                  isAdded={addedPresets.includes(preset.name)}
                />
              </li>
            ))}
          </ul>
        </div>
      </Card>
      {warningCase && (
        <WarningModal
          warningCase={warningCase}
          onClose={onCancel}
          onConfirm={onConfirm}
        />
      )}
    </Page>
  );
};

export default memo(ValueConstructorPage);
