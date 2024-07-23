import { useCallback, useEffect, useRef, useState } from 'react';

import testValues from './data/tempCompanyValues2.json';

import { Value } from '@/entities/Value';

export const useValue = (
  addedPresets: string[],
  setAddedPresets: (value: string[]) => void,
  disabledPresets: string[],
  setDisabledPresets: (value: string[]) => void,
) => {
  const [values, setValues] = useState<Value[]>(testValues);
  const [isDirty, setIsDirty] = useState(false);

  const valuesRef = useRef<Array<HTMLDivElement | null>>([]);
  const listRef = useRef<HTMLDivElement>(null);

  const checkEmptyQualities = useCallback(
    () =>
      values.findIndex(
        (value) => value.qualities.length === 0 && value.name !== '',
      ),
    [values],
  );

  const scrollToValue = (index: number) => {
    valuesRef.current[index]?.scrollIntoView(true);
  };
  const focusInput = (index: number) => {
    valuesRef.current[index]?.getElementsByTagName('input')[0].focus();
  };

  const addValue = useCallback((value: Value) => {
    setValues((prev) => [...prev, value]);
    setIsDirty(true);
  }, []);

  const deleteValue = (index: number) => {
    const newValues = [...values];
    newValues.splice(index, 1);
    setValues(() => newValues);
    setIsDirty(true);
    if (addedPresets.includes(values[index].name))
      setAddedPresets(
        addedPresets.filter((item) => item !== values[index].name),
      );
    if (disabledPresets.includes(values[index].name))
      setDisabledPresets(
        disabledPresets.filter((item) => item !== values[index].name),
      );
  };

  const editValue = (index: number) => {
    const newValues = [...values];
    newValues[index] = {
      ...newValues[index],
      edit: true,
    };
    setValues(newValues);
  };

  const changeValue = (index: number, value: Value) => {
    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);
    setIsDirty(true);
  };

  useEffect(() => {
    if (values.length === 0) {
      addValue({ name: '', qualities: [], edit: true });
    }
    valuesRef.current = valuesRef.current.slice();
  }, [values, addValue]);

  return {
    deleteValue,
    changeValue,
    editValue,
    addValue,
    values,
    setValues,
    checkEmptyQualities,
    isDirty,
    valuesRef,
    listRef,
    scrollToValue,
    focusInput,
  };
};
