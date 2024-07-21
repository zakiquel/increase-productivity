import { classNames } from '@repo/shared/lib';
import { memo, useState } from 'react';

import { SectionSwitcher } from '../SectionSwitcher';

import { type Event } from '@/entities/Event';
import { AddEventDrawer } from '@/features/AddEvent';
import { EventModal } from '@/features/EditEvent';
import { Page } from '@/widgets/Page';

interface EventsPageProps {
  className?: string;
}

const EventsPage = (props: EventsPageProps) => {
  const { className } = props;
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [activeEvent, setActiveEvent] = useState<Event>();
  const [isOpenModal, setIsModalOpen] = useState<boolean>(false);

  return (
    <Page className={classNames('', {}, [className])}>
      <SectionSwitcher
        setIsDrawerOpen={setIsDrawerOpen}
        setActiveEvent={setActiveEvent}
        setIsModalOpen={setIsModalOpen}
      />
      <AddEventDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
      <EventModal
        isOpen={isOpenModal}
        setOpen={() => setIsModalOpen(false)}
        event={activeEvent}
      />
    </Page>
  );
};

export default memo(EventsPage);
