import { classNames } from '@repo/shared/lib';
import { Loader, Modal } from '@repo/shared/ui';
import { Suspense } from 'react';

import { RegistrationFormAsync } from '../RegistrationForm/RegistrationForm.async.js';

interface RegistrationModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const RegistrationModal = (props: RegistrationModalProps) => {
  const { className, isOpen, onClose } = props;
  return (
    <Modal
      className={classNames('', {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
      lazy
    >
      <Suspense fallback={<Loader />}>
        <RegistrationFormAsync onSuccess={onClose} onReset={onClose} />
      </Suspense>
    </Modal>
  );
};
