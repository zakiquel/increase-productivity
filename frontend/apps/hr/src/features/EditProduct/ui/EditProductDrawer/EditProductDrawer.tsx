import { classNames } from '@repo/shared/lib';
import { Loader, Drawer } from '@repo/shared/ui';
import { Suspense } from 'react';

import { EditProductFormAsync } from '../EditProductForm/EditProductForm.async';

interface EditProductDrawerProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
  id: string;
}

export const EditProductDrawer = (props: EditProductDrawerProps) => {
  const { id, className, isOpen, onClose } = props;

  return (
    <Drawer
      className={classNames('', {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
      position="right"
      removeWhenClosed
    >
      <Suspense fallback={<Loader />}>
        <EditProductFormAsync id={id} onSuccess={onClose} onReset={onClose} />
      </Suspense>
    </Drawer>
  );
};
