import { classNames } from '@repo/shared/lib';
import { Loader, Drawer } from '@repo/shared/ui';
import { Suspense } from 'react';

import { AddEmployeeFormAsync } from '../AddEmployeeForm/AddEmployeeForm.async';

interface AddEmployeeDrawerProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const AddEmployeeDrawer = (props: AddEmployeeDrawerProps) => {
  const { className, isOpen, onClose } = props;
  return (
    <Drawer
      className={classNames('', {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
      position='right'
      removeWhenClosed
    >
      <Suspense fallback={<Loader />}>
        <AddEmployeeFormAsync onSuccess={onClose} onReset={onClose} />
      </Suspense>
    </Drawer>
  );
};
