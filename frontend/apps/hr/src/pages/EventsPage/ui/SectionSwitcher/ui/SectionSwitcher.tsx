import { Button, Icon, SegmentedControl } from '@repo/shared/ui';
import { memo, useState } from 'react';

import { RequestsInfiniteList } from '../../EventRequestsInfiniteList/ui/EventRequestInfinitList';
import { EventsInfiniteList } from '../../EventsInfiniteList/ui/EventsInfiniteList';

import { type Event } from '@/entities/Event';
import plus from '@/shared/assets/icons/plus.svg';

import cls from './SectionSwitcher.module.scss';

interface SectionSwitcherProps {
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
  const { setIsDrawerOpen, setIsModalOpen, setActiveEvent } = props;

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
        return <RequestsInfiniteList />;
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
        {isActive === 'events' && (
          <Button
            addonLeft={<Icon Svg={plus} />}
            size="s"
            onClick={() => setIsDrawerOpen(true)}
          >
            Создать мероприятие
          </Button>
        )}
      </nav>
      {getSection()}
    </>
  );
});
