import { classNames, Mods } from '@repo/shared/lib';
import { Button, Input, Tag } from '@repo/shared/ui';
import { useState } from 'react';

import allQualities from '../../model/data/tempQualities.json';
import { QualitiesBank } from '../QualitiesBank/QualitiesBank';

import { Quality, Value } from '@/entities/Value';

import cls from './EditValue.module.scss';

interface EditValueProps {
  className?: string;
  value?: Value;
  index: number;
  onSave: (value: Value) => void;
  disabledNames: string[];
}

export const EditValue = (props: EditValueProps) => {
  const { className, value, index, onSave, disabledNames } = props;
  const [selectedQualities, setSelectedQualities] = useState<Quality[]>([]);
  const [drag, setDrag] = useState<boolean>(false);
  const [qualityName, setQualityName] = useState<string>('');

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
    if (selectedQualities.length < 5) {
      const qualityData = event.dataTransfer.getData('text/plain');
      const droppedQuality = JSON.parse(qualityData) as Quality;
      setDrag(false);
      setSelectedQualities([...selectedQualities, droppedQuality]);
    }
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDrag(false);
  };

  const handleDrag = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (selectedQualities.length < 5) {
      setDrag(true);
    } else {
      event.dataTransfer.dropEffect = 'none';
    }
  };

  const deleteQuality = (quality: Quality) => {
    const newSelected = selectedQualities.filter(
      (item) => item.name !== quality.name,
    );
    setSelectedQualities(newSelected);
  };

  const addValue = () => {
    onSave({ name: qualityName, qualities: selectedQualities });
    setSelectedQualities([]);
    setQualityName('');
  };

  const dropZoneMods: Mods = {
    [cls.empty]: selectedQualities.length === 0,
    [cls.drag]: drag,
  };

  return (
    <div className={classNames(cls.EditValue, {}, [className])}>
      {qualityName.length > 0 && selectedQualities.length > 0 && (
        <Button
          variant="secondary"
          size="l"
          onClick={addValue}
          className={cls.add_button}
          disabled={disabledNames.includes(qualityName)}
        >
          Добавить новую ценность
        </Button>
      )}
      <div className={cls.value_name}>
        <h3>{`Ценность ${index}`}</h3>
        <Input
          size="m"
          value={qualityName}
          onChange={(e) => setQualityName(e.target.value)}
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
          {selectedQualities.length === 0 ? (
            <p>
              Перетаскивайте качества сюда, чтобы привязать их к ценности.
              Каждой ценности может принадлежать не более 5 качеств.
            </p>
          ) : (
            <ul>
              {selectedQualities.map((quality) => (
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
        selectedQualities={selectedQualities}
      />
    </div>
  );
};
