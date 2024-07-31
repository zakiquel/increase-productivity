import { classNames } from '@repo/shared/lib';
import { Loader, Drawer } from '@repo/shared/ui';
import { Suspense } from 'react';

import { EditEventFormAsync } from '../EditEventForm/EditEventForm.async';

interface EditEventDrawerProps {
  eventId: number;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const EditEventDrawer = (props: EditEventDrawerProps) => {
  const { eventId, className, isOpen, onClose } = props;

  return (
    <Drawer
      className={classNames('', {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
      position="right"
      removeWhenClosed
    >
      <Suspense fallback={<Loader />}>
        <EditEventFormAsync
          eventId={eventId}
          onSuccess={onClose}
          onReset={onClose}
        />
      </Suspense>
    </Drawer>
  );
};
