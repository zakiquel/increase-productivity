import { classNames, Mods } from '@repo/shared/lib';
import { Button, Input, Tag } from '@repo/shared/ui';
import { useState } from 'react';

import allQualities from '../../model/data/tempQualities.json';
import { QualitiesBank } from '../QualitiesBank/QualitiesBank';

import { Quality, Value } from '@/entities/Value';

import cls from './EditValue.module.scss';

interface EditValueProps {
  className?: string;
  value: Value;
  index: number;
  onValueChange: (index: number, value: Value) => void;
  onQualitiesMax: () => void;
  onDelete: () => void;
  checkName: () => void;
  isOnlyValue?: boolean;
  divRef: (el: HTMLDivElement) => void;
}

export const EditValue = (props: EditValueProps) => {
  const {
    className,
    value,
    index,
    onValueChange,
    onQualitiesMax,
    onDelete,
    checkName,
    isOnlyValue,
    divRef,
  } = props;

  const [drag, setDrag] = useState<boolean>(false);

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDrag(false);
    event.dataTransfer.dropEffect = 'move';
    if (value.qualities.length < 5) {
      const qualityData = event.dataTransfer.getData('text/plain');
      const droppedQuality = JSON.parse(qualityData) as Quality;

      const newQualities = [...value.qualities, droppedQuality];
      onValueChange(index, { ...value, qualities: newQualities });
    } else onQualitiesMax();
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDrag(false);
  };

  const handleDrag = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDrag(true);
  };

  const deleteQuality = (quality: Quality) => {
    const newQualities = value.qualities.filter(
      (item) => item.name !== quality.name,
    );
    onValueChange(index, { ...value, qualities: newQualities });
  };

  const changeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    onValueChange(index, { ...value, name: event.target.value });
  };

  const dropZoneMods: Mods = {
    [cls.empty]: value.qualities.length === 0,
    [cls.drag]: drag,
  };

  return (
    <div className={classNames(cls.EditValue, {}, [className])} ref={divRef}>
      <div className={cls.value_name}>
        <div className={cls.value_header}>
          <h3>{`Ценность №${index + 1}`}</h3>
          {!(
            index === 0 &&
            value.name === '' &&
            value.qualities.length === 0 &&
            isOnlyValue
          ) && (
            <Button size="s" variant="ghost" onClick={onDelete}>
              Удалить ценность
            </Button>
          )}
        </div>
        <Input
          size="m"
          value={value.name}
          onChange={changeName}
          onBlur={checkName}
        />
      </div>
      <div className={cls.value_qualities}>
        <h3>Банк качеств ценности</h3>
        <div
          className={classNames(cls.drop_zone, dropZoneMods, [])}
          onDrop={handleDrop}
          onDragOver={handleDrag}
          onDragEnter={handleDrag}
          onDragLeave={handleDragLeave}
        >
          {value.qualities.length === 0 ? (
            <p>
              Перетаскивайте качества сюда, чтобы привязать их к ценности.
              Каждой ценности может принадлежать не более 5 качеств.
            </p>
          ) : (
            <ul>
              {value.qualities.map((quality) => (
                <li key={quality.name}>
                  <Tag
                    variant="secondary"
                    size="s"
                    onClick={() => deleteQuality(quality)}
                    addonRight={
                      <span className="material-symbols-outlined">close</span>
                    }
                  >
                    {quality.name}
                  </Tag>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <QualitiesBank
        qualities={allQualities}
        selectedQualities={value.qualities}
        handleQualityClick={deleteQuality}
      />
    </div>
  );
};
