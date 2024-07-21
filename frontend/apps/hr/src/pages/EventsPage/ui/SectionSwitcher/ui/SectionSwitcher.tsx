import { Button, Icon, SegmentedControl } from '@repo/shared/ui';
import { memo, useState } from 'react';

import { EventsInfiniteList } from '../../EventsInfiniteList/ui/EventsInfiniteList';
import requests from '../model/data/tempDataRequests.json';

import { RequestCard } from '@/entities/Event';
import { type Event } from '@/entities/Event';
import plus from '@/shared/assets/icons/plus.svg';

import cls from './SectionSwitcher.module.scss';

interface SectionSwitcherProps {
  className?: string;
  setIsDrawerOpen: (value: boolean) => void;
  setActiveEvent: (value: Event) => void;
  setIsModalOpen: (value: boolean) => void;
}

const segments = [
  {
    value: 'events',
    label: 'Мероприятия',
  },
  {
    value: 'requests',
    label: 'Заявки',
  },
];

export const SectionSwitcher = memo((props: SectionSwitcherProps) => {
  const { className, setIsDrawerOpen, setIsModalOpen, setActiveEvent } = props;

  const [isActive, setActive] = useState('events');

  const getSection = () => {
    switch (isActive) {
      case 'events':
        return (
          <EventsInfiniteList
            openDrawer={setIsDrawerOpen}
            setActiveEvent={setActiveEvent}
            setIsModalOpen={setIsModalOpen}
          />
        );
      case 'requests':
        return requests?.map((data) => <RequestCard key={data.id} {...data} />);
      default:
        break;
    }
    return false;
  };

  return (
    <>
      <nav className={cls.SectionSwitcher}>
        <SegmentedControl
          name=""
          segments={segments}
          defaultIndex={0}
          callback={(value) => setActive(value)}
          size="xs"
        />
        <Button
          addonLeft={<Icon Svg={plus} />}
          size="s"
          onClick={() => setIsDrawerOpen(true)}
        >
          Создать мероприятие
        </Button>
      </nav>
      {getSection()}
    </>
  );
});
