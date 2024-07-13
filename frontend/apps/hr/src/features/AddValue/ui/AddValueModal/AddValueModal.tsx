import { classNames } from '@repo/shared/lib';
import { Loader, Modal } from '@repo/shared/ui';
import { Suspense } from 'react';

import { AddValueFormAsync } from '../AddValueForm/AddValueForm.async';

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
