import { classNames } from '@repo/shared/lib';
import { Loader, Drawer } from '@repo/shared/ui';
import { Suspense } from 'react';

import { AddMetricFormAsync } from '../AddMetricForm/AddMetricForm.async';

interface AddMetricDrawerProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const AddMetricDrawer = (props: AddMetricDrawerProps) => {
  const { className, isOpen, onClose } = props;

  return (
    <Drawer
      className={classNames('', {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
      position="right"
      removeWhenClosed
    >
      <Suspense fallback={<Loader />}>
        <AddMetricFormAsync onSuccess={onClose} onReset={onClose} />
      </Suspense>
    </Drawer>
  );
};
