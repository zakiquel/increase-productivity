import { classNames } from '@repo/shared/lib';
import { Loader, Drawer, ModalSuccess, Button } from '@repo/shared/ui';
import { Suspense, useEffect, useState } from 'react';

import { getQualitiesValue } from '../../api/qualityApi';
import { AddQualitiesFormAsync } from '../AddQualitiesForm/AddQualitiesForm.async';
import { ActiveValue, ValueList } from '../ValueList/ValueList';

import cls from './AddQualitiesDrawer.module.scss';

interface AddMetricDrawerProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const AddQualitiesDrawer = (props: AddMetricDrawerProps) => {
  const { className, isOpen, onClose } = props;
  const [activeValue, setActiveValue] = useState<ActiveValue>();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [valueList, setValueList] = useState<string[]>([]);
  const { data: values } = getQualitiesValue(null);
  useEffect(() => {
    const valuesList: string[] = [];
    values?.forEach((data) => {
      valuesList.push(data.value_name);
    });

    setValueList(valuesList);
  }, [values]);

  if (!values) return null;

  if (isOpenModal)
    return (
      <ModalSuccess
        title="Отменить изменения?"
        text="Данные не будут сохранены"
        isOpen={isOpen}
        onClose={() => setIsOpenModal(false)}
        button={
          <div className={cls.btns}>
            <Button variant="secondary" onClick={() => setIsOpenModal(false)}>
              Вернуться к ценности
            </Button>
            <Button
              onClick={() => {
                setActiveValue(undefined);
                setIsOpenModal(false);
              }}
            >
              Отменить
            </Button>
          </div>
        }
      />
    );
  return (
    <Drawer
      className={classNames('', {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
      position="right"
      removeWhenClosed
    >
      <Suspense fallback={<Loader />}>
        {!activeValue && (
          <ValueList
            setActiveValue={setActiveValue}
            onClose={onClose}
            values={values}
          />
        )}

        {activeValue && (
          <AddQualitiesFormAsync
            setOpenModal={setIsOpenModal}
            onSuccess={onClose}
            onReset={onClose}
            activeValue={activeValue}
            values={valueList}
            valuesAndQualities={values[activeValue.objId].qualities}
          />
        )}
      </Suspense>
    </Drawer>
  );
};
