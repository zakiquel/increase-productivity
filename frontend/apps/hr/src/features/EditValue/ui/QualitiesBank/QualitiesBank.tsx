import { Card, Input, Tag } from '@repo/shared/ui';
import { useEffect, useState } from 'react';

import { Quality } from '@/entities/Value';

import cls from './QualitiesBank.module.scss';

interface QualitiesBankProps {
  qualities: Quality[];
  selectedQualities: Quality[];
}

export const QualitiesBank = (props: QualitiesBankProps) => {
  const { qualities, selectedQualities } = props;
  const [search, setSearch] = useState<string>('');
  const [filteredQualities, setFilteredQualities] = useState<Quality[]>([]);

  useEffect(() => {
    const alphabetSort = qualities.sort((a, b) => a.name.localeCompare(b.name));
    setFilteredQualities(alphabetSort);
  }, [qualities]);

  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    const searchTerm = event.target.value.toLowerCase();

    const searchResult = qualities.filter((quality) => {
      const name = quality.name.toLowerCase();

      const normalizedName = name.replace(/[-()]/g, ' ');
      if (normalizedName.startsWith(searchTerm)) {
        return true;
      }
      const words = normalizedName.split(' ');

      return words
        .slice(1)
        .some((word) => word.length > 1 && word.startsWith(searchTerm));
    });
    searchResult.sort((a, b) => {
      const aStartsWith = a.name.toLowerCase().startsWith(searchTerm);
      const bStartsWith = b.name.toLowerCase().startsWith(searchTerm);

      if (aStartsWith && !bStartsWith) {
        return -1;
      }
      if (!aStartsWith && bStartsWith) {
        return 1;
      }
      return 0;
    });
    setFilteredQualities(searchResult);
  };

  // Drag and drop
  const handleDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    quality: Quality,
  ) => {
    event.dataTransfer.setData('text/plain', JSON.stringify(quality));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div className={cls.QualitiesBank}>
      <Card variant="light" padding="8">
        <Input
          placeholder="Найти качество"
          size="s"
          addonLeft={<span className="material-symbols-outlined">search</span>}
          value={search}
          onChange={onSearch}
          onDrop={(e) => {
            e.preventDefault();
          }}
          onDragOver={(e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'none';
          }}
        />
      </Card>
      <Card variant="light" className={cls.values_list} padding="8">
        <ul>
          {filteredQualities.map((quality) => (
            <li key={quality.id}>
              <Tag
                variant="secondary"
                size="s"
                draggable
                onDragStart={(event) => handleDragStart(event, quality)}
                disabled={selectedQualities.some(
                  (item) => item.id === quality.id,
                )}
              >
                {quality.name}
              </Tag>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};
