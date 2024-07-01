import { classNames } from '@repo/shared/lib';
import { Loader, Modal } from '@repo/shared/ui';
import { Suspense } from 'react';

import { AddEmployeeModalAsync } from '../AddEmployeeForm/AddEmployeeForm.async';

interface AddEmployeeModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const AddEmployeeModal = (props: AddEmployeeModalProps) => {
  const { className, isOpen, onClose } = props;
  return (
    <Modal
      className={classNames('', {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
      lazy
    >
      <Suspense fallback={<Loader />}>
        <AddEmployeeModalAsync onClose={onClose} />
      </Suspense>
    </Modal>
  );
};