import { Suspense } from 'react';

import { AddEmployeeModalAsync } from '../AddEmployeeForm/AddEmployeeForm.async';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Loader } from '@/shared/ui/Loader/Loader';
import { Modal } from '@/shared/ui/Modal/Modal';

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
