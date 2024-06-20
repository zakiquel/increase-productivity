import { Suspense } from 'react';

import { AddValueFormAsync } from '../AddValueForm/AddValueForm.async';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Loader } from '@/shared/ui/Loader/Loader';
import { Modal } from '@/shared/ui/Modal/Modal';

interface AddValueModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const AddValueModal = (props: AddValueModalProps) => {
  const { className, isOpen, onClose } = props;
  return (
    <Modal
      className={classNames('', {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
      lazy
    >
      <Suspense fallback={<Loader />}>
        <AddValueFormAsync onClose={onClose} />
      </Suspense>
    </Modal>
  );
};
