import { classNames } from '@repo/shared/lib';
import { Loader, Drawer } from '@repo/shared/ui';
import { Suspense } from 'react';

import { AddProductFormAsync } from '../AddProductForm/AddProductForm.async';

interface AddProductDrawerProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const AddProductDrawer = (props: AddProductDrawerProps) => {
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
        <AddProductFormAsync onSuccess={onClose} onReset={onClose} />
      </Suspense>
    </Drawer>
  );
};
